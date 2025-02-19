'use client'

import { useState, useEffect } from 'react'

interface SearchBarProps {
  onSearch?: (query: string) => void
  defaultValue?: string
}

export default function SearchBar({ onSearch, defaultValue = '' }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue)

  // 当 defaultValue 改变时更新输入框的值
  useEffect(() => {
    setQuery(defaultValue)
  }, [defaultValue])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-xl mx-auto">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search games..."
        className="flex-1 px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-l-lg focus:outline-none focus:border-purple-500 text-white"
      />
      <button 
        type="submit"
        className="px-6 py-3 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 transition-colors"
      >
        Search
      </button>
    </form>
  )
}