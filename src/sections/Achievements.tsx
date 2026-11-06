import { motion } from "framer-motion";
import {
  Award,
  Trophy,
  Medal,
  BadgeCheck,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Competition & Challenges",
    category: "ACHIEVEMENT",
    description:
      "A space to showcase competitions, hackathons and challenges completed.",
    year: "Add year",
  },
  {
    icon: Award,
    title: "Certifications",
    category: "CERTIFICATE",
    description:
      "Showcase certificates from courses, workshops and technical learning.",
    year: "Add year",
  },
  {
    icon: Medal,
    title: "Workshops & Events",
    category: "PARTICIPATION",
    description:
      "Highlight robotics events, AI workshops and technology meetups.",
    year: "Add year",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const },
  },
};

function Achievements() {
  return (
    <section className="achievements-section" id="achievements">
      <style>{`
        .achievements-section {
          position: relative;
          padding: 110px 7%;
          overflow: hidden;
          background: #080808;
          color: #fff;
        }

        .achievements-section::before {
          content: "";
          position: absolute;
          width: 420px;
          height: 420px;
          right: -180px;
          top: 15%;
          background: rgba(255, 75, 20, 0.09);
          filter: blur(110px);
          pointer-events: none;
        }

        .achievements-heading {
          max-width: 750px;
          margin-bottom: 55px;
          position: relative;
          z-index: 1;
        }

        .achievements-eyebrow {
          color: #ff6a35;
          letter-spacing: 4px;
          font-size: 12px;
          font-weight: 700;
        }

        .achievements-heading h2 {
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1.05;
          margin: 18px 0;
          font-weight: 900;
        }

        .achievements-heading h2 span {
          color: #ff642e;
        }

        .achievements-heading p {
          color: #999;
          line-height: 1.8;
          font-size: 15px;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          position: relative;
          z-index: 1;
        }

        .achievement-card {
          position: relative;
          min-height: 280px;
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(255,255,255,0.065),
            rgba(255,255,255,0.015)
          );
          backdrop-filter: blur(14px);
          transition: border-color 0.35s, background 0.35s;
          overflow: hidden;
        }

        .achievement-card:hover {
          border-color: rgba(255,100,46,0.65);
          background: linear-gradient(
            145deg,
            rgba(255,100,46,0.10),
            rgba(255,255,255,0.025)
          );
        }

        .achievement-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          color: #ff713d;
          background: rgba(255,100,46,0.12);
          border: 1px solid rgba(255,100,46,0.25);
          border-radius: 14px;
          margin-bottom: 28px;
        }

        .achievement-category {
          color: #ff713d;
          font-size: 10px;
          letter-spacing: 2px;
          font-weight: 800;
        }

        .achievement-card h3 {
          font-size: 21px;
          margin: 12px 0;
        }

        .achievement-card p {
          color: #999;
          font-size: 13px;
          line-height: 1.8;
        }

        .achievement-year {
          margin-top: 22px;
          color: #777;
          font-size: 12px;
        }

        .achievement-decoration {
          position: absolute;
          right: 25px;
          bottom: 22px;
          color: rgba(255,100,46,0.35);
        }

        @media (max-width: 850px) {
          .achievements-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 560px) {
          .achievements-section {
            padding: 80px 6%;
          }

          .achievements-grid {
            grid-template-columns: 1fr;
          }

          .achievement-card {
            min-height: 250px;
          }
        }
      `}</style>

      <motion.div
        className="achievements-heading"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="achievements-eyebrow">
          MILESTONES & RECOGNITION
        </span>

        <h2>
          PROOF OF <span>PROGRESS.</span>
        </h2>

        <p>
          Every achievement is a reminder to keep learning, building
          and exploring new possibilities in technology.
        </p>
      </motion.div>

      <motion.div
        className="achievements-grid"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {achievements.map((achievement) => {
          const Icon = achievement.icon;

          return (
            <motion.article
              className="achievement-card"
              key={achievement.title}
              variants={item}
              whileHover={{ y: -8 }}
            >
              <div className="achievement-icon">
                <Icon size={25} />
              </div>

              <span className="achievement-category">
                {achievement.category}
              </span>

              <h3>{achievement.title}</h3>

              <p>{achievement.description}</p>

              <div className="achievement-year">
                {achievement.year}
              </div>

              <div className="achievement-decoration">
                <BadgeCheck size={30} />
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Achievements;
