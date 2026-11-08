import { motion } from 'framer-motion'
import { ArrowUpRight, Cpu, Sparkles } from 'lucide-react'
import { builds } from '../data/projects'

const BASE = import.meta.env.BASE_URL

export default function MoreBuilds() {
  return (
    <section className="builds-section">
      <div className="builds-container">
        <motion.div
          className="builds-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="builds-eyebrow">
            <Sparkles size={14} />
            FRESH FROM THE LAB
          </span>

          <h2>
            THE BUILD <span>LOG.</span>
          </h2>

          <p>
            Every project I build lands here. Small experiments, big ideas,
            all in one place.
          </p>
        </motion.div>

        {builds.length === 0 ? (
          <div className="builds-empty">NEXT BUILD LOADING…</div>
        ) : (
          <div className="builds-grid">
            {builds.map((build, index) => {
              const number = String(index + 1).padStart(2, '0')
              const Tag = build.github ? 'a' : 'div'

              return (
                <motion.div
                  key={`${build.title}-${index}`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                >
                  <Tag
                    className="build-card"
                    {...(build.github
                      ? {
                          href: build.github,
                          target: '_blank',
                          rel: 'noreferrer',
                          'aria-label': `${build.title} on GitHub`,
                        }
                      : {})}
                  >
                    <div className="build-photo">
                      {build.image ? (
                        <img
                          src={`${BASE}images/projects/${build.image}`}
                          alt={build.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="build-placeholder">
                          <Cpu size={34} />
                          <span>PHOTO COMING SOON</span>
                        </div>
                      )}

                      <span className="build-number">{number}</span>
                      {build.tag && <span className="build-tag">{build.tag}</span>}
                    </div>

                    <div className="build-info">
                      <h3>{build.title}</h3>
                      <p>{build.description}</p>

                      {build.github && (
                        <span className="build-link">
                          VIEW ON GITHUB
                          <ArrowUpRight size={15} />
                        </span>
                      )}
                    </div>
                  </Tag>
                </motion.div>
              )
            })}
          </div>
        )}
      </div>

      <style>{`
        .builds-section {
          position: relative;
          overflow: hidden;
          padding: 110px 7% 110px;
          color: #f5f1ed;
          background-color: #050403;
          background-image:
            linear-gradient(to bottom, rgba(255, 95, 20, 0.08), transparent 120px),
            radial-gradient(ellipse at 50% 0%, rgba(255, 150, 40, 0.14), transparent 46%),
            radial-gradient(ellipse at 90% 100%, rgba(255, 85, 10, 0.14), transparent 42%);
        }

        .builds-container {
          position: relative;
          z-index: 1;
          max-width: 1250px;
          margin: 0 auto;
        }

        .builds-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ff7138;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .builds-heading h2 {
          margin: 22px 0;
          font-size: clamp(42px, 7vw, 88px);
          font-weight: 900;
          line-height: 0.98;
          letter-spacing: -3px;
        }

        .builds-heading h2 span {
          background: linear-gradient(95deg, #ff5a14 10%, #ff9a2e 60%, #ffc35a);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          filter: drop-shadow(0 0 22px rgba(255, 90, 20, 0.35));
        }

        .builds-heading p {
          max-width: 500px;
          color: #929292;
          font-size: 15px;
          line-height: 1.8;
        }

        .builds-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 26px;
          margin-top: 60px;
        }

        .build-card {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          border-radius: 16px;
          color: inherit;
          text-decoration: none;
          background: linear-gradient(160deg, rgba(34, 20, 11, 0.92), rgba(8, 6, 5, 0.96));
          box-shadow:
            0 0 0 1px rgba(255, 190, 80, 0.18),
            0 0 28px rgba(255, 150, 30, 0.22),
            0 18px 44px rgba(0, 0, 0, 0.55);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        /* golden glowing frame */
        .build-card::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: 3;
          padding: 1.5px;
          border-radius: 16px;
          pointer-events: none;
          background: linear-gradient(135deg, #ffd27a, #ff8a1f 38%, rgba(255, 120, 20, 0.25) 68%, #ffc35a);
          -webkit-mask:
            linear-gradient(#000 0 0) content-box,
            linear-gradient(#000 0 0);
          -webkit-mask-composite: xor;
          mask:
            linear-gradient(#000 0 0) content-box exclude,
            linear-gradient(#000 0 0);
        }

        .build-card:hover {
          transform: translateY(-8px);
          box-shadow:
            0 0 0 1px rgba(255, 205, 100, 0.35),
            0 0 48px rgba(255, 160, 40, 0.42),
            0 26px 56px rgba(0, 0, 0, 0.6);
        }

        .build-photo {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #120c08;
        }

        .build-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

        .build-card:hover .build-photo img {
          transform: scale(1.07);
        }

        .build-photo::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(to top, rgba(8, 5, 3, 0.85), transparent 55%);
        }

        .build-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #ff9a4a;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 3px;
          background:
            radial-gradient(circle at 50% 45%, rgba(255, 110, 25, 0.28), transparent 62%),
            #120c08;
        }

        .build-number,
        .build-tag {
          position: absolute;
          z-index: 2;
          top: 14px;
          padding: 6px 11px;
          border-radius: 50px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          background: rgba(10, 6, 4, 0.78);
          border: 1px solid rgba(255, 170, 70, 0.4);
        }

        .build-number {
          left: 14px;
          color: #ffc35a;
        }

        .build-tag {
          right: 14px;
          color: #ff9a4a;
        }

        .build-info {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 8px;
          padding: 20px 22px 24px;
        }

        .build-info h3 {
          margin: 0;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.3px;
        }

        .build-info p {
          margin: 0;
          color: #9a928c;
          font-size: 13px;
          line-height: 1.7;
        }

        .build-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: auto;
          padding-top: 10px;
          color: #ff9a4a;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-shadow: 0 0 16px rgba(255, 110, 20, 0.45);
        }

        .build-card:hover .build-link {
          color: #ffc35a;
        }

        .builds-empty {
          margin-top: 60px;
          padding: 60px 20px;
          text-align: center;
          color: #ff9a4a;
          font-size: 12px;
          letter-spacing: 4px;
          border: 1px dashed rgba(255, 150, 60, 0.35);
          border-radius: 16px;
        }

        @media (max-width: 1000px) {
          .builds-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .builds-section {
            padding: 85px 6% 85px;
          }

          .builds-grid {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-top: 40px;
          }

          .builds-heading h2 {
            letter-spacing: -1.5px;
          }
        }
      `}</style>
    </section>
  )
}
