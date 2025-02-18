'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'zh', name: '简体中文', flag: '🇨🇳' },
    { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'fil', name: 'Filipino', flag: '🇵🇭' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' }
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
        className="flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-purple-500/10 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLanguage.name}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-1 py-2 w-32 bg-nav rounded-lg shadow-xl border border-purple-500/10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 hover:bg-purple-500/10 transition-colors ${
                currentLang === lang.code ? 'text-primary bg-purple-500/10' : ''
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
} 