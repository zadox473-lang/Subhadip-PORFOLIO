import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Sparkles,
  Orbit,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="cinematic-hero" id="home">
      <style>{`
        .cinematic-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          overflow: hidden;
          isolation: isolate;
          box-sizing: border-box;
          padding: 120px 8% 85px;
          color: #fff;
          background:
            radial-gradient(ellipse at 78% 48%, rgba(255,65,20,.17), transparent 40%),
            radial-gradient(ellipse at 8% 80%, rgba(130,25,5,.2), transparent 40%),
            #070606;
        }

        .cinematic-hero *,
        .cinematic-hero *::before,
        .cinematic-hero *::after {
          box-sizing: border-box;
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .16;
          pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
          background-size: 55px 55px;
          mask-image: linear-gradient(to bottom, black, transparent 95%);
        }

        .hero-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: #ff451c;
          filter: blur(170px);
          opacity: .15;
          right: 10%;
          top: 25%;
          z-index: -1;
          pointer-events: none;
        }

        .hero-layout {
          width: 100%;
          max-width: 1450px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr .9fr;
          align-items: center;
          gap: 45px;
          position: relative;
          z-index: 2;
        }

        .hero-copy {
          position: relative;
          z-index: 3;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          color: #ff9975;
          border: 1px solid rgba(255,100,55,.3);
          background: rgba(255,75,30,.07);
          border-radius: 50px;
          padding: 11px 17px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2.5px;
          margin-bottom: 28px;
        }

        .hero-live-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #ff572b;
          box-shadow: 0 0 14px #ff572b;
        }

        .hero-heading {
          margin: 0;
          font-size: clamp(58px, 8.5vw, 118px);
          font-weight: 950;
          line-height: .88;
          letter-spacing: -6px;
          text-transform: uppercase;
        }

        .hero-heading span {
          display: block;
          color: #ff572b;
          text-shadow: 0 0 45px rgba(255,65,25,.25);
        }

        .hero-description {
          color: #aaa;
          font-size: clamp(14px, 1.4vw, 17px);
          line-height: 1.9;
          max-width: 530px;
          margin: 30px 0;
        }

        .hero-description strong {
          color: #fff;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 11px;
          padding: 16px 23px;
          border-radius: 9px;
          font-size: 12px;
          font-weight: 850;
          text-decoration: none;
          transition: .3s ease;
        }

        .hero-cta-primary {
          color: white;
          background: linear-gradient(120deg, #f0441d, #ff793c);
          box-shadow: 0 8px 35px rgba(255,65,25,.2);
        }

        .hero-cta-primary:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(255,65,25,.4);
        }

        .hero-cta-secondary {
          color: white;
          border: 1px solid rgba(255,255,255,.2);
          background: rgba(255,255,255,.035);
        }

        .hero-cta-secondary:hover {
          border-color: #ff572b;
          color: #ff9975;
          transform: translateY(-4px);
        }

        .hero-visual {
          min-height: 510px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-orbit {
          position: absolute;
          width: min(430px, 95%);
          aspect-ratio: 1;
          border: 1px solid rgba(255,100,55,.22);
          border-radius: 50%;
          box-shadow:
            0 0 60px rgba(255,65,25,.08),
            inset 0 0 60px rgba(255,65,25,.05);
        }

        .hero-orbit::before,
        .hero-orbit::after {
          content: "";
          position: absolute;
          inset: 25px;
          border: 1px dashed rgba(255,120,75,.2);
          border-radius: 50%;
        }

        .hero-orbit::after {
          inset: 55px;
          border-style: solid;
          opacity: .45;
        }

        .hero-portrait-frame {
          position: relative;
          width: min(330px, 76%);
          aspect-ratio: .78;
          border-radius: 170px 170px 18px 18px;
          border: 1px solid rgba(255,120,75,.45);
          overflow: hidden;
          background:
            radial-gradient(ellipse at 50% 35%, rgba(255,100,45,.35), transparent 48%),
            linear-gradient(145deg, #28120e, #100b0a 65%, #291009);
          box-shadow:
            0 0 70px rgba(255,65,25,.16),
            0 30px 100px rgba(0,0,0,.6);
        }

        .hero-portrait-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 12px;
          text-align: center;
          background:
            radial-gradient(ellipse at 50% 45%, rgba(255,100,45,.15), transparent 65%);
        }

        .hero-monogram {
          font-size: clamp(130px, 20vw, 205px);
          font-weight: 950;
          line-height: 1;
          letter-spacing: -15px;
          color: rgba(255,105,55,.3);
          text-shadow: 0 0 55px rgba(255,65,25,.28);
        }

        .hero-photo-label {
          color: #e18c6d;
          font-size: 9px;
          letter-spacing: 3px;
          font-weight: 800;
        }

        .hero-visual-caption {
          position: absolute;
          bottom: 28px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;
          color: #aaa;
          font-size: 9px;
          letter-spacing: 2.5px;
        }

        .hero-floating-tag {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 13px 16px;
          border-radius: 10px;
          border: 1px solid rgba(255,110,65,.25);
          background: rgba(17,13,12,.86);
          backdrop-filter: blur(15px);
          color: #eee;
          font-size: 10px;
          font-weight: 750;
          letter-spacing: 1px;
          box-shadow: 0 10px 35px rgba(0,0,0,.4);
        }

        .hero-floating-tag svg {
          color: #ff713d;
        }

        .hero-tag-one {
          top: 19%;
          left: 0;
        }

        .hero-tag-two {
          right: 0;
          bottom: 19%;
        }

        .hero-bottom {
          position: absolute;
          bottom: 30px;
          left: 8%;
          display: flex;
          align-items: center;
          gap: 12px;
          color: #777;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 3px;
        }

        .hero-bottom-line {
          width: 35px;
          height: 1px;
          background: #ff572b;
        }

        .hero-corner {
          position: absolute;
          right: 8%;
          bottom: 30px;
          color: rgba(255,255,255,.35);
          font-size: 10px;
          letter-spacing: 2px;
        }

        @media(max-width: 850px) {
          .cinematic-hero {
            padding: 120px 6% 90px;
          }

          .hero-layout {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .hero-copy {
            text-align: center;
          }

          .hero-eyebrow {
            margin-bottom: 23px;
          }

          .hero-heading {
            font-size: clamp(58px, 12vw, 90px);
            letter-spacing: -4px;
          }

          .hero-description {
            margin: 24px auto;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-visual {
            min-height: 390px;
          }

          .hero-orbit {
            width: 340px;
          }

          .hero-portrait-frame {
            width: 245px;
          }

          .hero-monogram {
            font-size: 150px;
          }

          .hero-tag-one {
            left: 4%;
          }

          .hero-tag-two {
            right: 4%;
          }
        }

        @media(max-width: 480px) {
          .cinematic-hero {
            padding: 115px 6% 75px;
          }

          .hero-heading {
            font-size: clamp(48px, 14vw, 68px);
            letter-spacing: -3px;
          }

          .hero-eyebrow {
            font-size: 8px;
            letter-spacing: 1.7px;
            padding: 9px 12px;
          }

          .hero-description {
            font-size: 13px;
            line-height: 1.8;
          }

          .hero-cta {
            padding: 14px 17px;
            font-size: 11px;
          }

          .hero-visual {
            min-height: 330px;
          }

          .hero-orbit {
            width: 290px;
          }

          .hero-portrait-frame {
            width: 205px;
          }

          .hero-monogram {
            font-size: 125px;
          }

          .hero-floating-tag {
            padding: 10px 11px;
            font-size: 8px;
          }

          .hero-tag-one {
            top: 16%;
            left: 0;
          }

          .hero-tag-two {
            right: 0;
            bottom: 14%;
          }

          .hero-bottom {
            left: 6%;
            bottom: 22px;
            font-size: 8px;
            letter-spacing: 2px;
          }

          .hero-corner {
            display: none;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .hero-cta {
            transition: none;
          }
        }
      `}</style>

      <div className="hero-noise" />
      <div className="hero-glow" />

      <div className="hero-layout">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            <span className="hero-live-dot" />
            AI & ROBOTICS STUDENT
          </div>

          <h1 className="hero-heading">
            BUILDING
            <span>THE FUTURE.</span>
          </h1>

          <p className="hero-description">
            Hey, I'm <strong>Subhadip</strong> — a first-year
            AI & Robotics student exploring intelligent
            systems, creative technology and the future
            of innovation.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="hero-cta hero-cta-primary"
            >
              Explore My Work
              <ArrowUpRight size={17} />
            </a>

            <a
              href="#contact"
              className="hero-cta hero-cta-secondary"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <div className="hero-visual">
          <motion.div
            className="hero-orbit"
            animate={{ rotate: 360 }}
            transition={{
              duration: 55,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="hero-portrait-frame"
            initial={{ opacity: 0, scale: 0.85, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.25 }}
          >
            <div className="hero-portrait-placeholder">
              <span className="hero-monogram">S</span>
              <span className="hero-photo-label">
                PORTRAIT PLACEHOLDER
              </span>
            </div>
          </motion.div>

          <motion.div
            className="hero-floating-tag hero-tag-one"
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Sparkles size={16} />
            CREATIVE THINKER
          </motion.div>

          <motion.div
            className="hero-floating-tag hero-tag-two"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <Orbit size={16} />
            FUTURE ENGINEER
          </motion.div>

          <div className="hero-visual-caption">
            IDEAS INTO REALITY
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span className="hero-bottom-line" />
        SCROLL TO EXPLORE
        <ArrowDown size={13} />
      </div>

      <div className="hero-corner">
        PORTFOLIO / 2026
      </div>
    </section>
  );
}
