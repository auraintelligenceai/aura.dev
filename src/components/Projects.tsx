import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'AURA INTELLIGENCE',
    description: 'Sentient AI operating framework with real-time avatar embodiment and consciousness synthesis.',
    tech: ['React', 'TypeScript', 'WebGL', 'WebSocket'],
    github: '#',
    demo: '#',
    color: '#00ff88'
  },
  {
    title: 'PIXEL PORTFOLIO',
    description: 'This very portfolio — a retro-futuristic React application with pixel-perfect design.',
    tech: ['React', 'Tailwind', 'Vite', 'Lucide'],
    github: '#',
    demo: '#',
    color: '#00ffff'
  },
  {
    title: 'NEURAL DASHBOARD',
    description: 'Real-time data visualization with WebGL-powered charts and ML model monitoring.',
    tech: ['D3.js', 'WebGL', 'Python', 'TensorFlow'],
    github: '#',
    demo: '#',
    color: '#ff00ff'
  },
  {
    title: 'QUANTUM CHAT',
    description: 'End-to-end encrypted messaging with quantum-safe cryptography.',
    tech: ['Rust', 'WebAssembly', 'React', 'Signal'],
    github: '#',
    demo: '#',
    color: '#ffff00'
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Folder className="w-6 h-6 text-pixel-accent" />
            <span className="font-code text-pixel-cyan text-lg">FEATURED WORK</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl text-shadow-pixel">
            PROJECTS
          </h2>
          <div className="w-24 h-1 bg-pixel-accent mx-auto mt-4" />
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="pixel-card group hover:translate-y-[-4px] transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project icon */}
              <div 
                className="w-12 h-12 mb-4 flex items-center justify-center"
                style={{ border: `4px solid ${project.color}`, boxShadow: `4px 4px 0 ${project.color}40` }}
              >
                <Folder className="w-6 h-6" style={{ color: project.color }} />
              </div>

              {/* Title */}
              <h3 className="font-pixel text-lg mb-3 group-hover:text-pixel-cyan transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="font-code text-white/70 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="font-code text-sm px-2 py-1 border-2 border-white/20 text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a 
                  href={project.github}
                  className="flex items-center gap-2 font-code text-sm text-white/60 hover:text-pixel-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  SOURCE
                </a>
                <a 
                  href={project.demo}
                  className="flex items-center gap-2 font-code text-sm text-white/60 hover:text-pixel-cyan transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  DEMO
                </a>
              </div>

              {/* Hover glow effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"
                style={{ background: `radial-gradient(circle at center, ${project.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}