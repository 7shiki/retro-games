export interface CategoryItem {
    name: string
    href: string
    alt: string
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
        { name: 'NES', href: '/nes-games', alt: 'Nintendo Entertainment System Games Online', key: 'nes' },
        { name: 'FDS', href: '/fds-games', alt: 'Famicom Disk System Games Online', key: 'fds' },
        { name: 'SNES', href: '/snes-games', alt: 'Super Nintendo Entertainment System Games Online', key: 'snes' },
        { name: 'GB', href: '/gameboy-games', alt: 'Nintendo Game Boy Games Online', key: 'gameboy' },
        { name: 'GBC', href: '/gameboycolor-games', alt: 'Nintendo Game Boy Color Games Online', key: 'gameboycolor' },
        { name: 'GBA', href: '/gameboyadvance-games', alt: 'Nintendo Game Boy Advance Games Online', key: 'gameboyadvance' },
        { name: 'N64', href: '/n64-games', alt: 'Nintendo 64 Games Online', key: 'n64' },
        { name: 'NDS', href: '/nds-games', alt: 'Nintendo DS Games Online', key: 'nds' },
    ],
    Sega: [
        { name: 'Master System', href: '/master-system-games', alt: 'Sega Master System Games Online', key: 'master-system' },
        { name: 'Game Gear', href: '/game-gear-games', alt: 'Sega Game Gear Games Online', key: 'game-gear' },
        { name: 'Genesis', href: '/genesis-games', alt: 'Sega Genesis/Mega Drive Games Online', key: 'genesis' },
        { name: '32X', href: '/sega32x-games', alt: 'Sega 32X Games Online', key: 'sega32x' },
        { name: 'Sega CD', href: '/sega-cd-games', alt: 'Sega CD/Mega CD Games Online', key: 'sega-cd' },
    ],
    NEC: [
        { name: 'Turbografx-16', href: '/turbografx-16-games', alt: 'NEC TurboGrafx-16 Games Online', key: 'turbografx-16' },
        { name: 'Turbografx CD', href: '/turbografx-cd-games', alt: 'NEC TurboGrafx-CD Games Online', key: 'turbografx-cd' },
        { name: 'PC Engine CD', href: '/pc-engine-cd-games', alt: 'NEC PC Engine CD-ROM² Games Online', key: 'pc-engine-cd' },
    ],
    Atari: [
        { name: 'Atari 7800', href: '/atari-7800-games', alt: 'Atari 7800 ProSystem Games Online', key: 'atari-7800' },
        { name: 'Atari Lynx', href: '/atari-lynx-games', alt: 'Atari Lynx Handheld Games Online', key: 'atari-lynx' },
        { name: 'Atari Jaguar', href: '/atari-jaguar-games', alt: 'Atari Jaguar Games Online', key: 'atari-jaguar' },
    ],
    PlayStation: [
        { name: 'PlayStation', href: '/playstation-games', alt: 'Sony PS1 Games Online', key: 'playstation' },
    ],
    Arcade: [
        { name: 'Arcade', href: '/arcade-games', alt: 'Classic Arcade Games Online', key: 'arcade' },
    ],
    Other: [
        { name: 'Wonderswan', href: '/wonderswan-games', alt: 'Bandai WonderSwan Games Online', key: 'wonderswan' },
        { name: 'Neo Geo Pocket', href: '/neo-geo-pocket-games', alt: 'SNK Neo Geo Pocket Games Online', key: 'neo-geo-pocket' },
        { name: 'MSX', href: '/msx-games', alt: 'MSX Games Online', key: 'msx' },
        { name: 'MSX 2', href: '/msx-2-games', alt: 'MSX 2 Games Online', key: 'msx-2' },
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