import { Metadata } from 'next';

import NetworkNavigation from '@/components/network/NetworkNavigation';

export const metadata: Metadata = {
  title: '巢脉',
  description: '昆仑巢，如同一片火花四溅的舞台，将不同领域的智慧和创意汇聚一堂。',  
}

export default function Network() {
  return (
    <main className="isolate">
      <NetworkNavigation />
    </main>
  )
}