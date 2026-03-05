"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, MapPin, MessageCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const serviceRegions = [
    { region: "Avrupa Yakası 1", districts: ["Arnavutköy", "Avcılar", "Bağcılar", "Bahçelievler", "Bakırköy"] },
    { region: "Avrupa Yakası 2", districts: ["Başakşehir", "Bayrampaşa", "Beşiktaş", "Beylikdüzü", "Beyoğlu"] },
    { region: "Avrupa Yakası 3", districts: ["Büyükçekmece", "Çatalca", "Esenler", "Esenyurt", "Eyüpsultan"] },
    { region: "Anadolu Yakası 1", districts: ["Ataşehir", "Beykoz", "Çekmeköy", "Kadıköy", "Kartal"] },
    { region: "Anadolu Yakası 2", districts: ["Maltepe", "Pendik", "Sancaktepe", "Tuzla", "Ümraniye"] }
];

const serviceTags = [
    "FORKLİFT KİRALAMA", "MANİTOU KİRALAMA", "İSTANBUL FORKLİFT", "GÜNLÜK KİRALAMA",
    "AYLIK FORKLİFT", "YÜKLEME HİZMETLERİ", "OPERATÖRLÜ KİRALAMA", "ŞANTİYE FORKLİFT",
    "ENDÜSTRİYEL ÇÖZÜMLER", "DEPO FORKLİFT", "TELEHANDLER KİRALAMA", "ACİL FORKLİFT"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Hakkimizda() {
    return (
        <div className="flex flex-col min-h-screen bg-accent/5 relative">
            <Navbar />

            <main className="flex-1 overflow-hidden">

                {/* Floating WhatsApp Button */}
                <a
                    href="https://wa.me/905403571111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
                >
                    <MessageCircle className="w-8 h-8" fill="currentColor" />
                </a>

                {/* Hero Intro Section */}
                <section className="py-20 lg:py-32 bg-white">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                            {/* Left Content */}
                            <motion.div
                                className="space-y-8"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div>
                                    <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">
                                        KURUMSAL
                                    </span>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1D23] leading-tight mb-6">
                                        Hakkımızda
                                    </h1>
                                </div>

                                <div className="space-y-4 text-lg text-gray-500 leading-relaxed">
                                    <p>
                                        Bayraktar Forklift ve Manitou Kiralama olarak, forklift ve manitou kiralama alanında profesyonel hizmet sunuyoruz. Şantiyeler, depolar ve endüstriyel projeler için bakımlı iş makinelerimiz ve deneyimli ekibimizle güvenilir çözümler sağlıyoruz.
                                    </p>
                                    <p>
                                        Amacımız, müşterilerilerimizin iş süreçlerini aksatmadan, en yüksek verimlilikle operasyonlarını sürdürmelerine destek olmaktır. İhtiyaçlara özel kısa ve uzun dönem kiralama seçeneklerimizle iş yükünüzü hafifletiyoruz.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-8 pt-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary" fill="currentColor" stroke="white" strokeWidth={1.5} />
                                        <span className="font-bold text-[#1A1D23]">Deneyimli Kadro</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle2 className="w-6 h-6 text-primary" fill="currentColor" stroke="white" strokeWidth={1.5} />
                                        <span className="font-bold text-[#1A1D23]">Geniş Filo</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Right Visual */}
                            <motion.div
                                className="relative lg:h-[600px] w-full"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            >
                                <div className="relative w-full h-full aspect-square lg:aspect-auto rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-border/10">
                                    <img
                                        src="/forklift2.png"
                                        alt="Warehouse Exterior"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Service Regions Section */}
                <section className="py-24 bg-accent/20">
                    <div className="container mx-auto px-4 max-w-7xl">

                        {/* Section Title */}
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1D23] inline-block relative">
                                Hizmet Bölgelerimiz
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
                            </h2>
                        </div>

                        {/* Regions Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                        >
                            {serviceRegions.map((regionGroup, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    <Card className="h-full bg-white border-none shadow-sm hover:shadow-md transition-shadow p-6 rounded-2xl">
                                        <div className="flex items-center gap-2 mb-6 border-b border-border/50 pb-4">
                                            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                                            <h3 className="font-bold text-[#1A1D23] text-sm">{regionGroup.region}</h3>
                                        </div>
                                        <ul className="space-y-3">
                                            {regionGroup.districts.map((district, dIdx) => (
                                                <li key={dIdx} className="text-sm text-gray-500">
                                                    {district}
                                                </li>
                                            ))}
                                        </ul>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Service Tags Section */}
                <section className="py-16 bg-white border-t border-border/30">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <h4 className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-8 text-center md:text-left">
                            HİZMET ETİKETLERİMİZ
                        </h4>

                        <motion.div
                            className="flex flex-wrap justify-center md:justify-start gap-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {serviceTags.map((tag, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    <Badge
                                        variant="outline"
                                        className="px-4 py-2 bg-gray-50/50 hover:bg-gray-100 border-gray-200 text-gray-500 text-xs tracking-wide rounded-md transition-colors"
                                    >
                                        {tag}
                                    </Badge>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
