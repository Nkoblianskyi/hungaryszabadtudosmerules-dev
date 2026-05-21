import Link from 'next/link'

const links = {
  sport: [
    { href: '/szabalyok', label: 'Szabályok' },
    { href: '/tortenet', label: 'Történet' },
    { href: '/technikak', label: 'Technikák' },
    { href: '/felszereles', label: 'Felszerelés' },
  ],
  info: [
    { href: '/blog', label: 'Blog' },
    { href: '/rolunk', label: 'Rólunk' },
    { href: '/cookie-policy', label: 'Cookie-irányelv' },
    { href: '/adatvedelem', label: 'Adatvédelmi irányelv' },
  ],
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ocean-deep">
      {/* Big wordmark row */}
      <div className="overflow-hidden border-b border-line">
        <div className="ticker-inner py-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="text-xs tracking-[0.3em] uppercase text-text-dim font-mono px-8">
              hungary szabadtudosmerules&nbsp;&nbsp;&nbsp;fríbúvárkodás&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex flex-col leading-none group mb-6 inline-flex">
              <span className="text-[9px] tracking-[0.25em] text-ocean-light uppercase font-mono font-light">hungary</span>
              <span className="text-2xl font-black uppercase tracking-tighter text-foreground group-hover:text-ocean-light transition-colors duration-300">
                szabadtudos<span className="text-ocean-light">merules</span>
              </span>
            </Link>
            <p className="text-sm text-text-dim leading-relaxed max-w-xs mt-6">
              A fríbúvárkodás Magyarországon. Szabályok, technikák, történelem és mindaz, amit a légzés visszatartásának
              tudományáról tudni kell.
            </p>
            <p className="text-xs font-mono text-muted-foreground mt-6 tracking-widest">
              info@hungaryszabadtudosmerules.com
            </p>
          </div>

          {/* Sport links */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-ocean-light font-mono mb-6">Sport</p>
            <ul className="flex flex-col gap-3">
              {links.sport.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info links */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-ocean-light font-mono mb-6">Információ</p>
            <ul className="flex flex-col gap-3">
              {links.info.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-line flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs font-mono text-text-dim tracking-widest">
            {new Date().getFullYear()} hungary szabadtudosmerules
          </p>
          <p className="text-xs font-mono text-text-dim tracking-widest">
            hungaryszabadtudosmerules.com
          </p>
        </div>
      </div>
    </footer>
  )
}
