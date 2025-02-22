import { Metadata } from 'next'
import PopularGames from '@/components/games/PopularGames'
import NewGames from '@/components/games/NewGames'
import HomeSearch from '@/components/layout/HomeSearch'
import { getTranslations } from '../../utils/i18n'

// 动态生成 metadata
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const messages = await getTranslations(params.locale)
  const metadata = messages.home.metadata

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.og.title,
      description: metadata.og.description,
      url: 'https://retro-games.org',
      siteName: 'RetroGames',
      type: 'website',
      images: [
        {
          url: 'https://retro-games.org/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: metadata.og.imageAlt
        }
      ],
      locale: params.locale
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.og.title,
      description: metadata.og.description,
      images: ['https://retro-games.org/images/og-image.jpg']
    },
    alternates: {
      canonical: 'https://retro-games.org/',
      languages: {
        'en': 'https://retro-games.org/',
        'zh': 'https://retro-games.org/zh',
        'zh-TW': 'https://retro-games.org/zh-TW',
        'es': 'https://retro-games.org/es',
        'pt': 'https://retro-games.org/pt',
        'ru': 'https://retro-games.org/ru',
        'ja': 'https://retro-games.org/ja',
        'de': 'https://retro-games.org/de',
        'fr': 'https://retro-games.org/fr',
        'ko': 'https://retro-games.org/ko',
        'it': 'https://retro-games.org/it',
        'fil': 'https://retro-games.org/fil',
        'hi': 'https://retro-games.org/hi',
        'vi': 'https://retro-games.org/vi'
      } as Record<string, string>
    }
  }
}

export default async function Home({ params }: { params: { locale: string } }) {
  const messages = await getTranslations(params.locale)
  
  // Move generateJsonLd inside the component as a local function
  const generateJsonLd = () => {
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://retro-games.org/#website',
          'url': 'https://retro-games.org/',
          'name': 'RetroGames',
          'description': 'Play retro games online from NES, SNES, GB, GBC, GBA, SEGA Genesis, PSX, PS1 and Classic Arcade Games in your browser. Free and no download required.',
          'potentialAction': {
            '@type': 'SearchAction',
            'target': 'https://retro-games.org/all-games?search={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        },
        {
          '@type': 'VideoGameSeries',
          '@id': 'https://retro-games.org/all-games#games',
          'name': 'Retro Games Collection',
          'description': 'Collection of classic retro games from multiple platforms including Nintendo, Sega, PlayStation, and Arcade games.',
          'genre': ['Retro Games', 'Classic Games', 'Arcade Games'],
          'gamePlatform': [
            'Nintendo Entertainment System',
            'Super Nintendo',
            'Game Boy',
            'Game Boy Color',
            'Game Boy Advance',
            'Nintendo 64',
            'Nintendo DS',
            'Sega Genesis',
            'PlayStation',
            'Arcade'
          ]
        }
      ]
    }
  }

  const jsonLd = generateJsonLd()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen relative">
        {/* 背景网格 */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Hero Section */}
        <section className="relative py-16 px-4 overflow-hidden bg-section">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
              <span className="retro-logo text-5xl md:text-7xl block mb-2">
                {messages.home.hero.title.play + ' '}
              </span>
              <span className="retro-logo text-5xl md:text-7xl">
                {messages.home.hero.title.retroGames}
              </span>
            </h1>
            <p className="hero-description text-xl md:text-2xl mb-8 max-w-2xl">
              {messages.home.hero.description}
            </p>
            <HomeSearch initialMessages={messages} />
          </div>
        </section>

        {/* Popular Games Section */}
        <section className="py-16 px-4 bg-section">
          <div className="max-w-7xl mx-auto">
            <PopularGames locale={params.locale} />
          </div>
        </section>

        {/* New Games Section */}
        <section className="py-16 px-4 bg-section">
          <div className="max-w-7xl mx-auto">
            <NewGames locale={params.locale} />
          </div>
        </section>
      </main>
    </>
  )
}
