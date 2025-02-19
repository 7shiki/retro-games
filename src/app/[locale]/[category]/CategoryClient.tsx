'use client'

import { notFound } from 'next/navigation'
import SearchBar from '@/components/layout/SearchBar'
import { categoryMap, categories } from '@/config/categories'
import GameList, { allGames } from '@/components/games/GameList'
import { useState } from 'react'
import Image from 'next/image'

type Props = {
  params: {
    locale: string
    category: string
  }
}

export default function CategoryPage({ params }: Props) {
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleGames, setVisibleGames] = useState(20)

  if (!params?.category) {
    notFound()
  }

  const categorySlug = params.category.replace('-games', '')
  const info = categoryMap[categorySlug]

  if (!info) {
    notFound()
  }

  // 根据当前分类筛选游戏
  const filteredGames = allGames.filter(game => 
    // 直接比较游戏平台和当前分类平台（不区分大小写）
    game.platform.toLowerCase() === info.platform.toLowerCase()
  )

  // 处理搜索
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setVisibleGames(20) // 重置显示数量
  }

  // 处理加载更多
  const handleLoadMore = () => {
    setVisibleGames(prev => prev + 20)
  }

  // 获取当前可见的游戏
  const currentGames = filteredGames.slice(0, visibleGames)
  const hasMore = filteredGames.length > visibleGames

  return (
    <main className="min-h-screen relative">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="retro-logo text-4xl md:text-5xl">
              {info.company !== 'Other' ? `${info.company} ` : ''}{info.title}
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl opacity-90">
            {info.description}
          </p>
          <SearchBar onSearch={handleSearch} />
        </div>
      </section>

      {/* Games Grid Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-purple-400 retro-text mb-8">
            All {info.platform} Games
          </h2>

          {/* Results Count */}
          <div className="mb-6 text-gray-400">
          Found {filteredGames.length} {info.platform} games
          </div>

          {/* No Results Message */}
          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-[300px] mx-auto mb-6">
                                <Image
                                    src="/images/search/Can't find the game you're looking for.png"
                                    alt="No games found"
                                    width={300}
                                    height={300}
                                    className="w-full h-auto"
                                />
                            </div>
              <p className="text-lg text-gray-400">
                No games found matching your criteria.
                {searchQuery && (
                  <button
                    className="text-purple-400 hover:text-purple-300 ml-2"
                    onClick={() => setSearchQuery('')}
                  >
                    Clear search
                  </button>
                )}
              </p>
            </div>
          )}

          {/* Games Grid */}
          <GameList
            games={currentGames}
            showLoadMore={hasMore}
            onLoadMore={handleLoadMore}
          />
        </div>
      </section>
    </main>
  )
}