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

  const title = `Play ${info.company !== 'Other' ? `${info.company} ` : ''}${info.title} Online - Retro Games`
  
  return {
    title,
    description: `Play ${info.platform} games online for free in your browser. No download required. Enjoy classic ${info.platform} games instantly.`,
    keywords: ``
  }
}

export default function CategoryPage({ params }: { params: { locale: string; category: string } }) {
  return <CategoryClient params={params} />
}