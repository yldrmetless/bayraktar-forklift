"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center">
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero.png"
                    alt="Industrial Warehouse"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        className="flex flex-col items-start gap-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Badge */}
                        <div className="border border-primary text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-wider">
                            KURUMSAL ÇÖZÜMLER
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                            Bayraktar: <span className="text-primary">Hızlı ve Güvenilir</span> Forklift Kiralama
                        </h1>
                        {/* Subtext */}
                        <motion.p
                            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mt-6 opacity-90"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        >
                            İstanbul genelinde güçlü makine parkurumuz ve uzman operatör desteğimizle, 7/24 kesintisiz ve profesyonel forklift kiralama çözümleri sunuyoruz.
                        </motion.p>

                        {/* Call to Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">
                            <Link href="/hizmetlerimiz" className="w-full sm:w-fit">
                                <Button
                                    size="lg"
                                    className="cursor-pointer w-full sm:w-[220px] px-8 py-4 flex justify-center items-center text-center bg-primary hover:bg-primary/90 text-white font-bold rounded-full text-base shadow-lg shadow-primary/20 h-[56px]"
                                >
                                    Hizmetleri İncele
                                </Button>
                            </Link>
                            <Link href="https://wa.me/905385147474?text=Merhaba%20forklift%20kiralamak%20istiyorum" target="_blank" rel="noopener noreferrer" className="w-full sm:w-fit">
                                <Button size="lg" variant="outline" className="cursor-pointer w-full sm:w-[220px] px-8 py-4 flex justify-center items-center text-center font-bold rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-white border-none group backdrop-blur-sm h-[56px]">
                                    Teklif Al
                                    <ArrowRight className="ml-2 shrink-0 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
