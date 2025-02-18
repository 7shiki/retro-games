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
        const pathWithoutLang = pathname.split('/').slice(2).join('/')
        const newPath = langCode === 'en' 
            ? `/${pathWithoutLang}`
            : `/${langCode}/${pathWithoutLang}`
        const cleanPath = newPath.replace(/\/+/g, '/').replace(/\/$/, '') || '/'
        
        router.push(cleanPath)
        setIsOpen(false)
    }

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                type="button"
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-l-lg hover:bg-purple-500/10 transition-colors border-r border-purple-500/10 text-gray-800 dark:text-gray-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{currentLanguage.label}</span>
                <span>{currentLanguage.name}</span>
                <ChevronDownIcon className="w-4 h-4" />
            </button>

            {isOpen && (
                <div 
                    className="absolute top-full right-0 mt-1 py-2 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-purple-500/10 z-50"
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={() => handleLanguageChange(lang.code)}
                            className="w-full text-left px-4 py-2 hover:bg-purple-500/10 transition-colors flex items-center gap-2 text-gray-800 dark:text-gray-200"
                        >
                            <span className="w-8">{lang.label}</span>
                            <span>{lang.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
} 