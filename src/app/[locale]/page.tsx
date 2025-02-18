import { Metadata } from 'next'
import PopularGames from '@/components/games/PopularGames'
import NewGames from '@/components/games/NewGames'
import SearchBar from '@/components/layout/SearchBar'

export const metadata: Metadata = {
  title: 'Retro Games - Play Retro Games Online',
  description: 'Play your favorite retro games online. Features Nintendo, Sega, NEC, Atari, PlayStation, and Arcade classics.',
  keywords: ''
}

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            <span className="retro-gradient">Play Retro</span>
            <br />
            <span className="retro-text">Games</span>
          </h1>
          <p className="hero-description text-xl md:text-2xl mb-8 max-w-2xl">
            Rediscover the golden age of gaming with our collection of Nintendo, Sega, PlayStation, and Arcade classics
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="py-16 px-4 bg-section">
        <div className="max-w-7xl mx-auto">
          <PopularGames />
        </div>
      </section>

      {/* New Games Section */}
      <section className="py-16 px-4 bg-section">
        <div className="max-w-7xl mx-auto">
          <NewGames />
        </div>
      </section>

    </main>
  )
}
