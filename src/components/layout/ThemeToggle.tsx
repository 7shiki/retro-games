'use client'

import { useState, useEffect } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>('')

  useEffect(() => {
    // 检查系统偏好
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    // 从 localStorage 获取主题设置，如果没有则使用系统偏好
    const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light')
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  // 在主题未加载前不渲染按钮
  if (!theme) return null

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full transition-all duration-200 hover:scale-110"
      style={{
        background: `rgba(var(--primary), 0.1)`,
        border: `1px solid rgba(var(--primary), 0.2)`,
      }}
    >
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-purple-600" />
      )}
    </button>
  )
}

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          try {
            let theme = localStorage.getItem('theme')
            if (!theme) {
              theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
              localStorage.setItem('theme', theme)
            }
            document.documentElement.setAttribute('data-theme', theme)
          } catch (e) {}
        `,
      }}
    />
  )
} 