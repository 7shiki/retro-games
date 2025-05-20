'use client'

import Link from 'next/link'
import { usePathname, useParams } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { categories, type CategoryItem } from '@/config/categories'

interface HeaderProps {
  initialMessages: any
}

export default function Header({ initialMessages }: HeaderProps) {
    const pathname = usePathname()
    const params = useParams()
    const locale = params.locale as string || 'en'
    const [openMenu, setOpenMenu] = useState<string | null>(null)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const timeoutRef = useRef<NodeJS.Timeout | null>(null)

    // 获取翻译
    const messages = initialMessages.platforms

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

    // 清理超时
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [])

    const handleMenuOpen = (key: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        setOpenMenu(key)
    }

    const handleMenuClose = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
        
        timeoutRef.current = setTimeout(() => {
            setOpenMenu(null)
        }, 300) // 300ms延迟关闭子菜单
    }

    return (
        <>
            <header className="sticky top-0 z-50 bg-nav backdrop-blur-md border-b border-purple-500/10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        {/* Left section: Logo and Mobile Menu Button */}
                        <div className="flex items-center gap-2">
                            <Link 
                                href={locale === 'en' ? '/' : `/${locale}`} 
                                className="flex items-center"
                                title={initialMessages.common.logo.title}
                            >
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
                            {Object.entries(categories).map(([key, items]) => (
                                <div
                                    key={key}
                                    className="relative"
                                    onMouseEnter={() => handleMenuOpen(key)}
                                    onMouseLeave={handleMenuClose}
                                >
                                    <button className="nav-link">
                                        {key}
                                    </button>
                                    {openMenu === key && (
                                        <div 
                                            className="absolute top-full left-0 mt-1 py-2 w-48 bg-nav rounded-lg shadow-xl border border-purple-500/10"
                                            onMouseEnter={() => handleMenuOpen(key)}
                                            onMouseLeave={handleMenuClose}
                                        >
                                            {items.map((item: CategoryItem) => (
                                                <Link
                                                    key={item.name}
                                                    href={locale === 'en' ? item.href : `/${locale}${item.href}`}
                                                    title={messages[item.key]?.alt}
                                                    className={`block px-4 py-2 hover:bg-purple-500/10 ${
                                                        pathname === item.href ? 'text-primary bg-purple-500/10' : ''
                                                    }`}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
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
                            {Object.entries(categories).map(([key, items]) => (
                                <div key={key} className="space-y-2">
                                    <div className="font-medium text-lg text-gray-800 dark:text-white">
                                        {key}
                                    </div>
                                    <div className="space-y-1">
                                        {items.map((item: CategoryItem) => (
                                            <Link
                                                key={item.name}
                                                href={locale === 'en' ? item.href : `/${locale}${item.href}`}
                                                title={messages[item.key]?.alt}
                                                className={`block py-2 text-base hover:bg-purple-500/10 rounded-lg px-3 transition-colors ${
                                                    pathname === item.href ? 'text-primary bg-purple-500/10' : 'text-gray-700 dark:text-gray-200'
                                                }`}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
