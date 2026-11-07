import { useMemo } from 'react'

type Particle = {
  id: number
  left: number
  delay: number
  duration: number
  size: number
  drift: number
  opacity: number
}

export default function FireParticles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 38 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 12,
      duration: 8 + Math.random() * 12,
      size: 2 + Math.random() * 3,
      drift: -35 + Math.random() * 70,
      opacity: 0.25 + Math.random() * 0.65,
    }))
  }, [])

  return (
    <div className="fire-particles" aria-hidden="true">
      <div className="fire-glow fire-glow-one" />
      <div className="fire-glow fire-glow-two" />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="fire-ember"
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
          background: #ff4d00;
        }

        .fire-glow-two {
          right: -240px;
          bottom: 5%;
          background: #ff1e00;
          animation-delay: 3s;
        }

        .fire-ember {
          position: absolute;
          bottom: -15px;
          border-radius: 50%;
          background: #ff6a00;
          box-shadow:
            0 0 6px #ff6a00,
            0 0 14px rgba(255, 75, 0, 0.65);
          animation: emberRise linear infinite;
          will-change: transform, opacity;
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
