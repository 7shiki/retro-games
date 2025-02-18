'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

const categories = {
  Nintendo: [
    { name: 'NES', href: '/nes-games' },
    { name: 'FDS', href: '/fds-games' },
    { name: 'SNES', href: '/snes-games' },
    { name: 'GB', href: '/gameboy-games' },
    { name: 'GBC', href: '/gameboycolor-games' },
    { name: 'GBA', href: '/gameboyadvance-games' },
    { name: 'N64', href: '/n64-games' },
    { name: 'NDS', href: '/nds-games' },
  ],
  Sega: [
    { name: 'Master System', href: '/master-system-games' },
    { name: 'Game Gear', href: '/game-gear-games' },
    { name: 'Genesis', href: '/genesis-games' },
    { name: '32X', href: '/sega32x-games' },
    { name: 'Sega CD', href: '/sega-cd-games' },
  ],
  NEC: [
    { name: 'Turbografx-16', href: '/turbografx-16-games' },
    { name: 'Turbografx CD', href: '/turbografx-cd-games' },
    { name: 'PC Engine CD', href: '/pc-engine-cd-games' },
  ],
  Atari: [
    { name: 'Atari 7800', href: '/atari-7800-games' },
    { name: 'Atari Lynx', href: '/atari-lynx-games' },
    { name: 'Atari Jaguar', href: '/atari-jaguar-games' },
  ],
  PlayStation: {
    name: 'PlayStation',
    href: '/playstation-games'
  },
  Arcade: {
    name: 'Arcade',
    href: '/arcade-games'
  },
  Other: [
    { name: 'Wonderswan', href: '/wonderswan-games' },
    { name: 'Neo Geo Pocket', href: '/neo-geo-pocket-games' },
    { name: 'MSX', href: '/msx-games' },
    { name: 'MSX 2', href: '/msx-2-games' },
  ],
}

export default function Header() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-nav backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="retro-logo text-xl md:text-2xl">RetroGames</span>
          </Link>

          {/* Navigation Links - 只在桌面端显示 */}
          <nav className="hidden md:flex items-center space-x-4">
            {Object.entries(categories).map(([category, items]) => (
              <div
                key={category}
                className="relative"
                onMouseEnter={() => setOpenMenu(category)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                {Array.isArray(items) ? (
                  <>
                    <button className="nav-link">
                      {category}
                    </button>
                    {openMenu === category && (
                      <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-nav rounded-lg shadow-xl border border-purple-500/10">
                        {items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block px-4 py-2 hover:bg-purple-500/10 ${
                              pathname === item.href ? 'text-primary bg-purple-500/10' : ''
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={items.href}
                    className={`nav-link ${
                      pathname === items.href ? 'nav-link-active' : ''
                    }`}
                  >
                    {items.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Language and Theme Controls */}
          <div className="relative flex items-center">
            <div className="flex items-center bg-nav rounded-lg">
              <LanguageToggle />
              <div className="h-full border-r border-purple-500/10" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
