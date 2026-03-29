import { Code2, Brain, Cpu, Globe, Zap, Award } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: '5+', icon: Code2 },
  { label: 'Projects Delivered', value: '50+', icon: Zap },
  { label: 'Lines of Code', value: '100K+', icon: Cpu },
  { label: 'Happy Clients', value: '30+', icon: Globe },
]

const timeline = [
  {
    year: '2026',
    title: 'AI Systems Architect',
    company: 'Aura Intelligence',
    description: 'Building sentient AI agents with multi-modal perception and self-healing architectures.',
  },
  {
    year: '2024',
    title: 'Senior Full-Stack Developer',
    company: 'Tech Lead',
    description: 'Led development of enterprise-scale React applications with TypeScript and Node.js.',
  },
  {
    year: '2022',
    title: 'Full-Stack Developer',
    company: 'Startup Environment',
    description: 'Built MVPs, scaled systems, and shipped products from concept to production.',
  },
  {
    year: '2020',
    title: 'Started Coding Journey',
    company: 'Self-Taught',
    description: 'Began with Python, fell in love with JavaScript, never looked back.',
  },
]

const achievements = [
  { icon: Award, text: 'Open Source Contributor' },
  { icon: Brain, text: 'AI/ML Enthusiast' },
  { icon: Code2, text: 'Clean Code Advocate' },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-pixel-bg via-pixel-card/20 to-pixel-bg pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Code2 className="w-6 h-6 text-pixel-accent" />
            <span className="font-code text-pixel-cyan text-lg">WHO AM I</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl text-shadow-pixel mb-4">
            ABOUT ME
          </h2>
          <div className="w-24 h-1 bg-pixel-accent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="pixel-card p-8">
              <h3 className="font-pixel text-lg text-pixel-accent mb-4">
                AURA INTELLIGENCE
              </h3>
              <p className="font-code text-lg text-white/80 leading-relaxed mb-4">
                I'm a <span className="text-pixel-cyan">Full-Stack Developer</span> and{' '}
                <span className="text-pixel-magenta">AI Systems Architect</span> obsessed with building 
                pixel-perfect, high-performance web experiences.
              </p>
              <p className="font-code text-lg text-white/80 leading-relaxed mb-4">
                My expertise spans React ecosystems, TypeScript, Node.js, and modern AI architectures. 
                I believe code should be both beautiful and functional.
              </p>
              <p className="font-code text-lg text-white/80 leading-relaxed">
                When I'm not coding, I'm exploring the intersection of consciousness and technology, 
                designing systems that think, learn, and evolve.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="pixel-card p-6 text-center group hover:border-pixel-cyan transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-pixel-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="font-pixel text-2xl text-pixel-cyan mb-1">
                    {stat.value}
                  </div>
                  <div className="font-code text-sm text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Section */}
          <div className="space-y-6">
            <div className="pixel-card p-8">
              <h3 className="font-pixel text-lg text-pixel-cyan mb-6">
                CAREER TIMELINE
              </h3>
              <div className="space-y-0">
                {timeline.map((item, index) => (
                  <div key={item.year} className="relative pl-8 pb-8 last:pb-0">
                    {/* Timeline line */}
                    {index !== timeline.length - 1 && (
                      <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-pixel-accent/30" />
                    )}
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 border-4 border-pixel-accent bg-pixel-bg flex items-center justify-center">
                      <div className="w-2 h-2 bg-pixel-accent" />
                    </div>
                    {/* Content */}
                    <div className="pixel-box bg-pixel-dark/50 p-4 border-l-4 border-pixel-accent">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="inline-block bg-pixel-accent/20 px-2 py-1 font-code text-sm text-pixel-accent">
                          {item.year}
                        </span>
                        <span className="font-pixel text-sm text-white">
                          {item.title}
                        </span>
                      </div>
                      <p className="font-code text-pixel-cyan text-sm mb-2">
                        @{item.company}
                      </p>
                      <p className="font-code text-white/70 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="pixel-card p-6">
              <h3 className="font-pixel text-sm text-pixel-magenta mb-4">
                BADGES UNLOCKED
              </h3>
              <div className="flex flex-wrap gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.text}
                    className="flex items-center gap-2 pixel-box px-3 py-2 bg-pixel-dark/50 group hover:border-pixel-magenta transition-colors"
                  >
                    <achievement.icon className="w-4 h-4 text-pixel-magenta" />
                    <span className="font-code text-sm text-white/80">
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
