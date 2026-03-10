"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

export function Hero() {
    // Framer Motion staggered variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" as const },
        },
    };

    return (
        <section className="relative w-full h-[650px] md:h-[750px] lg:h-[850px] flex items-center overflow-hidden">
            {/* Background Image Setup */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.png"
                    alt="Forklift and Port Operations"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Linear: top to bottom, semi-transparent black gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/50 mix-blend-multiply" />

                {/* Ensure right side is visible while darkening the left for text readability on larger screens */}

            </div>

            {/* Content Container (z-10 ensures it stays above overlays but under Navbar's z-50) */}
            <div className="container mx-auto px-4 relative z-10 w-full h-full flex flex-col justify-center mt-12 lg:mt-0">
                <motion.div
                    className="flex flex-col items-start gap-4 md:gap-6 max-w-[850px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Main Headline */}
                    <motion.h1
                        className="font-sans text-[2.5rem] leading-[1.05] md:text-6xl lg:text-7xl xl:text-[5rem] font-black uppercase tracking-tight text-white drop-shadow-md"
                        variants={itemVariants}
                    >
                        <span className="text-white">BAYRAKTAR:</span> <br className="hidden md:block" />
                        <span className="text-[#00A651]">HIZLI VE GÜVENİLİR</span> <br className="hidden md:block lg:hidden" />
                        <span className="text-white"> FORKLİFT KİRALAMA</span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.div variants={itemVariants} className="mt-2 md:mt-4">
                        <p className="font-sans text-gray-200 text-base md:text-xl lg:text-2xl font-light leading-[1.6] tracking-wide max-w-2xl drop-shadow-sm">
                            İstanbul genelinde güçlü makine parkurumuz ve uzman operatör desteğimizle, 7/24 kesintisiz ve profesyonel forklift kiralama çözümleri sunuyoruz.
                        </p>
                    </motion.div>

                    {/* Checkmarks / Feature List (Optional, like Image 2) */}
                    <motion.div variants={itemVariants} className="flex flex-col gap-2 mt-4 text-white/90 text-sm md:text-base lg:text-lg font-medium tracking-wide">
                        <div className="flex items-center gap-2">
                            <span className="text-[#00A651]">✔</span> Hızlı ve Güvenilir Forklift Kiralama
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#00A651]">✔</span> Uygun Fiyat Avantajları
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#00A651]">✔</span> Deneyimli ve İşinde Uzman Ekip
                        </div>
                    </motion.div>

                    {/* Call to Actions - Pill Shape */}
                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-10 w-full sm:w-auto"
                        variants={itemVariants}
                    >
                        <Link href="tel:05385147474" className="w-full sm:w-fit">
                            <Button
                                size="lg"
                                className="cursor-pointer w-full sm:w-[500px] px-8 py-5 flex justify-center items-center gap-3 text-center bg-[#00A651] hover:bg-[#00c25e] hover:brightness-110 text-white font-bold rounded-full text-base lg:text-lg shadow-[0_10px_20px_rgba(0,166,81,0.4)] hover:shadow-[0_15px_30px_rgba(0,166,81,0.6)] hover:scale-105 transition-all duration-300 h-[60px]"
                            >
                                <Phone className="w-5 h-5 text-white" />
                                <span>Hemen Ara 0538 514 74 74</span>
                                <WhatsAppIcon className="w-5 h-5 text-white" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
