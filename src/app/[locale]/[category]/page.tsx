import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SearchBar from '@/components/layout/SearchBar'

// 从 Header.tsx 导入分类数据
const categories = {
  Nintendo: [
    { name: 'NES', href: '/nes', alt: 'Nintendo Entertainment System Games Online' },
    { name: 'FDS', href: '/fds', alt: 'Famicom Disk System Games Online' },
    { name: 'SNES', href: '/snes', alt: 'Super Nintendo Entertainment System Games Online' },
    { name: 'GB', href: '/gameboy', alt: 'Nintendo Game Boy Games Online' },
    { name: 'GBC', href: '/gameboycolor', alt: 'Nintendo Game Boy Color Games Online' },
    { name: 'GBA', href: '/gameboyadvance', alt: 'Nintendo Game Boy Advance Games Online' },
    { name: 'N64', href: '/n64', alt: 'Nintendo 64 Games Online' },
    { name: 'NDS', href: '/nds', alt: 'Nintendo DS Games Online' }
  ],
  Sega: [
    { name: 'Master System', href: '/master-system', alt: 'Sega Master System Games Online' },
    { name: 'Game Gear', href: '/game-gear', alt: 'Sega Game Gear Games Online' },
    { name: 'Genesis', href: '/genesis', alt: 'Sega Genesis/Mega Drive Games Online' },
    { name: '32X', href: '/sega32x', alt: 'Sega 32X Games Online' },
    { name: 'Sega CD', href: '/sega-cd', alt: 'Sega CD/Mega CD Games Online' }
  ],
  NEC: [
    { name: 'Turbografx-16', href: '/turbografx-16', alt: 'NEC TurboGrafx-16 Games Online' },
    { name: 'Turbografx CD', href: '/turbografx-cd', alt: 'NEC TurboGrafx-CD Games Online' },
    { name: 'PC Engine CD', href: '/pc-engine-cd', alt: 'NEC PC Engine CD-ROM² Games Online' }
  ],
  Atari: [
    { name: 'Atari 7800', href: '/atari-7800', alt: 'Atari 7800 ProSystem Games Online' },
    { name: 'Atari Lynx', href: '/atari-lynx', alt: 'Atari Lynx Handheld Games Online' },
    { name: 'Atari Jaguar', href: '/atari-jaguar', alt: 'Atari Jaguar Games Online' }
  ],
  PlayStation: [
    { name: 'PlayStation', href: '/playstation', alt: 'Sony PS1 Games Online' }
  ],
  Arcade: [
    { name: 'Arcade', href: '/arcade', alt: 'Classic Arcade Games Online' }
  ],
  Other: [
    { name: 'Wonderswan', href: '/wonderswan', alt: 'Bandai WonderSwan Games Online' },
    { name: 'Neo Geo Pocket', href: '/neo-geo-pocket', alt: 'SNK Neo Geo Pocket Games Online' },
    { name: 'MSX', href: '/msx', alt: 'MSX Games Online' },
    { name: 'MSX 2', href: '/msx-2', alt: 'MSX 2 Games Online' }
  ]
} as const

// 创建一个扁平化的分类映射
const categoryMap = Object.values(categories).reduce((acc, items) => {
  items.forEach(item => {
    const key = item.href.replace('/', '')
    acc[key] = {
      title: `${item.name} Games`,
      description: item.alt,
      platform: item.name,
      company: Object.entries(categories).find(([_, value]) =>
        value.some(v => v.href === item.href)
      )?.[0] || ''
    }
  })
  return acc
}, {} as Record<string, {
  title: string
  description: string
  platform: string
  company: string
}>)

type Props = {
  params: {
    locale: string
    category: string
  }
}

export function generateMetadata({ params }: Props): Metadata {
  if (!params?.category) {
    return {
      title: 'Category Not Found',
      description: 'The requested game category could not be found.'
    }
  }

  const info = categoryMap[params.category]

  if (!info) {
    return {
      title: 'Category Not Found',
      description: 'The requested game category could not be found.'
    }
  }

  return {
    title: `${info.title} - Play Online | RetroGames`,
    description: info.description,
    keywords: `${info.platform}, ${info.company}, retro games, classic games, online games`
  }
}

export default function CategoryPage({ params }: Props) {
  if (!params?.category) {
    notFound()
  }

  // 移除可能的 -games 后缀
  const categorySlug = params.category.replace('-games', '')
  const info = categoryMap[categorySlug]

  if (!info) {
    notFound()
  }

  // 模拟游戏数据（后续可以从 API 获取）
  const games = [
    { id: 1, title: 'Super Mario Bros.', slug: 'super-mario-bros' },
    { id: 2, title: 'The Legend of Zelda', slug: 'the-legend-of-zelda' },
    // ... 更多游戏
  ]

  return (
    <main className="min-h-screen relative">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden bg-section">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {info.title}
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl opacity-90">
            {info.description}
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Games Grid Section */}
      <section className="py-16 px-4 bg-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {games.map((game) => (
              <a
                key={game.id}
                href={`/${params.locale}/${params.category}/${game.slug}`}
                className="group relative aspect-video bg-purple-500/10 rounded-lg overflow-hidden hover:bg-purple-500/20 transition-colors"
              >
                {/* Game Card Content */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  <h3 className="text-lg font-semibold group-hover:text-purple-400 transition-colors">
                    {game.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
