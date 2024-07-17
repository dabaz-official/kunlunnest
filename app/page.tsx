import { HomeCarousel } from '@/components/home/HomeCarousel';
import { AboutSection } from '@/components/home/AboutSection';
import LogoClouds from '@/components/home/LogoClouds';

export default function Home() {
  return (
    <div className="mt-20 lg:mt-0">
      <HomeCarousel />
      <AboutSection />
      <LogoClouds />
    </div>
  );
}
