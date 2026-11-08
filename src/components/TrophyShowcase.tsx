import { motion } from 'framer-motion'

/* Trophy floating and slowly turning above a glowing podium.
   Images (upload to GitHub):
     public/images/trophy/trophy.png
     public/images/trophy/base.png                                   */

const BASE = import.meta.env.BASE_URL
const TROPHY = `${BASE}images/trophy/trophy.png`
const PODIUM = `${BASE}images/trophy/base.png`

const sparkles = [
  { left: 30, delay: 0, duration: 4.6 },
  { left: 40, delay: 1.4, duration: 5.4 },
  { left: 50, delay: 2.6, duration: 4.2 },
  { left: 60, delay: 0.8, duration: 5.8 },
  { left: 70, delay: 3.2, duration: 4.8 },
  { left: 35, delay: 3.8, duration: 5.2 },
  { left: 65, delay: 2, duration: 4.4 },
]

export default function TrophyShowcase() {
  return (
    <motion.div
      className="tr-wrap"
      aria-hidden="true"
      initial={{ opacity: 0, y: 30, scale: 0.92, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="tr-aura" />

      <img className="tr-base" src={PODIUM} alt="" draggable={false} />

      <div className="tr-beam" />

      <div className="tr-rings">
        <div className="tr-ring tr-ring-a">
          <i />
        </div>
        <div className="tr-ring tr-ring-b">
          <i />
        </div>
      </div>

      <div className="tr-pos">
        <div className="tr-float">
          <div className="tr-spin">
            <div className="tr-cup">
              <img src={TROPHY} alt="" draggable={false} />
              <div
                className="tr-shine"
                style={{ ['--tr-mask' as string]: `url(${TROPHY})` }}
              />
            </div>
          </div>
        </div>
      </div>

      {sparkles.map((s) => (
        <span
          key={s.left}
          className="tr-spark"
          style={{
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      <style>{`
        .tr-wrap {
          position: relative;
          width: 100%;
          max-width: 300px;
          margin: -6px auto 12px;
          aspect-ratio: 1 / 0.98;
          pointer-events: none;
        }

        .tr-aura {
          -webkit-mask-image: radial-gradient(closest-side, #000 60%, transparent 100%);
          mask-image: radial-gradient(closest-side, #000 60%, transparent 100%);
          position: absolute;
          inset: -10% -18% 0;
          background:
            radial-gradient(ellipse at 50% 64%, rgba(255, 150, 30, 0.42), rgba(255, 80, 10, 0.16) 38%, transparent 62%);
          animation: tr-aura 5s ease-in-out infinite alternate;
        }

        .tr-base {
          position: absolute;
          left: 4%;
          bottom: 0;
          width: 92%;
          filter: drop-shadow(0 0 22px rgba(255, 100, 20, 0.55));
        }

        .tr-beam {
          position: absolute;
          left: 28%;
          bottom: 22%;
          width: 44%;
          height: 38%;
          background: linear-gradient(to top, rgba(255, 175, 50, 0.6), rgba(255, 120, 20, 0.14) 70%, transparent);
          clip-path: polygon(16% 0, 84% 0, 100% 100%, 0 100%);
          animation: tr-beam 3.6s ease-in-out infinite alternate;
        }

        .tr-rings {
          position: absolute;
          left: 11%;
          bottom: 3%;
          width: 78%;
          aspect-ratio: 1;
          transform: perspective(700px) rotateX(74deg);
        }

        .tr-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(255, 170, 60, 0.55);
          box-shadow:
            0 0 14px rgba(255, 110, 20, 0.6),
            inset 0 0 14px rgba(255, 110, 20, 0.35);
          animation: tr-ring 9s linear infinite;
        }

        .tr-ring-b {
          inset: 13%;
          border: 2px dashed rgba(255, 205, 110, 0.4);
          animation-duration: 13s;
          animation-direction: reverse;
        }

        .tr-ring i {
          position: absolute;
          top: -6px;
          left: 50%;
          width: 11px;
          height: 11px;
          margin-left: -5px;
          border-radius: 50%;
          background: #ffe2a0;
          box-shadow: 0 0 14px 4px rgba(255, 170, 50, 0.9);
        }

        .tr-pos {
          position: absolute;
          left: 13%;
          bottom: 25%;
          width: 74%;
        }

        .tr-float {
          perspective: 800px;
          animation: tr-float 5s ease-in-out infinite;
        }

        .tr-spin {
          transform-origin: 50% 60%;
          animation: tr-spin 8s ease-in-out infinite alternate;
        }

        .tr-cup {
          position: relative;
        }

        .tr-cup img {
          display: block;
          width: 100%;
          height: auto;
          filter: drop-shadow(0 0 18px rgba(255, 150, 30, 0.65));
        }

        .tr-shine {
          position: absolute;
          inset: 0;
          -webkit-mask-image: var(--tr-mask);
          mask-image: var(--tr-mask);
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          background: linear-gradient(105deg, transparent 38%, rgba(255, 250, 225, 0.9) 50%, transparent 62%);
          background-size: 280% 100%;
          background-repeat: no-repeat;
          mix-blend-mode: screen;
          animation: tr-shine 4.8s ease-in-out infinite;
        }

        .tr-spark {
          position: absolute;
          bottom: 56%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ffd37a;
          box-shadow: 0 0 8px 2px rgba(255, 170, 50, 0.9);
          opacity: 0;
          animation: tr-spark linear infinite;
        }

        @keyframes tr-aura {
          from { opacity: 0.65; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1.04); }
        }

        @keyframes tr-beam {
          from { opacity: 0.55; }
          to { opacity: 1; }
        }

        @keyframes tr-ring {
          to { transform: rotate(360deg); }
        }

        @keyframes tr-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9%); }
        }

        @keyframes tr-spin {
          from { transform: rotateY(-20deg); }
          to { transform: rotateY(20deg); }
        }

        @keyframes tr-shine {
          0% { background-position: 0% 0; }
          60%, 100% { background-position: 100% 0; }
        }

        @keyframes tr-spark {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateY(-120px) scale(0.2); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tr-aura, .tr-beam, .tr-ring, .tr-float, .tr-spin, .tr-shine, .tr-spark {
            animation: none;
          }
        }
      `}</style>
    </motion.div>
  )
}
