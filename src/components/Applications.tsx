import { Clock, Users, Target, Sparkles } from 'lucide-react';

export default function Applications() {
  const benefits = [
    {
      icon: Clock,
      title: 'Always Available',
      description: 'No schedules, no waiting',
      detail: 'Learn at your own pace, on your own time. AI teachers are available 24/7, ready to guide you through any subject.',
    },
    {
      icon: Users,
      title: 'Every Learner Gets a Mentor',
      description: 'Personal attention at scale',
      detail: 'No more crowded classrooms. Every student receives one-on-one instruction tailored to their learning style.',
    },
    {
      icon: Target,
      title: 'Deeply Personalized',
      description: 'Adapts to your unique needs',
      detail: 'The AI understands where you struggle and where you excel, adjusting difficulty and pacing in real-time.',
    },
    {
      icon: Sparkles,
      title: 'Every Question Gets an Answer',
      description: 'Never feel stuck again',
      detail: 'Ask unlimited questions. Get instant, thoughtful explanations. Your AI teacher never runs out of patience.',
    },
  ];

  return (
    <section className="relative min-h-screen px-6 py-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-6xl font-light mb-8">
            Why <span className="gradient-text font-medium">it matters</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 font-light max-w-4xl mx-auto leading-relaxed mb-6">
            Education today is limited by time, access, and cost.
          </p>
          <p className="text-2xl md:text-3xl gradient-text font-light">
            iBrian University removes all three.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;

            return (
              <div
                key={i}
                className="group relative p-8 border border-purple-500/20 rounded-3xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-500"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-light mb-2">{benefit.title}</h3>
                    <p className="text-purple-400 text-sm mb-4 font-medium">{benefit.description}</p>
                    <p className="text-gray-400 leading-relaxed">{benefit.detail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
