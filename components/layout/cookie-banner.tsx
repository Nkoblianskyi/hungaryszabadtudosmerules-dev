'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie-hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-surface/98 backdrop-blur-md"
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
          Ez a weboldal sütiket használ a jobb felhasználói élmény érdekében. Az oldal
          böngészésével elfogadja a{' '}
          <Link href="/cookie-policy" className="text-ocean-light underline underline-offset-2 hover:text-foreground transition-colors">
            cookie-irányelvet
          </Link>{' '}
          és az{' '}
          <Link href="/adatvedelem" className="text-ocean-light underline underline-offset-2 hover:text-foreground transition-colors">
            adatvédelmi irányelvet
          </Link>.
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={decline}
            className="text-xs tracking-[0.15em] uppercase font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Elutasít
          </button>
          <button
            onClick={accept}
            className="text-xs tracking-[0.15em] uppercase font-medium px-6 py-3 bg-ocean-light text-background hover:bg-foreground transition-colors duration-300"
          >
            Elfogad
          </button>
        </div>
      </div>
    </div>
  )
}
