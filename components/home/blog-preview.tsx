import Link from 'next/link'
import { blogPosts } from '@/lib/blog-data'

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3)

  return (
    <section className="py-24 md:py-32 border-b border-line" aria-labelledby="blog-heading">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-4">Blog</p>
            <h2 id="blog-heading" className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] text-balance">
              Cikkek és
              <br />
              Írások
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs tracking-[0.2em] uppercase font-medium text-ocean-light hover:text-foreground transition-colors duration-300 border-b border-current pb-0.5 self-end shrink-0"
          >
            Összes cikk
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-line border border-line">
          {featured.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="p-8 md:p-10 group flex flex-col hover:bg-surface transition-colors duration-300"
            >
              <div className="mb-auto">
                <span className="text-[9px] font-mono text-ocean-light tracking-widest uppercase block mb-6">{post.category}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight leading-tight mb-4 group-hover:text-ocean-light transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
                <span className="text-[10px] font-mono text-text-dim tracking-widest">
                  {String(i + 1).padStart(2, '0')} / {String(blogPosts.length).padStart(2, '0')}
                </span>
                <span className="text-xs tracking-[0.15em] uppercase text-ocean-light group-hover:text-foreground transition-colors duration-300">
                  Olvasás
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
