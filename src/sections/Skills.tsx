import { motion } from "framer-motion";

const skills = [
  {
    number: "01",
    icon: "🤖",
    title: "Artificial Intelligence",
    description:
      "Exploring intelligent systems, machine learning and the future of AI.",
    tags: ["AI", "Machine Learning", "Python"],
  },
  {
    number: "02",
    icon: "⚙️",
    title: "Robotics",
    description:
      "Understanding automation, robotics fundamentals and smart machines.",
    tags: ["Robotics", "Automation", "Electronics"],
  },
  {
    number: "03",
    icon: "💻",
    title: "Programming",
    description:
      "Building programming foundations and learning to solve problems with code.",
    tags: ["C", "Python", "JavaScript"],
  },
  {
    number: "04",
    icon: "🌐",
    title: "Web Development",
    description:
      "Creating modern interfaces and exploring interactive web experiences.",
    tags: ["HTML", "CSS", "React"],
  },
  {
    number: "05",
    icon: "🧠",
    title: "Problem Solving",
    description:
      "Developing logical thinking and approaching challenges with creativity.",
    tags: ["Logic", "Algorithms", "Research"],
  },
  {
    number: "06",
    icon: "🚀",
    title: "Future Technologies",
    description:
      "Discovering emerging technologies and experimenting with new ideas.",
    tags: ["Innovation", "Technology", "Learning"],
  },
];

const skillsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const skillItem = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

function Skills() {
  return (
    <>
      <style>{`
        .skills-section {
          position: relative;
          overflow: hidden;
          padding: 120px 10%;
          background: #080707;
          color: #ffffff;
        }

        .skills-section::before {
          content: "";
          position: absolute;
          left: 30%;
          top: 25%;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: #ff4500;
          filter: blur(150px);
          opacity: .12;
          pointer-events: none;
        }

        .skills-inner {
          max-width: 1200px;
          margin: auto;
          position: relative;
          z-index: 1;
        }

        .skills-label {
          color: #ff7043;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 5px;
          margin-bottom: 22px;
        }

        .skills-heading {
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -3px;
        }

        .skills-heading span {
          color: #ff5722;
        }

        .skills-intro {
          color: #999;
          max-width: 570px;
          font-size: 15px;
          line-height: 1.9;
          margin-top: 22px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 60px;
        }

        .skill-card {
          position: relative;
          min-height: 300px;
          padding: 30px;
          border: 1px solid #ffffff18;
          border-radius: 18px;
          overflow: hidden;
          background: linear-gradient(
            145deg,
            #ffffff0c,
            #ffffff03
          );
          backdrop-filter: blur(14px);
          transition:
            border-color .4s ease,
            background .4s ease,
            box-shadow .4s ease;
        }

        .skill-card::before {
          content: "";
          position: absolute;
          width: 160px;
          height: 160px;
          right: -100px;
          top: -100px;
          border-radius: 50%;
          background: #ff5722;
          filter: blur(65px);
          opacity: 0;
          transition: opacity .4s ease;
          pointer-events: none;
        }

        .skill-card:hover {
          border-color: #ff572277;
          background: #ff57220a;
          box-shadow: 0 15px 45px #00000055;
        }

        .skill-card:hover::before {
          opacity: .35;
        }

        .skill-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-number {
          color: #ff7043;
          font-size: 12px;
          letter-spacing: 3px;
        }

        .skill-icon {
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          border-radius: 15px;
          border: 1px solid #ff572255;
          background: #ff572211;
          font-size: 25px;
          transition: transform .4s ease;
        }

        .skill-card:hover .skill-icon {
          transform: rotate(8deg) scale(1.12);
        }

        .skill-card h3 {
          margin-top: 32px;
          font-size: 21px;
        }

        .skill-description {
          color: #999;
          font-size: 13px;
          line-height: 1.8;
          margin-top: 13px;
          min-height: 70px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 20px;
        }

        .skill-tags span {
          color: #d2b5a9;
          background: #ff572211;
          border: 1px solid #ff572233;
          border-radius: 30px;
          padding: 7px 11px;
          font-size: 10px;
        }

        .skills-note {
          margin-top: 35px;
          padding: 25px 30px;
          border-left: 3px solid #ff5722;
          background: linear-gradient(
            90deg,
            #ff572214,
            transparent
          );
          color: #aaa;
          font-size: 14px;
          line-height: 1.8;
        }

        .skills-note strong {
          color: #ffffff;
        }

        @media (max-width: 900px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .skills-section {
            padding: 85px 7%;
          }

          .skills-heading {
            letter-spacing: -2px;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            margin-top: 40px;
          }

          .skill-card {
            min-height: 270px;
          }
        }
      `}</style>

      <section className="skills-section" id="skills">
        <div className="skills-inner">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="skills-label">03 / SKILLS & EXPERTISE</p>

            <h2 className="skills-heading">
              KNOWLEDGE
              <br />
              <span>IN PROGRESS.</span>
            </h2>

            <p className="skills-intro">
              Every skill starts with curiosity. Exploring
              technology, developing new abilities and turning
              knowledge into practical experience.
            </p>
          </motion.div>

          <motion.div
            className="skills-grid"
            variants={skillsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill) => (
              <motion.article
                className="skill-card"
                key={skill.number}
                variants={skillItem}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="skill-top">
                  <span className="skill-number">
                    / {skill.number}
                  </span>

                  <div className="skill-icon">
                    {skill.icon}
                  </div>
                </div>

                <h3>{skill.title}</h3>

                <p className="skill-description">
                  {skill.description}
                </p>

                <div className="skill-tags">
                  {skill.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="skills-note"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <strong>Always learning. Always evolving.</strong>
            <br />
            These are learning areas, not claims of professional
            expertise. The journey is just getting started.
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Skills;
