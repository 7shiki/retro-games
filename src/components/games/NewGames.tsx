import Link from 'next/link'
import Image from 'next/image'

// 游戏数据类型定义
interface Game {
  id: number
  title: string
  platform: string
  imageUrl: string
  href: string
  description: string
  embedUrl: string
}

// 示例数据
const newGames: Game[] = [
  {
    id: 1,
    title: 'Mega Man X',
    platform: 'SNES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/snes-games/mega-man-x',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 2,
    title: 'Castlevania',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/castlevania',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 3,
    title: 'Metal Slug',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/metal-slug',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 4,
    title: 'Dragon Quest',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/dragon-quest',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 5,
    title: 'Pac-Man',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/pac-man',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 6,
    title: 'Mega Man X',
    platform: 'SNES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/snes-games/mega-man-x',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 7,
    title: 'Castlevania',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/castlevania',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 8,
    title: 'Metal Slug',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/metal-slug',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 9,
    title: 'Dragon Quest',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/dragon-quest',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  },
  {
    id: 10,
    title: 'Pac-Man',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/pac-man',
    description: '',
    embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
  }
]

export default function NewGames() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-purple-400 retro-text glow-effect">
            <span className="retro-logo text-4xl md:text-5xl">
              New Retro Games
            </span>
          </h2>
          <div className="ml-4 pixel-art-star animate-spin-slow"></div>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">Updated daily</span>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {newGames.map((game) => (
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
  )
}
