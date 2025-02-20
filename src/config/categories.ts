export interface CategoryItem {
  name: string
  href: string
  key: string
}

interface Categories {
  Nintendo: CategoryItem[]
  Sega: CategoryItem[]
  NEC: CategoryItem[]
  Atari: CategoryItem[]
  PlayStation: CategoryItem[]
  Arcade: CategoryItem[]
  Other: CategoryItem[]
}

export const categories: Categories = {
    Nintendo: [
        { name: 'NES', href: '/nes-games', key: 'nes' },
        { name: 'FDS', href: '/fds-games', key: 'fds' },
        { name: 'SNES', href: '/snes-games', key: 'snes' },
        { name: 'GB', href: '/gameboy-games', key: 'gameboy' },
        { name: 'GBC', href: '/gameboycolor-games', key: 'gameboycolor' },
        { name: 'GBA', href: '/gameboyadvance-games', key: 'gameboyadvance' },
        { name: 'N64', href: '/n64-games', key: 'n64' },
        { name: 'NDS', href: '/nds-games', key: 'nds' },
    ],
    Sega: [ 
        { name: 'Master System', href: '/master-system-games', key: 'master-system' },
        { name: 'Game Gear', href: '/game-gear-games', key: 'game-gear' },
        { name: 'Genesis', href: '/genesis-games', key: 'genesis' },
        { name: '32X', href: '/sega32x-games', key: 'sega32x' },
        { name: 'Sega CD', href: '/sega-cd-games', key: 'sega-cd' },
    ],
    NEC: [
        { name: 'Turbografx-16', href: '/turbografx-16-games', key: 'turbografx-16' },
        { name: 'Turbografx CD', href: '/turbografx-cd-games', key: 'turbografx-cd' },
        { name: 'PC Engine CD', href: '/pc-engine-cd-games', key: 'pc-engine-cd' },
    ],
    Atari: [
        { name: 'Atari 7800', href: '/atari-7800-games', key: 'atari-7800' },
        { name: 'Atari Lynx', href: '/atari-lynx-games', key: 'atari-lynx' },
        { name: 'Atari Jaguar', href: '/atari-jaguar-games', key: 'atari-jaguar' },
    ],
    PlayStation: [
        { name: 'PlayStation', href: '/playstation-games', key: 'playstation' },
    ],
    Arcade: [
        { name: 'Arcade', href: '/arcade-games', key: 'arcade' },
    ],
    Other: [
        { name: 'Wonderswan', href: '/wonderswan-games', key: 'wonderswan' },
        { name: 'Neo Geo Pocket', href: '/neo-geo-pocket-games', key: 'neo-geo-pocket' },
        { name: 'MSX', href: '/msx-games', key: 'msx' },
        { name: 'MSX 2', href: '/msx-2-games', key: 'msx-2' },
    ]
} as const

// 创建一个扁平化的分类映射
export const categoryMap = Object.entries(categories).reduce((acc, [company, items]) => {
  items.forEach((item: CategoryItem) => {
    const key = item.href.replace('/', '').replace('-games', '')
    acc[key] = {
      title: `${item.name} Games`,
      platform: item.name,
      company,
      key: item.key
    }
  })
  return acc
}, {} as Record<string, {
  title: string
  platform: string
  company: string
  key: string
}>) 