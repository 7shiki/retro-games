import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* 这里可以添加导航栏等共享组件 */}
      <main>{children}</main>
      {/* 这里可以添加页脚等共享组件 */}
    </div>
  )
} 