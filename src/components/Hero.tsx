import { useEffect, useState } from 'react';

interface HeroProps {
  scrollY: number;
}

export default function Hero({ scrollY }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = Math.max(0.95, 1 - scrollY / 2000);
  const parallax = offsetY * 0.1;

  return (
    <section
      className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden pb-16 md:pb-0"
      style={{
      opacity,
      transform: `scale(${scale}) translateY(${parallax}px)`,
      transition: 'opacity 0.2s, transform 0.2s',
      }}
    >
      {/* Background video */}
      <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      style={{ filter: 'blur(3px) brightness(0.4)', transform: 'scale(1.03)', opacity: 0.5 }}
      >
      <source src="/public/xyz.mp4" type="video/mp4" />
      Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020614]/70 to-[#000008]/80 z-10"></div>

      {/* Hero Title */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 z-20">
      <span className="bg-gradient-to-r from-[#c084fc] via-[#fb7185] to-[#60a5fa] bg-clip-text text-transparent text-shadow-lg">
        iBrain
      </span>
      </h1>

      {/* Tagline */}
      <p className="text-lg md:text-xl lg:text-2xl text-white font-light max-w-2xl mb-12 z-20 text-shadow-md">
      Where artificial intelligence becomes your teacher.
      </p>

      {/* Call-to-action button */}
      <button className="px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 animate-cta z-20">
      Experience Learning Reinvented
      </button>

      {/* Apple-style accent line */}
      <div className="absolute bottom-12 w-40 h-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 opacity-30 animate-pulse z-20" />

      <style>{`
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
        h1, p, button.animate-cta { animation: none; transform: none; }
      }
      `}</style>
    </section>
  );
}
