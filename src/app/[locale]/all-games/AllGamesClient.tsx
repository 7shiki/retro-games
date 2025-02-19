'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import SearchBar from '@/components/layout/SearchBar'
import { categories } from '@/config/categories'
import GameList, { allGames } from '@/components/games/GameList'
import Image from 'next/image'

const GAMES_PER_PAGE = 20 // 每页显示的游戏数量

export default function AllGamesPage() {
    const searchParams = useSearchParams()
    const initialSearch = searchParams.get('search') || ''

    const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState(initialSearch)
    const [visibleGames, setVisibleGames] = useState(GAMES_PER_PAGE)

    // 当 URL 参数变化时更新搜索词
    useEffect(() => {
        setSearchQuery(initialSearch)
    }, [initialSearch])

    // 根据平台和搜索词筛选游戏
    const filteredGames = allGames.filter(game => {
        const matchesPlatform = selectedPlatform
            ? categories[selectedPlatform as keyof typeof categories].some(
                item => item.name === game.platform
            )
            : true

        const matchesSearch = searchQuery
            ? game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            game.platform.toLowerCase().includes(searchQuery.toLowerCase())
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

    // 当筛选条件改变时重置显示数量
    useEffect(() => {
        setVisibleGames(GAMES_PER_PAGE)
    }, [selectedPlatform])

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
                        <span className="retro-logo text-4xl md:text-5xl">All Retro Games</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 max-w-3xl opacity-90">
                        Browse our complete collection of classic retro games available to play online.
                    </p>
                    <SearchBar onSearch={handleSearch} defaultValue={searchQuery} />
                </div>
            </section>

            {/* Games Grid Section */}
            <section className="flex-1 py-16 px-4 bg-section">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-purple-400 retro-text mb-8">
                        <span className="retro-logo text-4xl md:text-5xl">
                            Browse Games
                        </span>
                    </h2>

                    {/* Filters */}
                    <div className="mb-8 flex flex-wrap gap-4">
                        <button
                            className={`px-4 py-2 rounded-full transition-colors ${selectedPlatform === null
                                ? 'bg-purple-500 text-white'
                                : 'bg-purple-500/10 hover:bg-purple-500/20'
                                }`}
                            onClick={() => setSelectedPlatform(null)}
                        >
                            All
                        </button>
                        {Object.keys(categories).map((platform) => (
                            <button
                                key={platform}
                                className={`px-4 py-2 rounded-full transition-colors ${selectedPlatform === platform
                                    ? 'bg-purple-500 text-white'
                                    : 'bg-purple-500/10 hover:bg-purple-500/20'
                                    }`}
                                onClick={() => setSelectedPlatform(platform)}
                            >
                                {platform}
                            </button>
                        ))}
                    </div>

                    {/* Results Count */}
                    <div className="mb-6 text-gray-400">
                        Found {filteredGames.length} games matching
                        {selectedPlatform && ` ${selectedPlatform}`}
                        {searchQuery && ` "${searchQuery}"`}
                        {' '}criteria
                    </div>

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