import { Metadata } from 'next'
import AllGamesClient from './AllGamesClient'

export const metadata: Metadata = {
    title: 'Retro-Games.org - Play All Retro Games',
    description: 'Browse our complete collection of classic retro games from Nintendo, Sega, PlayStation, and more. Play your favorite retro games online.',
    keywords: ''
  } 

export default function AllGamesPage() {
  return <AllGamesClient />
}