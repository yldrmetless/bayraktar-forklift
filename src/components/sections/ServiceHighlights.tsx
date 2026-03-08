"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const HIGHLIGHTS = [
    {
        title: "Hızlı ve Güvenilir Forklift Kiralama",
        icon: true
    },
    {
        title: "Uygun Fiyat Avantajları",
        icon: true
    },
    {
        title: "Deneyimli ve İşinde Uzman Ekip",
        icon: true
    }
];

export function ServiceHighlights() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section className="w-full py-16 md:py-20 bg-slate-50/60 border-b border-gray-100 mb-8 lg:mb-12">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-12">
                    <motion.h2
                        className="text-3xl md:text-4xl font-extrabold text-[#008000] mb-4 tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        7/24 Forklift Kiralama Hizmeti
                    </motion.h2>
                    <motion.p
                        className="text-lg text-[#4B5563] font-medium leading-[1.6]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Bayraktar Forklift olarak haftanın 7 günü, günün 24 saati İstanbul ve çevresinde hızlı ve güvenli forklift kiralama hizmeti sunmaktayız.
                    </motion.p>
                </div>

                {/* Highlights Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {HIGHLIGHTS.map((highlight, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 py-10 px-6 flex flex-col items-center text-center border border-gray-100"
                        >
                            {/* Checkmark Icon Container */}
                            <div className="w-[60px] h-[60px] bg-gradient-to-br from-[#3E802F] to-[#25511A] rounded-[14px] flex items-center justify-center shadow-md mb-6">
                                <Check className="w-8 h-8 text-white" strokeWidth={3} />
                            </div>

                            {/* Card Title */}
                            <h3 className="text-[#111827] text-xl font-bold leading-snug">
                                {highlight.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
