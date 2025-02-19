export type CategoryItem = {
  name: string
  href: string
  alt: string
}

export type Categories = {
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
        { name: 'NES', href: '/nes-games', alt: 'Nintendo Entertainment System Games Online' },
        { name: 'FDS', href: '/fds-games', alt: 'Famicom Disk System Games Online' },
        { name: 'SNES', href: '/snes-games', alt: 'Super Nintendo Entertainment System Games Online' },
        { name: 'GB', href: '/gameboy-games', alt: 'Nintendo Game Boy Games Online' },
        { name: 'GBC', href: '/gameboycolor-games', alt: 'Nintendo Game Boy Color Games Online' },
        { name: 'GBA', href: '/gameboyadvance-games', alt: 'Nintendo Game Boy Advance Games Online' },
        { name: 'N64', href: '/n64-games', alt: 'Nintendo 64 Games Online' },
        { name: 'NDS', href: '/nds-games', alt: 'Nintendo DS Games Online' },
    ],
    Sega: [
        { name: 'Master System', href: '/master-system-games', alt: 'Sega Master System Games Online' },
        { name: 'Game Gear', href: '/game-gear-games', alt: 'Sega Game Gear Games Online' },
        { name: 'Genesis', href: '/genesis-games', alt: 'Sega Genesis/Mega Drive Games Online' },
        { name: '32X', href: '/sega32x-games', alt: 'Sega 32X Games Online' },
        { name: 'Sega CD', href: '/sega-cd-games', alt: 'Sega CD/Mega CD Games Online' },
    ],
    NEC: [
        { name: 'Turbografx-16', href: '/turbografx-16-games', alt: 'NEC TurboGrafx-16 Games Online' },
        { name: 'Turbografx CD', href: '/turbografx-cd-games', alt: 'NEC TurboGrafx-CD Games Online' },
        { name: 'PC Engine CD', href: '/pc-engine-cd-games', alt: 'NEC PC Engine CD-ROM² Games Online' },
    ],
    Atari: [
        { name: 'Atari 7800', href: '/atari-7800-games', alt: 'Atari 7800 ProSystem Games Online' },
        { name: 'Atari Lynx', href: '/atari-lynx-games', alt: 'Atari Lynx Handheld Games Online' },
        { name: 'Atari Jaguar', href: '/atari-jaguar-games', alt: 'Atari Jaguar Games Online' },
    ],
    PlayStation: [
        { name: 'PlayStation', href: '/playstation-games', alt: 'Sony PS1 Games Online' },
    ],
    Arcade: [
        { name: 'Arcade', href: '/arcade-games', alt: 'Classic Arcade Games Online' },
    ],
    Other: [
        { name: 'Wonderswan', href: '/wonderswan-games', alt: 'Bandai WonderSwan Games Online' },
        { name: 'Neo Geo Pocket', href: '/neo-geo-pocket-games', alt: 'SNK Neo Geo Pocket Games Online' },
        { name: 'MSX', href: '/msx-games', alt: 'MSX Games Online' },
        { name: 'MSX 2', href: '/msx-2-games', alt: 'MSX 2 Games Online' },
    ]
}

// 创建一个扁平化的分类映射
export const categoryMap = Object.entries(categories).reduce((acc, [company, items]) => {
  items.forEach(item => {
    const key = item.href.replace('/', '').replace('-games', '')
    acc[key] = {
      title: `${item.name} Games`,
      description: item.alt,
      platform: item.name,
      company
    }
  })
  return acc
}, {} as Record<string, {
  title: string
  description: string
  platform: string
  company: string
}>) 