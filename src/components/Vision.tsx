export default function Vision() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-3xl" />
        </div>

        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-purple-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-light mb-8 leading-tight">
          Imagine a world where <br />
          <span className="gradient-text font-medium">knowledge has no boundaries</span>.
        </h2>

        <p className="text-2xl md:text-3xl text-gray-300 font-light mb-8 max-w-4xl mx-auto leading-relaxed">
          Where every student learns from an AI who never stops improving.
        </p>

        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
          A future where education is not constrained by geography, economics, or time. Where learning is as unique as you are, guided by intelligence that understands not just what you need to know, but how you learn best.
        </p>

        <div className="mt-20 relative">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl" />
            <div className="relative p-12 border border-purple-500/30 rounded-3xl bg-black/50 backdrop-blur-sm">
              <p className="text-3xl md:text-4xl font-light gradient-text mb-4">
                This is iBrian University.
              </p>
              <p className="text-xl text-gray-400">
                The future of learning starts now.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </section>
  );
}
