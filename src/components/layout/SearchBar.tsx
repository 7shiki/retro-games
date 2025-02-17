export default function SearchBar() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search games..."
          className="w-full px-6 py-4 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
          Search
        </button>
      </div>
    </div>
  )
}
