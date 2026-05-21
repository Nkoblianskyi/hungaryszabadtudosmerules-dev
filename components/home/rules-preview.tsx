import Link from 'next/link'

const disciplines = [
  {
    code: '01',
    name: 'Statikus apnea',
    short: 'STA',
    desc: 'Vízfelszínen arcát vízbe merítve, mozdulatlanul tartott lélegzet-visszatartás.',
  },
  {
    code: '02',
    name: 'Dinamikus apnea',
    short: 'DYN',
    desc: 'Vízszintes, buborékos medencei merülés uszonyokkal vagy anélkül.',
  },
  {
    code: '03',
    name: 'Szabad merülés',
    short: 'FIM',
    desc: 'Kötél mentén le és felfelé haladás, csak a kezek és lábak segítségével.',
  },
  {
    code: '04',
    name: 'Súlyozott merülés',
    short: 'CWT',
    desc: 'Kötél mentén állandó ballaszt segítségével le és felfelé haladás.',
  },
]

export default function RulesPreview() {
  return (
    <section className="py-24 md:py-32 border-b border-line" aria-labelledby="rules-heading">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-4">Szabályok</p>
            <h2 id="rules-heading" className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] text-balance">
              Szabályok és
              <br />
              Diszciplínák
            </h2>
          </div>
          <Link
            href="/szabalyok"
            className="text-xs tracking-[0.2em] uppercase font-medium text-ocean-light hover:text-foreground transition-colors duration-300 border-b border-current pb-0.5 self-end shrink-0"
          >
            Teljes szabályzat
          </Link>
        </div>

        {/* Disciplines list */}
        <div className="divide-y divide-line">
          {disciplines.map((d, i) => (
            <div key={d.code} className="py-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-0 group">
              <span className="text-[10px] font-mono text-text-dim tracking-widest md:w-16">{d.code}</span>
              <div className="flex-1 md:px-8">
                <div className="flex items-baseline gap-4 mb-2">
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-ocean-light transition-colors duration-300">
                    {d.name}
                  </h3>
                  <span className="text-xs font-mono text-text-dim tracking-widest">{d.short}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{d.desc}</p>
              </div>
              <div className="md:w-16 flex justify-end">
                <span className="text-[10px] font-mono text-ocean-light tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
