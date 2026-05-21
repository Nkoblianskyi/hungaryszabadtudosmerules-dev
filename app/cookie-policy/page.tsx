import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie-irányelv',
  description: 'A Hungary Szabadtüdős Merülés weboldal cookie-irányelve.',
}

const cookieTypes = [
  {
    name: 'Szükséges cookie-k',
    required: true,
    desc: 'Ezek a cookie-k a weboldal alapvető működéséhez elengedhetetlenek, és nem kapcsolhatók ki. Általában csak az Ön által elvégzett műveletek hatására kerülnek beállításra (pl. adatvédelmi beállítások megadása).',
    cookies: [
      { name: 'cookie-consent', purpose: 'Tárolja, hogy a felhasználó elfogadta-e a cookie-irányelvet.', duration: '1 év' },
    ],
  },
  {
    name: 'Analitikai cookie-k',
    required: false,
    desc: 'Ezen cookie-k segítségével számolhatjuk meg a látogatásokat és a forgalmi forrásokat, így mérhetjük és javíthatjuk oldalunk teljesítményét. Az összes általuk gyűjtött adat összesített és névtelen.',
    cookies: [
      { name: '_ga', purpose: 'Google Analytics azonosítási cookie (ha engedélyezve van).', duration: '2 év' },
      { name: '_gid', purpose: 'Google Analytics munkamenet-azonosító.', duration: '24 óra' },
    ],
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-6">Jogi</p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black uppercase tracking-tighter leading-[0.88] text-balance">
            Cookie-
            <br />
            Irányelv
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 max-w-4xl">
          <div className="space-y-0 divide-y divide-line border-t border-line">
            {/* What are cookies */}
            <div className="py-10">
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Mi az a Cookie?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A cookie (süti) egy kis szöveges fájl, amelyet a weboldal a böngésződ által a számítógépeden
                vagy mobileszközödön tárol, amikor meglátogatod az oldalt. A cookie-k segítségével a weboldal
                emlékezni tud a beállításaidra (pl. cookie-beleegyezés), és jobb felhasználói élményt tud biztosítani.
              </p>
            </div>

            {/* How we use */}
            <div className="py-10">
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Hogyan Használjuk a Cookie-kat?</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Weboldalunk minimális mennyiségű cookie-t használ, kizárólag a weboldal működéséhez
                szükséges és a felhasználói élmény javítása céljából. Személyes adatokat a cookie-k
                útján nem gyűjtünk és nem adunk át harmadik félnek.
              </p>
            </div>

            {/* Cookie types */}
            {cookieTypes.map((type) => (
              <div key={type.name} className="py-10">
                <div className="flex items-center gap-4 mb-4">
                  <h2 className="text-xl font-bold uppercase tracking-tight">{type.name}</h2>
                  {type.required && (
                    <span className="text-[9px] font-mono tracking-widest uppercase px-2 py-1 bg-ocean-light/10 text-ocean-light">
                      Kötelező
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">{type.desc}</p>

                {/* Cookie table */}
                <div className="border border-line overflow-hidden">
                  <div className="grid grid-cols-3 bg-surface px-6 py-3 border-b border-line">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-ocean-light">Név</span>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-ocean-light">Cél</span>
                    <span className="text-[9px] font-mono tracking-widest uppercase text-ocean-light">Lejárat</span>
                  </div>
                  {type.cookies.map((cookie, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 px-6 py-4 border-b border-line last:border-b-0 gap-4"
                    >
                      <span className="text-xs font-mono text-foreground">{cookie.name}</span>
                      <span className="text-xs text-muted-foreground leading-relaxed">{cookie.purpose}</span>
                      <span className="text-xs font-mono text-text-dim">{cookie.duration}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Managing cookies */}
            <div className="py-10">
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Cookie-k Kezelése</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A legtöbb webböngésző alapbeállítás szerint elfogadja a cookie-kat. Böngészőjének
                beállításaiban azonban bármikor módosíthatja ezt, és törölheti a már tárolt cookie-kat.
                Felhívjuk figyelmét, hogy a cookie-k letiltása befolyásolhatja weboldal egyes
                funkcióinak működését.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Weboldalunkon a cookie-kezelési beállításokat az oldal alján megjelenő sávban tudja
                módosítani. A korábban adott hozzájárulást bármikor visszavonhatja.
              </p>
            </div>

            {/* Contact */}
            <div className="py-10">
              <h2 className="text-xl font-bold uppercase tracking-tight mb-4">Kérdések</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cookie-irányelveinkkel kapcsolatos kérdések esetén kérjük, vedd fel velünk a kapcsolatot:{' '}
                <a
                  href="mailto:info@hungaryszabadtudosmerules.com"
                  className="text-ocean-light hover:text-foreground transition-colors duration-300"
                >
                  info@hungaryszabadtudosmerules.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer nav */}
      <div className="border-t border-line py-10">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 flex items-center gap-6">
          <Link
            href="/adatvedelem"
            className="text-xs tracking-[0.15em] uppercase font-mono text-ocean-light hover:text-foreground transition-colors duration-300"
          >
            Adatvédelmi irányelv
          </Link>
          <Link
            href="/rolunk"
            className="text-xs tracking-[0.15em] uppercase font-mono text-muted-foreground hover:text-ocean-light transition-colors duration-300"
          >
            Rólunk
          </Link>
        </div>
      </div>
    </div>
  )
}
