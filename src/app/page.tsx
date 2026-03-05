import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Technical } from '@/components/sections/Technical';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-accent/5">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <Features />
        <Technical />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
