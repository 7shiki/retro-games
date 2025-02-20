import { Metadata } from 'next'
import AllGamesClient from './AllGamesClient'
import { getGameData, getTranslations } from '@/utils/i18n'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const messages = await getTranslations(params.locale)
  const metadata = messages.allGames.metadata

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords
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