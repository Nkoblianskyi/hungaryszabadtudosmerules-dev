import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Adatvédelmi Irányelv',
  description: 'A Hungary Szabadtüdős Merülés weboldal adatvédelmi irányelvei.',
}

const sections = [
  {
    title: 'Adatkezelő',
    content: `Az adatkezelő a Hungary Szabadtüdős Merülés weboldal üzemeltetője (a továbbiakban: "mi", "minket", "a weboldal"). Kapcsolatfelvétel az alábbi e-mail-cíemen lehetséges: info@hungaryszabadtudosmerules.com`,
  },
  {
    title: 'Gyűjtött adatok',
    content: `Ez a weboldal alapvetően statikus tájékoztató oldal, és személyes adatokat közvetlen módon nem gyűjtünk. Amennyiben felkeresed a weboldalt, a webszerver automatikusan rögzítheti az alábbi technikai adatokat: IP-cím, böngésző típusa és verziója, az oldal megtekintésének dátuma és ideje, a megtekintett oldalak. Ezen adatokat kizárólag technikai célra, a weboldal megfelelő működésének biztosítása érdekében kezeljük.`,
  },
  {
    title: 'Cookie-k (sütik)',
    content: `A weboldal funkcionális cookie-kat használ a felhasználói élmény javítása érdekében. Ezek között szerepel a cookie-hozzájárulás rögzítése, amely eltárolja, hogy a felhasználó elfogadta vagy elutasította a cookie-kat. A cookie-kezelésről részletes tájékoztatást a Cookie-irányelv tartalmaz.`,
  },
  {
    title: 'E-mailes kapcsolatfelvétel',
    content: `Amennyiben e-mailben veszed fel velünk a kapcsolatot, az e-mail-üzenetben szereplő személyes adatokat (pl. név, e-mail-cím) kizárólag az üzenet megválaszolásához, a kapcsolatfelvétel kezeléséhez használjuk fel. Adatait harmadik félnek nem adjuk át, és azokat legfeljebb az ügyintézés lezárásától számított 1 évig őrizzük meg.`,
  },
  {
    title: 'Adatbiztonság',
    content: `Megfelelő technikai és szervezési intézkedéseket alkalmazunk a kezelt személyes adatok védelme érdekében, a jogosulatlan hozzáférés, módosítás, nyilvánosságra hozatal vagy törlés ellen. A weboldal HTTPS protokollon keresztül érhető el.`,
  },
  {
    title: 'Jogaid',
    content: `Az Európai Unió Általános Adatvédelmi Rendelete (GDPR) alapján az alábbi jogok illetnek meg: hozzáférés joga a kezelt adatokhoz, helyesbítés joga, törlés joga ("az elfeledtetéshez való jog"), adatkezelés korlátozásának joga, adathordozhatóság joga, tiltakozás joga. Ezen jogok érvényesítéséhez kérjük, vedd fel velünk a kapcsolatot az info@hungaryszabadtudosmerules.com e-mail-cíemen.`,
  },
  {
    title: 'Módosítások',
    content: `Fenntartjuk a jogot az adatvédelmi irányelv módosítására. Az érdemi változásokról az oldalon tájékoztatjuk a látogatókat. Az irányelv jelenlegi verziója 2024. január 1-jétől érvényes.`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-6">Jogi</p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.88] text-balance">
            Adatvédelmi
            <br />
            Irányelv
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* TOC */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-28">
                <p className="text-[9px] font-mono tracking-[0.3em] uppercase text-ocean-light mb-6">Tartalom</p>
                <nav aria-label="Adatvédelmi irányelv tartalomjegyzéke">
                  <ul className="space-y-3">
                    {sections.map((s, i) => (
                      <li key={i}>
                        <a
                          href={`#section-${i}`}
                          className="text-xs text-muted-foreground hover:text-ocean-light transition-colors duration-300 leading-relaxed"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>

            {/* Sections */}
            <div className="lg:col-span-8 lg:col-start-5 space-y-0 divide-y divide-line border-t border-line">
              {sections.map((s, i) => (
                <div key={i} id={`section-${i}`} className="py-10">
                  <h2 className="text-xl font-bold uppercase tracking-tight mb-4 text-foreground">
                    {s.title}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="border-t border-line py-10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center gap-6">
          <Link
            href="/cookie-policy"
            className="text-xs tracking-[0.15em] uppercase font-mono text-ocean-light hover:text-foreground transition-colors duration-300"
          >
            Cookie-irányelv
          </Link>
          <Link
            href="/rolunk#kapcsolat"
            className="text-xs tracking-[0.15em] uppercase font-mono text-muted-foreground hover:text-ocean-light transition-colors duration-300"
          >
            Kapcsolatfelvétel
          </Link>
        </div>
      </div>
    </div>
  )
}
