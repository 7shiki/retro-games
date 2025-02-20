import { Metadata } from 'next'
import PopularGames from '@/components/games/PopularGames'
import NewGames from '@/components/games/NewGames'
import HomeSearch from '@/components/layout/HomeSearch'

export const metadata: Metadata = {
  title: 'Retro Games - Play Retro Games Online. No Download Required.',
  description: 'Play retro games online from NES, SNES, GB, GBC, GBA, SEGA Genesis,PSX,PS1 and Classic Arcade Games in your browser.Free and no download required.',
  keywords: ''
}

export const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://retro-games.org/#website',
      'url': 'https://retro-games.org/',
      'name': 'RetroGames',
      'description': 'Play retro games online from NES, SNES, GB, GBC, GBA, SEGA Genesis, PSX, PS1 and Classic Arcade Games in your browser. Free and no download required.',
      'potentialAction': {
        '@type': 'SearchAction',
        'target': 'https://retro-games.org/all-games?search={search_term_string}',
        'query-input': 'required name=search_term_string'
      }
    },
    {
      '@type': 'VideoGameSeries',
      '@id': 'https://retro-games.org/all-games#games',
      'name': 'Retro Games Collection',
      'description': 'Collection of classic retro games from multiple platforms including Nintendo, Sega, PlayStation, and Arcade games.',
      'genre': ['Retro Games', 'Classic Games', 'Arcade Games'],
      'gamePlatform': [
        'Nintendo Entertainment System',
        'Super Nintendo',
        'Game Boy',
        'Game Boy Color',
        'Game Boy Advance',
        'Nintendo 64',
        'Nintendo DS',
        'Sega Genesis',
        'PlayStation',
        'Arcade'
      ]
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
              Relive your childhood joy and nostalgia with our collection of Retro Games, featuring timeless classics from Nintendo, Sega, NEC, Atari, PlayStation, and Arcade.No download required.
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
    </>
  )
}
