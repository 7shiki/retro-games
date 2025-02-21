import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { getTranslations } from '@/utils/i18n'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RetroGames - Play Classic Games Online',
  description: 'Play your favorite retro games online. Collection of Nintendo, Sega, PlayStation, and Arcade classics.',
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getTranslations(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer locale={locale} initialMessages={messages} />
        </div>
      </body>
    </html>
  )
} 