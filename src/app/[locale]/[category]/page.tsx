import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SearchBar from '@/components/layout/SearchBar'
import { categoryMap } from '@/config/categories'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
  params: {
    locale: string
    category: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  if (!params?.category) {
    return {
      title: 'Category Not Found',
      description: 'The requested game category could not be found.'
    }
  }

  const categorySlug = params.category.replace('-games', '')
  const info = categoryMap[categorySlug]

  if (!info) {
    return {
      title: 'Category Not Found',
      description: 'The requested game category could not be found.'
    }
  }

  return {
    title: `${info.title} - Play Online | RetroGames`,
    description: info.description,
    keywords: `${info.platform}, ${info.company}, retro games, classic games, online games`
  }
}

export default function CategoryPage({ params }: Props) {
  if (!params?.category) {
    notFound()
  }

  const categorySlug = params.category.replace('-games', '')
  const info = categoryMap[categorySlug]

  if (!info) {
    notFound()
  }

  // 模拟游戏数据（与 PopularGames 格式一致）
  const games = [
    { 
      id: 1,
      title: 'Super Mario Bros',
      platform: 'NES',
      imageUrl: '/images/games/Tekken 3.png',
      href: '/nes-games/super-mario-bros'
    },
    { 
      id: 2,
      title: 'The Legend of Zelda',
      platform: 'NES',
      imageUrl: '/images/games/Tekken 3.png',
      href: '/nes-games/zelda'
    },
    { 
      id: 3,
      title: 'Metroid',
      platform: 'NES',
      imageUrl: '/images/games/Tekken 3.png',
      href: '/nes-games/metroid'
    }
    // ... 更多游戏
  ]

  return (
    <main className="min-h-screen relative">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {info.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl opacity-90">
            {info.description}
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Games Grid Section */}
      <section className="py-16 px-4 bg-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <div key={game.id} className="game-card group">
                <Link href={game.href} className="block">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={game.imageUrl}
                      alt={game.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <button className="retro-button">
                        Play Game
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {game.title}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {game.platform}
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
