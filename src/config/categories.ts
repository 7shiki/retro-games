export type CategoryItem = {
  name: string
  href: string
  alt: string
  description: string
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
        { name: 'NES', href: '/nes-games', alt: 'Nintendo Entertainment System Games Online',description: 'The Nintendo Entertainment System is an 8-bit home video game console that was developed and manufactured by Nintendo. It was initially released in Japan as the Family Computer on July 15, 1983, and was later released in North America during 1985, in Europe during 1986, and Australia in 1987. In South Korea, it was known as the Hyundai Comboy and was distributed by SK Hynix which then was known as Hyundai Electronics. It was succeeded by the Super Nintendo Entertainment System.' },
        { name: 'FDS', href: '/fds-games', alt: 'Famicom Disk System Games Online', description :'The Famicom Disk System (FDS) is a Japan-exclusive add-on for the Family Computer (Famicom), released by Nintendo in 1986. It introduced rewritable floppy disk storage, allowing for expanded game sizes and save functionality, but was eventually discontinued due to the rise of cartridge-based games.'},
        { name: 'SNES', href: '/snes-games', alt: 'Super Nintendo Entertainment System Games Online', description :'The Super Nintendo Entertainment System is a 16-bit home video game console developed by Nintendo that was released in 1990 in Japan and South Korea, 1991 in North America, 1992 in Europe and Australasia, and 1993 in South America. In Japan, the system is called the Super Famicom, or SFC for short. In South Korea, it is known as the Super Comboy and was distributed by Hyundai Electronics. Although each version is essentially the same, several forms of regional lockout prevent the different versions from being compatible with one another. It was released in Brazil on September 2, 1992, by Playtronic.'},
        { name: 'GB', href: '/gameboy-games', alt: 'Nintendo Game Boy Games Online', description :'The Game Boy is an 8-bit handheld video game device with interchangeable cartridges developed and manufactured by Nintendo, which was first released in Japan on April 21, 1989, in North America on July 31, 1989 and in Europe on September 28, 1990. It is the first handheld console in the Game Boy line and was created by Gunpei Yokoi and Nintendo Research & Development 1. This is the same staff credited with designing the Game & Watch series as well as several popular games for the Nintendo Entertainment System. Redesigned versions were released in 1996 and 1998 in the form of Game Boy Pocket and Game Boy Light, respectively.'},
        { name: 'GBC', href: '/gameboycolor-games', alt: 'Nintendo Game Boy Color Games Online', description :'The Game Boy Color, referred to as GBC, is a handheld game console manufactured by Nintendo, which was released on October 21, 1998 in Japan and was released in November of the same year in international markets. It is the successor of the Game Boy.'},
        { name: 'GBA', href: '/gameboyadvance-games', alt: 'Nintendo Game Boy Advance Games Online', description :'The Game Boy Advance (abbreviated as GBA) is a 32-bit handheld video game console developed, manufactured and marketed by Nintendo as the successor to the Game Boy Color. It was released in Japan on March 21, 2001, in North America on June 11, 2001, in Australia and Europe on June 22, 2001, and in the People\'s Republic of China on June 8, 2004 (excluding Hong Kong). Nintendo\'s competitors in the handheld market at the time were the Neo Geo Pocket Color, WonderSwan, GP32, Tapwave Zodiac, and the N-Gage. Despite the competitors\' best efforts, Nintendo maintained a majority market share with the Game Boy Advance.'},
        { name: 'N64', href: '/n64-games', alt: 'Nintendo 64 Games Online', description :'The Nintendo 64 (N64) is a fifth-generation home video game console developed by Nintendo and released in 1996 in Japan and North America, and 1997 in Europe and Australia. It was the first Nintendo console to feature 3D graphics and used cartridges instead of CDs, competing with the PlayStation and Sega Saturn.'},
        { name: 'NDS', href: '/nds-games', alt: 'Nintendo DS Games Online', description :'The Nintendo DS (NDS) is a dual-screen handheld gaming console released by Nintendo in 2004. Featuring a touchscreen, wireless connectivity, and backward compatibility with Game Boy Advance games, it became one of the best-selling gaming systems of all time.'},
    ],
    Sega: [ 
        { name: 'Master System', href: '/master-system-games', alt: 'Sega Master System Games Online', description :'The Sega Master System is an 8-bit home video game console developed by Sega, first released in 1985 in Japan as the Sega Mark III, and later rebranded as the Master System for its international release. It was a competitor to the Nintendo Entertainment System but achieved greater success in Europe and Brazil.'},
        { name: 'Game Gear', href: '/game-gear-games', alt: 'Sega Game Gear Games Online', description :'The Game Gear is an 8-bit handheld game console released by Sega on October 6, 1990 in Japan, 1991 in North America and Europe, and Australia in 1992. The Game Gear primarily competed with Nintendo\'s Game Boy, the Atari Lynx and NEC\'s TurboExpress. The handheld shares much of its hardware with the Master System and is able to play its own titles as well as those of the Master System, the latter being made possible by the use of an adapter. Containing a full-color backlit screen with a landscape format, Sega positioned the Game Gear as a technologically superior handheld to the Game Boy.'},
        { name: 'Genesis', href: '/genesis-games', alt: 'Sega Genesis/Mega Drive Games Online', description :'The Sega Genesis, known as the Mega Drive in most regions outside North America, is a 16-bit home video game console which was developed and sold by Sega Enterprises, Ltd. The Genesis was Sega\'s third console and the successor to the Master System. Sega first released the console as the Mega Drive in Japan in 1988, followed by a North American debut under the Genesis moniker in 1989. In 1990, the console was distributed as the Mega Drive by Virgin Mastertronic in Europe, by Ozisoft in Australasia, and by Tec Toy in Brazil. In South Korea, the systems were distributed by Samsung and were known as the Super Gam*Boy, and later the Super Aladdin Boy.'},
        { name: '32X', href: '/sega32x-games', alt: 'Sega 32X Games Online', description :'The Sega 32X is an add-on for the Sega Genesis/Mega Drive released in 1994. It was designed to enhance the console’s graphics and processing power, but it had a short lifespan due to the arrival of the Sega Saturn.'},
        { name: 'Sega CD', href: '/sega-cd-games', alt: 'Sega CD/Mega CD Games Online', description :'The Sega CD (Mega-CD outside North America) was a CD-ROM expansion for the Sega Genesis, released in 1991 in Japan and 1992 in North America. It introduced full-motion video and CD-quality audio but struggled due to high costs and limited game library.'},
    ],
    NEC: [
        { name: 'Turbografx-16', href: '/turbografx-16-games', alt: 'NEC TurboGrafx-16 Games Online', description :'The TurboGrafx-16 Entertainment SuperSystem, known in Japan and France as the PC Engine (PCエンジン Pī Shī Enjin), is a home video game console jointly developed by Hudson Soft and NEC Home Electronics, released in Japan on October 30, 1987 and in the United States on August 29, 1989. It also had a limited release in the United Kingdom and Spain in 1990, known as simply TurboGrafx and based on the American model, whilst the Japanese model was imported and distributed in France in 1989. It was the first console released in the 16-bit era, albeit still utilizing an 8-bit CPU. Originally intended to compete with the Nintendo Entertainment System (NES), it ended up competing with the Sega Genesis, and later on the Super Nintendo Entertainment System (SNES).'},
        { name: 'Turbografx CD', href: '/turbografx-cd-games', alt: 'NEC TurboGrafx-CD Games Online', description :'The TurboGrafx-CD is an add-on for the TurboGrafx-16/PC Engine, released in 1988 in Japan and later in North America. It introduced CD-based gaming to NEC’s platform, allowing for higher quality audio and expanded game storage.'},
        { name: 'PC Engine CD', href: '/pc-engine-cd-games', alt: 'NEC PC Engine CD-ROM² Games Online', description :'The PC Engine CD-ROM² was the first CD-based console add-on, released in 1988 in Japan. It expanded the capabilities of the PC Engine, allowing for larger games with improved audio and animation, influencing future CD-based gaming systems.'},
    ],
    Atari: [
        { name: 'Atari 7800', href: '/atari-7800-games', alt: 'Atari 7800 ProSystem Games Online', description :'The Atari 7800 ProSystem is a home video game console released by Atari Corporation in 1986. It was designed to be backward compatible with Atari 2600 games while offering improved graphics and performance. Despite its capabilities, it struggled to compete against the Nintendo Entertainment System and the Sega Master System during its lifespan.'},
        { name: 'Atari Lynx', href: '/atari-lynx-games', alt: 'Atari Lynx Handheld Games Online', description :'The Atari Lynx is a handheld game console released by Atari in 1989. It was the first handheld console with a color LCD screen and had advanced hardware for its time, including sprite scaling and multiplayer support. However, it faced stiff competition from the Nintendo Game Boy and Sega Game Gear, limiting its market success.'},
        { name: 'Atari Jaguar', href: '/atari-jaguar-games', alt: 'Atari Jaguar Games Online', description :'The Atari Jaguar is a home video game console released in 1993 by Atari Corporation. Marketed as the first 64-bit gaming system, it boasted superior processing power compared to its 16-bit competitors. However, the Jaguar struggled due to a lack of developer support and strong competition from the Sony PlayStation and Sega Saturn, ultimately leading to Atari’s exit from the console market.'},
    ],
    PlayStation: [
        { name: 'PlayStation', href: '/playstation-games', alt: 'Sony PS1 Games Online', description :'The PlayStation (PS1) is a 32-bit home video game console released by Sony in 1994 in Japan and 1995 worldwide. It was the first console to sell over 100 million units and introduced CD-based gaming, 3D graphics, and a vast library of iconic games.'},
    ],
    Arcade: [
        { name: 'Arcade', href: '/arcade-games', alt: 'Classic Arcade Games Online', description :'Arcade games are coin-operated video games found in public places such as malls and arcades. Popular during the late 20th century, they include classics like Pac-Man, Street Fighter, and Metal Slug, many of which have been adapted for home consoles.'},
    ],
    Other: [
        { name: 'Wonderswan', href: '/wonderswan-games', alt: 'Bandai WonderSwan Games Online', description :'The WonderSwan is a handheld game console released in 1999 by Bandai exclusively in Japan. Designed as a competitor to the Game Boy Color, it featured a unique vertical and horizontal screen orientation. An improved version, the WonderSwan Color, was released in 2000, offering a color display and better hardware capabilities. Despite its innovative design, it struggled to compete with Nintendo’s dominance in the handheld market.'},
        { name: 'Neo Geo Pocket', href: '/neo-geo-pocket-games', alt: 'SNK Neo Geo Pocket Games Online', description :'The Neo Geo Pocket is a handheld game console released by SNK in 1998. It was later succeeded by the Neo Geo Pocket Color in 1999, which introduced a color screen and improved software support. The system featured high-quality arcade-style games, particularly from SNK’s franchises like King of Fighters and Samurai Shodown, but it struggled against Nintendo’s Game Boy lineup.'},
        { name: 'MSX', href: '/msx-games', alt: 'MSX Games Online', description :'The MSX is a home computer platform introduced in 1983 by Microsoft and ASCII Corporation to establish a standardized computing environment. It was particularly popular in Japan, Europe, and South America, serving as a platform for many early Konami and Hudson Soft games. The system played a significant role in the early development of franchises such as Metal Gear and Bomberman.'},
        { name: 'MSX 2', href: '/msx-2-games', alt: 'MSX 2 Games Online', description :'The MSX2 is an upgraded version of the original MSX computer standard, released in 1985. It featured improved graphics capabilities, including support for higher resolutions and a larger color palette, making it a more powerful gaming and computing system. Many classic games, such as Metal Gear 2: Solid Snake, were developed for the MSX2, showcasing its advanced hardware for the time.'},
    ]
}

// 创建一个扁平化的分类映射
export const categoryMap = Object.entries(categories).reduce((acc, [company, items]) => {
  items.forEach(item => {
    const key = item.href.replace('/', '').replace('-games', '')
    acc[key] = {
      title: `${item.name} Games`,
      description: item.description,
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