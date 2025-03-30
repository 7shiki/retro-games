'use client'

import Script from 'next/script'

export default function GoogleAdsense({ CLIENT_ID }: { CLIENT_ID: string }) {
  return (
    <Script
      id="google-adsense"
      strategy="afterInteractive"
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT_ID}`}
      crossOrigin="anonymous"
    />
  )
} 