import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          padding: 130px 8% 90px;
          overflow: hidden;
          color: white;
          background:
            radial-gradient(ellipse at 75% 48%, rgba(150,45,12,0.22), transparent 42%),
            radial-gradient(ellipse at 15% 85%, rgba(255,70,20,0.09), transparent 35%),
            #080808;
        }

        .hero-section::before {
          content: "";
          position: absolute;
          width: 500px;
          height: 500px;
          right: -100px;
          top: 10%;
          border-radius: 50%;
          background: rgba(255,75,20,0.12);
          filter: blur(120px);
          pointer-events: none;
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          opacity: 0.12;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 65px 65px;
          mask-image: linear-gradient(to bottom, black, transparent 90%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 900px;
        }

        .hero-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 15px;
          border: 1px solid rgba(255,110,55,0.3);
          border-radius: 30px;
          background: rgba(255,100,40,0.08);
          color: #ff9a70;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          margin-bottom: 30px;
        }

        .hero-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff713d;
          box-shadow: 0 0 12px #ff713d;
        }

        .hero-content h1 {
          font-size: clamp(55px, 10vw, 112px);
          line-height: 0.95;
          letter-spacing: -5px;
          font-weight: 950;
          margin: 0;
        }

        .hero-content h1 span {
          display: block;
          color: #ff642e;
          text-shadow: 0 0 45px rgba(255,80,30,0.25);
        }

        .hero-subtitle {
          color: #aaa;
          font-size: clamp(16px, 2vw, 20px);
          line-height: 1.7;
          margin: 28px 0 35px;
          max-width: 600px;
        }

        .hero-subtitle strong {
          color: white;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 22px;
          border-radius: 10px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          transition: 0.3s ease;
        }

        .hero-button-primary {
          color: white;
          background: linear-gradient(120deg, #ff4b20, #ff793c);
          box-shadow: 0 8px 30px rgba(255,70,20,0.2);
        }

        .hero-button-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 35px rgba(255,70,20,0.35);
        }

        .hero-button-secondary {
          color: white;
          border: 1px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
        }

        .hero-button-secondary:hover {
          border-color: #ff713d;
          color: #ff9a70;
          transform: translateY(-4px);
        }

        .hero-bottom-note {
          position: absolute;
          z-index: 2;
          bottom: 35px;
          left: 8%;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #777;
          font-size: 10px;
          letter-spacing: 3px;
        }

        .hero-bottom-line {
          width: 35px;
          height: 1px;
          background: #ff713d;
        }

        .hero-sparkle {
          position: absolute;
          right: 13%;
          top: 28%;
          color: rgba(255,120,65,0.65);
        }

        @media (max-width: 600px) {
          .hero-section {
            padding: 125px 6% 100px;
            min-height: 92vh;
          }

          .hero-content h1 {
            letter-spacing: -3px;
          }

          .hero-bottom-note {
            left: 6%;
            bottom: 25px;
          }

          .hero-sparkle {
            right: 8%;
            top: 18%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-button {
            transition: none;
          }
        }
      `}</style>

      <div className="hero-grid" />

      <motion.div
        className="hero-sparkle"
        animate={{ opacity: [0.35, 1, 0.35], rotate: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles size={45} />
      </motion.div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div className="hero-status">
          <span className="hero-status-dot" />
          AI & ROBOTICS STUDENT
        </div>

        <h1>
          BUILDING
          <span>THE FUTURE.</span>
        </h1>

        <p className="hero-subtitle">
          Hey, I'm <strong>Subhadip</strong> — a first-year AI &
          Robotics student exploring intelligent systems,
          creative technology and the future of innovation.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button hero-button-primary">
            Explore My Work <ArrowUpRight size={17} />
          </a>

          <a href="#contact" className="hero-button hero-button-secondary">
            Get In Touch
          </a>
        </div>
      </motion.div>

      <div className="hero-bottom-note">
        <span className="hero-bottom-line" />
        SCROLL TO EXPLORE
        <ArrowDown size={13} />
      </div>
    </section>
  );
}

export default Hero;
