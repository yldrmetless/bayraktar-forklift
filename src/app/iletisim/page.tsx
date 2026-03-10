import type { Metadata } from 'next';
import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MapPin, Smartphone, Mail } from 'lucide-react';
import * as motion from 'framer-motion/client';

export const metadata: Metadata = {
    title: 'İletişim - Bayraktar Forklift',
    description: 'Bayraktar Forklift iletişim sayfası. Bize ulaşın, profesyonel forklift kiralama hizmetlerimiz hakkında bilgi alın.',
};

const contactCards = [
    {
        icon: MapPin,
        title: "Adresimiz",
        content: (
            <>
                Ferhatpaşa Mahallesi 9. Sokak No 25/1 <br />
                Ataşehir İSTANBUL
            </>
        ),
        buttonLabel: "HARİTADA AÇ",
        action: "https://maps.google.com"
    },
    {
        icon: Smartphone,
        title: "Telefon",
        content: (
            <>
                Haftanın her günü hizmet.<br />
                <span className="font-bold text-[#1A1D23] text-lg mt-1 block">0538 514 74 74</span>
            </>
        ),
        buttonLabel: "HEMEN ARA",
        action: "tel:+905385147474"
    },
    {
        icon: Mail,
        title: "E-Posta",
        content: (
            <>
                Teklif talepleriniz için:<br />
                <span className="font-bold text-[#1A1D23] mt-1 block">info@bayraktarforklift.com</span>
            </>
        ),
        buttonLabel: "E-POSTA GÖNDER",
        action: "mailto:info@bayraktarforklift.com"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Iletisim() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50/50 relative">
            <Navbar />

            <main className="flex-1 overflow-hidden">



                {/* Form & Cards Container */}
                <div className="py-20 lg:py-24">
                    <div className="container mx-auto px-4 max-w-7xl">

                        {/* Page Header */}
                        <div className="mb-16">
                            <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase block mb-4">
                                ANASAYFA / İLETİŞİM
                            </span>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1D23] leading-tight inline-block relative">
                                İletişim
                                <div className="absolute -bottom-4 left-0 w-24 h-[6px] bg-primary" />
                            </h1>
                        </div>

                        {/* Contact Info Grid */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-3 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {contactCards.map((card, idx) => {
                                const Icon = card.icon;
                                return (
                                    <motion.div key={idx} variants={itemVariants}>
                                        <div className="bg-white rounded-3xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center h-full border border-gray-100">

                                            {/* Icon Circle */}
                                            <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-6">
                                                <Icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                                            </div>

                                            <h3 className="text-xl font-bold text-[#1A1D23] mb-4">{card.title}</h3>

                                            <p className="text-gray-500 leading-relaxed mb-8 flex-1">
                                                {card.content}
                                            </p>

                                            <a
                                                href={card.action}
                                                target={card.icon === MapPin ? "_blank" : "_self"}
                                                className="inline-block px-8 py-3 rounded-full border-2 border-primary text-primary text-sm font-bold tracking-wide hover:bg-primary hover:text-white transition-colors uppercase w-full max-w-[200px]"
                                            >
                                                {card.buttonLabel}
                                            </a>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>

                {/* Google Map Header */}
                <div className="w-full h-[450px] relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.8310411040347!2d29.171061876839207!3d40.98518042084555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf652dc0c5d1%3A0x31d8884270dc8ba1!2zRmVyaGF0cGHFn2EsIDkuIFNrLiBObzoyNSBEOjEsIDM0ODg4IEF0YcWfZWhpci_EsHN0YW5idWw!5e0!3m2!1str!2str!4v1772666715717!5m2!1str!2str"
                        className="w-full h-full border-0 grayscale-[0.2] contrast-[1.1]"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

            </main>

            <Footer />
        </div>
    );
}
