import { motion } from "framer-motion";
import { ArrowRight, ChevronsDown, MessageCircle } from "lucide-react";
import type { SVGProps, SyntheticEvent } from "react";

/* ---------- Brand icons (lucide-react no longer ships these) ---------- */

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const iconBase = (size = 24) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

const Github = ({ size, ...p }: IconProps) => (
  <svg {...iconBase(size)} {...p}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size, ...p }: IconProps) => (
  <svg {...iconBase(size)} {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size, ...p }: IconProps) => (
  <svg {...iconBase(size)} {...p}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

/* ---------- Content (placeholders: update later) ---------- */

const socials = [
  { label: "GitHub", href: "https://github.com/yourusername", icon: Github },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yourusername",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourusername",
    icon: Instagram,
  },
  { label: "WhatsApp", href: "https://wa.me/91XXXXXXXXXX", icon: MessageCircle },
];

/* ---------- Image URLs (works on GitHub Pages base path) ---------- */

const BASE = import.meta.env.BASE_URL;
const PORTRAIT_SRC = `${BASE}images/profile/subhadip.png`;
const ROBOT_SRC = `${BASE}images/robot/robot.png`;

/* ---------- Animation timing (seconds) ----------
   The app shows a loader for ~1.8s, so the sequence starts after it. */

const START = 1.9;
const T_NAME = START; // 1. name
const T_ROBOT = START + 1.1; // 2. robot from top
const T_PORTRAIT = START + 2.1; // 3. portrait from bottom
const T_REST = START + 3.3; // 4. text, buttons, socials

const ease = [0.22, 1, 0.36, 1] as const;

const hideBroken = (e: SyntheticEvent<HTMLImageElement>) => {
  e.currentTarget.style.visibility = "hidden";
};

export default function Hero() {
  return (
    <section className="rb-hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');

        .rb-hero {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          overflow: hidden;
          isolation: isolate;
          color: #fff;
          background: #040101;
        }

        .rb-hero *,
        .rb-hero *::before,
        .rb-hero *::after {
          box-sizing: border-box;
        }

        /* ---------- Atmosphere ---------- */

        .rb-atmosphere {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            radial-gradient(ellipse at 72% 50%, rgba(255, 20, 20, 0.34), transparent 52%),
            radial-gradient(ellipse at 10% 95%, rgba(170, 10, 10, 0.3), transparent 45%),
            radial-gradient(ellipse at 50% 0%, rgba(120, 5, 5, 0.28), transparent 50%);
          animation: rb-pulse 4.8s ease-in-out infinite;
        }

        .rb-vignette {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(to right, rgba(0,0,0,.85) 0%, rgba(0,0,0,.35) 32%, transparent 55%),
            linear-gradient(to top, rgba(0,0,0,.9) 0%, transparent 28%),
            radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.65) 100%);
        }

        @keyframes rb-pulse {
          0%, 100% { opacity: .55; }
          50% { opacity: 1; }
        }

        @keyframes rb-breathe {
          0%, 100% {
            opacity: .5;
            text-shadow: 0 0 40px rgba(255, 30, 30, .35), 0 0 90px rgba(255, 0, 0, .18);
          }
          50% {
            opacity: .68;
            text-shadow: 0 0 60px rgba(255, 30, 30, .55), 0 0 130px rgba(255, 0, 0, .3);
          }
        }

        /* ---------- Stage: giant word + portrait + robot ---------- */

        .rb-stage {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
        }

        .rb-giant {
          position: absolute;
          top: 13%;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          text-align: center;
          white-space: nowrap;
          font-family: 'Space Grotesk', 'DM Sans', sans-serif;
          font-weight: 900;
          font-size: clamp(90px, 21vw, 340px);
          line-height: 1;
          letter-spacing: -.02em;
          text-transform: uppercase;
          color: #c40a0a;
          user-select: none;
          animation: rb-breathe 4.8s ease-in-out infinite;
        }

        .rb-portrait {
          position: absolute;
          bottom: 0;
          left: 55%;
          transform: translateX(-50%);
          height: 92%;
          z-index: 3;
        }

        .rb-robot {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 86%;
          z-index: 2;
        }

        .rb-portrait img,
        .rb-robot img {
          display: block;
          height: 100%;
          width: auto;
          max-width: none;
          object-fit: contain;
          object-position: bottom;
          user-select: none;
          -webkit-user-drag: none;
        }

        .rb-portrait img {
          filter: drop-shadow(0 0 40px rgba(255, 30, 30, .28));
          -webkit-mask-image: linear-gradient(to bottom, #000 82%, transparent 100%);
          mask-image: linear-gradient(to bottom, #000 82%, transparent 100%);
        }

        .rb-robot img {
          filter: drop-shadow(0 0 50px rgba(255, 20, 20, .4));
        }

        /* ---------- Copy ---------- */

        .rb-content {
          position: relative;
          z-index: 5;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          padding: 110px 7% 90px;
        }

        .rb-copy {
          width: min(520px, 42%);
        }

        .rb-hello {
          display: block;
          font-family: 'Mrs Saint Delafield', 'Brush Script MT', cursive;
          font-size: clamp(38px, 4vw, 62px);
          line-height: 1;
          color: #f1f1f1;
          margin-bottom: 6px;
        }

        .rb-name {
          margin: 0;
          font-family: 'Space Grotesk', 'DM Sans', sans-serif;
          font-weight: 900;
          font-size: clamp(54px, 7vw, 108px);
          line-height: .9;
          letter-spacing: -.02em;
          text-transform: uppercase;
          background: linear-gradient(180deg, #ffffff 15%, #b5b5b5 55%, #7d7d7d 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
          filter: drop-shadow(0 6px 18px rgba(0,0,0,.6));
        }

        .rb-name span {
          display: block;
        }

        .rb-info {
          margin-top: 26px;
        }

        .rb-year {
          margin: 0;
          font-size: clamp(15px, 1.5vw, 21px);
          font-weight: 500;
          color: #ececec;
        }

        .rb-role {
          margin: 2px 0 6px;
          font-family: 'Space Grotesk', 'DM Sans', sans-serif;
          font-size: clamp(24px, 2.8vw, 40px);
          font-weight: 800;
          letter-spacing: .01em;
          text-transform: uppercase;
          color: #ff1f5a;
          text-shadow: 0 0 28px rgba(255, 31, 90, .35);
        }

        .rb-uni {
          margin: 0;
          font-size: clamp(13px, 1.2vw, 16px);
          color: #d8d8d8;
        }

        .rb-tagline {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 18px;
          font-size: 13px;
          color: #cfcfcf;
        }

        .rb-tagline b {
          font-weight: 500;
          color: #ff3b3b;
        }

        .rb-tagline i {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #ff3b3b;
          box-shadow: 0 0 8px #ff3b3b;
        }

        .rb-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .rb-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
          color: #fff;
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
        }

        .rb-btn-primary {
          background: linear-gradient(180deg, #ff3a1c, #c4160a);
          border: 1px solid rgba(255, 120, 90, .55);
          box-shadow: 0 0 30px rgba(255, 40, 20, .4), inset 0 1px 0 rgba(255,255,255,.25);
        }

        .rb-btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 0 45px rgba(255, 40, 20, .65), inset 0 1px 0 rgba(255,255,255,.25);
        }

        .rb-btn-ghost {
          background: rgba(255, 255, 255, .04);
          border: 1px solid rgba(255, 70, 50, .5);
          backdrop-filter: blur(8px);
        }

        .rb-btn-ghost:hover {
          transform: translateY(-3px);
          border-color: #ff4a2e;
          box-shadow: 0 0 28px rgba(255, 40, 20, .3);
        }

        /* ---------- Socials ---------- */

        .rb-socials {
          position: absolute;
          right: 2.2%;
          top: 50%;
          transform: translateY(-50%);
          z-index: 6;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .rb-social {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          color: #fff;
          background: rgba(10, 4, 4, .78);
          border: 1px solid rgba(255, 70, 50, .45);
          box-shadow: 0 0 16px rgba(255, 30, 20, .22);
          backdrop-filter: blur(8px);
          transition: transform .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .rb-social:hover {
          transform: scale(1.12);
          background: #d8190c;
          box-shadow: 0 0 26px rgba(255, 40, 20, .6);
        }

        /* ---------- Bottom ---------- */

        .rb-scroll {
          position: absolute;
          left: 3%;
          bottom: 22px;
          z-index: 6;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #cfcfcf;
          font-size: 10px;
          text-decoration: none;
        }

        .rb-scroll-circle {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, .3);
        }

        .rb-line {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          z-index: 6;
          background: linear-gradient(90deg, transparent, #ff2a1a 25%, #ff5a3a 50%, #ff2a1a 75%, transparent);
          box-shadow: 0 0 24px 4px rgba(255, 40, 20, .7);
        }

        /* ---------- Tablet ---------- */

        @media (max-width: 1100px) {
          .rb-copy { width: min(480px, 48%); }
          .rb-portrait { left: 60%; height: 82%; }
          .rb-robot { height: 70%; right: -4%; }
        }

        /* ---------- Mobile ---------- */

        @media (max-width: 800px) {
          .rb-hero {
            display: flex;
            flex-direction: column;
          }

          .rb-stage {
            position: relative;
            inset: auto;
            height: 56svh;
            min-height: 380px;
            flex-shrink: 0;
            margin-top: 70px;
          }

          .rb-giant {
            top: 8%;
            font-size: clamp(60px, 19vw, 130px);
          }

          .rb-portrait {
            left: 38%;
            height: 96%;
          }

          .rb-robot {
            right: -8%;
            height: 78%;
          }

          .rb-content {
            min-height: 0;
            padding: 0 7% 90px;
            margin-top: -30px;
          }

          .rb-copy {
            width: 100%;
            text-align: left;
          }

          .rb-name {
            font-size: clamp(48px, 15vw, 84px);
          }

          .rb-socials {
            top: 40%;
            right: 10px;
            gap: 10px;
          }

          .rb-social {
            width: 36px;
            height: 36px;
          }

          .rb-scroll {
            display: none;
          }

          .rb-vignette {
            background:
              linear-gradient(to top, rgba(0,0,0,.95) 0%, transparent 45%),
              radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,.6) 100%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .rb-atmosphere,
          .rb-giant {
            animation: none;
          }
          .rb-btn,
          .rb-social {
            transition: none;
          }
        }
      `}</style>

      <div className="rb-atmosphere" />
      <div className="rb-vignette" />

      {/* Giant word, robot and portrait */}
      <div className="rb-stage" aria-hidden="true">
        <div className="rb-giant">ROBOTICS</div>

        <div className="rb-robot">
          <motion.img
            src={ROBOT_SRC}
            alt=""
            onError={hideBroken}
            draggable={false}
            initial={{ opacity: 0, y: "-45vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: T_ROBOT, ease }}
          />
        </div>

        <div className="rb-portrait">
          <motion.img
            src={PORTRAIT_SRC}
            alt=""
            onError={hideBroken}
            draggable={false}
            initial={{ opacity: 0, y: "35vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: T_PORTRAIT, ease }}
          />
        </div>
      </div>

      {/* Left text */}
      <div className="rb-content">
        <div className="rb-copy">
          <motion.div
            initial={{ opacity: 0, filter: "blur(18px)", scale: 0.93 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
            transition={{ duration: 1.1, delay: T_NAME, ease }}
            style={{ transformOrigin: "left center" }}
          >
            <span className="rb-hello">Hello, I'm</span>
            <h1 className="rb-name">
              <span>Subhadip</span>
              <span>Bera</span>
            </h1>
          </motion.div>

          <motion.div
            className="rb-info"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: T_REST, ease }}
          >
            <p className="rb-year">1st Year B.Tech Student</p>
            <p className="rb-role">AI &amp; Robotics</p>
            <p className="rb-uni">The Neotia University</p>

            <div className="rb-tagline">
              <b>Innovate</b>
              <i />
              <span>Build</span>
              <i />
              <span>Automate</span>
            </div>
          </motion.div>

          <motion.div
            className="rb-buttons"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: T_REST + 0.2, ease }}
          >
            <a href="#projects" className="rb-btn rb-btn-primary">
              Explore My Work
              <ArrowRight size={16} />
            </a>
            <a href="#contact" className="rb-btn rb-btn-ghost">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Social icons */}
      <div className="rb-socials">
        {socials.map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              aria-label={item.label}
              className="rb-social"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: T_REST + 0.3 + i * 0.12, ease }}
            >
              <Icon size={17} />
            </motion.a>
          );
        })}
      </div>

      {/* Scroll indicator and glowing line */}
      <motion.a
        href="#about"
        className="rb-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: T_REST + 0.5 }}
      >
        <span className="rb-scroll-circle">
          <ChevronsDown size={16} />
        </span>
        Scroll Down
      </motion.a>

      <div className="rb-line" />
    </section>
  );
}
