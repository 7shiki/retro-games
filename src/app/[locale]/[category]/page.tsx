import { Metadata } from 'next'
import { categoryMap } from '@/config/categories'
import CategoryClient from './CategoryClient'
import { getGameData, getTranslations } from '@/utils/i18n'

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
        'description': `Play ${info.platform} games online for free in your browser. No download required. Enjoy classic ${info.platform} games instantly.`,
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

export async function generateMetadata({ params }: { params: { category: string, locale: string } }): Promise<Metadata> {
  const categorySlug = params.category.replace('-games', '')
  const info = categoryMap[categorySlug]
  const messages = await getTranslations(params.locale)

  if (!info) {
    return {
      title: messages.category.notFound.title,
      description: messages.category.notFound.description
    }
  }

  return {
    title: messages.category.metadata.title
      .replace('{company}', info.company !== 'Other' ? `${info.company} ` : '')
      .replace('{platform}', info.title),
    description: messages.category.metadata.description
      .replaceAll('{platform}', info.platform),
    keywords: messages.category.metadata.keywords
  }
}

export default async function CategoryPage({ params }: { params: { locale: string; category: string } }) {
  const { gameList } = await getGameData(params.locale)
  const messages = await getTranslations(params.locale)
  const jsonLd = generateJsonLd({ params })

  return (
    <main className="min-h-screen">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <CategoryClient 
        category={params.category.replace('-games', '')}
        locale={params.locale}
        initialMessages={messages}
        initialGames={gameList}
      />
    </main>
  )
}