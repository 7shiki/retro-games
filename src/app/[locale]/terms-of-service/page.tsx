import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service - RetroGames',
  description: 'Terms and conditions for using RetroGames'
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen relative">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

      {/* 内容容器 */}
      <div className="relative z-10 min-h-screen flex flex-col bg-section">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          
          {/* 添加最后更新时间 */}
          <p className="text-sm text-gray-400 mb-8">
            Last updated: March 19, 2024
          </p>

          <div className="space-y-8 dark:text-gray-200">
            {/* 介绍部分 */}
            <section>
              <p className="mb-4">
                Welcome to <Link href="/" className="text-purple-500 hover:text-purple-400 transition-colors">RetroGames</Link>. By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            {/* 服务说明 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Service Description</h2>
              <p className="mb-4">
                <Link href="/" className="text-purple-500 hover:text-purple-400 transition-colors">retro-games.org</Link> provides a platform for users to play retro games through their web browsers. Our service includes:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Browser-based retro game emulation</li>
                <li>Game information and descriptions</li>
                <li>Related gaming content</li>
              </ul>
            </section>

            {/* 内容所有权 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Content and Copyright</h2>
              <p className="mb-4">
                All games and related content available through our service are:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Sourced from and hosted by third-party services</li>
                <li>Subject to their respective owners' copyrights and intellectual property rights</li>
                <li>Not owned or controlled by RetroGames</li>
              </ul>
              <p className="mb-4">
                We do not claim ownership of any games, ROMs, or related content provided through our service. All trademarks, service marks, and trade names are the property of their respective owners.
              </p>
            </section>

            {/* 免责声明 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
              <p className="mb-4">
                Our services are provided "as is" without any warranties, expressed or implied. RetroGames does not warrant that:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>The service will be uninterrupted or error-free</li>
                <li>Games or content will always be available</li>
                <li>Any errors or defects will be corrected</li>
              </ul>
              <p className="mb-4">
                We are not responsible for any content provided by third parties or for any errors or omissions in the content.
              </p>
            </section>

            {/* 用户行为规范 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
              <p className="mb-4">
                By using our service, you agree not to:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Use the service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to any part of the service</li>
                <li>Interfere with or disrupt the service or servers</li>
                <li>Circumvent, disable, or otherwise interfere with security features</li>
              </ul>
            </section>

            {/* 服务变更 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Modifications to Service</h2>
              <p className="mb-4">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Modify or discontinue any part of our service without notice</li>
                <li>Update these terms of service at any time</li>
                <li>Change the games and content available through our service</li>
              </ul>
              <p className="mb-4">
                Your continued use of the service following any changes constitutes your acceptance of such changes.
              </p>
            </section>

            {/* 适用法律 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with applicable laws, without regard to conflicts of law principles.
              </p>
            </section>

            {/* 联系信息 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact</h2>
              <p className="mb-4">
                For any questions regarding these terms, please contact us at:
              </p>
              <a
                href="mailto:support@retro-games.org"
                className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
              >
                support@retro-games.org
              </a>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
