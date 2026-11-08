import { motion } from 'framer-motion'

/* Glowing robotic arm: the arm moves gently around its base,
   the joints pulse, and a light sweeps over the metal.
   Image (upload to GitHub): public/images/robot/roboticarm.png    */

const BASE = import.meta.env.BASE_URL
const ARM = `${BASE}images/robot/roboticarm.png`

/* joint centres, in % of the image */
const joints = [
  { x: 36.6, y: 6.6, delay: 0 },
  { x: 76.5, y: 16, delay: 1.1 },
  { x: 68, y: 44.5, delay: 2.2 },
]

export default function RoboticArm() {
  return (
    <motion.div
      className="ra-wrap"
      aria-hidden="true"
      initial={{ opacity: 0, y: 30, scale: 0.94, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ra-aura" />

      <div className="ra-figure">
      {/* fixed lower part (the base) */}
      <img className="ra-img ra-base" src={ARM} alt="" draggable={false} />

      {/* upper part: swings gently around the base */}
      <div className="ra-arm">
        <img className="ra-img" src={ARM} alt="" draggable={false} />
        <div
          className="ra-scan"
          style={{ ['--ra-mask' as string]: `url(${ARM})` }}
        />
        {joints.map((joint) => (
          <i
            key={joint.x}
            className="ra-joint"
            style={{
              left: `${joint.x}%`,
              top: `${joint.y}%`,
              animationDelay: `${joint.delay}s`,
            }}
          />
        ))}
      </div>
      </div>

      <div className="ra-orbit">
        <i />
      </div>

      <style>{`
        .ra-wrap {
          position: relative;
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
          aspect-ratio: 900 / 937;
          pointer-events: none;
        }

        .ra-aura {
          -webkit-mask-image: radial-gradient(closest-side, #000 60%, transparent 100%);
          mask-image: radial-gradient(closest-side, #000 60%, transparent 100%);
          position: absolute;
          inset: -8% -14% -4%;
          background:
            radial-gradient(ellipse at 55% 70%, rgba(255, 110, 20, 0.34), rgba(255, 70, 10, 0.12) 36%, transparent 58%),
            radial-gradient(ellipse at 40% 25%, rgba(255, 150, 40, 0.12), transparent 42%);
          animation: ra-aura 5.5s ease-in-out infinite alternate;
        }

        .ra-figure {
          position: absolute;
          inset: 0;
          filter: drop-shadow(0 0 22px rgba(255, 90, 15, 0.5));
        }

        .ra-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .ra-base {
          clip-path: inset(57% 0 0 0);
        }

        .ra-arm {
          position: absolute;
          inset: 0;
          clip-path: inset(0 0 41.5% 0);
          transform-origin: 60% 58%;
          animation: ra-sway 6.5s ease-in-out infinite alternate;
        }

        .ra-scan {
          position: absolute;
          inset: 0;
          -webkit-mask-image: var(--ra-mask);
          mask-image: var(--ra-mask);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          background: linear-gradient(100deg, transparent 40%, rgba(255, 200, 120, 0.75) 50%, transparent 60%);
          background-size: 300% 100%;
          background-repeat: no-repeat;
          mix-blend-mode: screen;
          animation: ra-scan 6s ease-in-out infinite;
        }

        .ra-joint {
          position: absolute;
          width: 17%;
          aspect-ratio: 1;
          margin: -8.5% 0 0 -8.5%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 190, 80, 0.85), rgba(255, 100, 20, 0.3) 42%, transparent 70%);
          mix-blend-mode: screen;
          animation: ra-joint 3.2s ease-in-out infinite;
        }

        .ra-orbit {
          position: absolute;
          left: 9%;
          top: 34%;
          width: 82%;
          aspect-ratio: 1;
          border-radius: 50%;
          transform: perspective(800px) rotateX(74deg);
          animation: ra-orbit 10s linear infinite;
        }

        .ra-orbit i {
          position: absolute;
          top: -6px;
          left: 50%;
          width: 11px;
          height: 11px;
          margin-left: -5px;
          border-radius: 50%;
          background: #ffe2a0;
          box-shadow: 0 0 14px 4px rgba(255, 150, 40, 0.9);
        }

        @keyframes ra-aura {
          from { opacity: 0.65; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1.04); }
        }

        @keyframes ra-sway {
          from { transform: rotate(-2.2deg); }
          to { transform: rotate(2.4deg); }
        }

        @keyframes ra-scan {
          0% { background-position: 0% 0; }
          65%, 100% { background-position: 100% 0; }
        }

        @keyframes ra-joint {
          0%, 100% { opacity: 0.25; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes ra-orbit {
          to { transform: perspective(800px) rotateX(74deg) rotate(360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ra-aura, .ra-arm, .ra-scan, .ra-joint, .ra-orbit {
            animation: none;
          }
        }
      `}</style>
    </motion.div>
  )
}
