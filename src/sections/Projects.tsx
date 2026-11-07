import { motion } from 'framer-motion'
import {
  ArrowUpRight,
  BrainCircuit,
  Cpu,
  Layers3,
  Sparkles,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    category: 'ARTIFICIAL INTELLIGENCE',
    title: 'Intelligent Systems',
    description:
      'Exploring how AI models learn, process information and solve real-world problems.',
    status: 'LEARNING & EXPLORING',
    icon: BrainCircuit,
    tags: ['AI', 'Machine Learning', 'Python'],
    accent: 'ai',
  },
  {
    number: '02',
    category: 'ROBOTICS & AUTOMATION',
    title: 'Robotics Lab',
    description:
      'Discovering the connection between electronics, sensors, programming and intelligent machines.',
    status: 'IDEA & EXPERIMENTATION',
    icon: Cpu,
    tags: ['Robotics', 'Sensors', 'Automation'],
    accent: 'robotics',
  },
  {
    number: '03',
    category: 'CREATIVE TECHNOLOGY',
    title: 'Digital Experiences',
    description:
      'Experimenting with code and creative tools to build interactive digital experiences.',
    status: 'CONTINUOUS EXPLORATION',
    icon: Layers3,
    tags: ['Development', 'Design', 'Technology'],
    accent: 'creative',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="projects-eyebrow">
            <Sparkles size={14} />
            IDEAS INTO EXPERIMENTS
          </span>

          <h2>
            SELECTED <span>WORK.</span>
          </h2>

          <p>
            Every project starts with a question. Every experiment brings a
            new opportunity to learn.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon

            return (
              <motion.article
                className={`project-card project-${project.accent}`}
                key={project.number}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.12 }}
              >
                <div className="project-visual">
                  <span className="project-index">
                    PROJECT / {project.number}
                  </span>

                  <div className="project-art">
                    <div className="project-art-ring project-ring-one" />
                    <div className="project-art-ring project-ring-two" />

                    <div className="project-icon">
                      <Icon size={58} strokeWidth={1.1} />
                    </div>

                    <span className="project-art-caption">
                      {project.category}
                    </span>
                  </div>

                  <span className="project-visual-mark">
                    0{index + 1}
                  </span>
                </div>

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-card-footer">
                    <span>
                      <i />
                      {project.status}
                    </span>

                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          className="projects-bottom"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="projects-bottom-label">THE NEXT CHAPTER</span>
            <h3>
              MORE IDEAS. <span>MORE BUILDS.</span>
            </h3>
          </div>

          <a href="#contact" className="projects-contact-link">
            LET'S CONNECT
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>

      <style>{`
        .projects-section {
          position: relative;
          overflow: hidden;
          padding: 120px 7% 110px;
          color: #f5f1ed;
          background:
            radial-gradient(ellipse at 10% 65%, rgba(255, 65, 0, 0.075), transparent 38%),
            #0b0a09;
        }

        .projects-container {
          max-width: 1250px;
          margin: 0 auto;
        }

        .projects-heading {
          max-width: 760px;
          margin-bottom: 55px;
        }

        .projects-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #ff7138;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 3px;
        }

        .projects-heading h2 {
          margin: 18px 0;
          font-size: clamp(44px, 7vw, 84px);
          line-height: 0.98;
          font-weight: 900;
          letter-spacing: -4px;
        }

        .projects-heading h2 span {
          color: #ff6128;
          text-shadow: 0 0 30px rgba(255, 75, 0, 0.25);
        }

        .projects-heading p {
          max-width: 570px;
          color: #928a85;
          font-size: 14px;
          line-height: 1.9;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .project-card {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.075);
          border-radius: 15px;
          background: linear-gradient(150deg, #191411, #0e0d0c 70%);
          transition: transform 0.35s ease, border-color 0.35s ease;
        }

        .project-card:hover {
          transform: translateY(-7px);
          border-color: rgba(255, 100, 40, 0.4);
        }

        .project-visual {
          position: relative;
          display: grid;
          place-items: center;
          min-height: 245px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 50%, rgba(255, 80, 20, 0.16), transparent 55%),
            #15100e;
        }

        .project-visual::after {
          position: absolute;
          inset: 0;
          content: '';
          opacity: 0.18;
          background-image: linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: linear-gradient(transparent, black, transparent);
        }

        .project-index {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 2;
          color: #b58b77;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .project-art {
          position: relative;
          display: grid;
          place-items: center;
          width: 190px;
          height: 170px;
        }

        .project-art-ring {
          position: absolute;
          width: 145px;
          height: 145px;
          border: 1px solid rgba(255, 105, 45, 0.25);
          border-radius: 50%;
          animation: projectOrbit 18s linear infinite;
        }

        .project-ring-two {
          width: 180px;
          height: 110px;
          transform: rotate(35deg);
          border-color: rgba(255, 105, 45, 0.16);
          animation-direction: reverse;
        }

        .project-icon {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          width: 85px;
          height: 85px;
          color: #ff7138;
          border: 1px solid rgba(255, 110, 45, 0.3);
          border-radius: 23px;
          background: rgba(255, 80, 20, 0.09);
          box-shadow: 0 0 55px rgba(255, 70, 0, 0.16);
        }

        .project-art-caption {
          position: absolute;
          bottom: -3px;
          color: #a88a7b;
          font-size: 8px;
          letter-spacing: 2px;
        }

        .project-visual-mark {
          position: absolute;
          right: 18px;
          bottom: 12px;
          color: rgba(255, 255, 255, 0.13);
          font-size: 42px;
          font-weight: 900;
        }

        .project-content {
          padding: 25px 22px 20px;
        }

        .project-category {
          color: #ff7138;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 1.7px;
        }

        .project-content h3 {
          margin: 13px 0 10px;
          font-size: 22px;
          letter-spacing: -0.7px;
        }

        .project-content > p {
          min-height: 75px;
          margin: 0;
          color: #938b85;
          font-size: 12px;
          line-height: 1.85;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 19px;
        }

        .project-tags span {
          padding: 7px 9px;
          color: #c5b5aa;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 5px;
          font-size: 9px;
        }

        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 23px;
          padding-top: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #ff7138;
        }

        .project-card-footer span {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #a99588;
          font-size: 8px;
          letter-spacing: 1px;
        }

        .project-card-footer i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #ff7138;
          box-shadow: 0 0 9px #ff7138;
        }

        .projects-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          margin-top: 65px;
          padding: 30px;
          border: 1px solid rgba(255, 100, 40, 0.17);
          border-radius: 13px;
          background: linear-gradient(110deg, rgba(255, 75, 0, 0.08), rgba(255, 255, 255, 0.015));
        }

        .projects-bottom-label {
          color: #ff7138;
          font-size: 9px;
          letter-spacing: 2px;
        }

        .projects-bottom h3 {
          margin: 12px 0 0;
          font-size: clamp(19px, 3vw, 29px);
          letter-spacing: -1px;
        }

        .projects-bottom h3 span {
          color: #ff7138;
        }

        .projects-contact-link {
          display: inline-flex;
          align-items: center;
          gap: 13px;
          flex-shrink: 0;
          color: #ff7138;
          text-decoration: none;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 2px;
          transition: gap 0.3s ease;
        }

        .projects-contact-link:hover {
          gap: 21px;
        }

        @keyframes projectOrbit {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @media (max-width: 950px) {
          .projects-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .projects-section {
            padding: 85px 6% 75px;
          }

          .projects-heading h2 {
            letter-spacing: -2px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .projects-bottom {
            align-items: flex-start;
            flex-direction: column;
            padding: 24px;
          }
        }
      `}</style>
    </section>
  )
}
