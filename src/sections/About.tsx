import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cpu,
  GraduationCap,
  Sparkles,
} from 'lucide-react'

const highlights = [
  {
    icon: BrainCircuit,
    title: 'AI & Intelligence',
    description: 'Exploring intelligent systems and machine learning.',
  },
  {
    icon: Cpu,
    title: 'Robotics',
    description: 'Learning how software meets the physical world.',
  },
  {
    icon: Code2,
    title: 'Creative Coding',
    description: 'Turning ideas into interactive digital experiences.',
  },
]

const stats = [
  { value: '01+', label: 'Year of Learning' },
  { value: '∞', label: 'Ideas to Explore' },
  { value: '100%', label: 'Curiosity' },
]

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.div
          className="about-heading"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="about-eyebrow">
            <Sparkles size={14} />
            THE PERSON BEHIND THE IDEAS
          </span>

          <h2>
            BEYOND THE
            <span> CODE.</span>
          </h2>
        </motion.div>

        <div className="about-layout">
          <motion.div
            className="about-main"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-number">01 / ABOUT</div>

            <h3>
              Hey, I'm <span>Subhadip.</span>
            </h3>

            <p className="about-intro">
              A curious mind exploring the intersection of artificial
              intelligence, robotics and creative technology.
            </p>

            <p className="about-description">
              I'm currently a first-year AI & Robotics student, building my
              foundation in technology and discovering how intelligent
              machines can shape the future. I believe every great innovation
              starts with curiosity, experimentation and the courage to build.
            </p>

            <a href="#projects" className="about-link">
              EXPLORE MY WORK
              <ArrowUpRight size={18} />
            </a>
          </motion.div>

          <motion.div
            className="about-side"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="about-orbit-card">
              <div className="orbit-ring orbit-ring-one" />
              <div className="orbit-ring orbit-ring-two" />

              <div className="about-core">
                <BrainCircuit size={58} strokeWidth={1.2} />
                <span>THINK. BUILD. EVOLVE.</span>
              </div>

              <span className="orbit-label orbit-label-top">ARTIFICIAL</span>
              <span className="orbit-label orbit-label-bottom">INTELLIGENCE</span>
            </div>

            <div className="about-stats">
              {stats.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                className="about-highlight"
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
              >
                <div className="highlight-icon">
                  <Icon size={23} />
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>

                <ArrowUpRight className="highlight-arrow" size={19} />
              </motion.div>
            )
          })}
        </div>

        <div className="about-bottom">
          <GraduationCap size={19} />
          <span>FIRST YEAR · AI & ROBOTICS</span>
          <span className="about-bottom-line" />
          <span>THE JOURNEY HAS JUST BEGUN.</span>
        </div>
      </div>

      <style>{`
        .about-section {
          position: relative;
          padding: 125px 7% 110px;
          overflow: hidden;
          color: #f5f1ed;
          background:
            radial-gradient(ellipse at 8% 45%, rgba(255, 75, 0, 0.09), transparent 36%),
            #080808;
        }

        .about-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .about-heading {
          margin-bottom: 65px;
        }

        .about-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ff7138;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .about-heading h2 {
          margin: 18px 0 0;
          font-size: clamp(42px, 7vw, 86px);
          line-height: 0.95;
          letter-spacing: -5px;
          font-weight: 900;
        }

        .about-heading h2 span {
          color: #ff5a1f;
          text-shadow: 0 0 35px rgba(255, 75, 0, 0.25);
        }

        .about-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 85px;
          align-items: center;
        }

        .about-number {
          color: #ff7138;
          font-size: 10px;
          letter-spacing: 3px;
          margin-bottom: 25px;
        }

        .about-main h3 {
          font-size: clamp(32px, 4vw, 51px);
          line-height: 1.1;
          letter-spacing: -2px;
          margin: 0 0 25px;
        }

        .about-main h3 span {
          color: #ff6126;
        }

        .about-intro {
          max-width: 570px;
          color: #f0e5dd;
          font-size: clamp(17px, 2vw, 21px);
          line-height: 1.7;
          margin-bottom: 17px;
        }

        .about-description {
          max-width: 560px;
          color: #92908e;
          font-size: 14px;
          line-height: 1.95;
        }

        .about-link {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          margin-top: 28px;
          padding-bottom: 9px;
          color: #ff7138;
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 113, 56, 0.55);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          transition: gap 0.3s ease;
        }

        .about-link:hover {
          gap: 23px;
        }

        .about-side {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .about-orbit-card {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 320px;
          overflow: hidden;
          border: 1px solid rgba(255, 105, 45, 0.2);
          border-radius: 20px;
          background:
            radial-gradient(circle, rgba(255, 74, 0, 0.15), transparent 52%),
            linear-gradient(145deg, #17100d, #0c0c0c 70%);
        }

        .orbit-ring {
          position: absolute;
          width: 220px;
          height: 220px;
          border: 1px solid rgba(255, 100, 40, 0.24);
          border-radius: 50%;
          animation: aboutOrbit 18s linear infinite;
        }

        .orbit-ring-one {
          transform: rotateX(65deg) rotateZ(25deg);
        }

        .orbit-ring-two {
          width: 280px;
          height: 280px;
          transform: rotateX(65deg) rotateZ(-25deg);
          animation-direction: reverse;
          border-color: rgba(255, 100, 40, 0.12);
        }

        .about-core {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          color: #ff7138;
          filter: drop-shadow(0 0 20px rgba(255, 80, 20, 0.35));
        }

        .about-core span {
          color: #c9a18c;
          font-size: 9px;
          letter-spacing: 3px;
        }

        .orbit-label {
          position: absolute;
          color: #9c7561;
          font-size: 8px;
          letter-spacing: 3px;
        }

        .orbit-label-top {
          top: 28px;
        }

        .orbit-label-bottom {
          bottom: 28px;
        }

        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .about-stat {
          padding: 18px 10px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.025);
        }

        .about-stat strong,
        .about-stat span {
          display: block;
        }

        .about-stat strong {
          color: #ff7138;
          font-size: 25px;
          margin-bottom: 6px;
        }

        .about-stat span {
          color: #85817e;
          font-size: 9px;
          letter-spacing: 1px;
        }

        .about-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 85px;
        }

        .about-highlight {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px 19px;
          min-height: 120px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 13px;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012));
          transition: border-color 0.3s ease, transform 0.3s ease;
        }

        .about-highlight:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 100, 40, 0.4);
        }

        .highlight-icon {
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 43px;
          height: 43px;
          color: #ff7138;
          border: 1px solid rgba(255, 100, 40, 0.2);
          border-radius: 11px;
          background: rgba(255, 80, 20, 0.08);
        }

        .about-highlight h4 {
          margin: 2px 0 8px;
          font-size: 14px;
          color: #f4e9e2;
        }

        .about-highlight p {
          margin: 0;
          color: #898481;
          font-size: 11px;
          line-height: 1.7;
        }

        .highlight-arrow {
          position: absolute;
          top: 18px;
          right: 16px;
          color: #8a5140;
        }

        .about-bottom {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 65px;
          color: #a49a94;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .about-bottom svg {
          color: #ff7138;
        }

        .about-bottom-line {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        @keyframes aboutOrbit {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @media (max-width: 850px) {
          .about-layout {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .about-highlights {
            grid-template-columns: 1fr;
            margin-top: 55px;
          }
        }

        @media (max-width: 550px) {
          .about-section {
            padding: 85px 6% 75px;
          }

          .about-heading h2 {
            letter-spacing: -2px;
          }

          .about-orbit-card {
            min-height: 260px;
          }

          .about-stats {
            gap: 7px;
          }

          .about-stat {
            padding: 14px 8px;
          }

          .about-stat strong {
            font-size: 21px;
          }

          .about-stat span {
            font-size: 8px;
          }

          .about-bottom {
            flex-wrap: wrap;
            font-size: 8px;
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  )
}
