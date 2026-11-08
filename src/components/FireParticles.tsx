import { useMemo } from 'react'

type Particle = {
  id: number
  kind: 'ember' | 'spark'
  tone: 'orange' | 'amber' | 'gold'
  left: number
  delay: number
  duration: number
  size: number
  drift: number
  opacity: number
}

const EMBER_COUNT = 28
const SPARK_COUNT = 10

const tones: Particle['tone'][] = ['orange', 'orange', 'amber', 'gold']

export default function FireParticles() {
  const particles = useMemo<Particle[]>(() => {
    const embers: Particle[] = Array.from({ length: EMBER_COUNT }, (_, i) => ({
      id: i,
      kind: 'ember',
      tone: tones[Math.floor(Math.random() * tones.length)],
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 9 + Math.random() * 12,
      size: 2 + Math.random() * 3,
      drift: -35 + Math.random() * 70,
      opacity: 0.25 + Math.random() * 0.6,
    }))

    // tiny, fast, golden sparks
    const sparks: Particle[] = Array.from({ length: SPARK_COUNT }, (_, i) => ({
      id: EMBER_COUNT + i,
      kind: 'spark',
      tone: Math.random() > 0.4 ? 'gold' : 'amber',
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 5 + Math.random() * 5,
      size: 1.5 + Math.random() * 1.2,
      drift: -60 + Math.random() * 120,
      opacity: 0.6 + Math.random() * 0.4,
    }))

    return [...embers, ...sparks]
  }, [])

  return (
    <div className="fire-particles" aria-hidden="true">
      <div className="fire-glow fire-glow-one" />
      <div className="fire-glow fire-glow-two" />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className={`fire-ember fire-${particle.kind} fire-${particle.tone}`}
          style={{
            left: `${particle.left}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            ['--drift' as string]: `${particle.drift}px`,
          }}
        />
      ))}

      <style>{`
        .fire-particles {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
          isolation: isolate;
        }

        .fire-glow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(110px);
          opacity: 0.12;
          animation: glowPulse 9s ease-in-out infinite alternate;
        }

        .fire-glow-one {
          top: 12%;
          left: -230px;
          background: #ff5a14;
        }

        .fire-glow-two {
          right: -240px;
          bottom: 5%;
          background: #ff9a2e;
          animation-delay: 3s;
        }

        .fire-ember {
          position: absolute;
          bottom: -15px;
          border-radius: 50%;
          animation: emberRise linear infinite;
          will-change: transform, opacity;
        }

        .fire-orange {
          background: #ff6a00;
          box-shadow:
            0 0 6px #ff6a00,
            0 0 14px rgba(255, 75, 0, 0.65);
        }

        .fire-amber {
          background: #ff9a2e;
          box-shadow:
            0 0 6px #ff9a2e,
            0 0 14px rgba(255, 130, 20, 0.6);
        }

        .fire-gold {
          background: #ffc35a;
          box-shadow:
            0 0 6px #ffc35a,
            0 0 16px rgba(255, 175, 50, 0.65);
        }

        .fire-spark {
          animation-name: sparkRise;
          animation-timing-function: ease-out;
        }

        @keyframes emberRise {
          0% {
            transform: translate3d(0, 0, 0) scale(0.5);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          75% {
            opacity: 0.55;
          }
          100% {
            transform: translate3d(var(--drift), -110vh, 0) scale(1.2);
            opacity: 0;
          }
        }

        @keyframes sparkRise {
          0% {
            transform: translate3d(0, 0, 0) scale(0.6);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          40% {
            opacity: 0.35;
          }
          55% {
            opacity: 0.95;
          }
          100% {
            transform: translate3d(var(--drift), -85vh, 0) scale(0.2);
            opacity: 0;
          }
        }

        @keyframes glowPulse {
          from {
            transform: scale(0.9);
            opacity: 0.08;
          }
          to {
            transform: scale(1.15);
            opacity: 0.18;
          }
        }

        @media (max-width: 800px) {
          .fire-glow {
            width: 300px;
            height: 300px;
            filter: blur(80px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fire-ember,
          .fire-glow {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
