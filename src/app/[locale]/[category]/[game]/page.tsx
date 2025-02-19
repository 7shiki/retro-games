import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allGames } from '@/components/games/GameList'
import { categoryMap } from '@/config/categories'
import Script from 'next/script'

type Props = {
  params: {
    locale: string
    category: string
    game: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  // 从 URL 构建完整路径来匹配游戏
  const fullPath = `/${params.category}/${params.game}`
  const game = allGames.find(g => g.href === fullPath)
  
  if (!game) {
    return {
      title: 'Game Not Found - RetroGames',
      description: 'The requested game could not be found.'
    }
  }

  return {
    title: `Play ${game.title} Online. No download required - Retro-Games.org`,
    description: `Play ${game.title} (${game.platform}) online for free in your browser. No download required.`,
    keywords: ``
  }
}

export default function GamePage({ params }: Props) {
  const fullPath = `/${params.category}/${params.game}`
  const game = allGames.find(g => g.href === fullPath)
  
  if (!game) {
    notFound()
  }

  const categorySlug = params.category.replace('-games', '')
  const category = categoryMap[categorySlug]

  if (!category) {
    notFound()
  }

  // 从 embedUrl 中提取 src
  const iframeSrc = game.embedUrl.match(/src="([^"]+)"/)?.[1] || ''

  return (
    <main className="min-h-screen relative">
      {/* 背景网格 - 降低 z-index */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

      {/* 内容容器 - 确保在背景之上 */}
      <div className="relative z-10 min-h-screen flex flex-col bg-section">
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          {/* 面包屑导航 */}
          <div className="mb-6 text-sm breadcrumbs opacity-80">
            <span>{category.company}</span>
            <span className="mx-2">›</span>
            <span>{category.platform}</span>
            <span className="mx-2">›</span>
            <span>{game.title}</span>
          </div>

          {/* 游戏标题 */}
          <h1 className="text-4xl font-bold mb-4">
            <span className="retro-logo">{game.title}</span>
          </h1>
          <p className="text-lg mb-8 text-gray-400">
            {game.description || `Play ${game.title} online in your browser. No download required.`}
          </p>
          
          {/* 游戏模拟器 */}
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src={iframeSrc}
                className="w-full h-full"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          </div>

          {/* 加载必要的脚本 */}
          <Script
            src="https://www.retrogames.cc/embed/js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </main>
  )
}
