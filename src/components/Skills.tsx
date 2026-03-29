import { Cpu, Globe, Database, Palette, Terminal, Zap } from 'lucide-react'

const skillCategories = [
  {
    title: 'FRONTEND',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Three.js'],
    color: '#00ff88'
  },
  {
    title: 'BACKEND',
    icon: Database,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL'],
    color: '#00ffff'
  },
  {
    title: 'TOOLS',
    icon: Terminal,
    skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Linux'],
    color: '#ff00ff'
  },
  {
    title: 'DESIGN',
    icon: Palette,
    skills: ['Figma', 'Blender', 'After Effects', 'Pixel Art'],
    color: '#ffff00'
  },
  {
    title: 'AI/ML',
    icon: Cpu,
    skills: ['TensorFlow', 'PyTorch', 'LangChain', 'OpenAI'],
    color: '#ff6600'
  },
  {
    title: 'PERFORMANCE',
    icon: Zap,
    skills: ['WebGL', 'WebAssembly', 'Rust', 'Optimization'],
    color: '#00ff88'
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-pixel-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Cpu className="w-6 h-6 text-pixel-accent" />
            <span className="font-code text-pixel-cyan text-lg">TECH STACK</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl text-shadow-pixel">
            SKILLS
          </h2>
          <div className="w-24 h-1 bg-pixel-accent mx-auto mt-4" />
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.title}
                className="pixel-border p-6 group hover:scale-[1.02] transition-transform duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-10 h-10 flex items-center justify-center"
                    style={{ border: `4px solid ${category.color}`, boxShadow: `2px 2px 0 ${category.color}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: category.color }} />
                  </div>
                  <h3 className="font-pixel text-sm">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={skill}
                      className="tech-badge hover:scale-110 transition-transform cursor-default"
                      style={{ 
                        borderColor: category.color,
                        color: category.color,
                        animationDelay: `${i * 0.05}s`
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-16 pixel-card">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-pixel text-3xl text-pixel-accent mb-2">5+</div>
              <div className="font-code text-white/60">YEARS EXP</div>
            </div>
            <div>
              <div className="font-pixel text-3xl text-pixel-cyan mb-2">50+</div>
              <div className="font-code text-white/60">PROJECTS</div>
            </div>
            <div>
              <div className="font-pixel text-3xl text-pixel-magenta mb-2">20+</div>
              <div className="font-code text-white/60">CLIENTS</div>
            </div>
            <div>
              <div className="font-pixel text-3xl text-pixel-yellow mb-2">100%</div>
              <div className="font-code text-white/60">COMMITMENT</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}