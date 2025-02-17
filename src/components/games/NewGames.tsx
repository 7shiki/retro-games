import GameCard from './GameCard'

// 示例数据，实际项目中应该从数据源获取
const newGames = [
  {
    title: "Mega Man X",
    category: "snes",
    imageUrl: "/games/megaman.jpg",
    slug: "mega-man-x"
  },
  {
    title: "Castlevania",
    category: "nes",
    imageUrl: "/games/castlevania.jpg",
    slug: "castlevania"
  },
  {
    title: "Metal Slug",
    category: "arcade",
    imageUrl: "/games/metal-slug.jpg",
    slug: "metal-slug"
  },
  {
    title: "Dragon Quest",
    category: "nes",
    imageUrl: "/games/dragon-quest.jpg",
    slug: "dragon-quest"
  },
  {
    title: "Pac-Man",
    category: "arcade",
    imageUrl: "/games/pacman.jpg",
    slug: "pac-man"
  }
]

export default function NewGames() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
      {newGames.map((game, index) => (
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
