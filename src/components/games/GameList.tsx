import Link from 'next/link'
import Image from 'next/image'
import { Game } from '@/utils/i18n'

interface GameListProps {
  games: Game[]
  showLoadMore?: boolean
  onLoadMore?: () => void
  messages: {
    playGame: string
    loadMore: string
  }
}

export default function GameList({ 
  games, 
  showLoadMore = false, 
  onLoadMore,
  messages 
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
                    {messages.playGame}
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
              {messages.loadMore}
            </span>
          </button>
        </div>
      )}
    </>
  )
}
