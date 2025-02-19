import { Metadata } from 'next'
import PopularGames from '@/components/games/PopularGames'
import NewGames from '@/components/games/NewGames'
import HomeSearch from '@/components/layout/HomeSearch'

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
            <span className="retro-logo text-5xl md:text-7xl block mb-2">Play</span>
            <span className="retro-logo text-5xl md:text-7xl">Retro Games</span>
          </h1>
          <p className="hero-description text-xl md:text-2xl mb-8 max-w-2xl">
            Relive your childhood joy and nostalgia with our collection of Retro Games, featuring timeless classics from Nintendo, Sega, NEC, Atari, PlayStation, and Arcade.
          </p>
          <HomeSearch />
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
