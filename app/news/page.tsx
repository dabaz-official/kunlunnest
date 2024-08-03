import { Metadata } from 'next';

import NewsSection from '@/components/news/NewsSections';

export const metadata: Metadata = {
  title: '巢动态',
  description: '昆仑巢，如同一片火花四溅的舞台，将不同领域的智慧和创意汇聚一堂。',  
}

export default function News() {
  return (
    <main className="isolate">
      <NewsSection />
    </main>
  )
}