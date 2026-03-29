import { useState, useEffect } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Blog } from './components/Blog'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Navigation } from './components/Navigation'

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-pixel-bg text-white overflow-x-hidden">
      {/* Custom cursor glow */}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 bg-pixel-accent/50 rounded-full blur-sm transition-all duration-100"
        style={{
          left: cursorPos.x - 8,
          top: cursorPos.y - 8,
        }}
      />

      {/* Scan line effect */}
      <div className="scan-line pointer-events-none" />

      {/* Grid background */}
      <div className="fixed inset-0 grid-pixel opacity-30 pointer-events-none" />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t-4 border-pixel-accent/30">
        <p className="font-pixel text-xs text-pixel-cyan/60">
          BUILT WITH REACT + TAILWIND + PIXEL LOVE
        </p>
        <p className="font-code text-sm text-white/40 mt-2">
          &copy; 2026 AURA INTELLIGENCE
        </p>
      </footer>
    </div>
  )
}

export default App