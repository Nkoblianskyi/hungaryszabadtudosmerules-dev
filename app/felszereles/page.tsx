import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fríbúvárkodási Felszerelés',
  description: 'Részletes útmutató a fríbúvárkodáshoz szükséges felszerelésekről: uszonyok, maszkok, ruhák és biztonsági eszközök.',
}

const categories = [
  {
    id: 'uszonyok',
    label: '01',
    name: 'Uszonyok',
    subtitle: 'Fins',
    image: '/images/equipment.jpg',
    intro:
      'Az uszonyok a fríbúvárkodás legmeghatározóbb felszerelési elemei. A megfelelő uszony kiválasztása befolyásolja a hajtóerőt, az energiafelhasználást és a merülési komfortot.',
    items: [
      {
        name: 'Monofin',
        level: 'Haladó',
        desc: 'A két lábat egyetlen lapátba fogó uszony. A legnagyobb hajtóerőt biztosítja, de precíz technikát igényel. A versenyek CWT és DYN diszciplínáiban domináns.',
      },
      {
        name: 'Bifin (hosszú szárnyak)',
        level: 'Kezdő–Közepes',
        desc: 'Két különálló, igen hosszú lapátos uszony. Könnyebben elsajátítható, és sokoldalúbb, mint a monofin. Ideális kezdőknek és nyílt vízi merülésekhez.',
      },
      {
        name: 'Carbon uszony',
        level: 'Közepes–Haladó',
        desc: 'Carbon szénszálas lapátok maximális rugalmassággal és minimális tömeggel. Kiváló energiaátvitel, de törékenyebb, mint a üvegszálas vagy műanyag variáns.',
      },
    ],
  },
  {
    id: 'maszk',
    label: '02',
    name: 'Maszk',
    subtitle: 'Mask',
    image: null,
    intro:
      'A fríbúvárkodási maszkok kis belső térfogattal rendelkeznek, hogy minimalizálják az egyenlítéskor felhasznált levegőmennyiséget. A megfelelő illeszkedés alapvető fontosságú.',
    items: [
      {
        name: 'Low-volume maszk',
        level: 'Minden szint',
        desc: 'Kis belső térfogatú, szoros illeszkedésű maszk, amelyet kevés levegővel lehet egyenlíteni. Az alap felszerelés minden fríbúvárkodónak.',
      },
      {
        name: 'Fluid maszk',
        level: 'Haladó',
        desc: 'Speciális folyadéktöltésű maszk, amely felváltja a levegőt, és megszünteti az egyenlítési szükségletet. Extrém mélységeknél alkalmazható.',
      },
    ],
  },
  {
    id: 'ruha',
    label: '03',
    name: 'Búváröltöny',
    subtitle: 'Wetsuit',
    image: null,
    intro:
      'A fríbúvárkodási neoprén ruhák könnyebbek, rugalmasabbak és hajlékonyabbak, mint a hagyományos búvárruhák. A vastagság a víz hőmérsékletétől függ.',
    items: [
      {
        name: 'Nyitott bélésű neoprén (Open Cell)',
        level: 'Közepes–Haladó',
        desc: 'Belső felülete nyitott cellás, közvetlenül a bőrre tapad. Kiváló hőszigetelés és rugalmasság, de nehezebb felvenni. A legtöbb fríbúvár ezt preferálja.',
      },
      {
        name: 'Zárt bélésű neoprén (Closed Cell)',
        level: 'Kezdő',
        desc: 'Szokványos búváröltönyök, amelyek könnyebben felvehetők és tartósabbak. Kezdőknek ajánlott, míg a technikák elsajátítása folyamatban van.',
      },
      {
        name: '1,5–3 mm nyári ruha',
        level: 'Kezdő',
        desc: 'Meleg vizekhez és nyári Balatonhoz ideális. Minimális hővédelemmel, de maximális rugalmassággal biztosítja a szabad mozgást.',
      },
    ],
  },
  {
    id: 'biztonsag',
    label: '04',
    name: 'Biztonsági Eszközök',
    subtitle: 'Safety',
    image: null,
    intro:
      'A biztonsági felszerelések nem opcionálisak — nélkülözhetetlenek. Minden nyílt vízi merüléshez kötelező a megfelelő biztonsági eszközök használata.',
    items: [
      {
        name: 'Merülési kötél és bója',
        level: 'Kötelező',
        desc: 'A kötél referenciát nyújt a mélységhez és segíti az egyenlítést. A felszíni jelzőbója figyelmezteti a hajókat és egyéb vízi járműveket a merülési helyszínre.',
      },
      {
        name: 'Mélységmérő (számítógép)',
        level: 'Kötelező',
        desc: 'Rögzíti a maximális elért mélységet, a merülési időt és a felszíni pihenési időt. Versenyen kötelező; edzésen is erősen ajánlott.',
      },
      {
        name: 'Kés',
        level: 'Ajánlott',
        desc: 'Hálóban, növényzethálóban, vagy kötélben való fennakadás esetén az azonnali vágási lehetőség életmentő lehet.',
      },
    ],
  },
  {
    id: 'suly',
    label: '05',
    name: 'Súlyövrendszer',
    subtitle: 'Weight System',
    image: null,
    intro:
      'A megfelelő semleges felhajtóerő elengedhetetlen a biztonságos és hatékony fríbúvárkodáshoz. A súlyöv beállítása pontos számítást igényel.',
    items: [
      {
        name: 'Hagyományos ólomöv',
        level: 'Kezdő',
        desc: 'Egyszerű, állítható öv ólom lapokkal. Gyorskioldó csattal biztonsági helyzetben azonnal levethető. Kötelező biztonsági eszköz nyílt vízben.',
      },
      {
        name: 'Neoprén súlyöv',
        level: 'Közepes',
        desc: 'Rugalmas, a testhez simuló súlyöv, amely egyenletesebben osztja el a terhelést. Kényelmesebb, mint a hagyományos változat, és jobban illeszkedik.',
      },
      {
        name: 'Mellényes súlyrendszer',
        level: 'Haladó',
        desc: 'Mellénybe integrált súlyok, amelyek jobb testhelyzetet biztosítanak és egyenletesebben osztják el a terhelést. Különösen hasznos hosszabb merüléseknél.',
      },
    ],
  },
]

export default function EquipmentPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-0 overflow-hidden">
        <div className="h-[50vh] relative">
          <img
            src="/images/equipment.jpg"
            alt="Fríbúvárkodási felszerelés"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/30 to-background" />
          <div className="absolute bottom-0 left-0 right-0 pb-16 px-6 md:px-10 max-w-screen-xl mx-auto">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-4">Felszerelés</p>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.88]">
              A Helyes
              <br />
              <span className="text-ocean-light">Felszerelés</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            A fríbúvárkodáshoz szükséges felszerelés lényegesen eltér a hagyományos búvárkodástól.
            Nincs palack, nincs komplex eszközök — a cél az egyszerűség, a hatékonyság és a biztonság.
            Az alábbiakban áttekintjük a legfontosabb eszközöket és azok kiválasztási szempontjait.
          </p>
        </div>
      </section>

      {/* Equipment categories */}
      {categories.map((cat) => (
        <section key={cat.id} id={cat.id} className="py-20 border-b border-line">
          <div className="max-w-screen-xl mx-auto px-6 md:px-10">
            {/* Category header */}
            <div className="flex items-start gap-6 mb-12">
              <span className="text-[10px] font-mono text-text-dim tracking-widest mt-1">{cat.label}</span>
              <div>
                <p className="text-[9px] font-mono text-ocean-light tracking-[0.3em] uppercase mb-1">{cat.subtitle}</p>
                <h2 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase tracking-tighter leading-none">
                  {cat.name}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Intro */}
              <div className="lg:col-span-1 pr-0 lg:pr-12 pb-8 lg:pb-0 lg:border-r border-b lg:border-b-0 border-line">
                <p className="text-sm text-muted-foreground leading-relaxed">{cat.intro}</p>
              </div>

              {/* Items */}
              <div className="lg:col-span-2 lg:pl-12 pt-8 lg:pt-0">
                <div className="space-y-0 divide-y divide-line">
                  {cat.items.map((item) => (
                    <div key={item.name} className="py-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h3 className="text-lg font-bold uppercase tracking-tight">{item.name}</h3>
                        <span className={`inline-block mt-2 text-[9px] font-mono tracking-widest uppercase px-2 py-1 ${
                          item.level === 'Kötelező'
                            ? 'bg-destructive/10 text-destructive'
                            : item.level === 'Kezdő' || item.level === 'Kezdő–Közepes' || item.level === 'Minden szint'
                            ? 'bg-ocean-light/10 text-ocean-light'
                            : item.level === 'Közepes' || item.level === 'Közepes–Haladó'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-foreground/10 text-foreground'
                        }`}>
                          {item.level}
                        </span>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Checklist CTA */}
      <section className="py-20 bg-surface border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-4">Következő lépés</p>
              <h2 className="text-3xl font-black uppercase tracking-tighter">
                Tanuld meg a technikákat
              </h2>
              <p className="text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
                A megfelelő felszerelés önmagában nem elég — a helyes technika elsajátítása az igazi alap.
              </p>
            </div>
            <Link
              href="/technikak"
              className="text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 bg-ocean-light text-background hover:bg-foreground transition-colors duration-300 shrink-0"
            >
              Technikák és tippek
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
