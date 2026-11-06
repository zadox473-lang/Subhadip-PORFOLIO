import { useEffect, useState } from "react";

type Particle = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
};

export default function FireParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = Array.from(
      { length: 22 },
      (_, index): Particle => ({
        id: index,
        left: Math.random() * 100,
        delay: Math.random() * 12,
        duration: 10 + Math.random() * 12,
        size: 2 + Math.random() * 3,
      })
    );

    setParticles(generatedParticles);
  }, []);

  return (
    <div className="fire-particles" aria-hidden="true">
      <div className="fire-glow fire-glow-left" />
      <div className="fire-glow fire-glow-right" />

      {particles.map((particle) => (
        <span
          key={particle.id}
          className="fire-particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}

      <style>{`
        .fire-particles {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .fire-glow {
          position: absolute;
          width: 340px;
          height: 340px;
          border-radius: 50%;
          background: #ff4d00;
          filter: blur(120px);
          opacity: 0.10;
          animation: fireGlow 9s ease-in-out infinite alternate;
        }

        .fire-glow-left {
          top: 15%;
          left: -230px;
        }

        .fire-glow-right {
          right: -230px;
          bottom: 10%;
          background: #ff7a18;
          animation-delay: 3s;
        }

        .fire-particle {
          position: absolute;
          bottom: -15px;
          border-radius: 50%;
          background: #ff7626;
          box-shadow: 0 0 9px 2px rgba(255, 100, 20, 0.4);
          opacity: 0;
          animation: particleRise linear infinite;
        }

        @keyframes particleRise {
          0% {
            transform: translate3d(0, 0, 0) scale(0.5);
            opacity: 0;
          }
          15% {
            opacity: 0.65;
          }
          80% {
            opacity: 0.3;
          }
          100% {
            transform: translate3d(20px, -105vh, 0) scale(0.2);
            opacity: 0;
          }
        }

        @keyframes fireGlow {
          from {
            transform: scale(0.9);
            opacity: 0.07;
          }
          to {
            transform: scale(1.12);
            opacity: 0.14;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fire-particle,
          .fire-glow {
            animation: none;
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
