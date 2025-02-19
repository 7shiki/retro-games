import { Metadata } from 'next'
import { categoryMap } from '@/config/categories'
import CategoryClient from './CategoryClient'

// 生成动态 metadata
export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const categorySlug = params.category.replace('-games', '')
  const info = categoryMap[categorySlug]

  if (!info) {
    return {
      title: 'Category Not Found - RetroGames',
      description: 'The requested game category could not be found.'
    }
  }

  const title = `${info.company !== 'Other' ? `${info.company} ` : ''}${info.title} - RetroGames`
  
  return {
    title,
    description: info.description,
    keywords: `${info.platform} games, retro games, classic games, ${info.company.toLowerCase()} games, online games`
  }
}

export default function CategoryPage({ params }: { params: { locale: string; category: string } }) {
  return <CategoryClient params={params} />
}