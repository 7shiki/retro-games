import { Metadata } from 'next'
import PopularGames from '@/components/games/PopularGames'
import NewGames from '@/components/games/NewGames'
import SearchBar from '@/components/layout/SearchBar'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retro Games - Play Classic Games Online',
  description: 'Play your favorite retro games online. Features Nintendo, Sega, NEC, Atari, PlayStation, and Arcade classics.',
  keywords: 'retro games, classic games, online games, nintendo, sega, playstation, arcade'
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <section className="px-4 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 retro-text-shadow">
            Play Classic Games
          </h1>
          <p className="text-gray-300 text-xl mb-8 retro-glow">
            Rediscover the golden age of gaming
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="px-4 py-12 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-purple-400 retro-text">
            Most Popular Games
          </h2>
          <PopularGames />
          <div className="text-center mt-8">
            <Link href="/all-games" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 retro-button">
              View All Games
            </Link>
          </div>
        </div>
      </section>

      {/* New Games Section */}
      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-purple-400 retro-text">
            New Games
          </h2>
          <NewGames />
        </div>
      </section>
    </main>
  )
}
