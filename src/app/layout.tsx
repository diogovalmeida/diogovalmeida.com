import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Diogo Almeida',
  description: 'Portfolio of Diogo Almeida, focused on Cloud & DevOps.',
  icons: {
    apple: '/apple-touch-icon.png',
    icon: './icon.png',
  },
  openGraph: {
    title: 'Diogo Almeida',
    description: 'Portfolio of Diogo Almeida, focused on Cloud & DevOps.',
    url: 'https://www.diogovalmeida.com',
    siteName: 'Diogo Almeida',
    images: [
      {
        url: 'https://www.diogovalmeida.com/og.png',
        width: 1200,
        height: 630,
        alt: 'Diogo Almeida · Cloud & DevOps Engineer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diogo Almeida',
    description: 'Portfolio of Diogo Almeida, focused on Cloud & DevOps.',
    images: ['https://www.diogovalmeida.com/og.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-screen flex flex-col" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
        <div className="max-w-2xl mx-auto px-6 py-16 w-full flex flex-col min-h-screen">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
