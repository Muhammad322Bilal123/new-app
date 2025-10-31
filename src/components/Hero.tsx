import { useEffect, useState } from 'react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);
  const [particles, setParticles] = useState<Array<{id: number, delay: number, duration: number, color: string, top: number}>>([]);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Generate particles
    const generateParticles = () => {
      const newParticles = [];
      const colors = [
        'rgba(59, 130, 246, 1)', // electric blue
        'rgba(147, 51, 234, 1)', // violet
        'rgba(6, 182, 212, 1)',  // neon cyan
        'rgba(236, 72, 153, 0.8)', // pink highlight
        'rgba(99, 102, 241, 1)', // indigo
      ];

      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          delay: Math.random() * 8,
          duration: 12 + Math.random() * 8, // 12-20 seconds
          color: colors[Math.floor(Math.random() * colors.length)],
          top: Math.random() * 100, // Fixed top position
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = Math.max(0.95, 1 - scrollY / 2000);
  const parallax = offsetY * 0.1;

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      style={{
      opacity,
      transform: `scale(${scale}) translateY(${parallax}px)`,
      transition: 'opacity 0.2s, transform 0.2s',
      }}
    >
      {/* Particle Animation Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {particles.length > 0 && particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute particle"
            style={{
              left: '-10px',
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              backgroundColor: particle.color,
              boxShadow: `0 0 20px ${particle.color}, 0 0 40px ${particle.color}40`,
            }}
          />
        ))}
      </div>

      {/* Ambient gradient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse z-5"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020614]/60 to-[#000008]/70 z-10"></div>

      {/* Centered Content Group */}
      <div className="z-20 flex flex-col items-center space-y-8">
        {/* Hero Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight" style={{ fontFamily: 'Orbitron, monospace' }}>
        <span className="bg-gradient-to-r from-[#c084fc] via-[#fb7185] to-[#60a5fa] bg-clip-text text-transparent text-shadow-lg">
          iBrain
        </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-white font-light max-w-2xl text-center text-shadow-md">
        Where artificial intelligence becomes your teacher.
        </p>

        {/* Call-to-action button */}
        <button className="px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 animate-cta">
          Start Learning
        </button>
      </div>



      <style>{`
      /* Particle animation */
      .particle {
        width: 4px;
        height: 4px;
        border-radius: 50%;
        filter: blur(0.8px);
        animation: particleFlow linear infinite;
        opacity: 0;
      }

      @keyframes particleFlow {
        0% {
          transform: translateX(-10px) scale(0);
          opacity: 0;
        }
        10% {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        90% {
          opacity: 1;
          transform: translateX(calc(100vw + 20px)) scale(1.2);
        }
        100% {
          transform: translateX(calc(100vw + 30px)) scale(0);
          opacity: 0;
        }
      }

      /* Text shadows for readability */
      .text-shadow-lg {
        text-shadow: 0 10px 30px rgba(2,6,23,0.65);
      }
      .text-shadow-md {
        text-shadow: 0 8px 24px rgba(2,6,23,0.6);
      }

      /* CTA subtle pulse animation */
      @keyframes cta-pulse {
        0% { transform: translateY(0) scale(1); box-shadow: 0 12px 40px rgba(96,165,250,0.12); }
        50% { transform: translateY(-2px) scale(1.02); box-shadow: 0 20px 60px rgba(96,165,250,0.18); }
        100% { transform: translateY(0) scale(1); box-shadow: 0 12px 40px rgba(96,165,250,0.12); }
      }
      .animate-cta {
        animation: cta-pulse 3.6s ease-in-out infinite;
      }

      /* Simple fade-in/slide-up for text */
      @keyframes fadeIn { from { opacity: 0; transform: translateY(20px);} to {opacity:1; transform:translateY(0);} }
      @keyframes slideUp { from { opacity: 0; transform: translateY(40px);} to {opacity:1; transform:translateY(0);} }

      h1 { animation: fadeIn 1.5s ease-out forwards; }
      p { animation: slideUp 1.8s ease-out forwards; }

      /* Mobile adjustments */
      @media (max-width: 640px) {
        h1 { font-size: 4rem; line-height: 1; }
        p { font-size: 1rem; }
      }

      /* Respect reduced motion preferences */
      @media (prefers-reduced-motion: reduce) {
        .particle { animation: none; }
        h1, p, button.animate-cta { animation: none; transform: none; }
      }
      `}</style>
    </section>
  );
}
