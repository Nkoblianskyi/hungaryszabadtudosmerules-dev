import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fríbúvárkodási Technikák és Tippek',
  description: 'Részletes útmutatók, edzéstervek és tippek a fríbúvárkodás technikáihoz.',
}

const sections = [
  {
    category: 'Légzéstechnikák',
    items: [
      {
        title: 'Diafragmatikus légzés',
        level: 'Kezdő',
        desc: 'A rekeszizom alapú légzés a fríbúvárkodás alaptechnikája. A tüdő alsó részét töltjük meg először, majd a középső és felső részt. Ez maximalizálja a belélegzett levegő mennyiségét.',
        steps: [
          'Lazíts le teljesen és engedd meg a hasadnak, hogy kidomborodjon',
          'Lélegezz be lassan és mélyen, a gyomrod emelkedjen',
          'A bordák kinyílása után töltsd meg a mellkas felső részét is',
          'Tartsd vissza 2-3 másodpercig, majd lassan engedd ki',
        ],
      },
      {
        title: 'Packing (tüdőtöltés)',
        level: 'Haladó',
        desc: 'A "packing" egy haladó technika, amellyel a tüdő maximális kapacitásánál is több levegőt lehet bevinni. Kizárólag tapasztalt fríbúvárkodók számára ajánlott.',
        steps: [
          'Teli tüdővel rekeszizom kontrakciót alkalmazz',
          'Kis adagokban "nyeld be" az extra levegőt a tüdőbe',
          'Fokozatosan haladj, ne erőltesd',
          'Csak oktatói felügyelettel próbáld',
        ],
      },
    ],
  },
  {
    category: 'Egyenlítési technikák',
    items: [
      {
        title: 'Valsalva manőver',
        level: 'Kezdő',
        desc: 'A legelterjedtebb egyenlítési technika. Az orrot befogva és a szádat lezárva levegőt fújsz ki, ezzel növeled a középfül nyomását. Sekélyebb merülésekre elegendő.',
        steps: [
          'Fogd be az orrodat és zárd le a szádat',
          'Fújj ki enyhe nyomással, de ne erőltesse',
          'Érezd, ahogy a fülhártyáid kinyílnak',
          'Sekélyebb mélységeknél, kb. 20 méterig hatékony',
        ],
      },
      {
        title: 'Frenzel technika',
        level: 'Közepes',
        desc: 'A Frenzel technikában a gégefő zárul el, és a nyelv pumpaként működik. Ez energiatakarékosabb, mint a Valsalva, és nagyobb mélységekben is használható.',
        steps: [
          'Edd le a gégefődet, mintha "K" hangot mondanál',
          'A nyelved hátsó részével fújd a levegőt az Eustach-csövekbe',
          'Minimális izomerőfeszítéssel végzed',
          'Hatékony egészen 40-50 méter mélységig',
        ],
      },
      {
        title: 'Mouthfill technika',
        level: 'Haladó',
        desc: 'A legmélyebb merülésekhez szükséges technika. A szájban tárolt levegőt használja az egyenlítéshez a maximális mélységben, ahol a tüdőben már nincs levegő.',
        steps: [
          'A merülés elején "szájba veszed" a levegőt',
          'Lezárod a gégefőt és elzárod a szájból a légutakat',
          'Ezt a tárolt levegőt használod az egyenlítéshez mélyen',
          'Kizárólag haladó fríbúvárkodók számára',
        ],
      },
    ],
  },
  {
    category: 'Test pozíció és technika',
    items: [
      {
        title: 'Streamline pozíció',
        level: 'Kezdő',
        desc: 'A streamline pozíció a hydrodynamikailag leghatékonyabb testhelyzet vízalatti haladáshoz. Csökkenti a vízellenállást és megőrzi az energiát.',
        steps: [
          'Karok a fej mellett, nyújtva előre',
          'Test egyenes vonal, nincs csípőbiccentés',
          'Fej semleges pozícióban, nézz le',
          'Lábak zárva és nyújtva, lábfejek "mutatnak"',
        ],
      },
      {
        title: 'Szabadesés (Freefall)',
        level: 'Közepes',
        desc: 'A freefall az a pont, ahol a búvár negatív felhajtóerőjűvé válik és gravitáció szerint süllyed. Energiatakarékos módszer a mélység elérésére.',
        steps: [
          'Körülbelül 10-15 méter mélységben aktiválódik',
          'Hagyd abba az uszonnyal való hajtást',
          'Ellazulj teljesen és engedd magad süllyedni',
          'Minimalizáld az izomaktivitást',
        ],
      },
    ],
  },
  {
    category: 'Edzéstervek',
    items: [
      {
        title: 'CO₂-tűrés edzés',
        level: 'Közepes',
        desc: 'A szén-dioxid tolerancia növelése az egyik legfontosabb edzési cél. A CO₂-táblázatok segítségével fokozatosan növelhető a kényelmetlenség-küszöb.',
        steps: [
          'Végezz rövid, egyre csökkenő pihenőidejű merüléseket',
          'Pl.: 8x2 perc légzés-visszatartás, 2 perc pihenő között',
          'Heti 3-4 alkalommal végezd',
          'Soha ne végezd egyedül',
        ],
      },
      {
        title: 'O₂-táblázatok',
        level: 'Haladó',
        desc: 'Az oxigén-tolerancia növelésére szolgáló edzés. A cél a maximális légzés-visszatartási idő fokozatos növelése, egyre hosszabb, állandó pihenőkkel.',
        steps: [
          'Végezz egyre hosszabb légzés-visszatartásokat',
          'Pl.: 50%-60%-70%-80%-90%-100%-90% a maximális időd százalékában',
          'Pihenő: rögzített 2 perc minden sorozat között',
          'Kizárólag tapasztalt oktató felügyeletével',
        ],
      },
    ],
  },
]

export default function TechniquesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-0 overflow-hidden">
        <div className="h-[45vh] relative">
          <img
            src="/images/techniques.jpg"
            alt="Fríbúvárkodási technikák"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
          <div className="absolute bottom-0 pb-16 px-6 md:px-10 w-full max-w-screen-xl mx-auto left-0 right-0">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-4">Technikák</p>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.88]">
              Technikák és
              <br />
              Tippek
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 space-y-0">
          {sections.map((section) => (
            <div key={section.category} className="border-t border-line pt-16 pb-8">
              <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-12">
                {section.category}
              </p>
              <div className="space-y-12">
                {section.items.map((item) => (
                  <div key={item.title} className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-12 border-b border-line last:border-0">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold uppercase tracking-tight">{item.title}</h2>
                      </div>
                      <span className={`text-[9px] font-mono tracking-widest uppercase px-2 py-1 ${
                        item.level === 'Kezdő' ? 'bg-ocean-light/10 text-ocean-light' :
                        item.level === 'Közepes' ? 'bg-primary/10 text-primary' :
                        'bg-foreground/10 text-foreground'
                      }`}>{item.level}</span>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[0.3em] uppercase text-ocean-light font-mono mb-4">Lépések</p>
                      <ol className="space-y-3">
                        {item.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="text-ocean-light font-mono text-[10px] shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
