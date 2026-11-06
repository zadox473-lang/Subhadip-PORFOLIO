import { motion } from "framer-motion";

const campusItems = [
  {
    number: "01",
    title: "The Campus",
    subtitle: "A place to discover and grow",
    description:
      "Every new environment brings new ideas, experiences and opportunities to learn.",
    symbol: "🏛️",
  },
  {
    number: "02",
    title: "Learning Labs",
    subtitle: "Where curiosity meets technology",
    description:
      "Exploring engineering concepts, experimenting with technology and developing practical skills.",
    symbol: "⚙️",
  },
  {
    number: "03",
    title: "The Journey",
    subtitle: "Building something meaningful",
    description:
      "A continuous journey of learning, collaboration, creativity and personal growth.",
    symbol: "🚀",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 55,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut" as const,
    },
  },
};

function University() {
  return (
    <>
      <style>{`
        .university-section {
          position: relative;
          padding: 120px 10%;
          overflow: hidden;
          background: #0b0908;
          color: #fff;
        }

        .university-section::before {
          content: "";
          position: absolute;
          width: 380px;
          height: 380px;
          right: -180px;
          top: 15%;
          border-radius: 50%;
          background: #ff4b16;
          filter: blur(160px);
          opacity: .14;
          pointer-events: none;
        }

        .university-inner {
          max-width: 1200px;
          margin: auto;
          position: relative;
          z-index: 1;
        }

        .university-label {
          color: #ff7043;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 5px;
          margin-bottom: 22px;
        }

        .university-heading {
          font-size: clamp(40px, 6vw, 72px);
          line-height: 1.05;
          letter-spacing: -3px;
          max-width: 800px;
        }

        .university-heading span {
          color: #ff5722;
        }

        .university-intro {
          max-width: 600px;
          color: #999;
          font-size: 15px;
          line-height: 1.9;
          margin-top: 22px;
        }

        .campus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
          margin-top: 65px;
        }

        .campus-card {
          position: relative;
          min-height: 330px;
          padding: 30px;
          border-radius: 18px;
          border: 1px solid #ffffff18;
          background:
            linear-gradient(145deg, #ffffff0d, #ffffff03);
          backdrop-filter: blur(15px);
          overflow: hidden;
          transition:
            transform .4s ease,
            border-color .4s ease,
            background .4s ease;
        }

        .campus-card::after {
          content: "";
          position: absolute;
          width: 180px;
          height: 180px;
          right: -90px;
          bottom: -100px;
          border-radius: 50%;
          background: #ff5722;
          filter: blur(70px);
          opacity: .13;
          transition: opacity .4s ease;
          pointer-events: none;
        }

        .campus-card:hover {
          transform: translateY(-12px);
          border-color: #ff572277;
          background: #ff57220a;
        }

        .campus-card:hover::after {
          opacity: .35;
        }

        .campus-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .campus-number {
          color: #ff7043;
          font-size: 12px;
          letter-spacing: 3px;
        }

        .campus-symbol {
          width: 55px;
          height: 55px;
          display: grid;
          place-items: center;
          border: 1px solid #ff572255;
          border-radius: 14px;
          background: #ff572211;
          font-size: 25px;
        }

        .campus-card h3 {
          font-size: 25px;
          margin-top: 55px;
        }

        .campus-subtitle {
          color: #ff7043;
          font-size: 12px;
          margin-top: 10px;
        }

        .campus-description {
          color: #999;
          font-size: 14px;
          line-height: 1.8;
          margin-top: 20px;
        }

        .campus-footer {
          margin-top: 55px;
          padding: 30px;
          border: 1px solid #ffffff15;
          border-radius: 16px;
          background: linear-gradient(90deg, #ff572214, #ffffff04);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .campus-footer p {
          color: #aaa;
          font-size: 14px;
          line-height: 1.8;
        }

        .campus-footer strong {
          color: #fff;
          font-size: 18px;
        }

        .campus-arrow {
          color: #ff5722;
          font-size: 30px;
        }

        @media (max-width: 850px) {
          .campus-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 600px) {
          .university-section {
            padding: 85px 7%;
          }

          .university-heading {
            letter-spacing: -2px;
          }

          .campus-grid {
            grid-template-columns: 1fr;
            gap: 17px;
            margin-top: 40px;
          }

          .campus-card {
            min-height: 290px;
          }

          .campus-footer {
            align-items: flex-start;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .campus-card {
            transition: none;
          }
        }
      `}</style>

      <section className="university-section" id="university">
        <div className="university-inner">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <p className="university-label">
              02 / UNIVERSITY
            </p>

            <h2 className="university-heading">
              WHERE THE
              <br />
              <span>JOURNEY BEGINS.</span>
            </h2>

            <p className="university-intro">
              Every great journey starts somewhere.
              University is where ideas grow, curiosity
              develops and the foundations of the future
              begin to take shape.
            </p>
          </motion.div>

          <motion.div
            className="campus-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {campusItems.map((item) => (
              <motion.article
                className="campus-card"
                key={item.number}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="campus-top">
                  <span className="campus-number">
                    / {item.number}
                  </span>

                  <div className="campus-symbol">
                    {item.symbol}
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p className="campus-subtitle">
                  {item.subtitle}
                </p>

                <p className="campus-description">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="campus-footer"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <strong>THE BEGINNING OF SOMETHING BIG.</strong>
              <p>
                Learning today. Creating tomorrow.
              </p>
            </div>

            <span className="campus-arrow">↗</span>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default University;
