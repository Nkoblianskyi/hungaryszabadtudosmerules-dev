'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.35}px)`
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end" aria-label="Főoldal hős">
      {/* Background image with parallax */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <img
          src="/images/hero-freediving.jpg"
          alt="Fríbúvárkodó a mélységben"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 to-transparent" />
      </div>

      {/* Decorative depth lines */}
      <div className="absolute top-1/3 left-0 right-0 flex flex-col gap-px opacity-10 pointer-events-none" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-px bg-ocean-light"
            style={{ opacity: 1 - i * 0.15, marginLeft: `${i * 8}%`, marginRight: `${i * 2}%` }}
          />
        ))}
      </div>

      {/* Depth indicator */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1 opacity-40" aria-hidden="true">
        <div className="w-px h-20 bg-ocean-light" />
        <span className="text-[8px] font-mono tracking-widest text-ocean-light rotate-90 mt-2">MÉLYSÉG</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 pb-20 md:pb-28 w-full">
        <div className="max-w-3xl">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-8">
            Magyarország / Fríbúvárkodás
          </p>
          <h1 className="font-black uppercase leading-[0.88] tracking-tighter text-balance">
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-foreground">A MÉLYSÉG</span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-ocean-light">SZABAD</span>
            <span className="block text-[clamp(3.5rem,10vw,9rem)] text-foreground">VILÁGA</span>
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/szabalyok"
              className="text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 bg-ocean-light text-background hover:bg-foreground transition-colors duration-300"
            >
              Szabályok és diszciplínák
            </Link>
            <Link
              href="/tortenet"
              className="text-xs tracking-[0.2em] uppercase font-medium text-foreground hover:text-ocean-light transition-colors duration-300 border-b border-current pb-0.5"
            >
              Történet felfedezése
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 md:right-10 flex flex-col items-center gap-2" aria-hidden="true">
          <span className="text-[9px] font-mono tracking-widest text-text-dim uppercase">Görgetés</span>
          <div className="w-px h-12 bg-text-dim relative overflow-hidden">
            <div className="absolute top-0 w-full h-1/2 bg-ocean-light animate-bounce" style={{ animationDuration: '1.5s' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
