import { Metadata } from 'next'
import { categoryMap } from '@/config/categories'
import CategoryClient from './CategoryClient'

// 生成 Schema 标签
export function generateJsonLd({ params }: { params: { category: string } }) {
  const categorySlug = params.category.replace('-games', '')
  const info = categoryMap[categorySlug]

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `https://retro-games.org/${params.category}#webpage`,
        'url': `https://retro-games.org/${params.category}`,
        'name': `${info.title} - RetroGames`,
        'description': `Play ${info.platform} games online for free in your browser. No download required. Enjoy classic ${info.platform} games instantly.`,
        'isPartOf': {
          '@id': 'https://retro-games.org/#website'
        }
      },
      {
        '@type': 'VideoGameSeries',
        '@id': `https://retro-games.org/${params.category}#gameseries`,
        'name': `${info.platform} Games Collection`,
        'description': info.description,
        'gamePlatform': info.platform,
        'genre': ['Retro Games', 'Classic Games'],
        'publisher': info.company !== 'Other' ? info.company : undefined
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://retro-games.org/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": info.company,
            "item": `https://retro-games.org/${params.category}`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": info.platform,
            "item": `https://retro-games.org/${params.category}`
          }
        ]
      }
    ]
  }
}

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
  const jsonLd = generateJsonLd({ params })

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CategoryClient params={params} />
    </>
  )
}