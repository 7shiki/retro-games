'use client'

import { useEffect, useRef } from 'react'

interface GoogleAdUnitProps {
  adSlot: string
  adClient?: string
  style?: {
    display?: string
    width?: string | number
    height?: string | number
  }
  className?: string
  format?: string
  responsive?: boolean
}

export default function GoogleAdUnit({
  adSlot,
  adClient = 'ca-pub-4294526989014116',
  style = {
    display: 'inline-block',
    width: 728,
    height: 90
  },
  className = '',
  format,
  responsive = false
}: GoogleAdUnitProps) {
  const adRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    try {
      const { adsbygoogle } = window as any
      
      if (adsbygoogle) {
        adsbygoogle.push({})
      }
    } catch (error) {
      console.error('Error loading ad:', error)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: style.display || 'inline-block',
          width: responsive ? '100%' : style.width,
          height: style.height
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : undefined}
      />
    </div>
  )
} 