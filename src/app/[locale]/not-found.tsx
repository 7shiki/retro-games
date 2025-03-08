'use client'

import Link from 'next/link'
import { useParams } from 'next/navigation'

// 定义支持的语言和翻译
const translations = {
  en: {
    title: "Page Not Found",
    description: "Sorry, the page you are looking for does not exist or has been removed.",
    backHome: "Back to Home"
  },
  zh: {
    title: "页面未找到",
    description: "抱歉，您查找的页面不存在或已被移除。",
    backHome: "返回首页"
  },
  "zh-tw": {
    title: "頁面未找到",
    description: "抱歉，您查找的頁面不存在或已被移除。",
    backHome: "返回首頁"
  },
  es: {
    title: "Página no encontrada",
    description: "Lo sentimos, la página que estás buscando no existe o ha sido eliminada.",
    backHome: "Volver al inicio"
  },
  pt: {
    title: "Página não encontrada",
    description: "Desculpe, a página que você está procurando não existe ou foi removida.",
    backHome: "Voltar para o início"
  },
  ru: {
    title: "Страница не найдена",
    description: "Извините, страница, которую вы ищете, не существует или была удалена.",
    backHome: "Вернуться на главную"
  },
  ja: {
    title: "ページが見つかりません",
    description: "申し訳ありませんが、お探しのページは存在しないか、削除されました。",
    backHome: "ホームに戻る"
  },
  de: {
    title: "Seite nicht gefunden",
    description: "Entschuldigung, die gesuchte Seite existiert nicht oder wurde entfernt.",
    backHome: "Zurück zur Startseite"
  },
  fr: {
    title: "Page non trouvée",
    description: "Désolé, la page que vous recherchez n'existe pas ou a été supprimée.",
    backHome: "Retour à l'accueil"
  },
  ko: {
    title: "페이지를 찾을 수 없습니다",
    description: "죄송합니다. 찾으시는 페이지가 존재하지 않거나 삭제되었습니다.",
    backHome: "홈으로 돌아가기"
  },
  it: {
    title: "Pagina non trovata",
    description: "Ci dispiace, la pagina che stai cercando non esiste o è stata rimossa.",
    backHome: "Torna alla home"
  },
  fil: {
    title: "Hindi Nahanap ang Pahina",
    description: "Paumanhin, ang pahina na hinahanap mo ay hindi umiiral o inalis na.",
    backHome: "Bumalik sa Home"
  },
  hi: {
    title: "पृष्ठ नहीं मिला",
    description: "क्षमा करें, आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या हटा दिया गया है।",
    backHome: "होम पर वापस जाएं"
  },
  vi: {
    title: "Không tìm thấy trang",
    description: "Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.",
    backHome: "Trở về trang chủ"
  }
}

export default function LocalizedNotFound() {
  const params = useParams()
  const locale = (params?.locale as string) || 'en'
  
  // 获取当前语言的翻译，如果不存在则使用英文
  const t = translations[locale.toLowerCase() as keyof typeof translations] || translations.en
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-section">
      <div className="max-w-md w-full text-center">
        <h1 className="text-6xl font-bold mb-6 retro-logo">404</h1>
        <h2 className="text-2xl font-semibold mb-4 retro-logo">{t.title}</h2>
        <p className="text-gray-400 mb-8 retro-logo">{t.description}</p>
        <Link 
          href={locale === 'en' ? '/' : `/${locale}`}
          className="retro-button inline-block"
        >
          {t.backHome}
        </Link>
      </div>
    </div>
  )
} 