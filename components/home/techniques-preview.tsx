import Link from 'next/link'

const tips = [
  {
    num: '01',
    title: 'Diafragmatikus légzés',
    desc: 'A rekeszizom alapú légzéstechnika maximálisan feltölti a tüdőt és csökkenti a stresszt merülés előtt.',
  },
  {
    num: '02',
    title: 'Egyenlítési technikák',
    desc: 'A Frenzel és Mouthfill módszerek lehetővé teszik a mélységi nyomásegyenlítést minimális energiafelhasználással.',
  },
  {
    num: '03',
    title: 'Búvárkodás utáni relaxáció',
    desc: 'A merülés utáni tudatos pihenés és légzés elengedhetetlen a biztonságos szintidő megtartásához.',
  },
]

export default function TechniquesPreview() {
  return (
    <section className="py-24 md:py-32 border-b border-line" aria-labelledby="techniques-heading">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Full-width image bar */}
        <div className="relative h-64 md:h-80 overflow-hidden mb-16">
          <img
            src="/images/techniques.jpg"
            alt="Fríbúvárkodási technika"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-background/50" />
          <div className="absolute inset-0 flex items-center px-6 md:px-10">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-3">Technikák</p>
              <h2 id="techniques-heading" className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9]">
                Technikák
                <br />
                és Tippek
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-line">
          {tips.map((t) => (
            <div key={t.num} className="p-8 md:p-10 group">
              <span className="text-[10px] font-mono text-ocean-light tracking-widest block mb-6">{t.num}</span>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-4 group-hover:text-ocean-light transition-colors duration-300">
                {t.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-line pt-8 flex justify-end">
          <Link
            href="/technikak"
            className="text-xs tracking-[0.2em] uppercase font-medium text-ocean-light hover:text-foreground transition-colors duration-300 border-b border-current pb-0.5"
          >
            Minden technika és tipp
          </Link>
        </div>
      </div>
    </section>
  )
}
