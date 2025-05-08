'use client'

import { useState } from 'react'
import Image from 'next/image'
import SearchBar from '@/components/layout/SearchBar'
import { categoryMap, categories } from '@/config/categories'
import GameList from '@/components/games/GameList'
import { Game } from '@/utils/i18n'
import HorizontalAd from '@/components/ads/HorizontalAd'
import ResponsiveHorizontalAd from '@/components/ads/ResponsiveHorizontalAd'


const GAMES_PER_PAGE = 20 // 每页显示的游戏数量

interface CategoryClientProps {
  category: string
  locale: string
  initialMessages: any
  initialGames: Game[]
}

export default function CategoryClient({ 
  category, 
  locale,
  initialMessages: messages,
  initialGames
}: CategoryClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleGames, setVisibleGames] = useState(GAMES_PER_PAGE)

  // 获取当前分类信息
  const info = categoryMap[category]
  
  // 如果分类不存在，显示错误信息（这是一个额外的安全措施）
  if (!info) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-section">
        <div className="max-w-md w-full text-center">
          <h1 className="text-6xl font-bold mb-6 retro-logo">404</h1>
          <h2 className="text-2xl font-semibold mb-4">
            {messages.category?.notFound?.title}
          </h2>
          <p className="text-gray-400 mb-8">
            {messages.category?.notFound?.description}
          </p>
          <a 
            href={locale === 'en' ? '/' : `/${locale}`}
            className="retro-button inline-block"
          >
            {messages.notFound?.backHome}
          </a>
        </div>
      </div>
    )
  }

  // 根据当前分类和搜索词筛选游戏
  const filteredGames = initialGames.filter(game => {
    // 首先匹配平台
    const matchesPlatform = game.platform.toLowerCase() === info.platform.toLowerCase()

    // 然后匹配搜索词
    const matchesSearch = searchQuery
      ? game.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true

    return matchesPlatform && matchesSearch
  })

  // 处理搜索
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setVisibleGames(GAMES_PER_PAGE) // 重置显示数量
  }

  // 处理加载更多
  const handleLoadMore = () => {
    setVisibleGames(prev => prev + GAMES_PER_PAGE)
  }

  // 获取当前可见的游戏
  const currentGames = filteredGames.slice(0, visibleGames)
  const hasMore = filteredGames.length > visibleGames

  return (
    <main className="min-h-screen relative flex flex-col bg-section">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="retro-logo text-4xl md:text-5xl">
              {info.title}
            </span>
          </h1>
          <div>
            <p className="text-base md:text-sm mb-10 max-w-3xl opacity-90">
              {messages.platforms[info.key].description}
            </p>
          </div>
          <SearchBar 
            onSearch={handleSearch} 
            defaultValue={searchQuery} 
            initialMessages={messages} 
          />
        </div>
      </section>

      {/* Games Grid Section */}
      <section className="flex-1 py-16 px-4 bg-section">
        <div className="max-w-7xl mx-auto">
          {/* Results Count */}
          <div className="mb-6 text-gray-400">
            {messages.allGames.foundGames
              .replace('{count}', filteredGames.length.toString())
              .replace('{platform}', ` ${info.title}`)
              .replace('{query}', searchQuery ? ` "${searchQuery}"` : '')}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <div className="max-w-[300px] mx-auto mb-6">
                <Image
                  src="/images/search/Can't find the game you're looking for.png"
                  alt={messages.allGames.noGamesFound}
                  width={300}
                  height={300}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-lg text-gray-400">
                {messages.allGames.noGamesFound}
                {searchQuery && (
                  <button
                    className="text-purple-400 hover:text-purple-300 ml-2"
                    onClick={() => setSearchQuery('')}
                  >
                    {messages.allGames.clearSearch}
                  </button>
                )}
              </p>
            </div>
          )}

          {/* Games Grid */}
          <GameList
            games={currentGames}
            locale={locale}
            showLoadMore={hasMore}
            onLoadMore={handleLoadMore}
            messages={{
              playGame: messages.games.playGame,
              loadMore: messages.games.loadMore
            }}
          />
        </div>
      </section>
       {/* Ad Section */}
       <div className="max-w-7xl mx-auto">
          <div className="hidden md:block">
            <HorizontalAd />
          </div>
          <div className="block md:hidden">
            <ResponsiveHorizontalAd />
          </div>
        </div>
    </main>
  )
}