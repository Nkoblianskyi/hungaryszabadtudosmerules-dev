import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Szabályok és Diszciplínák',
  description: 'A fríbúvárkodás hivatalos szabályai, diszciplínái és versenyszabályzata Magyarországon.',
}

const disciplines = [
  {
    code: 'STA',
    name: 'Statikus Apnea',
    full: 'Static Apnea',
    desc: 'A sportolót a medence felszínén hassal lefelé fekszi, arcát a vízbe merítve. Az időmérés a búvár fejének a vízbe kerülésétől a kiemelésig tart.',
    rules: [
      'A versenyző vízfelszínen, hassal lefelé helyezkedik el',
      'Az arc a vízbe merül a teljes légzés-visszatartás ideje alatt',
      'Bármilyen mozgás, kivéve a természetes testhullámzást, büntetéssel jár',
      'A végső felszíni protokoll: arcát kiemelve, szájjal a levegőben, és "OK" jelzés',
    ],
  },
  {
    code: 'DYN',
    name: 'Dinamikus Apnea Uszonnyal',
    full: 'Dynamic With Fins',
    desc: 'A búvár vízszintesen halad a medencében uszonyok segítségével. Az elért távolság a versenyteljesítmény mértéke.',
    rules: [
      'Monofin vagy bifinak egyaránt megengedett',
      'A búvár a medence aljától legalább 1 méteres mélységben halad',
      'Fordítók érintésekor a kéznek a falat kell érintenie',
      'A teljesítmény méterben kerül rögzítésre',
    ],
  },
  {
    code: 'DNF',
    name: 'Dinamikus Apnea Uszony Nélkül',
    full: 'Dynamic No Fins',
    desc: 'Azonos a DYN diszciplínával, de uszony használata tilos. A hajtóerőt kizárólag a kar- és lábmozdulatok adják.',
    rules: [
      'Semmilyen uszony nem viselhető',
      'A búvárruha, a maszk és az ólomöv engedélyezett',
      'A hajtóerőt kizárólag a testrészek mozgása biztosítja',
      'Fordulóknál a falat érinteni kell',
    ],
  },
  {
    code: 'FIM',
    name: 'Szabad Merülés',
    full: 'Free Immersion',
    desc: 'A búvár kötél segítségével merül le és tér vissza a felszínre. Uszony nem megengedett; a haladást a kezek végzik a kötélen.',
    rules: [
      'A kötelet kezeivel húzva halad le és fel',
      'Uszony nem megengedett',
      'A ballaszt rögzített, nem változtatható merülés közben',
      'A mélység értéke a kötél mentén mért maximális elért pont',
    ],
  },
  {
    code: 'CWT',
    name: 'Állandó Ballaszt Uszonnyal',
    full: 'Constant Weight With Fins',
    desc: 'A leggyakoribb versenydiszciplína. A búvár kötél mentén merül le és tér vissza, uszonnyal hajtva magát. A ballaszt nem változtatható.',
    rules: [
      'A ballaszt tömege nem változtatható merülés közben',
      'Monofin vagy bifinak megengedett',
      'A kötelet csak a fordulópontban szabad megérinteni',
      'A fordulópontot a kötélre erősített tag jelzi',
    ],
  },
  {
    code: 'CNF',
    name: 'Állandó Ballaszt Uszony Nélkül',
    full: 'Constant Weight No Fins',
    desc: 'A legnehezebb versenydiszciplínának tartják, ahol sem uszony, sem kötél nem segíti a haladást. Csak a test természetes mozgása hajt.',
    rules: [
      'Sem uszony, sem kötél nem használható hajtóerőként',
      'A fordulópontban megérinthető a kötél és a tag',
      'Kizárólag testrészmozdulat nyújthat hajtóerőt',
      'A legkisebb technikai egyenértékű teljesítmény büntetéssel jár',
    ],
  },
]

export default function RulesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-6">Szabályok</p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.88] text-balance mb-8">
            Szabályok és
            <br />
            Diszciplínák
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            A fríbúvárkodás versenyrendszerét a nemzetközi szövetség szabályozza. Az egyes diszciplínák
            eltérő technikát és felkészülést igényelnek, de mindegyiknek közös alapja a biztonságos és
            szabályos merülés.
          </p>
        </div>
      </section>

      {/* Disciplines */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="space-y-0 divide-y divide-line border-t border-line">
            {disciplines.map((d) => (
              <div key={d.code} className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left */}
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-4xl font-black text-ocean-light tracking-tighter">{d.code}</span>
                    <span className="text-[9px] font-mono text-text-dim tracking-widest uppercase">{d.full}</span>
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tight mt-2">{d.name}</h2>
                </div>

                {/* Middle */}
                <div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>

                {/* Rules list */}
                <div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-ocean-light font-mono mb-4">Alapszabályok</p>
                  <ul className="space-y-3">
                    {d.rules.map((rule, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="text-ocean-light font-mono text-[10px] shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-line bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Érdekli a technika mélyebb megértése?</p>
            <p className="text-xl font-bold uppercase tracking-tight mt-1">Fedezze fel a tippeket és edzésterveket</p>
          </div>
          <Link
            href="/technikak"
            className="text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 bg-ocean-light text-background hover:bg-foreground transition-colors duration-300 shrink-0"
          >
            Technikák és tippek
          </Link>
        </div>
      </section>
    </div>
  )
}
