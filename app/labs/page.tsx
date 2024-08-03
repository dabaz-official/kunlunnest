import { Metadata } from 'next';

import LabsNavigation from '@/components/labs/LabsNavigation';

export const metadata: Metadata = {
  title: '开放实验室',
  description: '昆仑巢，如同一片火花四溅的舞台，将不同领域的智慧和创意汇聚一堂。',  
}

export default function Labs() {
  return (
    <main className="isolate">
      <LabsNavigation />
    </main>
  )
}