import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-section">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-6 retro-logo">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for does not exist or has been removed.
        </p>
        <Link 
          href="/"
          className="retro-button inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
} 