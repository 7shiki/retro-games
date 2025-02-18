'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // 控制 body 滚动
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 bg-nav backdrop-blur-md border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Left section: Logo and Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center">
                <span className="retro-logo text-xl md:text-2xl">RetroGames</span>
              </Link>
              
              {/* Mobile menu button */}
              <button
                type="button"
                className="md:hidden p-2 rounded-lg hover:bg-purple-500/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 dark:invert" />
                ) : (
                  <Bars3Icon className="h-6 w-6 dark:invert" />
                )}
              </button>
            </div>

            {/* Desktop Navigation */}
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

            {/* Right section: Language and Theme Controls */}
            <div className="flex items-center">
              <div className="flex items-center bg-nav rounded-lg">
                <LanguageToggle />
                <div className="h-full border-r border-purple-500/10" />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity md:hidden z-[9999] ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-gray-950 transform transition-transform duration-300 ease-in-out shadow-xl z-[10000] ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full overflow-y-auto">
            <div className="sticky top-0 p-4 bg-white dark:bg-gray-950 border-b border-purple-500/10">
              <div className="flex items-center justify-end">
                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-purple-500/10 text-gray-800 dark:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-6">
              {Object.entries(categories).map(([category, items]) => (
                <div key={category} className="space-y-2">
                  {Array.isArray(items) ? (
                    <>
                      <div className="font-medium text-lg text-gray-800 dark:text-white">
                        {category}
                      </div>
                      <div className="space-y-1">
                        {items.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={`block py-2 text-base hover:bg-purple-500/10 rounded-lg px-3 transition-colors ${
                              pathname === item.href
                                ? 'text-primary bg-purple-500/10'
                                : 'text-gray-700 dark:text-gray-200'
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="font-medium text-lg text-gray-800 dark:text-white">
                        {category}
                      </div>
                      <div className="space-y-1">
                        <Link
                          href={items.href}
                          className={`block py-2 text-base hover:bg-purple-500/10 rounded-lg px-3 transition-colors ${
                            pathname === items.href
                              ? 'text-primary bg-purple-500/10'
                              : 'text-gray-700 dark:text-gray-200'
                          }`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {items.name}
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
