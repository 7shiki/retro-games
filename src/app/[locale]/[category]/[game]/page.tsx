import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allGames } from '@/components/games/GameList'
import { categoryMap } from '@/config/categories'
import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'

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

  // 构建分享 URL 和文本
  const shareUrl = `https://retro-games.org${fullPath}` // 替换为你的实际域名
  const shareText = `Play ${game.title} online for free in your browser! No download required.`

  // 社交分享链接
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareText)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(game.title)}&summary=${encodeURIComponent(shareText)}`
  }

  // 获取相关游戏
  const relatedGames = allGames
    .filter(g => g.id !== game.id) // 同平台但不包括当前游戏
    .sort(() => Math.random() - 0.5)
    .slice(0, 8) // 只取8个游戏

  return (
    <main className="min-h-screen relative">
      {/* 背景网格 - 降低 z-index */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

      {/* 内容容器 - 确保在背景之上 */}
      <div className="relative z-10 min-h-screen flex flex-col bg-section">
        <div className="max-w-7xl mx-auto px-4 py-8 w-full">
          {/* 面包屑导航 */}
          <div className="mb-6 text-sm breadcrumbs opacity-80">
            <Link href="/" className="hover:text-purple-400 transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <Link
              href={`/${params.category}`}
              className="hover:text-purple-400 transition-colors"
            >
              {category.platform}
            </Link>
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="flex items-center gap-1">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                  />
                </svg>
                <span className="text-gray-400">:</span>
              </div>
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
                title="Share on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={shareLinks.facebook}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1877F2] transition-colors"
                title="Share on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={shareLinks.reddit}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#FF4500] transition-colors"
                title="Share on Reddit"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </a>
            </div>

            {/* 相关游戏 */}
            <div className="mt-16">
              <span className="text-2xl font-bold mb-8">
                <span className="retro-logo">Related Games</span>
              </span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedGames.map((relatedGame) => (
                  <div key={relatedGame.id} className="game-card group">
                    <Link href={relatedGame.href} className="block">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={relatedGame.imageUrl}
                          alt={relatedGame.title}
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
                      <div className="p-4 flex flex-col gap-1">
                        <span className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                          {relatedGame.title}
                        </span>
                        <span className="text-xs text-gray-400">
                          {relatedGame.platform}
                        </span>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* 游戏详细描述 - SEO 部分 */}
            <div className="mt-16 max-w-4xl mx-auto">
              <div className="space-y-16">
                {/* 游戏概述部分 */}
                <section className="dark:text-white">
                  <h2 className="text-2xl font-bold mb-6">
                    About {game.title}
                  </h2>
                  
                  {/* 添加游戏图片 - 使用 max-w-2xl 限制最大宽度 */}
                  <div className="relative aspect-video mb-8 rounded-lg overflow-hidden max-w-2xl">
                    <Image
                      src={game.imageUrl}
                      alt={game.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
                    />
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        What's {game.title}?
                      </h3>
                      <div className="space-y-4">
                        {game.seoDescription.overview.map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        {game.title} Game History
                      </h3>
                      <div className="space-y-4">
                        {game.seoDescription.history.map((paragraph, index) => (
                          <p key={index} className="leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* 游戏特点和玩法部分 */}
                <section className="dark:text-white">
                  <h2 className="text-2xl font-bold mb-6">
                    {game.title} Gameplay and Features
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        Key Features
                      </h3>
                      <ul className="list-disc list-inside space-y-2">
                        {game.seoDescription.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">
                        How to Play
                      </h3>
                      <p className="leading-relaxed">
                        {game.seoDescription.gameplay}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <Script
            src="https://www.retrogames.cc/embed/js"
            strategy="afterInteractive"
          />
        </div>
      </div>
    </main>
  )
}
