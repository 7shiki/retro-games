import Image from 'next/image'
import Link from 'next/link'

interface GameCardProps {
  title: string
  platform: string
  imageUrl: string
  href: string
}

export default function GameCard({ title, platform, imageUrl, href }: GameCardProps) {
  return (
    <div className="w-full">
      <div className="group relative overflow-hidden rounded-lg bg-gray-800/50 transition-transform hover:scale-105">
        <a href={href} className="block">
          <div className="aspect-[4/3] relative">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors">
                Play Now
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <span className="text-sm text-gray-400">{platform}</span>
          </div>
        </a>
      </div>
    </div>
  )
}
