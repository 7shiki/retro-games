'use client'

import { useState, useEffect } from 'react'

interface SearchBarProps {
  onSearch?: (query: string) => void
  defaultValue?: string
  initialMessages: any
}

export default function SearchBar({ onSearch, defaultValue = '', initialMessages }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue)
  const messages = initialMessages.search

  // 当 defaultValue 改变时更新输入框的值
  useEffect(() => {
    setQuery(defaultValue)
  }, [defaultValue])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(query)
  }

  const handleClear = () => {
    setQuery('')
    onSearch?.('')
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="text-lg text-purple-400 mb-3 text-center">{messages.searchTip}</h2>

      <form onSubmit={handleSubmit} className="flex w-full">
        <div className="flex-1 relative">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={messages.placeholder}
            className="w-full px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-l-lg focus:outline-none focus:border-purple-500 text-white pr-10"
          />
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white p-1"
              title={messages.clearSearch}
            >
              ×
            </button>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 transition-colors"
        >
          {messages.search}
        </button>
      </form>
    </div>
  )
}