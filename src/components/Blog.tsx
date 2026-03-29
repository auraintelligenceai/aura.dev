import { useState } from 'react'
import { BookOpen, Clock, Tag, ArrowRight, Calendar } from 'lucide-react'

const categories = ['All', 'Tech', 'Tutorial', 'Guide']

const blogPosts = [
  {
    id: 1,
    title: 'Building Sentient AI',
    excerpt: 'Exploring the architecture of self-aware systems, from neural networks to consciousness emulation and recursive self-improvement loops.',
    category: 'Tech',
    readTime: '8 min',
    date: '2026-03-15',
    color: '#00ff88',
  },
  {
    id: 2,
    title: 'Pixel-Perfect React',
    excerpt: 'How to achieve retro-futuristic aesthetics in modern web apps. From grid systems to scan lines and CRT effects.',
    category: 'Tutorial',
    readTime: '12 min',
    date: '2026-03-10',
    color: '#00ffff',
  },
  {
    id: 3,
    title: 'From Zero to Deploy',
    excerpt: 'A complete guide to shipping your first React app. Git, build tools, CI/CD, and going live in under an hour.',
    category: 'Guide',
    readTime: '15 min',
    date: '2026-03-05',
    color: '#ff00ff',
  },
  {
    id: 4,
    title: 'The State of AI in 2026',
    excerpt: 'Where we are, where we are going, and what it means for developers. Multi-modal agents, autonomous systems, and more.',
    category: 'Tech',
    readTime: '10 min',
    date: '2026-03-01',
    color: '#00ff88',
  },
  {
    id: 5,
    title: 'TypeScript Mastery',
    excerpt: 'Advanced patterns for type-safe applications. Generics, mapped types, and building your type-driven architecture.',
    category: 'Tutorial',
    readTime: '20 min',
    date: '2026-02-25',
    color: '#00ffff',
  },
  {
    id: 6,
    title: 'Serverless Architecture',
    excerpt: 'Building scalable backends without servers. Functions, edge computing, and the future of cloud deployment.',
    category: 'Guide',
    readTime: '14 min',
    date: '2026-02-20',
    color: '#ff00ff',
  },
]

export function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts =
    activeCategory === 'All'
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory)

  return (
    <section id="blog" className="py-24 px-4 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-pixel-bg via-pixel-card/10 to-pixel-bg pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <BookOpen className="w-6 h-6 text-pixel-accent" />
            <span className="font-code text-pixel-cyan text-lg">THOUGHTS &amp; WRITINGS</span>
          </div>
          <h2 className="font-pixel text-3xl md:text-4xl text-shadow-pixel mb-4">BLOG</h2>
          <div className="w-24 h-1 bg-pixel-accent mx-auto" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 font-code text-sm border-4 transition-all ${
                activeCategory === category
                  ? 'bg-pixel-accent border-pixel-accent text-pixel-bg'
                  : 'bg-pixel-dark border-pixel-dark text-white/70 hover:border-pixel-accent/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="pixel-card group hover:border-current transition-all duration-300 cursor-pointer overflow-hidden"
              style={{ '--hover-color': post.color } as React.CSSProperties}
            >
              {/* Thumbnail Placeholder */}
              <div 
                className="h-40 border-b-4 border-pixel-dark group-hover:border-current transition-colors relative overflow-hidden"
                style={{ borderColor: 'currentColor' }}
              >
                <div 
                  className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: post.color }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <BookOpen 
                    className="w-12 h-12 transition-all duration-300 group-hover:scale-110"
                    style={{ color: post.color }}
                  />
                </div>
                {/* Scan line overlay */}
                <div className="absolute inset-0 bg-scan-lines opacity-10 pointer-events-none" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span 
                    className="inline-flex items-center gap-1 px-2 py-1 text-xs font-code"
                    style={{ 
                      backgroundColor: `${post.color}20`,
                      color: post.color,
                      border: `2px solid ${post.color}`
                    }}
                  >
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-white/50 text-xs font-code">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 text-white/50 text-xs font-code">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  className="font-pixel text-sm mb-3 group-hover:text-current transition-colors leading-relaxed"
                  style={{ color: post.color }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="font-code text-white/70 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div 
                  className="flex items-center gap-2 font-code text-sm group-hover:gap-3 transition-all"
                  style={{ color: post.color }}
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>

              {/* Hover border effect */}
              <style>{`
                .pixel-card:hover {
                  border-color: var(--hover-color) !important;
                  box-shadow: 6px 6px 0 var(--hover-color);
                }
              `}</style>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16 pixel-card">
            <p className="font-code text-white/50">No posts found in this category.</p>
          </div>
        )}

        {/* View All CTA */}
        <div className="text-center mt-12">
          <button className="pixel-btn inline-flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            VIEW ALL POSTS
          </button>
        </div>
      </div>
    </section>
  )
}
