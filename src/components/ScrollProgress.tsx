
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setProgress(Math.min(100, Math.max(0, percentage)));
      setShowButton(scrollTop > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        .scroll-progress-track {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          z-index: 2000;
          background: rgba(255,255,255,0.04);
          pointer-events: none;
        }

        .scroll-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #ff3d18, #ff9a45);
          box-shadow: 0 0 12px rgba(255,90,35,0.8);
          transition: width 0.1s linear;
        }

        .back-to-top {
          position: fixed;
          right: 28px;
          bottom: 28px;
          z-index: 900;
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,120,65,0.55);
          border-radius: 13px;
          color: white;
          background: rgba(255,85,35,0.18);
          backdrop-filter: blur(12px);
          cursor: pointer;
          box-shadow: 0 5px 25px rgba(255,75,20,0.15);
          transition: background 0.25s, transform 0.25s;
        }

        .back-to-top:hover {
          background: rgba(255,85,35,0.4);
          transform: translateY(-4px);
        }

        @media (max-width: 600px) {
          .back-to-top {
            right: 17px;
            bottom: 18px;
            width: 44px;
            height: 44px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .back-to-top {
            transition: none;
          }
        }
      `}</style>

      <div className="scroll-progress-track">
        <div
          className="scroll-progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <AnimatePresence>
        {showButton && (
          <motion.button
            className="back-to-top"
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.7, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 15 }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUp size={21} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default ScrollProgress;
