import Link from 'next/link'
import Image from 'next/image'
import { Game } from '@/utils/i18n'

interface GameCardProps {
  game: Game
  locale: string
  messages: {
    playGame: string
  }
}

export default function GameCard({ game, locale, messages }: GameCardProps) {
  const localizedHref = locale === 'en' ? game.href : `/${locale}${game.href}`

  return (
    <div className="game-card group">
      <Link href={localizedHref} className="block">
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
  )
}
