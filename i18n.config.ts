import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// 可以在这里添加更多语言
const locales = ['en', 'zh', 'zh-TW', 'ja', 'ko', 'ru', 'fr', 'de', 'es', 'it', 'pt', 'vi', 'hi', 'fil'];

export default getRequestConfig(async ({ locale }) => {
  // 验证请求的语言是否支持
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
}); 