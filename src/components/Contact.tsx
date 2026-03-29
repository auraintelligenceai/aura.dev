import { Mail, Twitter, Github, Linkedin, Send } from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    { icon: Github, label: 'GITHUB', href: '#' },
    { icon: Twitter, label: 'TWITTER', href: '#' },
    { icon: Linkedin, label: 'LINKEDIN', href: '#' },
    { icon: Mail, label: 'EMAIL', href: 'mailto:auraintelligence.ai@gmail.com' },
  ]

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Send className="w-6 h-6 text-pixel-accent" />
            <span className="font-code text-pixel-cyan text-lg">GET IN TOUCH</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl text-shadow-pixel">
            CONTACT
          </h2>
          <div className="w-24 h-1 bg-pixel-accent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <div className="pixel-card">
            <h3 className="font-pixel text-sm mb-6 text-pixel-accent">SEND_MESSAGE( )</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-code text-sm text-white/60 mb-2">NAME:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-pixel-bg border-4 border-pixel-dark p-3 font-code text-white focus:border-pixel-accent focus:outline-none transition-colors"
                  placeholder="ENTER_NAME"
                  required
                />
              </div>
              
              <div>
                <label className="block font-code text-sm text-white/60 mb-2">EMAIL:</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-pixel-bg border-4 border-pixel-dark p-3 font-code text-white focus:border-pixel-accent focus:outline-none transition-colors"
                  placeholder="ENTER_EMAIL"
                  required
                />
              </div>
              
              <div>
                <label className="block font-code text-sm text-white/60 mb-2">MESSAGE:</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-pixel-bg border-4 border-pixel-dark p-3 font-code text-white focus:border-pixel-accent focus:outline-none transition-colors resize-none"
                  placeholder="ENTER_MESSAGE"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="pixel-btn w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">SENDING...</span>
                ) : submitted ? (
                  <span className="text-pixel-accent">✓ SENT!</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    TRANSMIT
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Social links */}
          <div className="flex flex-col justify-center">
            <h3 className="font-pixel text-sm mb-6 text-pixel-cyan">CONNECT( )</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="pixel-btn flex items-center gap-3 justify-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-pixel text-xs">{label}</span>
                </a>
              ))}
            </div>

            {/* Decorative terminal */}
            <div className="mt-8 p-4 bg-pixel-bg border-4 border-pixel-dark font-code text-sm">
              <div className="text-white/40 mb-2">// SYSTEM STATUS</div>
              <div className="text-pixel-accent">
                <span className="text-pixel-cyan">~</span> status ........ ONLINE
              </div>
              <div className="text-pixel-accent">
                <span className="text-pixel-cyan">~</span> availability .. OPEN TO WORK
              </div>
              <div className="text-pixel-accent">
                <span className="text-pixel-cyan">~</span> response_time  &lt; 24H
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}