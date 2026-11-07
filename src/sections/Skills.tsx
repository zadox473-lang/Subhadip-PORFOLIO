import { motion } from 'framer-motion'
import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers3,
  Sparkles,
  Terminal,
  Wrench,
} from 'lucide-react'

const skillGroups = [
  {
    number: '01',
    title: 'PROGRAMMING',
    subtitle: 'The language of creation',
    icon: Code2,
    skills: ['Python', 'C / C++', 'JavaScript', 'Problem Solving'],
  },
  {
    number: '02',
    title: 'AI & MACHINE LEARNING',
    subtitle: 'Building intelligent systems',
    icon: BrainCircuit,
    skills: ['Artificial Intelligence', 'Machine Learning', 'Data Science', 'Neural Networks'],
  },
  {
    number: '03',
    title: 'ROBOTICS',
    subtitle: 'Connecting code with reality',
    icon: Cpu,
    skills: ['Robotics Fundamentals', 'Electronics', 'Sensors', 'Automation'],
  },
  {
    number: '04',
    title: 'TOOLS & TECHNOLOGY',
    subtitle: 'The builder toolkit',
    icon: Wrench,
    skills: ['Git & GitHub', 'Linux', 'VS Code', 'Terminal'],
  },
]

const technologies = [
  { name: 'Python', icon: Terminal },
  { name: 'AI / ML', icon: BrainCircuit },
  { name: 'Robotics', icon: Cpu },
  { name: 'Web Development', icon: Globe },
  { name: 'Data', icon: Database },
  { name: 'Creative Tech', icon: Layers3 },
]

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="skills-eyebrow">
            <Sparkles size={14} />
            THE TECHNOLOGY TOOLKIT
          </span>

          <h2>
            SKILLS & <span>EXPLORATION.</span>
          </h2>

          <p>
            Learning the tools, understanding the systems and developing the
            skills to turn ideas into reality.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon

            return (
              <motion.article
                className="skill-card"
                key={group.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="skill-card-top">
                  <span>{group.number} / 04</span>
                  <Icon size={23} />
                </div>

                <h3>{group.title}</h3>
                <p className="skill-subtitle">{group.subtitle}</p>

                <div className="skill-divider" />

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <div className="skill-card-glow" />
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="skills-exploring"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="exploring-heading">
            <div>
              <span className="skills-eyebrow">CURRENT INTERESTS</span>
              <h3>ALWAYS <span>EXPLORING.</span></h3>
            </div>

            <span className="exploring-status">
              <i />
              LEARNING MODE
            </span>
          </div>

          <div className="technology-grid">
            {technologies.map((tech) => {
              const Icon = tech.icon

              return (
                <div className="technology-item" key={tech.name}>
                  <Icon size={19} />
                  <span>{tech.name}</span>
                </div>
              )
            })}
          </div>
        </motion.div>

        <div className="skills-footer">
          <span>CURIOUS BY NATURE.</span>
          <div />
          <span>BUILT THROUGH EXPERIMENTATION.</span>
        </div>
      </div>

      <style>{`
        .skills-section {
          position: relative;
          overflow: hidden;
          padding: 120px 7% 105px;
          color: #f5f1ed;
          background:
            radial-gradient(ellipse at 50% 100%, rgba(255, 75, 0, 0.08), transparent 45%),
            #080808;
        }

        .skills-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .skills-heading {
          max-width: 800px;
          margin-bottom: 55px;
        }

        .skills-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ff7138;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .skills-heading h2 {
          margin: 18px 0;
          font-size: clamp(40px, 6.5vw, 78px);
          line-height: 1;
          font-weight: 900;
          letter-spacing: -4px;
        }

        .skills-heading h2 span,
        .exploring-heading h3 span {
          color: #ff6128;
          text-shadow: 0 0 30px rgba(255, 75, 0, 0.2);
        }

        .skills-heading > p {
          max-width: 590px;
          color: #918b86;
          font-size: 14px;
          line-height: 1.9;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .skill-card {
          position: relative;
          min-height: 235px;
          padding: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 15px;
          background: linear-gradient(140deg, rgba(255, 255, 255, 0.045), rgba(255, 255, 255, 0.012));
          transition: transform 0.35s ease, border-color 0.35s ease;
        }

        .skill-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 105, 45, 0.4);
        }

        .skill-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #ff7138;
        }

        .skill-card-top span {
          font-size: 9px;
          letter-spacing: 2px;
          color: #92786c;
        }

        .skill-card h3 {
          position: relative;
          z-index: 1;
          margin: 27px 0 7px;
          font-size: 19px;
          letter-spacing: 0.5px;
        }

        .skill-subtitle {
          position: relative;
          z-index: 1;
          margin: 0;
          color: #8f8883;
          font-size: 11px;
        }

        .skill-divider {
          width: 100%;
          height: 1px;
          margin: 22px 0 17px;
          background: rgba(255, 255, 255, 0.09);
        }

        .skill-tags {
          position: relative;
          z-index: 1;
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .skill-tags span {
          padding: 8px 11px;
          color: #d1c5bd;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.2);
          font-size: 10px;
        }

        .skill-card-glow {
          position: absolute;
          right: -80px;
          bottom: -120px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: rgba(255, 65, 0, 0.08);
          filter: blur(65px);
          pointer-events: none;
        }

        .skills-exploring {
          margin-top: 65px;
          padding: 32px;
          border: 1px solid rgba(255, 110, 50, 0.16);
          border-radius: 15px;
          background: linear-gradient(120deg, rgba(255, 80, 20, 0.07), rgba(255, 255, 255, 0.015));
        }

        .exploring-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .exploring-heading h3 {
          margin: 12px 0 0;
          font-size: clamp(23px, 3vw, 32px);
          letter-spacing: -1px;
        }

        .exploring-status {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #b4a69e;
          font-size: 9px;
          letter-spacing: 1.5px;
        }

        .exploring-status i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff7138;
          box-shadow: 0 0 12px #ff7138;
        }

        .technology-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        .technology-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 17px;
          color: #d8ccc4;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 9px;
          background: rgba(0, 0, 0, 0.18);
          font-size: 11px;
          transition: color 0.3s ease, border-color 0.3s ease;
        }

        .technology-item svg {
          color: #ff7138;
        }

        .technology-item:hover {
          color: #fff;
          border-color: rgba(255, 105, 45, 0.35);
        }

        .skills-footer {
          display: flex;
          align-items: center;
          gap: 17px;
          margin-top: 55px;
          color: #8e8580;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .skills-footer div {
          flex: 1;
          height: 1px;
          background: rgba(255, 255, 255, 0.1);
        }

        @media (max-width: 750px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }

          .technology-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .skills-section {
            padding: 85px 6% 75px;
          }

          .skills-heading h2 {
            letter-spacing: -2px;
          }

          .skill-card {
            padding: 23px;
          }

          .skills-exploring {
            padding: 22px;
          }

          .exploring-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .skills-footer {
            flex-wrap: wrap;
            line-height: 1.8;
          }
        }
      `}</style>
    </section>
  )
}
