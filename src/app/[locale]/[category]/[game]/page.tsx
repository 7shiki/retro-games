import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: {
    locale: string
    category: string
    game: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  if (!params?.category || !params?.game) {
    return {
      title: 'Game Not Found',
      description: 'The requested game could not be found.'
    }
  }

  // 这里可以从 API 获取游戏信息
  const gameInfo = {
    title: params.game.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `Play ${params.game} online for free.`
  }

  return {
    title: `${gameInfo.title} - Play Online | RetroGames`,
    description: gameInfo.description
  }
}

export default function GamePage({ params }: Props) {
  if (!params?.category || !params?.game) {
    notFound()
  }

  // 这里可以从 API 获取游戏信息
  const gameInfo = {
    title: params.game.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `Play ${params.game} online for free.`
  }

  return (
    <main className="min-h-screen relative">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{gameInfo.title}</h1>
        <p className="text-lg mb-8">{gameInfo.description}</p>
        
        {/* 游戏模拟器将在这里加载 */}
        <div className="aspect-video bg-purple-500/10 rounded-lg">
          <p className="text-center p-8">Game emulator will be loaded here</p>
        </div>
      </div>
    </main>
  )
}
