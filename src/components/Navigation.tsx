import { useState, useEffect } from 'react'
import { Menu, X, Terminal } from 'lucide-react'

const navLinks = [
  { label: 'HOME', href: '#hero' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'CONTACT', href: '#contact' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-pixel-bg/95 backdrop-blur-sm border-b-4 border-pixel-accent/20' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 border-4 border-pixel-accent flex items-center justify-center group-hover:bg-pixel-accent transition-colors">
              <Terminal className="w-4 h-4 text-pixel-accent group-hover:text-pixel-bg" />
            </div>
            <span className="font-pixel text-sm hidden sm:block">AURA.DEV</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="relative px-4 py-2 font-code text-sm hover:text-pixel-accent transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-pixel-accent group-hover:w-3/4 transition-all" />
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 border-4 border-pixel-accent flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-5 h-5 text-pixel-accent" />
            ) : (
              <Menu className="w-5 h-5 text-pixel-accent" />
            )}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t-4 border-pixel-accent/20 pt-4">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="px-4 py-3 font-code text-lg border-2 border-transparent hover:border-pixel-accent hover:bg-pixel-accent/10 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Active section indicator */}
      <div className="h-1 bg-pixel-dark">
        <div 
          className="h-full bg-gradient-to-r from-pixel-accent via-pixel-cyan to-pixel-magenta transition-all duration-500"
          style={{ width: scrolled ? '100%' : '0%' }}
        />
      </div>
    </nav>
  )
}