import { Metadata } from 'next'
import Link from 'next/link'
import { getTranslations } from '@/utils/i18n'

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const messages = await getTranslations(params.locale)
  // 根据当前语言设置canonical URL
  const canonicalUrl = params.locale === 'en' 
    ? 'https://retro-games.org/terms-of-service' 
    : `https://retro-games.org/${params.locale}/terms-of-service`

  return {
    title: `${messages.footer.terms.title} - RetroGames`,
    description: messages.footer.terms.description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': canonicalUrl,
        'zh': `https://retro-games.org/zh/terms-of-service`,
        'zh-TW': 'https://retro-games.org/zh-TW/terms-of-service',
        'es': 'https://retro-games.org/es/terms-of-service',
        'pt': 'https://retro-games.org/pt/terms-of-service',
        'ru': 'https://retro-games.org/ru/terms-of-service',
        'ja': 'https://retro-games.org/ja/terms-of-service',
        'de': 'https://retro-games.org/de/terms-of-service',
        'fr': 'https://retro-games.org/fr/terms-of-service',
        'ko': 'https://retro-games.org/ko/terms-of-service',
        'it': 'https://retro-games.org/it/terms-of-service',
        'fil': 'https://retro-games.org/fil/terms-of-service',
        'hi': 'https://retro-games.org/hi/terms-of-service',
        'vi': 'https://retro-games.org/vi/terms-of-service'
      } as Record<string, string>
    }
  }
}

export default async function TermsOfService({ params }: { params: { locale: string } }) {
  const messages = await getTranslations(params.locale)
  const terms = messages.footer.terms
  const locale = params.locale

  return (
    <main className="min-h-screen relative">
      {/* 背景网格 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 -z-10"></div>

      {/* 内容容器 */}
      <div className="relative z-10 min-h-screen flex flex-col bg-section">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-2">
            {terms.title}
          </h1>
          
          {/* 添加最后更新时间 */}
          <p className="text-sm text-gray-400 mb-8">
            {terms.lastUpdated}
          </p>

          <div className="space-y-8 dark:text-gray-200">
            {/* 介绍部分 */}
            <section>
              <p className="mb-4">
                {terms.intro.text1}
                <Link href={locale === 'en' ? "/" : `/${locale}`} className="text-purple-500 hover:text-purple-400 transition-colors">
                  RetroGames
                </Link>
                {terms.intro.text2}
              </p>
            </section>

            {/* 服务说明 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{terms.service.title}</h2>
              <p className="mb-4">
                <Link href={locale === 'en' ? "/" : `/${locale}`} className="text-purple-500 hover:text-purple-400 transition-colors">
                  retro-games.org
                </Link>
                {terms.service.text1}
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {terms.service.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 内容所有权 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{terms.content.title}</h2>
              <p className="mb-4">{terms.content.text1}</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {terms.content.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-4">{terms.content.text2}</p>
            </section>

            {/* 免责声明 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{terms.disclaimer.title}</h2>
              <p className="mb-4">{terms.disclaimer.text1}</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {terms.disclaimer.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-4">{terms.disclaimer.text2}</p>
            </section>

            {/* 用户行为规范 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{terms.conduct.title}</h2>
              <p className="mb-4">{terms.conduct.text1}</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {terms.conduct.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </section>

            {/* 服务变更 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{terms.modifications.title}</h2>
              <p className="mb-4">{terms.modifications.text1}</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                {terms.modifications.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="mb-4">{terms.modifications.text2}</p>
            </section>

            {/* 适用法律 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{terms.governing.title}</h2>
              <p className="mb-4">{terms.governing.text1}</p>
            </section>

            {/* 联系信息 */}
            <section>
              <h2 className="text-2xl font-bold mb-4">{terms.contact.title}</h2>
              <p className="mb-4">{terms.contact.text1}</p>
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
