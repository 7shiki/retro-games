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
          <button className="retro-button flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor" 
                    className="w-5 h-5"
                    aria-labelledby="playButtonTitle"
                    role="img"
                  >
                    <title id="playButtonTitle">{messages.playGame}</title>
                    <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                  </svg>
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
  )
} 