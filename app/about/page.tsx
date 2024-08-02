import { Metadata } from 'next';

import AboutHero from '@/components/about/AboutHero';
import AboutTimeline from '@/components/about/AboutTimeline';

export const metadata: Metadata = {
  title: '关于',
  description: '昆仑巢，如同一片火花四溅的舞台，将不同领域的智慧和创意汇聚一堂。',  
}

export default function About() {
  return (
    <main className="isolate">
      <AboutHero />
      <AboutTimeline />
    </main>
  )
}