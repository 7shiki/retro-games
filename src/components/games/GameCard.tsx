import Image from 'next/image'
import Link from 'next/link'

interface GameCardProps {
  title: string
  category: string
  imageUrl: string
  slug: string
}

export default function GameCard({ title, category, imageUrl, slug }: GameCardProps) {
  return (
    <div className="game-card group relative rounded-lg overflow-hidden bg-gray-800/50 border border-purple-500/20 backdrop-blur-sm">
      <div className="aspect-w-3 aspect-h-4">
        <Image
          src={imageUrl}
          alt={title}
          width={300}
          height={400}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Link href={`/${category}-games/${slug}`}>
            <button className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 retro-button">
              Play Now
            </button>
          </Link>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-1 retro-text">{title}</h3>
        <p className="text-sm text-purple-400">{category}</p>
      </div>
    </div>
  )
}
