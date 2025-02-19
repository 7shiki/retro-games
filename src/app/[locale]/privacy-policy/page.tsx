import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy - RetroGames',
  description: 'Privacy policy and data collection practices for RetroGames'
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen relative">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

      {/* 内容容器 */}
      <div className="relative z-10 min-h-screen flex flex-col bg-section">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          
          {/* 添加最后更新时间 */}
          <p className="text-sm text-gray-400 mb-8">
            Last updated: March 19, 2024
          </p>
          
          <div className="space-y-8 dark:text-gray-200">
            {/* 介绍部分 */}
            <section>
              <p className="mb-4">
                It is our policy to respect your privacy regarding any information we may collect while operating our website. <Link href="/" className="text-purple-500 hover:text-purple-400 transition-colors">RetroGames</Link> respects your privacy and is committed to protecting any information you may provide us through this website.
              </p>
              <p className="mb-4">
                This Privacy Policy explains what information we collect, how we use it, and under what circumstances we may disclose it to third parties. This Privacy Policy applies to <Link href="/" className="text-purple-500 hover:text-purple-400 transition-colors">retro-games.org</Link> (hereinafter, "us", "we", or "RetroGames").
              </p>
            </section>

            {/* 数据收集部分 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Information Collection</h2>
              <p className="mb-4">
                Our website does not require user registration or login. We do not collect any personally identifiable information from our users. The only data we collect are:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Browser cookies essential for website functionality</li>
                <li>Anonymous usage statistics to improve our service</li>
              </ul>
            </section>

            {/* 第三方内容部分 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Content</h2>
              <p className="mb-4">
                The games and related content available on our website are sourced from third-party platforms. We do not claim ownership of this content and:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>All games are hosted on and streamed from third-party services</li>
                <li>Game information, images, and descriptions are provided by third-party sources</li>
                <li>We make no warranties regarding the accuracy or availability of this content</li>
              </ul>
            </section>

            {/* Cookie 使用说明 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Use of Cookies</h2>
              <p className="mb-4">
                We use cookies to enhance your browsing experience. These cookies are:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Essential for basic website functionality</li>
                <li>Used to remember your display preferences</li>
                <li>Not used for tracking or advertising purposes</li>
              </ul>
              <p className="mb-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            {/* 外部链接声明 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">External Links</h2>
              <p className="mb-4">
                Our website contains links to external sites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy and Terms of Service of every site you visit.
              </p>
              <p className="mb-4">
                We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites, products, or services.
              </p>
            </section>

            {/* 政策更新说明 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Policy Updates</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
              </p>
              <p className="mb-4">
                Your continued use of our website after we post any modifications to the Privacy Policy will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
              </p>
            </section>

            {/* 联系信息 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us through our website.
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
