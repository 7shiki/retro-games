import Link from 'next/link'
import Image from 'next/image'

// 游戏数据类型定义
interface Game {
  id: number
  title: string
  platform: string
  imageUrl: string
  href: string
}

// 示例数据
const newGames: Game[] = [
  {
    id: 1,
    title: 'Mega Man X',
    platform: 'SNES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/snes-games/mega-man-x'
  },
  {
    id: 2,
    title: 'Castlevania',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/castlevania'
  },
  {
    id: 3,
    title: 'Metal Slug',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/metal-slug'
  },
  {
    id: 4,
    title: 'Dragon Quest',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/dragon-quest'
  },
  {
    id: 5,
    title: 'Pac-Man',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/pac-man'
  }
]

export default function NewGames() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-purple-400 retro-text glow-effect">
            New Games
          </h2>
          <div className="ml-4 pixel-art-star animate-spin-slow"></div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">Updated daily</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {newGames.map((game) => (
          <div key={game.id} className="game-card group">
            <Link href={game.href} className="block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="retro-button">
                    Play Now
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
                  {game.title}
                </h3>
                <span className="text-sm text-gray-400">
                  {game.platform}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
