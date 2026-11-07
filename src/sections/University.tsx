import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BookOpen,
  Building2,
  Cpu,
  GraduationCap,
  MapPin,
  Sparkles,
} from 'lucide-react'

const details = [
  {
    icon: GraduationCap,
    label: 'PROGRAM',
    value: 'B.Tech / AI & Robotics',
  },
  {
    icon: BookOpen,
    label: 'ACADEMIC LEVEL',
    value: 'First Year',
  },
  {
    icon: Cpu,
    label: 'FIELD OF STUDY',
    value: 'Artificial Intelligence & Robotics',
  },
  {
    icon: MapPin,
    label: 'LOCATION',
    value: 'Add university location',
  },
]

export default function University() {
  return (
    <section id="university" className="university-section">
      <div className="university-container">
        <motion.div
          className="university-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="university-eyebrow">
            <Sparkles size={14} />
            THE ACADEMIC JOURNEY
          </span>

          <h2>
            WHERE IT <span>BEGINS.</span>
          </h2>

          <p>
            The foundation behind every idea, experiment and future innovation.
          </p>
        </motion.div>

        <motion.div
          className="university-main-card"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="university-visual">
            <div className="university-visual-overlay" />

            <div className="university-visual-content">
              <span className="university-visual-label">
                CURRENTLY STUDYING
              </span>

              <Building2 size={54} strokeWidth={1.1} />

              <h3>YOUR UNIVERSITY</h3>

              <span className="university-visual-caption">
                A PLACE TO LEARN. A SPACE TO CREATE.
              </span>
            </div>

            <span className="university-visual-index">01 — EDUCATION</span>
          </div>

          <div className="university-information">
            <span className="university-small-label">
              <span className="university-live-dot" />
              ACADEMIC PROFILE
            </span>

            <h3>
              Learning today.
              <br />
              <span>Building tomorrow.</span>
            </h3>

            <p className="university-description">
              Currently pursuing a journey in Artificial Intelligence and
              Robotics, developing the knowledge and practical foundation
              needed to work with emerging technologies.
            </p>

            <div className="university-details">
              {details.map((detail, index) => {
                const Icon = detail.icon

                return (
                  <motion.div
                    className="university-detail"
                    key={detail.label}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <div className="university-detail-icon">
                      <Icon size={17} />
                    </div>

                    <div>
                      <span>{detail.label}</span>
                      <strong>{detail.value}</strong>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <a href="#skills" className="university-link">
              EXPLORE MY SKILLS
              <ArrowUpRight size={18} />
            </a>
          </div>
        </motion.div>

        <div className="university-bottom-note">
          <span>01</span>
          <div />
          <p>EVERY EXPERT WAS ONCE A BEGINNER.</p>
        </div>
      </div>

      <style>{`
        .university-section {
          position: relative;
          overflow: hidden;
          padding: 120px 7% 100px;
          color: #f5f1ed;
          background:
            radial-gradient(ellipse at 90% 50%, rgba(255, 70, 0, 0.08), transparent 40%),
            #0b0a09;
        }

        .university-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .university-heading {
          margin-bottom: 55px;
        }

        .university-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ff7138;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .university-heading h2 {
          margin: 18px 0 13px;
          font-size: clamp(42px, 7vw, 82px);
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -4px;
        }

        .university-heading h2 span {
          color: #ff5d25;
          text-shadow: 0 0 30px rgba(255, 75, 0, 0.22);
        }

        .university-heading p {
          color: #8f8985;
          font-size: 14px;
          line-height: 1.8;
        }

        .university-main-card {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          min-height: 540px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 18px;
          background: linear-gradient(135deg, #171310, #0e0d0c);
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
        }

        .university-visual {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 480px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 45%, rgba(255, 88, 24, 0.22), transparent 42%),
            linear-gradient(145deg, #27140c, #100d0b 70%);
        }

        .university-visual::before,
        .university-visual::after {
          position: absolute;
          content: '';
          width: 330px;
          height: 330px;
          border: 1px solid rgba(255, 111, 53, 0.16);
          border-radius: 50%;
        }

        .university-visual::after {
          width: 250px;
          height: 250px;
          border-color: rgba(255, 111, 53, 0.22);
        }

        .university-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.5));
        }

        .university-visual-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
          text-align: center;
          color: #ff7138;
        }

        .university-visual-label,
        .university-visual-caption {
          color: #b58a76;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .university-visual-content h3 {
          margin: 5px 0 0;
          color: #f6e8df;
          font-size: clamp(21px, 3vw, 30px);
          letter-spacing: 2px;
        }

        .university-visual-index {
          position: absolute;
          bottom: 24px;
          left: 25px;
          color: #b18b78;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .university-information {
          padding: 55px 48px;
        }

        .university-small-label {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #ff7138;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .university-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff7138;
          box-shadow: 0 0 12px #ff7138;
        }

        .university-information h3 {
          margin: 25px 0 15px;
          font-size: clamp(29px, 3.5vw, 43px);
          line-height: 1.15;
          letter-spacing: -2px;
        }

        .university-information h3 span {
          color: #ff6931;
        }

        .university-description {
          max-width: 490px;
          color: #96908b;
          font-size: 13px;
          line-height: 1.9;
        }

        .university-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 23px 18px;
          margin-top: 32px;
        }

        .university-detail {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .university-detail-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          color: #ff7138;
          border: 1px solid rgba(255, 105, 45, 0.2);
          border-radius: 10px;
          background: rgba(255, 90, 25, 0.07);
        }

        .university-detail span,
        .university-detail strong {
          display: block;
        }

        .university-detail span {
          margin-bottom: 5px;
          color: #8d7770;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .university-detail strong {
          color: #e9ded7;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.5;
        }

        .university-link {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          margin-top: 34px;
          padding-bottom: 9px;
          color: #ff7138;
          border-bottom: 1px solid rgba(255, 113, 56, 0.5);
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          transition: gap 0.3s ease;
        }

        .university-link:hover {
          gap: 22px;
        }

        .university-bottom-note {
          display: flex;
          align-items: center;
          gap: 17px;
          margin-top: 40px;
          color: #8f8580;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .university-bottom-note > span {
          color: #ff7138;
        }

        .university-bottom-note div {
          width: 55px;
          height: 1px;
          background: rgba(255, 113, 56, 0.5);
        }

        .university-bottom-note p {
          margin: 0;
        }

        @media (max-width: 850px) {
          .university-main-card {
            grid-template-columns: 1fr;
          }

          .university-visual {
            min-height: 340px;
          }

          .university-information {
            padding: 40px 32px;
          }
        }

        @media (max-width: 550px) {
          .university-section {
            padding: 85px 6% 75px;
          }

          .university-heading h2 {
            letter-spacing: -2px;
          }

          .university-details {
            grid-template-columns: 1fr;
          }

          .university-information {
            padding: 35px 23px;
          }

          .university-visual {
            min-height: 290px;
          }
        }
      `}</style>
    </section>
  )
}
