import type { Metadata } from 'next'
import { Barlow, Barlow_Condensed, DM_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import CookieBanner from '@/components/layout/cookie-banner'

const barlow = Barlow({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow',
  display: 'swap',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-barlow-condensed',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Hungary Szabadtüdős Merülés',
    template: '%s | Hungary Szabadtüdős Merülés',
  },
  description:
    'A fríbúvárkodás Magyarországon — szabályok, történelem, technikák, felszerelés és közösség.',
  keywords: [
    'fríbúvárkodás',
    'freediving',
    'szabadtüdős merülés',
    'Magyarország',
    'Hungary',
    'apnea',
    'merülés',
  ],
  openGraph: {
    title: 'Hungary Szabadtüdős Merülés',
    description: 'A fríbúvárkodás Magyarországon',
    locale: 'hu_HU',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport = {
  themeColor: '#0a0f1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="hu"
      className={`${barlow.variable} ${barlowCondensed.variable} ${dmMono.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}
