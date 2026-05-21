import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blog-data'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

function renderContent(content: string) {
  const lines = content.trim().split('\n')
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trim()

    if (line.startsWith('## ')) {
      elements.push(
        <h2
          key={i}
          className="text-2xl md:text-3xl font-black uppercase tracking-tighter mt-16 mb-6 text-foreground"
        >
          {line.slice(3)}
        </h2>
      )
    } else if (line.length > 0) {
      elements.push(
        <p key={i} className="text-base text-muted-foreground leading-relaxed mb-6">
          {line}
        </p>
      )
    }
    i++
  }

  return elements
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prev = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const next = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  return (
    <div className="pt-20">
      {/* Article header */}
      <header className="border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16 md:py-24">
          <Link
            href="/blog"
            className="text-[10px] font-mono tracking-widest uppercase text-text-dim hover:text-ocean-light transition-colors duration-300 mb-10 inline-flex items-center gap-2"
          >
            ← Blog
          </Link>

          <div className="max-w-3xl mt-6">
            <span className="text-[9px] font-mono text-ocean-light tracking-[0.3em] uppercase border border-ocean-light/30 px-3 py-1 inline-block mb-8">
              {post.category}
            </span>
            <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] text-balance">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mt-8 max-w-2xl">
              {post.excerpt}
            </p>
          </div>
        </div>
      </header>

      {/* Divider line — depth visual */}
      <div className="h-px bg-ocean-light/20 max-w-screen-xl mx-auto" aria-hidden="true" />

      {/* Article body */}
      <article className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Index aside */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-ocean-light mb-6">
                  Cikk
                </p>
                <div className="space-y-2">
                  <p className="text-xs font-mono text-text-dim tracking-widest">
                    {String(currentIndex + 1).padStart(2, '0')} / {String(blogPosts.length).padStart(2, '0')}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-4">
                    {post.excerpt.slice(0, 100)}…
                  </p>
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-7 lg:col-start-4 border-l-0 lg:border-l border-line lg:pl-12">
              <div>{renderContent(post.content)}</div>
            </div>
          </div>
        </div>
      </article>

      {/* Prev / Next navigation */}
      <nav
        className="border-t border-line"
        aria-label="Cikk navigáció"
      >
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-line">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="py-10 pr-0 md:pr-10 group flex flex-col gap-2"
            >
              <span className="text-[9px] font-mono tracking-widest text-text-dim uppercase">
                ← Előző cikk
              </span>
              <span className="text-lg font-bold uppercase tracking-tight group-hover:text-ocean-light transition-colors duration-300 leading-tight">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="py-10 pl-0 md:pl-10 group flex flex-col gap-2 md:text-right"
            >
              <span className="text-[9px] font-mono tracking-widest text-text-dim uppercase">
                Következő cikk →
              </span>
              <span className="text-lg font-bold uppercase tracking-tight group-hover:text-ocean-light transition-colors duration-300 leading-tight">
                {next.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>

      {/* Back to blog */}
      <div className="border-t border-line py-10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <Link
            href="/blog"
            className="text-xs tracking-[0.2em] uppercase font-medium text-ocean-light hover:text-foreground transition-colors duration-300 border-b border-current pb-0.5"
          >
            Vissza a bloghoz
          </Link>
        </div>
      </div>
    </div>
  )
}
