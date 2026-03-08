"use client";

import React from 'react';
import { MapPin, Smartphone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

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
        action: "https://maps.google.com/?q=Ferhatpaşa+Mahallesi+9.+Sokak+No+25/1+Ataşehir+İSTANBUL"
    },
    {
        icon: Smartphone,
        title: "Telefon",
        content: (
            <>
                Haftanın her günü hizmet.<br />
                <span className="font-bold text-[#111827] text-lg mt-1 block">0538 514 74 74</span>
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
                <span className="font-bold text-[#111827] mt-1 block">info@bayraktarforklift.com</span>
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

export function ContactInfoCards() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Contact Info Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {contactCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div key={idx} variants={itemVariants}>
                                <div className="bg-white rounded-[24px] p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center flex flex-col items-center h-full border border-gray-100">

                                    {/* Icon Circle */}
                                    <div className="w-16 h-16 rounded-full bg-[#008000]/5 flex items-center justify-center mb-6">
                                        <Icon className="w-6 h-6 text-[#008000]" strokeWidth={1.5} />
                                    </div>

                                    <h3 className="text-xl font-bold text-[#111827] mb-4">{card.title}</h3>

                                    <p className="text-[#6B7280] leading-relaxed mb-8 flex-1">
                                        {card.content}
                                    </p>

                                    <a
                                        href={card.action}
                                        target={card.icon === MapPin ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center px-8 py-3 rounded-full border-2 border-[#008000] text-[#008000] bg-transparent text-sm font-bold tracking-wide hover:bg-[#008000] hover:text-white transition-colors uppercase w-full max-w-[200px]"
                                    >
                                        {card.buttonLabel}
                                    </a>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
