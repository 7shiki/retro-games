import { Metadata } from 'next'
import PopularGames from '@/components/games/PopularGames'
import NewGames from '@/components/games/NewGames'
import SearchBar from '@/components/layout/SearchBar'

export const metadata: Metadata = {
  title: 'Retro Games - Play Classic Games Online',
  description: 'Play your favorite retro games online. Features Nintendo, Sega, NEC, Atari, PlayStation, and Arcade classics.',
  keywords: 'retro games, classic games, online games, nintendo, sega, playstation, arcade'
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 text-transparent bg-clip-text">
          Play Classic Games
        </h1>
        <p className="text-gray-300 text-xl mb-8">
          Rediscover the golden age of gaming with our collection of Nintendo, Sega, PlayStation, and Arcade classics
        </p>
        <div className="max-w-xl">
          <SearchBar />
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <nav>
          <ul className="flex flex-wrap gap-4">
            {['Nintendo', 'Sega', 'NEC', 'PlayStation', 'Arcade', 'Other'].map((category) => (
              <li key={category}>
                <a 
                  href={`/${category.toLowerCase()}-games`}
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  {category}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Popular Games Section */}
      <section className="py-8">
        <PopularGames />
      </section>

      {/* New Games Section */}
      <section className="px-4 py-16 relative bg-gray-900/30">
        <div className="relative max-w-7xl mx-auto">
          <NewGames />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-4 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative z-10 bg-gray-800/50 p-8 rounded-2xl border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400 mb-4 retro-text">
              Stay Updated
            </h3>
            <p className="text-gray-300 mb-6">
              Get notified when we add new classic games to our collection
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-900/50 border border-purple-500/30 rounded-l-lg focus:outline-none focus:border-purple-500"
              />
              <button className="px-6 py-2 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
