import type { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog — Cikkek és Írások',
  description: 'Fríbúvárkodással kapcsolatos cikkek, technikák, tudományos érdekességek és élménybeszámolók.',
}

const categoryColors: Record<string, string> = {
  Technika: 'text-ocean-light',
  Tudomány: 'text-primary',
  Kezdőknek: 'text-ocean-light',
  Történelem: 'text-muted-foreground',
  Biztonság: 'text-destructive',
  Egészség: 'text-primary',
  Verseny: 'text-ocean-light',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-6">Blog</p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.88] text-balance">
            Cikkek és
            <br />
            Írások
          </h1>
        </div>
      </section>

      {/* Featured article */}
      <section className="border-b border-line">
        <Link
          href={`/blog/${featured.slug}`}
          className="block max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-20 group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-[9px] font-mono text-ocean-light tracking-widest uppercase border border-ocean-light/30 px-3 py-1">
                  {featured.category}
                </span>
                <span className="text-[9px] font-mono text-text-dim tracking-widest">Kiemelt cikk</span>
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3.5rem)] font-black uppercase tracking-tighter leading-[0.92] text-balance group-hover:text-ocean-light transition-colors duration-300 mb-6">
                {featured.title}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                {featured.excerpt}
              </p>
              <div className="mt-10">
                <span className="text-xs tracking-[0.2em] uppercase font-medium text-ocean-light group-hover:text-foreground transition-colors duration-300 border-b border-current pb-0.5">
                  Cikk olvasása
                </span>
              </div>
            </div>
            <div className="relative h-64 lg:h-80 overflow-hidden bg-surface">
              <img
                src="/images/blog-hero.jpg"
                alt={featured.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>
        </Link>
      </section>

      {/* All articles grid */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-12">
            Összes cikk — {String(blogPosts.length).padStart(2, '0')}
          </p>

          <div className="divide-y divide-line border-t border-line">
            {rest.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-8 group"
              >
                <span className="text-[10px] font-mono text-text-dim tracking-widest md:w-16 shrink-0">
                  {String(i + 2).padStart(2, '0')}
                </span>
                <div className="flex-1 md:px-8">
                  <span className={`text-[9px] font-mono tracking-widest uppercase block mb-2 ${categoryColors[post.category] ?? 'text-text-dim'}`}>
                    {post.category}
                  </span>
                  <h2 className="text-xl font-bold uppercase tracking-tight group-hover:text-ocean-light transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-2xl">
                    {post.excerpt}
                  </p>
                </div>
                <div className="md:w-32 flex justify-start md:justify-end shrink-0">
                  <span className="text-xs tracking-[0.15em] uppercase text-ocean-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Olvasás →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
