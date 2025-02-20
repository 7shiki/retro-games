export interface Game {
  id: string
  title: string
  platform: string
  imageUrl: string
  href: string
  description?: string
  embedUrl: string
  seoDescription: {
    overview: string[]
    history: string[]
    features: string[]
    gameplay: string
  }
}

export interface GamesData {
  popularGames: Game[]
  newGames: Game[]
  allGames: Game[]
} 