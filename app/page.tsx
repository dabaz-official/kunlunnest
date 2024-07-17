import { HomeCarousel } from '@/components/home/HomeCarousel';
import { AboutSection } from '@/components/home/AboutSection';
import { LogoClouds } from '@/components/home/LogoClouds';
import { ProductsSection } from '@/components/home/ProductsSection';

export default function Home() {
  return (
    <div className="mt-20 lg:mt-0">
      <ProductsSection />
      <HomeCarousel />
      <AboutSection />
      <LogoClouds />
    </div>
  );
}
