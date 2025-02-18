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

// 示例游戏数据
const popularGames: Game[] = [
  {
    id: 1,
    title: 'Super Mario Bros',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/super-mario-bros'
  },
  {
    id: 2,
    title: 'Sonic the Hedgehog',
    platform: 'Genesis',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/genesis-games/sonic-the-hedgehog'
  },
  {
    id: 3,
    title: 'Street Fighter II',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/street-fighter-2'
  },
  {
    id: 4,
    title: 'Final Fantasy VII',
    platform: 'PlayStation',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/playstation-games/final-fantasy-7'
  },
  {
    id: 5,
    title: 'Mega Man X',
    platform: 'SNES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/snes-games/mega-man-x'
  }, {
    id: 6,
    title: 'Super Mario Bros',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/super-mario-bros'
  },
  {
    id: 7,
    title: 'Sonic the Hedgehog',
    platform: 'Genesis',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/genesis-games/sonic-the-hedgehog'
  },
  {
    id: 8,
    title: 'Street Fighter II',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/street-fighter-2'
  },
  {
    id: 9,
    title: 'Final Fantasy VII',
    platform: 'PlayStation',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/playstation-games/final-fantasy-7'
  },
  {
    id: 10,
    title: 'Mega Man X',
    platform: 'SNES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/snes-games/mega-man-x'
  },
  {
    id: 11,
    title: 'Super Mario Bros',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/super-mario-bros'
  },
  {
    id: 12,
    title: 'Sonic the Hedgehog',
    platform: 'Genesis',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/genesis-games/sonic-the-hedgehog'
  },
  {
    id: 13,
    title: 'Street Fighter II',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/street-fighter-2'
  },
  {
    id: 14,
    title: 'Final Fantasy VII',
    platform: 'PlayStation',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/playstation-games/final-fantasy-7'
  },
  {
    id: 15,
    title: 'Mega Man X',
    platform: 'SNES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/snes-games/mega-man-x'
  }, {
    id: 16,
    title: 'Super Mario Bros',
    platform: 'NES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/nes-games/super-mario-bros'
  },
  {
    id: 17,
    title: 'Sonic the Hedgehog',
    platform: 'Genesis',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/genesis-games/sonic-the-hedgehog'
  },
  {
    id: 18,
    title: 'Street Fighter II',
    platform: 'Arcade',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/arcade-games/street-fighter-2'
  },
  {
    id: 19,
    title: 'Final Fantasy VII',
    platform: 'PlayStation',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/playstation-games/final-fantasy-7'
  },
  {
    id: 20,
    title: 'Mega Man X',
    platform: 'SNES',
    imageUrl: '/images/games/Tekken 3.png',
    href: '/snes-games/mega-man-x'
  }
]

export default function PopularGames() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-400 retro-text">
          Most Popular Games
        </h2>
        <Link
          href="/all-games"
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          View All Games
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {popularGames.map((game) => (
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
                    Play Now
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
