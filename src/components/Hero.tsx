import { useState, useEffect } from 'react'
import { Terminal, Code2, Sparkles } from 'lucide-react'

export function Hero() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'FULL-STACK DEVELOPER'
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorTimer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative px-4 py-20">
      {/* Animated background grid */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-pixel-accent/20 animate-pulse-pixel" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 border-4 border-pixel-cyan/20 animate-pulse-pixel" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Pixel avatar placeholder */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-pixel-accent to-pixel-cyan pixel-border animate-float">
            <div className="w-full h-full flex items-center justify-center">
              <Code2 className="w-16 h-16 text-pixel-bg" />
            </div>
          </div>
        </div>

        {/* Glitch name */}
        <h1 className="font-pixel text-4xl md:text-6xl mb-6 text-shadow-pixel glitch-text" data-text="DEVELOPER">
          DEVELOPER
        </h1>

        {/* Typed subtitle */}
        <div className="h-16 flex items-center justify-center mb-8">
          <span className="font-code text-2xl md:text-3xl text-pixel-accent">
            {typedText}
            <span className={`inline-block w-3 h-6 bg-pixel-accent ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
          </span>
        </div>

        {/* Description */}
        <p className="font-code text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
          Building pixel-perfect, futuristic web experiences with modern technologies.
          Specializing in React, TypeScript, and creative coding.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="pixel-btn flex items-center gap-2">
            <Terminal className="w-4 h-4" />
            VIEW PROJECTS
          </a>
          <a href="#contact" className="pixel-btn border-pixel-cyan text-pixel-cyan hover:text-pixel-cyan"
             style={{ borderColor: '#00ffff', boxShadow: '6px 6px 0 rgba(0,255,255,0.5)' }}>
            <Sparkles className="w-4 h-4" />
            HIRE ME
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-4 border-pixel-accent rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-pixel-accent rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}