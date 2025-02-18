'use client'

import { useState } from 'react'
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

    const currentLang = pathname.split('/')[1] || 'en'
    const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

    const handleLanguageChange = (langCode: string) => {
        const newPath = pathname.replace(`/${currentLang}`, `/${langCode}`)
        router.push(newPath)
        setIsOpen(false)
    }

    return (
        <div className="relative">
            <button
                className="flex items-center gap-2 px-3 py-2 rounded-l-lg hover:bg-purple-500/10 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{currentLanguage.label}</span>
                <span>{currentLanguage.name}</span>
                <ChevronDownIcon className="w-4 h-4" />
            </button>

            {isOpen && (
                <div className="absolute top-full right-0 mt-1 py-2 w-40 bg-nav rounded-lg shadow-xl border border-purple-500/10">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className="w-full text-left px-4 py-2 hover:bg-purple-500/10 transition-colors flex items-center gap-2"
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