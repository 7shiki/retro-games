import GameCard from './GameCard'

// 示例数据，实际项目中应该从数据源获取
const popularGames = [
  {
    title: "Super Mario Bros",
    category: "nes",
    imageUrl: "/games/mario.jpg",
    slug: "super-mario-bros"
  },
  {
    title: "Contra",
    category: "nes",
    imageUrl: "/games/contra.jpg",
    slug: "contra"
  },
  {
    title: "Sonic the Hedgehog",
    category: "genesis",
    imageUrl: "/games/sonic.jpg",
    slug: "sonic-the-hedgehog"
  },
  {
    title: "Street Fighter II",
    category: "arcade",
    imageUrl: "/games/street-fighter.jpg",
    slug: "street-fighter-2"
  },
  {
    title: "Final Fantasy VII",
    category: "playstation",
    imageUrl: "/games/ff7.jpg",
    slug: "final-fantasy-7"
  }
]

export default function PopularGames() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {popularGames.map((game, index) => (
        <div 
          key={game.slug}
          className="transform hover:-translate-y-1 transition-transform duration-300"
          style={{
            animationDelay: `${index * 100}ms`,
            animation: 'fadeInUp 0.5s ease-out forwards'
          }}
        >
          <GameCard {...game} />
        </div>
      ))}
    </div>
  )
}
