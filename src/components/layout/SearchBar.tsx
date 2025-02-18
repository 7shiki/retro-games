export default function SearchBar() {
  return (
    <div className="flex w-full max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search games..."
        className="flex-1 px-4 py-3 bg-gray-900/50 border border-purple-500/30 rounded-l-lg focus:outline-none focus:border-purple-500 text-white"
      />
      <button className="px-6 py-3 bg-purple-500 text-white rounded-r-lg hover:bg-purple-600 transition-colors">
        Search
      </button>
    </div>
  )
}
