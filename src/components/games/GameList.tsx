import { Game } from '@/utils/i18n'
import GameCard from './GameCard'

interface GameListProps {
  games: Game[]
  locale: string
  showLoadMore?: boolean
  onLoadMore?: () => void
  messages: {
    playGame: string
    loadMore: string
  }
}

export default function GameList({
  games,
  locale,
  showLoadMore = false,
  onLoadMore,
  messages
}: GameListProps) {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            locale={locale}
            messages={{ playGame: messages.playGame }}
          />
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
