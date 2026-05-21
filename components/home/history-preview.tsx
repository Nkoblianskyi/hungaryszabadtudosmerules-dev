import Link from 'next/link'

export default function HistoryPreview() {
  return (
    <section className="py-24 md:py-32 border-b border-line overflow-hidden" aria-labelledby="history-heading">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[3/4] overflow-hidden relative">
              <img
                src="/images/history.jpg"
                alt="A fríbúvárkodás kezdetei Magyarországon"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Year overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-6xl font-black text-foreground/20 leading-none tracking-tighter">1960</span>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -right-4 top-1/4 bg-ocean-light text-background px-6 py-4 hidden lg:block">
              <p className="text-3xl font-black leading-none">60+</p>
              <p className="text-[10px] tracking-[0.2em] uppercase font-mono mt-1">év örökség</p>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-6">Történelem</p>
            <h2 id="history-heading" className="text-[clamp(2.5rem,5vw,4.5rem)] font-black uppercase tracking-tighter leading-[0.9] text-balance mb-8">
              A Mélység
              <br />
              <span className="text-ocean-light">Örökség</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              A fríbúvárkodás Magyarországon évtizedes múltra tekint vissza. Az első úttörők a dunai medencéktől
              a Balaton kristálytiszta vizéig fedezték fel a légzés visszatartásának határait.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10">
              Az 1960-as évektől kezdődően a magyar sportolók rendszeresen részt vesznek a
              nemzetközi versenyeken, és számos kiemelkedő eredményt értek el a különböző diszciplínákban.
            </p>

            {/* Timeline dots */}
            <div className="flex gap-0 mb-10 border-t border-line pt-8">
              {['1960', '1975', '1990', '2005', '2020'].map((year, i) => (
                <div key={year} className="flex-1 relative">
                  <div className={`h-0.5 ${i < 4 ? 'bg-ocean-light/30' : 'bg-transparent'}`} />
                  <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-ocean-light rounded-full" />
                  <span className="text-[9px] font-mono text-text-dim mt-2 block">{year}</span>
                </div>
              ))}
            </div>

            <Link
              href="/tortenet"
              className="text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 bg-transparent border border-foreground/30 text-foreground hover:bg-ocean-light hover:text-background hover:border-ocean-light transition-all duration-300 inline-block"
            >
              Teljes történet
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
