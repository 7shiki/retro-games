'use client'

import { useState, useEffect, useRef } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const languages = [
    { code: 'en', name: 'English', label: '🇬🇧' },
    { code: 'zh', name: '简体中文', label: '🇨🇳' },
    { code: 'zh-TW', name: '繁體中文', label: '🇹🇼' },
    { code: 'es', name: 'Español', label: '🇪🇸' },
    { code: 'pt', name: 'Português', label: '🇧🇷' },
    { code: 'ru', name: 'Русский', label: '🇷🇺' },
    { code: 'ja', name: '日本語', label: '🇯🇵' },
    { code: 'de', name: 'Deutsch', label: '🇩🇪' },
    { code: 'fr', name: 'Français', label: '🇫🇷' },
    { code: 'ko', name: '한국어', label: '🇰🇷' },
    { code: 'it', name: 'Italiano', label: '🇮🇹' },
    { code: 'fil', name: 'Filipino', label: '🇵🇭' },
    { code: 'hi', name: 'हिन्दी', label: '🇮🇳' },
    { code: 'vi', name: 'Tiếng Việt', label: '🇻🇳' }
]

// 支持的语言代码列表
const SUPPORTED_LOCALES = languages.map(lang => lang.code)

export default function LanguageToggle() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const pathname = usePathname()
    const dropdownRef = useRef<HTMLDivElement>(null)

    const currentLang = pathname.split('/')[1] || 'en'
    const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleLanguageChange = (langCode: string) => {
        const segments = pathname.split('/')
        
        const hasLangPrefix = SUPPORTED_LOCALES.includes(segments[1])
        
        let newPath
        if (hasLangPrefix) {
            segments[1] = langCode === 'en' ? '' : langCode
            newPath = segments.filter(Boolean).join('/')
        } else {
            newPath = langCode === 'en' 
                ? pathname.substring(1)
                : `${langCode}${pathname}`
        }

        newPath = '/' + newPath.replace(/^\/+/, '').replace(/\/+$/, '')
        
        if (!newPath) newPath = '/'
        
        router.push(newPath)
        setIsOpen(false)
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 rounded-l-lg hover:bg-purple-500/10 transition-colors border-r border-purple-500/10"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{currentLanguage.label}</span>
                <span className="language-text">{currentLanguage.name}</span>
                <ChevronDownIcon className="w-4 h-4 dark:invert" />
            </button>

            {isOpen && (
                <div 
                    className="absolute top-full right-0 mt-1 py-2 w-40 bg-nav rounded-lg shadow-xl border border-purple-500/10 z-[110]"
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                handleLanguageChange(lang.code)
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-purple-500/10 transition-colors flex items-center gap-2"
                        >
                            <span className="w-8">{lang.label}</span>
                            <span className="language-text">{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
} 