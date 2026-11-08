/* Cinematic red lighting for the Hero stage:
   drifting smoke, glowing energy arcs around the robot, and a red floor haze.
   It only uses cheap CSS/SVG (no blur filters), so it stays smooth on phones.
   Place it INSIDE the Hero's `.rb-stage` (see Hero.tsx). */

type Props = {
  /** seconds to wait before the lighting fades in */
  delay?: number
}

const smokeSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900">
  <filter id="n" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.0045 0.008" numOctaves="5" seed="11"/>
    <feColorMatrix values="0 0 0 0 1  0 0 0 0 0.07  0 0 0 0 0.03  5 0 0 0 -2.75"/>
  </filter>
  <rect width="100%" height="100%" filter="url(#n)"/>
</svg>`

const SMOKE_URL = `url("data:image/svg+xml;utf8,${encodeURIComponent(smokeSvg)}")`

/* Arc paths live in a 1000 x 600 box that stretches over the stage. */
const arcs = [
  // big sweeping curve on the far right
  { d: 'M 900 585 C 1010 430 1005 190 880 38', cls: 'hl-arc-a' },
  // wide loop passing behind the robot
  { d: 'M 520 560 C 500 280 700 70 955 150', cls: 'hl-arc-b' },
  // ring around the robot's head
  {
    d: 'M 660 175 C 690 90 820 70 890 130 C 950 185 900 255 800 262 C 710 268 650 230 660 175',
    cls: 'hl-arc-c',
  },
  // thin swirl on the robot's left shoulder
  { d: 'M 455 400 C 480 250 590 180 740 205', cls: 'hl-arc-d' },
]

export default function HeroLighting({ delay = 4 }: Props) {
  return (
    <>
      <div
        className="hl-smoke"
        aria-hidden="true"
        style={{ ['--hl-delay' as string]: `${delay}s` }}
      >
        <div className="hl-smoke-a" style={{ backgroundImage: SMOKE_URL }} />
        <div className="hl-smoke-b" style={{ backgroundImage: SMOKE_URL }} />
      </div>

      <svg
        className="hl-arcs"
        aria-hidden="true"
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        style={{ ['--hl-delay' as string]: `${delay + 0.6}s` }}
      >
        {arcs.map((arc) => (
          <g key={arc.cls} className={arc.cls}>
            <path className="hl-glow-wide" d={arc.d} />
            <path className="hl-glow-mid" d={arc.d} />
            <path className="hl-core" d={arc.d} />
            <path className="hl-spark" d={arc.d} pathLength={1000} />
          </g>
        ))}
      </svg>

      <div
        className="hl-fog"
        aria-hidden="true"
        style={{ ['--hl-delay' as string]: `${delay + 0.3}s` }}
      />

      <style>{`
        .hl-smoke,
        .hl-arcs,
        .hl-fog {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          animation: hl-in 3.2s ease-out forwards;
          animation-delay: var(--hl-delay, 4s);
        }

        @keyframes hl-in {
          to { opacity: 1; }
        }

        /* ---------- Smoke (behind everything in the stage) ---------- */

        .hl-smoke {
          z-index: -1;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent 12%, #000 48%);
          mask-image: linear-gradient(to right, transparent 12%, #000 48%);
        }

        .hl-smoke-a,
        .hl-smoke-b {
          position: absolute;
          width: 140%;
          height: 140%;
          background-size: cover;
          background-repeat: no-repeat;
          will-change: transform;
        }

        .hl-smoke-a {
          left: -20%;
          top: -20%;
          opacity: .5;
          animation: hl-drift-a 38s ease-in-out infinite alternate;
        }

        .hl-smoke-b {
          left: -10%;
          top: -10%;
          opacity: .32;
          transform: scaleX(-1);
          animation: hl-drift-b 52s ease-in-out infinite alternate;
        }

        @keyframes hl-drift-a {
          from { transform: translate3d(-3%, 2%, 0) scale(1); }
          to { transform: translate3d(4%, -3%, 0) scale(1.08); }
        }

        @keyframes hl-drift-b {
          from { transform: scaleX(-1) translate3d(3%, -2%, 0) scale(1.05); }
          to { transform: scaleX(-1) translate3d(-4%, 3%, 0) scale(1); }
        }

        /* ---------- Energy arcs (above robot, below portrait) ---------- */

        .hl-arcs {
          z-index: 2;
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .hl-arcs path {
          fill: none;
          stroke-linecap: round;
          vector-effect: non-scaling-stroke;
        }

        .hl-glow-wide { stroke: rgba(255, 30, 15, .10); stroke-width: 14; }
        .hl-glow-mid  { stroke: rgba(255, 45, 25, .3); stroke-width: 5; }
        .hl-core      { stroke: rgba(255, 120, 95, .85); stroke-width: 1.5; }

        /* a bright light that travels along each arc */
        .hl-spark {
          stroke: #ffd9c8;
          stroke-width: 2.4;
          stroke-dasharray: 90 910;
          opacity: .95;
          animation: hl-travel 9s linear infinite;
        }

        .hl-arc-b .hl-spark { animation-duration: 12s; animation-delay: -3s; }
        .hl-arc-c .hl-spark { animation-duration: 7s; animation-delay: -2s; }
        .hl-arc-d .hl-spark { animation-duration: 10s; animation-delay: -6s; stroke-dasharray: 60 940; }

        @keyframes hl-travel {
          from { stroke-dashoffset: 1000; }
          to { stroke-dashoffset: 0; }
        }

        .hl-arc-a,
        .hl-arc-b,
        .hl-arc-c,
        .hl-arc-d {
          animation: hl-breathe 6s ease-in-out infinite alternate;
        }

        .hl-arc-b { animation-delay: -2s; }
        .hl-arc-c { animation-delay: -4s; }

        @keyframes hl-breathe {
          from { opacity: .55; }
          to { opacity: 1; }
        }

        /* ---------- Red floor haze (above robot, below portrait) ---------- */

        .hl-fog {
          z-index: 2;
          background:
            radial-gradient(ellipse at 62% 112%, rgba(255, 35, 15, .3), transparent 55%),
            radial-gradient(ellipse at 88% 100%, rgba(255, 60, 25, .22), transparent 45%),
            linear-gradient(to top, rgba(255, 25, 10, .12), transparent 30%);
          animation:
            hl-in 3.2s ease-out forwards,
            hl-fog-pulse 5.2s ease-in-out infinite alternate;
          animation-delay: var(--hl-delay, 4s), 0s;
        }

        @keyframes hl-fog-pulse {
          from { filter: brightness(.85); }
          to { filter: brightness(1.2); }
        }

        @media (max-width: 800px) {
          .hl-smoke-b { display: none; }
          .hl-glow-wide { stroke-width: 9; }
        }

        @media (prefers-reduced-motion: reduce) {
          .hl-smoke-a,
          .hl-smoke-b,
          .hl-spark,
          .hl-arc-a,
          .hl-arc-b,
          .hl-arc-c,
          .hl-arc-d,
          .hl-fog {
            animation: none !important;
          }
          .hl-smoke, .hl-arcs, .hl-fog { opacity: 1; }
        }
      `}</style>
    </>
  )
}
