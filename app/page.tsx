import { AboutSection } from '@/components/home/AboutSection';
import { LogoClouds } from '@/components/home/LogoClouds';
import { ProductsSection } from '@/components/home/ProductsSection';

export default function Home() {
  return (
    <main className="isolate">
      <ProductsSection />
      <AboutSection />
      <LogoClouds />
    </main>
  );
}
