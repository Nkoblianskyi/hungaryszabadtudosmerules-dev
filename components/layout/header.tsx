'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '/szabalyok', label: 'Szabályok' },
  { href: '/tortenet', label: 'Történet' },
  { href: '/technikak', label: 'Technikák' },
  { href: '/felszereles', label: 'Felszerelés' },
  { href: '/blog', label: 'Blog' },
  { href: '/rolunk', label: 'Rólunk' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
          {/* Wordmark */}
          <Link
            href="/"
            className="flex flex-col leading-none group"
            aria-label="Főoldal"
          >
            <span className="text-[10px] tracking-[0.25em] text-ocean-light uppercase font-mono font-light">hungary</span>
            <span className="text-lg md:text-xl font-black uppercase tracking-tighter text-foreground group-hover:text-ocean-light transition-colors duration-300">
              szabadtudos<span className="text-ocean-light">merules</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Fő navigáció">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-ocean-light transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 group"
            aria-label={menuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={menuOpen}
          >
            <span className={`block h-px bg-foreground transition-all duration-300 ${menuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${menuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-6'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-center px-8 gap-2 mt-16">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-black uppercase tracking-tighter text-foreground hover:text-ocean-light transition-colors duration-300 border-b border-line py-4"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="px-8 pb-12">
          <p className="text-xs font-mono text-text-dim tracking-widest">
            info@hungaryszabadtudosmerules.com
          </p>
        </div>
      </div>
    </>
  )
}
