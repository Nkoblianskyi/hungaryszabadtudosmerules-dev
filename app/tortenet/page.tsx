import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fríbúvárkodás Története Magyarországon',
  description: 'A fríbúvárkodás történelme Magyarországon az első úttörőktől napjainkig.',
}

const timeline = [
  {
    period: '1960-as évek',
    title: 'Az Első Úttörők',
    desc: 'A fríbúvárkodás első szervezett formái megjelentek Magyarországon. A Balaton parti fürdőzők között akadtak olyanok, akik a légzés visszatartásának határait feszegették. Ezek az első kísérletek egy hosszú fejlődési folyamat kezdetét jelezték.',
  },
  {
    period: '1970-es évek',
    title: 'Az Első Szervezett Próbálkozások',
    desc: 'A csoportos búvárkodás elterjedt a hazai vizeken. A sportolók egyre inkább törekedtek arra, hogy rendszeres és biztonságos edzéseket szervezzenek. Az egyéni kísérletek helyett a csoportos tevékenység vált meghatározóvá.',
  },
  {
    period: '1980-as évek',
    title: 'A Fejlődés Évtizede',
    desc: 'Az egyre jobb minőségű felszerelések elérhetővé válásával a sport fejlődésnek indult. A hazai sportolók elkezdtek kapcsolatot keresni a nemzetközi közösséggel, és egyre több versenyről érkeztek visszajelzések. A merülési technikák szisztematikus fejlesztése megkezdődött.',
  },
  {
    period: '1990-es évek',
    title: 'A Rendszerváltás Utáni Fellendülés',
    desc: 'A rendszerváltás nyomán a határok megnyílásával a magyar fríbúvárkodók szabadon utazhattak a nemzetközi versenyekre. Az első hazai oktatási programok megjelentek, és a sport rohamosan terjedt a fiatal sportolók körében.',
  },
  {
    period: '2000-es évek',
    title: 'A Szervezett Fejlődés Kora',
    desc: 'Az ezredforduló után a fríbúvárkodás hazánkban igazán szervezett sporttá vált. A képzett oktatók száma nőtt, és az első hazai versenyek is megrendezésre kerültek. A technológiai fejlődés eredményeként a felszerelések egyre inkább elérhetővé váltak.',
  },
  {
    period: '2010-es évek',
    title: 'Közösség és Technológia',
    desc: 'Az internet és a közösségi platformok elterjedésével a magyar fríbúvárkodói közösség szorosabbá vált. A tudás terjedése felgyorsult, és egyre több sportegyesület jött létre az ország különböző régióiban. A Balaton mellett a mesterséges tavak is fontos edzőhelyekké váltak.',
  },
  {
    period: 'Napjaink',
    title: 'A Mai Magyar Fríbúvárkodás',
    desc: 'A jelenlegi kép változatos és ígéretes. A sport minden korosztályban jelen van, a gyerekektől a felnőttekig. A hazai versenyrendszer fejlett, és a magyar sportolók rendszeresen részt vesznek a nemzetközi porondon is. A jövő biztató: egyre több fiatal kapcsolódik be a sportba.',
  },
]

export default function HistoryPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-0 overflow-hidden">
        <div className="h-[50vh] relative">
          <img
            src="/images/history.jpg"
            alt="A fríbúvárkodás kezdetei"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/20 to-background" />
          <div className="absolute bottom-0 left-0 right-0 pb-16 px-6 md:px-10 max-w-screen-xl mx-auto">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-4">Történelem</p>
            <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.88]">
              Egy Sport
              <br />
              <span className="text-ocean-light">Örökség</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A fríbúvárkodás Magyarországon hosszú utat tett meg az első kísérleti merülésektől napjaink
            fejlett versenyrendszeréig. Ez a sport mindig is tükrözte a magyar sportolók elszántságát és
            a természethez való mély kötődését.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/4 top-0 bottom-0 w-px bg-line hidden md:block" aria-hidden="true" />

            <div className="space-y-0 divide-y divide-line border-t border-line">
              {timeline.map((item, i) => (
                <div key={i} className="py-12 grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
                  <div className="md:pr-8">
                    <span className="text-[10px] font-mono tracking-widest text-ocean-light uppercase">{item.period}</span>
                    <div className="hidden md:block w-2 h-2 bg-ocean-light rounded-full mt-3" />
                  </div>
                  <div className="md:col-span-3">
                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-4">{item.title}</h2>
                    <p className="text-base text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-line bg-surface">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">Ismerd meg a sport technikáit</p>
            <p className="text-xl font-bold uppercase tracking-tight mt-1">Technikák és edzési tervek</p>
          </div>
          <Link
            href="/technikak"
            className="text-xs tracking-[0.2em] uppercase font-medium px-8 py-4 bg-ocean-light text-background hover:bg-foreground transition-colors duration-300 shrink-0"
          >
            Technikák felfedezése
          </Link>
        </div>
      </section>
    </div>
  )
}
