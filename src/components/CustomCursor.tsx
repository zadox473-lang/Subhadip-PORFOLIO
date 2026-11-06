
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const smoothX = useSpring(mouseX, {
    damping: 25,
    stiffness: 300,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    damping: 25,
    stiffness: 300,
    mass: 0.5,
  });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (isTouchDevice || reducedMotion) return;

    setEnabled(true);

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <div className="custom-cursor" aria-hidden="true">
      <motion.div
        className="cursor-ring"
        style={{
          x: smoothX,
          y: smoothY,
        }}
      />

      <motion.div
        className="cursor-dot"
        style={{
          x: mouseX,
          y: mouseY,
        }}
      />

      <style>{`
        .custom-cursor {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9999;
        }

        .cursor-ring,
        .cursor-dot {
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
        }

        .cursor-ring {
          width: 34px;
          height: 34px;
          border: 1px solid rgba(255, 112, 35, 0.8);
          background: rgba(255, 90, 20, 0.04);
          box-shadow: 0 0 16px rgba(255, 90, 20, 0.12);
        }

        .cursor-dot {
          width: 5px;
          height: 5px;
          background: #ff7626;
          box-shadow: 0 0 9px rgba(255, 100, 25, 0.8);
        }
      `}</style>
    </div>
  );
}
