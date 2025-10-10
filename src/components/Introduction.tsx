import { useEffect, useState } from 'react';

interface IntroductionProps {
  scrollY: number;
}

export default function Introduction({ scrollY }: IntroductionProps) {
  const [ringOffset, setRingOffset] = useState(0);
  const [fade, setFade] = useState(0);

  // Meaningful heading
  const headingPre = 'iBrain ';
  const headingHighlight = 'redefines education';
  const headingPost =
    ' — turning lectures into immersive AI-powered learning experiences.';
  const fullHeading = headingPre + headingHighlight + headingPost;

  const startTyping = 100;
  const endTyping = 650; // scroll range for full typing

  useEffect(() => {
    let animationFrame: number;

    const update = () => {
      // Smooth ring movement
      const targetOffset = Math.max(0, (scrollY - 300) / 3);
      setRingOffset((prev) => prev + (targetOffset - prev) * 0.15);

      // Smooth fade in
      const progress = Math.max(0, Math.min(1, (scrollY - startTyping) / (endTyping - startTyping)));
      setFade((prev) => prev + (progress - prev) * 0.15);

      animationFrame = requestAnimationFrame(update);
    };

    animationFrame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollY]);

  // Calculate number of characters to show based on scroll
  const progress = Math.max(0, Math.min(1, (scrollY - startTyping) / (endTyping - startTyping)));
  const charsToShow = Math.floor(progress * fullHeading.length);

  let remaining = charsToShow;
  const shownPre = headingPre.slice(0, Math.min(remaining, headingPre.length));
  remaining -= shownPre.length;
  const shownHighlight =
    remaining > 0 ? headingHighlight.slice(0, Math.min(remaining, headingHighlight.length)) : '';
  remaining -= shownHighlight.length;
  const shownPost = remaining > 0 ? headingPost.slice(0, Math.min(remaining, headingPost.length)) : '';

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
      {/* Background rings */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {[...Array(12)].map((_, i) => {
            const scale = 1 + i * 0.12;
            const baseRotate = i * 30;
            const spinDuration = 25 + i * 4;
            const transitionDur = 0.45 + i * 0.03;

            return (
              <div
                key={i}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                  transform: `scale(${scale}) rotate(${baseRotate + ringOffset * 0.02}deg) translateZ(0)`,
                  transition: `transform ${transitionDur}s cubic-bezier(.22,.9,.3,1), opacity ${transitionDur}s ease`,
                  transitionDelay: `${i * 0.02}s`,
                  willChange: 'transform, opacity',
                  opacity: 1 - i * 0.06,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div
                  className="w-full h-full border border-purple-500/20 rounded-full"
                  style={{
                    animation: `spin ${spinDuration}s linear infinite`,
                    animationDelay: `${-i * 0.8}s`,
                    transformOrigin: '50% 50%',
                    willChange: 'transform',
                    boxShadow: 'inset 0 0 60px rgba(124,58,237,0.02)',
                    borderWidth: '1px',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Heading */}
      <div className="relative z-10 max-w-6xl mx-auto text-center" style={{ opacity: fade }}>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight max-w-5xl mx-auto">
          {shownPre}
          {shownHighlight && <span className="gradient-text font-medium">{shownHighlight}</span>}
          {shownPost}
          {charsToShow < fullHeading.length && (
            <span
              className="inline-block w-[1px] h-[1.15em] align-middle ml-2 bg-current animate-pulse"
              aria-hidden="true"
            />
          )}
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto mb-16">
          Personalized, immersive learning powered by AI.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🌍', title: 'Global Access', description: 'Learn from anywhere' },
            { icon: '🧠', title: 'AI-Powered', description: 'Adaptive teachers for you' },
            { icon: '∞', title: 'Unlimited Scale', description: 'Personal attention for all' },
          ].map((feature, i) => (
            <div
              key={i}
              className="group p-8 border border-purple-500/20 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-light mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
