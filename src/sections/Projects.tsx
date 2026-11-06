import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI PROJECT",
    description:
      "An exploration into intelligent systems and the possibilities of artificial intelligence.",
    technologies: ["Python", "AI", "Machine Learning"],
    status: "EXPLORATION",
    symbol: "🧠",
  },
  {
    number: "02",
    category: "ROBOTICS & AUTOMATION",
    title: "ROBOTICS PROJECT",
    description:
      "Exploring robotics concepts, automation and the connection between software and hardware.",
    technologies: ["Robotics", "Electronics", "Automation"],
    status: "EXPLORATION",
    symbol: "🤖",
  },
  {
    number: "03",
    category: "WEB DEVELOPMENT",
    title: "PORTFOLIO WEBSITE",
    description:
      "A personal digital space designed to showcase creativity, technology and engineering journey.",
    technologies: ["React", "TypeScript", "CSS"],
    status: "IN DEVELOPMENT",
    symbol: "🌐",
  },
];

const projectContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const projectItem = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut" as const,
    },
  },
};

function Projects() {
  return (
    <>
      <style>{`
        .projects-section {
          position: relative;
          overflow: hidden;
          padding: 120px 10%;
          background: #0b0908;
          color: #fff;
        }

        .projects-section::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          left: -180px;
          top: 25%;
          border-radius: 50%;
          background: #ff4500;
          filter: blur(150px);
          opacity: .13;
          pointer-events: none;
        }

        .projects-inner {
          max-width: 1200px;
          margin: auto;
          position: relative;
          z-index: 1;
        }

        .projects-label {
          color: #ff7043;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 5px;
          margin-bottom: 22px;
        }

        .projects-heading {
          font-size: clamp(42px, 6vw, 74px);
          line-height: 1.05;
          letter-spacing: -3px;
        }

        .projects-heading span {
          color: #ff5722;
        }

        .projects-intro {
          max-width: 600px;
          color: #999;
          font-size: 15px;
          line-height: 1.9;
          margin-top: 22px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 60px;
        }

        .project-card {
          position: relative;
          min-height: 390px;
          padding: 32px;
          border: 1px solid #ffffff18;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(
            145deg,
            #ffffff0d,
            #ffffff03
          );
          backdrop-filter: blur(15px);
          transition:
            border-color .4s ease,
            box-shadow .4s ease,
            background .4s ease;
        }

        .project-card::before {
          content: "";
          position: absolute;
          width: 220px;
          height: 220px;
          right: -120px;
          top: -120px;
          border-radius: 50%;
          background: #ff5722;
          filter: blur(90px);
          opacity: 0;
          transition: opacity .5s ease;
          pointer-events: none;
        }

        .project-card:hover {
          border-color: #ff572277;
          background: #ff57220b;
          box-shadow: 0 20px 60px #00000055;
        }

        .project-card:hover::before {
          opacity: .4;
        }

        .project-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .project-number {
          color: #ff7043;
          font-size: 12px;
          letter-spacing: 3px;
        }

        .project-symbol {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          border: 1px solid #ff572255;
          border-radius: 18px;
          background: #ff572211;
          font-size: 30px;
          transition: transform .4s ease;
        }

        .project-card:hover .project-symbol {
          transform: rotate(10deg) scale(1.12);
        }

        .project-category {
          color: #ff7043;
          font-size: 10px;
          letter-spacing: 3px;
          margin-top: 38px;
        }

        .project-card h3 {
          font-size: 28px;
          margin-top: 13px;
          letter-spacing: -1px;
        }

        .project-description {
          color: #999;
          font-size: 14px;
          line-height: 1.8;
          margin-top: 15px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 22px;
        }

        .project-tags span {
          color: #d2b5a9;
          background: #ff572211;
          border: 1px solid #ff572233;
          border-radius: 30px;
          padding: 7px 11px;
          font-size: 10px;
        }

        .project-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 27px;
          padding-top: 18px;
          border-top: 1px solid #ffffff15;
        }

        .project-status {
          color: #ff7043;
          font-size: 10px;
          letter-spacing: 2px;
        }

        .project-arrow {
          color: #ff5722;
          font-size: 23px;
        }

        .projects-note {
          margin-top: 35px;
          color: #888;
          font-size: 13px;
          line-height: 1.8;
        }

        @media (max-width: 750px) {
          .projects-section {
            padding: 85px 7%;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-top: 40px;
          }

          .projects-heading {
            letter-spacing: -2px;
          }

          .project-card {
            min-height: 370px;
            padding: 25px;
          }
        }
      `}</style>

      <section className="projects-section" id="projects">
        <div className="projects-inner">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="projects-label">
              04 / SELECTED PROJECTS
            </p>

            <h2 className="projects-heading">
              IDEAS INTO
              <br />
              <span>REALITY.</span>
            </h2>

            <p className="projects-intro">
              Every project is an opportunity to experiment,
              learn something new and transform an idea into
              something meaningful.
            </p>
          </motion.div>

          <motion.div
            className="projects-grid"
            variants={projectContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project) => (
              <motion.article
                className="project-card"
                key={project.number}
                variants={projectItem}
                whileHover={{ y: -9, scale: 1.015 }}
              >
                <div className="project-top">
                  <span className="project-number">
                    / {project.number}
                  </span>

                  <div className="project-symbol">
                    {project.symbol}
                  </div>
                </div>

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-bottom">
                  <span className="project-status">
                    {project.status}
                  </span>

                  <span className="project-arrow">↗</span>
                </div>
              </motion.article>
            ))}
          </motion.div>

          <p className="projects-note">
            * Project cards currently contain sample content.
            Real project details, images and GitHub links will
            be added after they are confirmed.
          </p>

        </div>
      </section>
    </>
  );
}

export default Projects;
