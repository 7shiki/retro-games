'use client'

import { useRouter, useParams } from 'next/navigation'
import SearchBar from './SearchBar'

interface HomeSearchProps {
  initialMessages: any
}

export default function HomeSearch({ initialMessages }: HomeSearchProps) {
  const router = useRouter()
  const params = useParams()
  const locale = params.locale as string || 'en'

  const handleSearch = (query: string) => {
    // 将搜索词编码，避免 URL 中的特殊字符问题
    const encodedQuery = encodeURIComponent(query)
    const path = locale === 'en' 
      ? `/all-games?search=${encodedQuery}`
      : `/${locale}/all-games?search=${encodedQuery}`
    router.push(path)
  }

  return <SearchBar onSearch={handleSearch} initialMessages={initialMessages} />
} 