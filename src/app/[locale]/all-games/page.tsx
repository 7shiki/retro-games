import { Metadata } from 'next'
import AllGamesClient from './AllGamesClient'
import { getGameData, getTranslations } from '@/utils/i18n'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const messages = await getTranslations(params.locale)
  const metadata = messages.allGames.metadata

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: 'https://retro-games.org/all-games',
      languages: {
        'en': 'https://retro-games.org/all-games',
        'zh': 'https://retro-games.org/zh/all-games',
        'zh-TW': 'https://retro-games.org/zh-TW/all-games',
        'es': 'https://retro-games.org/es/all-games',
        'pt': 'https://retro-games.org/pt/all-games',
        'ru': 'https://retro-games.org/ru/all-games',
        'ja': 'https://retro-games.org/ja/all-games',
        'de': 'https://retro-games.org/de/all-games',
        'fr': 'https://retro-games.org/fr/all-games',
        'ko': 'https://retro-games.org/ko/all-games',
        'it': 'https://retro-games.org/it/all-games',
        'fil': 'https://retro-games.org/fil/all-games',
        'hi': 'https://retro-games.org/hi/all-games',
        'vi': 'https://retro-games.org/vi/all-games'
      } as Record<string, string>
    }
  }
}

export default async function AllGamesPage({ params }: { params: { locale: string } }) {
  const { gameList } = await getGameData(params.locale)
  const messages = await getTranslations(params.locale)

  return (
    <AllGamesClient 
      locale={params.locale}
      initialMessages={messages}
      initialGames={gameList}
    />
  )
}