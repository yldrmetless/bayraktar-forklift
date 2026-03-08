import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ServiceHighlights } from '@/components/sections/ServiceHighlights';
import { Features } from '@/components/sections/Features';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { ContactInfoCards } from '@/components/sections/ContactInfoCards';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-accent/5">
      <Navbar />
      <main className="flex-1 overflow-hidden">
        <Hero />
        <ServiceHighlights />
        <Features />
        <GalleryPreview />
        <ContactInfoCards />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
