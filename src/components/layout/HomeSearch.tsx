'use client'

import { useRouter } from 'next/navigation'
import SearchBar from './SearchBar'

export default function HomeSearch() {
  const router = useRouter()

  const handleSearch = (query: string) => {
    // 将搜索词编码，避免 URL 中的特殊字符问题
    const encodedQuery = encodeURIComponent(query)
    router.push(`/all-games?search=${encodedQuery}`)
  }

  return <SearchBar onSearch={handleSearch} />
} 