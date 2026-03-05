"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Eye, Droplet } from 'lucide-react';
import Image from 'next/image';

const standards = [
    {
        title: "Periyodik Bakımlar",
        description: "Bayraktar Forklift Kiralama bünyesindeki tüm araçlar düzenli teknik kontrolden geçer.",
        icon: Settings
    },
    {
        title: "Geniş Operatör Görüşü",
        description: "Güvenli çalışma için tasarlanmış ergonomik ve geniş açılı kabin sistemleri.",
        icon: Eye
    },
    {
        title: "Düşük Yakıt Tüketimi",
        description: "Yeni nesil motor teknolojileri ile projelerinizde maliyet avantajı.",
        icon: Droplet
    }
];

export function Technical() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        className="w-full lg:w-1/2 space-y-12"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight max-w-md">
                            Teknik Detaylar & Güvenlik Standartları
                        </h2>

                        <div className="space-y-8">
                            {standards.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex gap-6">
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                                                <Icon className="w-6 h-6 text-primary" strokeWidth={2} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-secondary mb-2">{item.title}</h4>
                                            <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Right Visual */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    >
                        <div className="relative aspect-square w-full rounded-[2.5rem] bg-[#F8F9FA] border-2 border-dashed border-border flex items-center justify-center p-8">
                            {/* Inner dotted box */}
                            <div className="absolute inset-8 border border-border/60 rounded-[1.5rem] z-10 pointer-events-none" />

                            {/* Top Left Badge */}
                            <div className="absolute top-12 left-12 bg-primary text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider z-20">
                                TEKNİK PLANLAMA
                            </div>

                            {/* Bottom Right Badge */}
                            <div className="absolute bottom-12 right-12 bg-[#1A1D23] text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider z-20">
                                YÜK ANALİZİ
                            </div>

                            {/* Center Replacement Image */}
                            <Image
                                src="/forklift1.png"
                                alt="Bayraktar Forklift Teknik Planlama"
                                fill
                                className="object-cover rounded-[2.5rem] p-4"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
