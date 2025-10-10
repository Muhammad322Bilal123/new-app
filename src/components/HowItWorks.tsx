import { Users, Globe, Cpu } from 'lucide-react';

interface HowItWorksProps {
  scrollY: number;
}

export default function HowItWorks({ scrollY }: HowItWorksProps) {
  const pillars = [
    {
      icon: Users,
      title: 'AI Teachers',
      description: 'Lifelike avatars that adapt to your pace and style. Every lesson is personalized, every question answered with precision.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Globe,
      title: 'Immersive Worlds',
      description: 'Study in realistic, simulated classrooms and labs. Experience learning in 3D environments that bring concepts to life.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cpu,
      title: 'Advanced Models',
      description: 'Powered by large-scale AI reasoning engines. Deep understanding, creative problem-solving, and human-like teaching.',
      gradient: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light mb-6">
            How <span className="gradient-text font-medium">iBrian University</span> works
          </h2>
          <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Three pillars that transform education into a personalized, immersive experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const delay = i * 100;
            const isVisible = scrollY > 1200 + delay;

            return (
              <div
                key={i}
                className="group relative p-10 border border-purple-500/20 rounded-3xl bg-gradient-to-br from-purple-500/5 to-transparent backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                  transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s ease-out ${delay}ms`,
                }}
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${pillar.gradient} opacity-10 blur-xl`} />
                </div>

                <div className="relative z-10">
                  <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${pillar.gradient} bg-opacity-10 mb-6`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-3xl font-light mb-5">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{pillar.description}</p>

                  <div className={`mt-8 h-1 w-20 bg-gradient-to-r ${pillar.gradient} rounded-full`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
