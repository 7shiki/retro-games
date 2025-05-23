import Link from 'next/link'
import Image from 'next/image'
import { Game, getGameData, getTranslations } from '../../utils/i18n'

interface PopularGamesProps {
  locale: string
}

export default async function PopularGames({ locale }: PopularGamesProps) {
  const { popularGames } = await getGameData(locale)
  const messages = await getTranslations(locale)

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-400 retro-text">
          <span className="retro-logo text-4xl md:text-5xl">
            {messages.games.popularGames}
          </span>
        </h2>
        <Link
          href={`/${locale === 'en' ? '' : locale + '/'}all-games`}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          {messages.games.viewAll}
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {popularGames.map((game: Game) => (
          <div key={game.id} className="game-card group">
            <Link 
              href={locale === 'en' ? game.href : `/${locale}${game.href}`}
              className="block"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={game.imageUrl}
                  alt={game.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <button className="retro-button play-game-button flex items-center justify-center" data-text={messages.games.playGame} aria-label={messages.games.playGame}>
                </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-base font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors truncate whitespace-nowrap overflow-hidden max-w-[300px]">
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
