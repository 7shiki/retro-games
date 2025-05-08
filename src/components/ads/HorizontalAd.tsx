'use client'

import GoogleAdUnit from '@/components/GoogleAdUnit'

export default function HorizontalAd() {
  return (
    <div className="flex justify-center my-6 w-full overflow-hidden">
      <GoogleAdUnit 
        adSlot="2705274134"
        style={{
          display: 'inline-block',
          width: 728,
          height: 90
        }}
        className="mx-auto"
      />
    </div>
  )
} 