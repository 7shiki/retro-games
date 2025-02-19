import { Metadata } from 'next'
import SearchBar from '@/components/layout/SearchBar'
import { categories } from '@/config/categories'
import GameList from '@/components/games/GameList'

export const metadata: Metadata = {
  title: 'All Games - RetroGames',
  description: 'Browse all retro games available to play online. Nintendo, Sega, PlayStation and more classic games.',
  keywords: 'retro games, classic games, online games, Nintendo, Sega, PlayStation, arcade games'
}

export default function AllGamesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Games
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl opacity-90">
            Browse our complete collection of classic retro games available to play online.
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Games Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Filters */}
          <div className="mb-8 flex flex-wrap gap-4">
            {Object.keys(categories).map((platform) => (
              <button
                key={platform}
                className="px-4 py-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
              >
                {platform}
              </button>
            ))}
          </div>

          {/* Games Grid */}
          <GameList />
        </div>
      </section>
    </main>
  )
}
