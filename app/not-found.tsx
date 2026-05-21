import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '404 — Az oldal nem található',
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="text-[clamp(6rem,20vw,16rem)] font-black text-border leading-none tracking-tighter select-none"
          aria-hidden="true">
          404
        </p>
        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter -mt-6 mb-4">
          Az oldal nem található
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed mb-10">
          A keresett oldal nem létezik, vagy áthelyezésre került. Ellenőrizd a webcímet,
          vagy térj vissza a főoldalra.
        </p>
        <Link
          href="/"
          className="text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 bg-ocean-light text-background hover:bg-foreground transition-colors duration-300 inline-block"
        >
          Vissza a főoldalra
        </Link>
      </div>
    </div>
  )
}
