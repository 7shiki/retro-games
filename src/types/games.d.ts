declare module '@/data/games/[locale].json' {
  import { Game } from './game'
  
  interface GamesData {
    [locale: string]: {
      gameList: Game[]
      popularGames: Game[]
      newGames: Game[]
    }
  }
  
  const data: GamesData
  export default data
} 