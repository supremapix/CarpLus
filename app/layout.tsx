import type { Metadata, Viewport } from 'next'
import './globals.css'

// Force refresh

export const metadata: Metadata = {
  title: {
    default: 'Carplus Auto Center | Pneus em Curitiba - Portão',
    template: '%s | Carplus Auto Center',
  },
  description: 'Loja de pneus em Curitiba no bairro Portão. Pirelli, Goodyear, Bridgestone, Continental e mais. Montagem inclusa, parcelamento em até 10x sem juros. Ligue: (41) 3082-7282.',
  metadataBase: new URL('https://www.carpluspneuseoficina.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Carplus Auto Center',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f59c00',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="bg-white">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
