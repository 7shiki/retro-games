import Link from 'next/link'
import Image from 'next/image'

// 游戏数据类型定义
export interface Game {
    id: number
    title: string
    platform: string
    imageUrl: string
    href: string
    embedUrl: string
    description: string
}

// 示例游戏数据
export const allGames: Game[] = [
    {
        id: 1,
        title: 'Tekken 3',
        platform: 'PlayStation',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/playstation-games/tekken-3',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 2,
        title: 'Sonic the Hedgehog',
        platform: 'Genesis',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/genesis-games/sonic-the-hedgehog',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 3,
        title: 'Street Fighter II',
        platform: 'Arcade',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/arcade-games/street-fighter-2',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 4,
        title: 'Final Fantasy VII',
        platform: 'PlayStation',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/playstation-games/final-fantasy-7',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 5,
        title: 'Mega Man X',
        platform: 'SNES',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/snes-games/mega-man-x',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    }, {
        id: 6,
        title: 'Super Mario Bros',
        platform: 'NES',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/nes-games/super-mario-bros',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 7,
        title: 'Sonic the Hedgehog',
        platform: 'Genesis',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/genesis-games/sonic-the-hedgehog',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 8,
        title: 'Street Fighter II',
        platform: 'Arcade',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/arcade-games/street-fighter-2',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 9,
        title: 'Final Fantasy VII',
        platform: 'PlayStation',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/playstation-games/final-fantasy-7',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 10,
        title: 'Mega Man X',
        platform: 'SNES',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/snes-games/mega-man-x',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 11,
        title: 'Super Mario Bros',
        platform: 'NES',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/nes-games/super-mario-bros',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 12,
        title: 'Sonic the Hedgehog',
        platform: 'Genesis',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/genesis-games/sonic-the-hedgehog',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 13,
        title: 'Street Fighter II',
        platform: 'Arcade',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/arcade-games/street-fighter-2',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 14,
        title: 'Final Fantasy VII',
        platform: 'PlayStation',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/playstation-games/final-fantasy-7',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 15,
        title: 'Mega Man X',
        platform: 'SNES',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/snes-games/mega-man-x',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    }, {
        id: 16,
        title: 'Super Mario Bros',
        platform: 'NES',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/nes-games/super-mario-bros',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 17,
        title: 'Sonic the Hedgehog',
        platform: 'Genesis',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/genesis-games/sonic-the-hedgehog',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 18,
        title: 'Street Fighter II',
        platform: 'Arcade',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/arcade-games/street-fighter-2',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 19,
        title: 'Final Fantasy VII',
        platform: 'PlayStation',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/playstation-games/final-fantasy-7',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 20,
        title: 'Mega Man X',
        platform: 'SNES',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/snes-games/mega-man-x',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    },
    {
        id: 21,
        title: 'Mega Man X',
        platform: 'SNES',
        imageUrl: '/images/games/Tekken 3.png',
        href: '/snes-games/mega-man-x',
        description: '',
        embedUrl: '<iframe src="https://www.retrogames.cc/embed/40238-tekken-3.html" width="600" height="450" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>'
    }
]

interface GameListProps {
    games?: Game[]
    showLoadMore?: boolean
    onLoadMore?: () => void
}

export default function GameList({
    games = allGames,
    showLoadMore = true,
    onLoadMore
}: GameListProps) {
    return (
        <>
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

            {showLoadMore && (
                <div className="mt-12 text-center">
                    <button
                        onClick={onLoadMore}
                        className="px-8 py-3 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                    >
                        <span className="retro-logo text-4xl md:text-5xl">
                            Load More Games
                        </span>
                    </button>
                </div>
            )}
        </>
    )
}
