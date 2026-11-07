import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type LoaderProps = {
  onComplete?: () => void;
};

export default function Loader({ onComplete }: LoaderProps) {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;

    const interval = window.setInterval(() => {
      current = Math.min(current + 5, 100);
      setProgress(current);

      if (current >= 100) {
        window.clearInterval(interval);

        window.setTimeout(() => {
          setVisible(false);
          onComplete?.();
        }, 300);
      }
    }, 60);

    return () => window.clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="site-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="loader-content">
            <p className="loader-label">AI & ROBOTICS PORTFOLIO</p>

            <h1>
              SUBHADIP<span>.</span>
            </h1>

            <div className="loader-track">
              <div
                className="loader-fill"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="loader-meta">
              <span>INITIALIZING EXPERIENCE</span>
              <span>{progress}%</span>
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
              color: white;
              pointer-events: none;
            }

            .loader-content {
              width: min(420px, 82vw);
            }

            .loader-label {
              margin-bottom: 18px;
              color: #ff7626;
              font-size: 10px;
              letter-spacing: 4px;
              text-align: center;
            }

            .loader-content h1 {
              margin-bottom: 34px;
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
              background: #292929;
            }

            .loader-fill {
              height: 100%;
              background: linear-gradient(90deg, #ff3d00, #ff9a35);
              box-shadow: 0 0 12px #ff6426;
              transition: width 0.06s linear;
            }

            .loader-meta {
              display: flex;
              justify-content: space-between;
              margin-top: 12px;
              color: #999;
              font-size: 9px;
              letter-spacing: 1.5px;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
