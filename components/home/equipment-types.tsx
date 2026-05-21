import Link from 'next/link'

const types = [
  {
    num: 'I',
    name: 'Monofin',
    desc: 'Az egyetlen, egybefüggő uszony a leghatékonyabb hajtóerőt biztosítja a mélységi merülésekhez. A fríbúvárok legjobb barátja.',
    tag: 'HAJTÓERŐ',
  },
  {
    num: 'II',
    name: 'Hosszú Uszony',
    desc: 'A hagyományos, két lábra illeszthető hosszú uszony. Rugalmasságuk és merevségük meghatározza a merülési stílust.',
    tag: 'PROPULZIÓ',
  },
  {
    num: 'III',
    name: 'Kis Volumenű Maszk',
    desc: 'A kis belső térfogatú maszkok kevesebb levegőt igényelnek az egyenlítéshez a mélységben. Kulcsfontosságú kiegészítő.',
    tag: 'LÁTÁS',
  },
  {
    num: 'IV',
    name: 'Neoprén Búvárruha',
    desc: 'A speciális, nyújtható neoprén anyag maximális mozgásszabadságot biztosít a testhőmérséklet megőrzése mellett.',
    tag: 'HŐVÉDELEM',
  },
  {
    num: 'V',
    name: 'Ólom Öv',
    desc: 'Az egyensúly kulcsa. Az ólomtömbök segítségével beállított semleges felhajtóerő csökkenti az energiafelhasználást.',
    tag: 'EGYENSÚLY',
  },
  {
    num: 'VI',
    name: 'Merülési Bója',
    desc: 'A biztonsági bója jelzi a merülési helyet a víz felszínén. Kötelező felszerelés a nyílt vízi fríbúvárkodáshoz.',
    tag: 'BIZTONSÁG',
  },
]

export default function EquipmentTypes() {
  return (
    <section className="py-24 md:py-32 bg-surface border-b border-line" aria-labelledby="equip-types-heading">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="mb-16">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-4">Felszerelés típusai</p>
          <h2 id="equip-types-heading" className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] text-balance max-w-2xl">
            A Fríbúvárkodás
            <br />
            Eszközei
          </h2>
        </div>

        {/* 2-column asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y divide-line md:divide-y-0">
          {types.map((t, i) => (
            <div
              key={t.num}
              className={`p-8 border-line group hover:bg-surface-raised transition-colors duration-300 ${
                i < 3 ? 'md:border-b' : ''
              } ${
                i % 3 !== 2 ? 'lg:border-r' : ''
              } ${
                i % 2 === 0 ? 'md:border-r lg:border-r-0' : ''
              } ${
                i < 3 ? 'lg:border-b' : ''
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-5xl font-black text-border group-hover:text-ocean-light/20 transition-colors duration-300 leading-none">
                  {t.num}
                </span>
                <span className="text-[9px] font-mono tracking-widest text-ocean-light bg-ocean-light/10 px-2 py-1">
                  {t.tag}
                </span>
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight mb-3 group-hover:text-ocean-light transition-colors duration-300">
                {t.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link
            href="/felszereles"
            className="text-xs tracking-[0.2em] uppercase font-medium text-ocean-light hover:text-foreground transition-colors duration-300 border-b border-current pb-0.5"
          >
            Teljes felszerelési útmutató
          </Link>
        </div>
      </div>
    </section>
  )
}
