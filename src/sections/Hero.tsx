import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  MessageCircle,
} from "lucide-react";

const BASE = import.meta.env.BASE_URL;

const PORTRAIT = `${BASE}images/profile/subhadip.png`;
const ROBOT = `${BASE}images/robot/robot.png`;

const ease = [0.22, 1, 0.36, 1] as const;

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/yourusername", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/yourusername", icon: Instagram },
  { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX", icon: MessageCircle },
];

export default function Hero() {
  return (
    <section className="hero-main">
      <style>{`
        .hero-main {
          position: relative;
          width: 100%;
          min-height: 720px;
          height: calc(100svh - 80px);
          max-height: 950px;
          overflow: hidden;
          isolation: isolate;
          background: #030303;
          color: white;
        }

        .hero-main * {
          box-sizing: border-box;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(ellipse at 70% 50%, rgba(255, 0, 0, .30), transparent 48%),
            radial-gradient(ellipse at 50% 100%, rgba(180, 0, 0, .22), transparent 50%),
            #030303;
          animation: atmosphere 5s ease-in-out infinite;
        }

        .hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, #030303 0%, rgba(0,0,0,.65) 30%, transparent 65%),
            linear-gradient(0deg, rgba(0,0,0,.55), transparent 35%);
        }

        @keyframes atmosphere {
          0%, 100% { opacity: .7; }
          50% { opacity: 1; }
        }

        .hero-word {
          position: absolute;
          z-index: -1;
          top: 12%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          text-align: center;
          white-space: nowrap;
          font-family: 'Arial Black', sans-serif;
          font-size: clamp(100px, 19vw, 280px);
          font-weight: 1000;
          line-height: .9;
          letter-spacing: -9px;
          color: rgba(220, 0, 0, .48);
          text-shadow: 0 0 50px rgba(255,0,0,.28);
          animation: wordGlow 5s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes wordGlow {
          0%, 100% {
            opacity: .65;
            text-shadow: 0 0 35px rgba(255,0,0,.2);
          }
          50% {
            opacity: .9;
            text-shadow: 0 0 65px rgba(255,0,0,.45);
          }
        }

        .hero-red-light {
          position: absolute;
          z-index: -1;
          right: 0;
          top: 0;
          width: 65%;
          height: 100%;
          background: radial-gradient(ellipse, rgba(255,0,0,.16), transparent 65%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 5;
          display: flex;
          align-items: center;
          width: 100%;
          height: 100%;
          padding: 70px 5% 55px;
        }

        .hero-copy {
          position: relative;
          z-index: 6;
          width: 37%;
          max-width: 500px;
          flex-shrink: 0;
        }

        .hero-hello {
          display: block;
          margin-bottom: 4px;
          font-family: cursive;
          font-style: italic;
          font-size: clamp(30px, 3vw, 48px);
          color: white;
        }

        .hero-name {
          margin: 0;
          font-size: clamp(48px, 6vw, 86px);
          font-weight: 950;
          line-height: .85;
          letter-spacing: -3px;
          text-transform: uppercase;
          color: #fff;
          text-shadow: 0 5px 25px rgba(0,0,0,.7);
        }

        .hero-name span {
          display: block;
        }

        .hero-year {
          margin: 24px 0 4px;
          color: #eee;
          font-size: clamp(13px, 1.3vw, 17px);
        }

        .hero-role {
          margin: 0;
          color: #ff244b;
          font-size: clamp(23px, 2.4vw, 34px);
          font-weight: 900;
          text-transform: uppercase;
          text-shadow: 0 0 25px rgba(255,0,40,.4);
        }

        .hero-university {
          margin: 5px 0 0;
          font-size: 14px;
          color: #ddd;
        }

        .hero-tagline {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 15px;
          font-size: 12px;
          color: #ddd;
        }

        .hero-tagline b {
          color: #ff3030;
          font-weight: 600;
        }

        .hero-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ff2525;
          box-shadow: 0 0 10px red;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 28px;
        }

        .hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 21px;
          border-radius: 30px;
          color: white;
          font-size: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: .3s ease;
        }

        .hero-button-primary {
          background: linear-gradient(135deg, #ff351f, #d50000);
          border: 1px solid #ff5948;
          box-shadow: 0 0 25px rgba(255,0,0,.4);
        }

        .hero-button-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 40px rgba(255,0,0,.7);
        }

        .hero-button-secondary {
          background: rgba(10,10,10,.6);
          border: 1px solid rgba(255,70,70,.55);
        }

        .hero-button-secondary:hover {
          background: #b90000;
        }

        /* Portrait */

        .hero-portrait {
          position: absolute;
          z-index: 3;
          left: 39%;
          bottom: 0;
          height: 91%;
          width: 36%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          pointer-events: none;
        }

        .hero-portrait img {
          display: block;
          height: 100%;
          width: 100%;
          object-fit: contain;
          object-position: center bottom;
          filter: drop-shadow(0 0 28px rgba(255,0,0,.22));
        }

        /* Robot */

        .hero-robot {
          position: absolute;
          z-index: 2;
          right: 1%;
          bottom: 0;
          height: 87%;
          width: 34%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          pointer-events: none;
        }

        .hero-robot img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center bottom;
          filter: drop-shadow(0 0 38px rgba(255,0,0,.55));
        }

        /* Social icons */

        .hero-socials {
          position: absolute;
          z-index: 8;
          right: 2.5%;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .hero-social {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          color: white;
          border-radius: 50%;
          border: 1px solid rgba(255,60,60,.5);
          background: rgba(0,0,0,.65);
          box-shadow: 0 0 15px rgba(255,0,0,.2);
          transition: .3s;
        }

        .hero-social:hover {
          background: #c90000;
          transform: scale(1.1);
          box-shadow: 0 0 25px red;
        }

        .hero-scroll {
          position: absolute;
          z-index: 8;
          bottom: 22px;
          left: 4%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
          color: #ddd;
          text-decoration: none;
          font-size: 10px;
        }

        .hero-scroll-icon {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,.4);
          border-radius: 50%;
        }

        .hero-bottom-line {
          position: absolute;
          z-index: 10;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, #ff1717, #ff6969, #ff1717, transparent);
          box-shadow: 0 0 25px 4px rgba(255,0,0,.7);
        }

        /* Tablet */

        @media (max-width: 1000px) and (min-width: 701px) {
          .hero-copy {
            width: 40%;
          }

          .hero-portrait {
            left: 39%;
            width: 38%;
            height: 78%;
          }

          .hero-robot {
            right: 0;
            width: 35%;
            height: 73%;
          }

          .hero-name {
            font-size: clamp(46px, 6vw, 66px);
          }
        }

        /* Mobile */

        @media (max-width: 700px) {
          .hero-main {
            height: auto;
            min-height: 850px;
            max-height: none;
            display: flex;
            flex-direction: column;
          }

          .hero-word {
            top: 8%;
            font-size: 20vw;
            letter-spacing: -4px;
          }

          .hero-content {
            display: block;
            height: auto;
            min-height: 850px;
            padding: 0;
          }

          .hero-portrait {
            left: 17%;
            bottom: 0;
            height: 65%;
            width: 66%;
            z-index: 3;
          }

          .hero-robot {
            right: -5%;
            bottom: 0;
            height: 48%;
            width: 48%;
            z-index: 2;
          }

          .hero-copy {
            position: absolute;
            left: 7%;
            top: 36%;
            width: 55%;
            max-width: none;
            z-index: 6;
          }

          .hero-hello {
            font-size: 29px;
          }

          .hero-name {
            font-size: clamp(43px, 12vw, 65px);
            letter-spacing: -2px;
          }

          .hero-year {
            margin-top: 17px;
            font-size: 12px;
          }

          .hero-role {
            font-size: clamp(19px, 5.5vw, 26px);
          }

          .hero-university {
            font-size: 11px;
          }

          .hero-tagline {
            gap: 7px;
            font-size: 10px;
          }

          .hero-actions {
            gap: 8px;
            margin-top: 18px;
          }

          .hero-button {
            padding: 11px 13px;
            font-size: 10px;
          }

          .hero-socials {
            top: 47%;
            right: 3%;
            gap: 9px;
          }

          .hero-social {
            width: 32px;
            height: 32px;
          }

          .hero-scroll {
            left: 5%;
            bottom: 14px;
            font-size: 9px;
          }

          .hero-bg {
            background:
              radial-gradient(ellipse at 70% 70%, rgba(255,0,0,.28), transparent 55%),
              #030303;
          }
        }

        @media (max-width: 380px) {
          .hero-main,
          .hero-content {
            min-height: 790px;
          }

          .hero-copy {
            top: 34%;
            width: 59%;
          }

          .hero-portrait {
            height: 61%;
            left: 16%;
            width: 68%;
          }

          .hero-robot {
            height: 44%;
            width: 47%;
          }

          .hero-name {
            font-size: 42px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-bg,
          .hero-word {
            animation: none;
          }
        }
      `}</style>

      <div className="hero-bg" />
      <div className="hero-red-light" />

      <div className="hero-word">ROBOTICS</div>

      {/* Robot enters first */}
      <div className="hero-robot">
        <motion.img
          src={ROBOT}
          alt="Robotics character"
          draggable={false}
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1.7, ease }}
        />
      </div>

      {/* Portrait enters after robot */}
      <div className="hero-portrait">
        <motion.img
          src={PORTRAIT}
          alt="Subhadip Bera"
          draggable={false}
          initial={{ opacity: 0, y: 180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 2.8, ease }}
        />
      </div>

      {/* Left introduction */}
      <div className="hero-content">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(15px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.3, delay: 0.5, ease }}
          >
            <span className="hero-hello">Hello, I'm</span>
            <h1 className="hero-name">
              <span>SUBHADIP</span>
              <span>BERA</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.5, ease }}
          >
            <p className="hero-year">1st Year B.Tech Student</p>
            <h2 className="hero-role">AI &amp; ROBOTICS</h2>
            <p className="hero-university">The Neotia University</p>

            <div className="hero-tagline">
              <b>Innovate</b>
              <span className="hero-dot" />
              <span>Build</span>
              <span className="hero-dot" />
              <span>Automate</span>
            </div>

            <div className="hero-actions">
              <a href="#projects" className="hero-button hero-button-primary">
                Explore My Portfolio
                <ArrowUpRight size={15} />
              </a>

              <a href="#contact" className="hero-button hero-button-secondary">
                Contact Me
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Social icons */}
      <motion.div
        className="hero-socials"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 4.1 }}
      >
        {socials.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="hero-social"
            >
              <Icon size={17} />
            </a>
          );
        })}
      </motion.div>

      {/* Scroll indicator */}
      <a href="#about" className="hero-scroll">
        <span className="hero-scroll-icon">
          <ArrowDown size={16} />
        </span>
        Scroll Down
      </a>

      <div className="hero-bottom-line" />
    </section>
  );
      }
