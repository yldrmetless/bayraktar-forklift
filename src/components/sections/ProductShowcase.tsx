"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const models = [
    {
        badge: "ENDÜSTRİYEL ÇÖZÜM",
        title: "Heavy Duty Forklift",
        description: "Yüksek kapasiteli taşıma işleriniz için optimize edilmiş Bayraktar kalitesi. Zorlu fabrika ve depo koşullarında kesintisiz performans.",
        specs: [
            { label: "KAPASİTE", value: "5.000 KG" },
            { label: "ERİŞİM", value: "4.5 Metre" }
        ],
        image: "https://images.unsplash.com/photo-1587293852726-694764024831?auto=format&fit=crop&q=80&w=1200", // Placeholder for Red Manitou Forklift
        imagePosition: "left"
    },
    {
        badge: "ŞANTİYE SERİSİ",
        title: "Telehandler Manitou",
        description: "Bayraktar Forklift Kiralama güvencesiyle, inşaat sahalarında her türlü yükleme ve boşaltma işini kolaylaştıran yüksek erişimli makinelerimiz.",
        specs: [
            { label: "KAPASİTE", value: "4.000 KG" },
            { label: "YÜKSEKLİK", value: "18 Metre" }
        ],
        image: "https://images.unsplash.com/photo-1541888018260-eb2db16ba84c?auto=format&fit=crop&q=80&w=1200", // Placeholder
        imagePosition: "right"
    }
];

export function ProductShowcase() {
    return (
        <section className="py-24 bg-accent/10">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Title */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-secondary inline-block relative">
                        Popüler Modellerimiz
                        {/* Orange Underline */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
                    </h2>
                </div>

                {/* Models Listing */}
                <div className="space-y-24 md:space-y-32">
                    {models.map((model, index) => {
                        const isLeft = model.imagePosition === "left";

                        return (
                            <div
                                key={index}
                                className={`flex flex-col gap-12 lg:gap-20 items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Image */}
                                <motion.div
                                    className="w-full md:w-1/2"
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut" }}
                                >
                                    <div className="relative aspect-square md:aspect-[4/3] w-full rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-border/20">
                                        <img
                                            src={model.image}
                                            alt={model.title}
                                            className="w-full h-full object-cover rounded-[2rem]"
                                        />
                                    </div>
                                </motion.div>

                                {/* Content */}
                                <motion.div
                                    className="w-full md:w-1/2 space-y-8"
                                    initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                                >
                                    <div>
                                        <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">
                                            {model.badge}
                                        </span>
                                        <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-4">
                                            {model.title}
                                        </h3>
                                        <p className="text-muted-foreground text-lg leading-relaxed">
                                            {model.description}
                                        </p>
                                    </div>

                                    {/* Specs */}
                                    <div className="flex flex-wrap gap-4">
                                        {model.specs.map((spec, sIdx) => (
                                            <div key={sIdx} className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-border/40 w-full sm:w-auto flex-1 sm:flex-none">
                                                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1">{spec.label}</p>
                                                <p className="text-xl font-bold text-secondary">{spec.value}</p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Action */}
                                    <Button className="bg-[#151a25] hover:bg-[#202736] text-white font-bold px-8 py-6 rounded-full text-base">
                                        Hemen Kirala
                                    </Button>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
