'use client'

import { useEffect } from 'react'

export default function GoogleAdsense({ CLIENT_ID }: { CLIENT_ID: string }) {
  useEffect(() => {
    try {
      const script = document.createElement('script')
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${CLIENT_ID}`
      script.async = true
      script.crossOrigin = 'anonymous'
      document.head.appendChild(script)
    } catch (error) {
      console.error('Error loading AdSense script:', error)
    }
  }, [CLIENT_ID])
  
  return null
} 