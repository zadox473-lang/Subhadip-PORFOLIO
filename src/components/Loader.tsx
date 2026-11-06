import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type LoaderProps = {
  onComplete?: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + Math.random() * 12 + 4, 100);

        if (next >= 100) {
          window.clearInterval(interval);
          window.setTimeout(() => {
            setVisible(false);
            onComplete?.();
          }, 350);
        }

        return next;
      });
    }, 120);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="site-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <div className="loader-content">
            <motion.span
              className="loader-label"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              AI & ROBOTICS PORTFOLIO
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              SUBHADIP<span>.</span>
            </motion.h1>

            <div className="loader-track">
              <motion.div
                className="loader-fill"
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            <div className="loader-meta">
              <span>INITIALIZING EXPERIENCE</span>
              <span>{Math.round(progress)}%</span>
            </div>
          </div>

          <style>{`
            .site-loader {
              position: fixed;
              inset: 0;
              z-index: 10000;
              display: grid;
              place-items: center;
              background: #070707;
              color: #fff;
              font-family: inherit;
            }

            .loader-content {
              width: min(420px, 82vw);
            }

            .loader-label {
              display: block;
              margin-bottom: 18px;
              color: #ff7626;
              font-size: 10px;
              letter-spacing: 4px;
              text-align: center;
            }

            .loader-content h1 {
              margin: 0 0 34px;
              text-align: center;
              font-size: clamp(38px, 9vw, 68px);
              font-weight: 900;
              letter-spacing: -3px;
            }

            .loader-content h1 span {
              color: #ff6426;
            }

            .loader-track {
              width: 100%;
              height: 2px;
              overflow: hidden;
              background: #292929;
            }

            .loader-fill {
              height: 100%;
              background: linear-gradient(90deg, #ff3d00, #ff9a35);
              box-shadow: 0 0 12px #ff6426;
            }

            .loader-meta {
              display: flex;
              justify-content: space-between;
              margin-top: 12px;
              color: #777;
              font-size: 9px;
              letter-spacing: 1.5px;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
