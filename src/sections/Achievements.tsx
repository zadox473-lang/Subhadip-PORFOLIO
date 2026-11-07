import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  Award,
  BookOpen,
  BrainCircuit,
  Code2,
  GraduationCap,
  Rocket,
  Sparkles,
  Target,
} from 'lucide-react'

const milestones = [
  {
    number: '01',
    year: 'THE BEGINNING',
    title: 'Started the AI & Robotics Journey',
    description:
      'Began exploring artificial intelligence, robotics and the technologies shaping tomorrow.',
    icon: GraduationCap,
    status: 'FOUNDATION',
  },
  {
    number: '02',
    year: 'LEARNING',
    title: 'Building Technical Foundations',
    description:
      'Started developing programming knowledge and understanding the fundamentals of intelligent systems.',
    icon: Code2,
    status: 'IN PROGRESS',
  },
  {
    number: '03',
    year: 'EXPLORATION',
    title: 'Discovering Emerging Technologies',
    description:
      'Exploring machine learning, automation, creative coding and practical technology.',
    icon: BrainCircuit,
    status: 'IN PROGRESS',
  },
  {
    number: '04',
    year: "WHAT'S NEXT",
    title: 'Turning Ideas into Projects',
    description:
      'Working towards practical experiments and meaningful projects through continuous learning.',
    icon: Rocket,
    status: 'UP NEXT',
  },
]

const focusAreas = [
  { icon: BookOpen, label: 'CONTINUOUS LEARNING' },
  { icon: Target, label: 'PRACTICAL THINKING' },
  { icon: Sparkles, label: 'CREATIVE EXPLORATION' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements-section">
      <div className="achievements-container">
        <motion.div
          className="achievements-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="achievements-eyebrow">
            <Award size={14} />
            PROGRESS OVER PERFECTION
          </span>

          <h2>
            THE <span>JOURNEY.</span>
          </h2>

          <p>
            Every milestone matters. Every lesson creates a foundation for
            something bigger.
          </p>
        </motion.div>

        <div className="achievements-layout">
          <div className="milestone-timeline">
            {milestones.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.article
                  className="milestone-item"
                  key={item.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                >
                  <div className="milestone-marker">
                    <Icon size={20} />
                  </div>

                  <div className="milestone-content">
                    <div className="milestone-topline">
                      <span>{item.year}</span>
                      <span className="milestone-number">{item.number}</span>
                    </div>

                    <h3>{item.title}</h3>

                    <p>{item.description}</p>

                    <span className="milestone-status">
                      <i />
                      {item.status}
                    </span>
                  </div>
                </motion.article>
              )
            })}
          </div>

          <motion.aside
            className="achievement-side-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="achievement-side-icon">
              <Award size={35} />
            </div>

            <span className="achievement-side-label">THE MINDSET</span>

            <h3>
              GREAT THINGS
              <br />
              TAKE <span>TIME.</span>
            </h3>

            <p>
              Not every achievement comes with a certificate. Some come from
              the problems solved, the concepts understood and the courage to
              keep learning.
            </p>

            <div className="achievement-focus">
              {focusAreas.map((item) => {
                const Icon = item.icon

                return (
                  <div key={item.label}>
                    <Icon size={17} />
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </div>

            <a href="#contact" className="achievement-link">
              BE PART OF THE JOURNEY
              <ArrowUpRight size={18} />
            </a>

            <div className="achievement-card-glow" />
          </motion.aside>
        </div>

        <div className="achievements-footer">
          <span>NO FINISH LINE.</span>
          <div />
          <span>JUST THE NEXT LEVEL.</span>
        </div>
      </div>

      <style>{`
        .achievements-section {
          position: relative;
          overflow: hidden;
          padding: 120px 7% 105px;
          color: #f5f1ed;
          background:
            radial-gradient(ellipse at 90% 30%, rgba(255, 70, 0, 0.08), transparent 38%),
            #080808;
        }

        .achievements-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .achievements-heading {
          margin-bottom: 60px;
        }

        .achievements-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ff7138;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .achievements-heading h2 {
          margin: 18px 0;
          font-size: clamp(45px, 7vw, 84px);
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -4px;
        }

        .achievements-heading h2 span {
          color: #ff6128;
          text-shadow: 0 0 30px rgba(255, 75, 0, 0.23);
        }

        .achievements-heading p {
          max-width: 580px;
          color: #928a85;
          font-size: 14px;
          line-height: 1.9;
        }

        .achievements-layout {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: start;
          gap: 65px;
        }

        .milestone-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .milestone-timeline::before {
          position: absolute;
          top: 28px;
          bottom: 30px;
          left: 27px;
          width: 1px;
          content: '';
          background: linear-gradient(
            to bottom,
            rgba(255, 105, 45, 0.65),
            rgba(255, 105, 45, 0.08)
          );
        }

        .milestone-item {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 22px;
        }

        .milestone-marker {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 55px;
          height: 55px;
          color: #ff7138;
          border: 1px solid rgba(255, 110, 45, 0.3);
          border-radius: 13px;
          background: #17100d;
          box-shadow: 0 0 25px rgba(255, 75, 0, 0.07);
        }

        .milestone-content {
          flex: 1;
          padding: 5px 0 25px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .milestone-topline {
          display: flex;
          justify-content: space-between;
          color: #ff7138;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .milestone-number {
          color: #66544b;
        }

        .milestone-content h3 {
          margin: 13px 0 9px;
          color: #f1e8e2;
          font-size: 18px;
          letter-spacing: -0.3px;
        }

        .milestone-content p {
          max-width: 480px;
          margin: 0;
          color: #918984;
          font-size: 12px;
          line-height: 1.85;
        }

        .milestone-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 15px;
          color: #b6a69c;
          font-size: 8px;
          letter-spacing: 1.5px;
        }

        .milestone-status i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff7138;
          box-shadow: 0 0 10px #ff7138;
        }

        .achievement-side-card {
          position: sticky;
          top: 100px;
          padding: 38px 32px;
          overflow: hidden;
          border: 1px solid rgba(255, 105, 45, 0.2);
          border-radius: 16px;
          background: linear-gradient(145deg, #21130d, #100e0d 70%);
        }

        .achievement-side-icon {
          display: grid;
          place-items: center;
          width: 65px;
          height: 65px;
          margin-bottom: 30px;
          color: #ff7138;
          border: 1px solid rgba(255, 110, 45, 0.28);
          border-radius: 16px;
          background: rgba(255, 80, 20, 0.08);
        }

        .achievement-side-label {
          color: #ff7138;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 2.5px;
        }

        .achievement-side-card h3 {
          position: relative;
          z-index: 1;
          margin: 15px 0;
          font-size: clamp(28px, 3vw, 39px);
          line-height: 1.15;
          letter-spacing: -1.5px;
        }

        .achievement-side-card h3 span {
          color: #ff7138;
        }

        .achievement-side-card > p {
          position: relative;
          z-index: 1;
          color: #a0958e;
          font-size: 12px;
          line-height: 1.9;
        }

        .achievement-focus {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin-top: 30px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .achievement-focus > div {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ff7138;
        }

        .achievement-focus span {
          color: #d0c2b9;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .achievement-link {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
          padding-bottom: 9px;
          color: #ff7138;
          border-bottom: 1px solid rgba(255, 113, 56, 0.5);
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
          transition: gap 0.3s ease;
        }

        .achievement-link:hover {
          gap: 20px;
        }

        .achievement-card-glow {
          position: absolute;
          right: -110px;
          bottom: -130px;
          width: 260px;
          height: 260px;
          border-radius: 50%;
          background: rgba(255, 65, 0, 0.13);
          filter: blur(80px);
          pointer-events: none;
        }

        .achievements-footer {
          display: flex;
          align-items: center;
          gap: 17px;
          margin-top: 65px;
          color: #8e8580;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .achievements-footer div {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 850px) {
          .achievements-layout {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .achievement-side-card {
            position: relative;
            top: auto;
          }
        }

        @media (max-width: 550px) {
          .achievements-section {
            padding: 85px 6% 75px;
          }

          .achievements-heading h2 {
            letter-spacing: -2px;
          }

          .milestone-item {
            gap: 14px;
          }

          .milestone-marker {
            width: 46px;
            height: 46px;
          }

          .milestone-timeline::before {
            left: 22px;
          }

          .milestone-content h3 {
            font-size: 16px;
          }

          .achievement-side-card {
            padding: 28px 23px;
          }

          .achievements-footer {
            flex-wrap: wrap;
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  )
}
