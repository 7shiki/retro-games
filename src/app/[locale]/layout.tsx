import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import dynamic from 'next/dynamic'
import Footer from '@/components/layout/Footer'

const Header = dynamic(() => import('@/components/layout/Header'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RetroGames - Play Classic Games Online',
  description: 'Play your favorite retro games online. Collection of Nintendo, Sega, PlayStation, and Arcade classics.',
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  )
} 