import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Rólunk',
  description: 'Ismerj meg minket — a Hungary Szabadtüdős Merülés projekt háttere, célja és kapcsolat.',
}

const values = [
  {
    num: '01',
    title: 'Hitelesség',
    desc: 'Minden tartalmunkat alapos kutatás és a fríbúvárkodói közösség tapasztalata alapján készítjük. Nem írunk olyat, amiben nem vagyunk biztosak.',
  },
  {
    num: '02',
    title: 'Biztonság',
    desc: 'A fríbúvárkodás szép sport, de komoly kockázatokat hordoz. Minden cikkünkben és leírásunkban elsőbbséget élvez a biztonsági szemlélet.',
  },
  {
    num: '03',
    title: 'Közösség',
    desc: 'A magyar fríbúvárkodói közösség összetartó és nyílt. Célunk, hogy ezt a szellemet az online térben is megőrizzük és erősítsük.',
  },
  {
    num: '04',
    title: 'Fejlődés',
    desc: 'A sport folyamatosan változik — új rekordok, új technikák, új tudományos felismerések. Tartalmainkat rendszeresen frissítjük, hogy mindig aktuálisak maradjanak.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 md:py-32 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-6">Rólunk</p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black uppercase tracking-tighter leading-[0.88] text-balance">
            A Projekt
            <br />
            <span className="text-ocean-light">Mögött</span>
          </h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-6">Küldetés</p>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
              Miért Létezik Ez Az Oldal?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              A Hungary Szabadtüdős Merülés egy oktatási jellegű, nem kereskedelmi projekt, amelynek
              célja a fríbúvárkodásról szóló megbízható, magyar nyelvű információk összegyűjtése és
              közzététele.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Magyarországon a fríbúvárkodás iránt érdeklődők korábban szinte kizárólag angol nyelvű
              forrásokra támaszkodhattak. Ez az oldal hiánypótló céllal jött létre: olyan átfogó,
              jól szerkesztett magyar nyelvű forrást biztosítani, amely a kezdőktől a haladókig
              mindenki számára hasznos.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Az oldalon megjelenő tartalmak kutatáson, a magyar és nemzetközi fríbúvárkodói
              közösség tapasztalatain, valamint a sport tudományos irodalmán alapulnak.
            </p>
          </div>
          <div className="border border-line p-8 md:p-12 bg-surface">
            <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-8">Az oldal tartalmaz</p>
            <ul className="space-y-6">
              {[
                'Részletes szabálygyűjtemény minden diszciplínára',
                'A fríbúvárkodás magyarországi történelme időrendben',
                'Technikák és edzési tervek kezdőktől haladókig',
                'Felszerelési útmutatók és ajánlások',
                'Blogcikkek tudományról, biztonságról és sporttörténelemről',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-sm text-muted-foreground">
                  <span className="text-[9px] font-mono text-ocean-light tracking-widest shrink-0 mt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-12">Értékeink</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-line border border-line">
            {values.map((v) => (
              <div key={v.num} className="p-8 md:p-10 group hover:bg-surface transition-colors duration-300">
                <span className="text-[9px] font-mono text-text-dim tracking-widest block mb-6">{v.num}</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-4 group-hover:text-ocean-light transition-colors duration-300">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kapcsolat" className="py-20 border-b border-line">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-6">Kapcsolat</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-8">
                Írj Nekünk
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8">
                Kérdésed van, vagy tartalmi javaslatod, hibajavítási észrevételed? Keress minket
                e-mailben. Minden üzenetet elolvasunk és lehetőség szerint válaszolunk.
              </p>
              <a
                href="mailto:info@hungaryszabadtudosmerules.com"
                className="text-sm font-mono text-ocean-light hover:text-foreground transition-colors duration-300 tracking-wider"
              >
                info@hungaryszabadtudosmerules.com
              </a>
            </div>

            <div className="border-t lg:border-t-0 lg:border-l border-line pt-10 lg:pt-0 lg:pl-16">
              <p className="text-[10px] tracking-[0.4em] uppercase text-ocean-light font-mono mb-8">Gyors linkek</p>
              <ul className="space-y-4">
                {[
                  { href: '/szabalyok', label: 'Szabályok és diszciplínák' },
                  { href: '/tortenet', label: 'A sport magyarországi története' },
                  { href: '/technikak', label: 'Technikák és edzéstervek' },
                  { href: '/felszereles', label: 'Felszerelési útmutató' },
                  { href: '/blog', label: 'Blog és cikkek' },
                  { href: '/adatvedelem', label: 'Adatvédelmi irányelv' },
                  { href: '/cookie-policy', label: 'Cookie-irányelv' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-ocean-light transition-colors duration-300 flex items-center gap-3"
                    >
                      <span className="w-4 h-px bg-line inline-block" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
