const facts = [
  {
    stat: '214 m',
    label: 'Jelenlegi mélységi rekord',
    desc: 'A no-limit kategóriában mért maximális mélységi rekord fríbúvárkodásban.',
  },
  {
    stat: '24 min',
    label: 'Leghosszabb statikus apnea',
    desc: 'A víz alatti légzés-visszatartás rekordja, amelyet képzett sportolók értek el.',
  },
  {
    stat: '300 m',
    label: 'Dinamikus táv uszonnyal',
    desc: 'A medencei horizontális merülés rekordtávja egyetlen légvétellel.',
  },
  {
    stat: '50%',
    label: 'Szívritmus csökkenés',
    desc: 'A bukókúra (diving reflex) hatására a szívritmus akár felére is csökkenhet.',
  },
]

const funFacts = [
  'A fókák és delfinek hasonló merülési reflexszel rendelkeznek, mint az ember',
  'A vér "splénikus összehúzódás" során extra oxigéndús vért juttat a szervezetbe',
  'Az emberi test a víznyomás hatására a mellkasát összenyomja, mint egy rugalmas labdát',
  'A Stig Severinsen rekordot tartó fríbúvár jóga és meditáció segítségével éri el a sikereit',
  'A Magyar Fríbúvárkodás az 1960-as években kezdett szervezett formát ölteni',
  'A legmélyebb fríbúvárok a test belső védelmi mechanizmusait hasznosítják a túléléshez',
]

export default function UniqueFacts() {
  return (
    <section className="py-24 md:py-32 bg-ocean-deep border-b border-line" aria-labelledby="facts-heading">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-4">Egyedi tények</p>
        <h2 id="facts-heading" className="text-[clamp(2.5rem,6vw,5rem)] font-black uppercase tracking-tighter leading-[0.9] text-balance mb-16">
          A Fríbúvárkodás
          <br />
          Csodái
        </h2>

        {/* Big stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-line border border-line mb-16">
          {facts.map((f) => (
            <div key={f.stat} className="p-8 group hover:bg-surface-raised transition-colors duration-300">
              <p className="text-[clamp(2rem,4vw,3.5rem)] font-black text-ocean-light leading-none mb-3 tracking-tighter">
                {f.stat}
              </p>
              <p className="text-xs font-mono tracking-widest uppercase text-foreground mb-2">{f.label}</p>
              <p className="text-xs text-text-dim leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Fun facts list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 divide-line border-t border-line">
          {funFacts.map((fact, i) => (
            <div key={i} className="py-6 flex items-start gap-6 group border-b border-line last:border-b-0 md:last:border-b md:[&:nth-child(5)]:border-b-0 md:[&:nth-child(6)]:border-b-0">
              <span className="text-[9px] font-mono text-ocean-light tracking-widest shrink-0 mt-1">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {fact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
