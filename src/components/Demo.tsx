import { ArrowRight, Sparkles } from 'lucide-react';

export default function Demo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 blur-3xl animate-pulse" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="mb-8 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-400" />
          <span className="inline-block px-4 py-2 text-sm font-medium text-purple-400 border border-purple-500/30 rounded-full bg-purple-500/10 backdrop-blur-sm">
            Limited Early Access
          </span>
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>

        <h2 className="text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
          Join the <span className="gradient-text font-medium">Future of Learning</span>
        </h2>

        <p className="text-xl md:text-2xl text-gray-400 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
          Be among the first to experience AI-powered education. iBrian University is accepting applications for our inaugural cohort.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button className="group relative px-10 py-5 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center gap-2">
            Join Waitlist
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="px-10 py-5 text-lg font-medium text-white border border-purple-500/30 rounded-full hover:border-purple-400 bg-transparent transition-all duration-300 hover:scale-105 glow-box">
            Learn More
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { value: '50,000+', label: 'Students Waiting' },
            { value: '200+', label: 'Countries Represented' },
            { value: 'Fall 2025', label: 'First Cohort' },
          ].map((stat, i) => (
            <div key={i} className="p-8 border border-purple-500/20 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm">
              <div className="text-4xl font-light gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
