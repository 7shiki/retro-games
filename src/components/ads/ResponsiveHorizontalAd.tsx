'use client'

import GoogleAdUnit from '@/components/GoogleAdUnit'

export default function ResponsiveHorizontalAd() {
  return (
    <div className="flex justify-center my-6 w-full overflow-hidden">
      <GoogleAdUnit 
        adSlot="2705274134"
        responsive={true}
        format="horizontal"
        style={{
          display: 'block',
          width: '100%',
          height: 'auto'
        }}
      />
    </div>
  )
} 