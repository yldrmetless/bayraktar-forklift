"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Users, ShieldCheck, Clock, UserCheck } from 'lucide-react';

const features = [
    {
        title: "Profesyonel Kadro",
        description: "Alanında deneyimli operatörlerimiz ile forklift ve manitou kiralama hizmetini güvenli ve sorunsuz şekilde sunuyoruz.",
        icon: Users,
        theme: "dark"
    },
    {
        title: "Sigortalı Hizmet",
        description: "Tüm kiralama hizmetlerimiz güvence altındadır. Makinelerimiz düzenli bakımdan geçirilerek sahaya hazır şekilde gönderilir.",
        icon: ShieldCheck,
        theme: "light"
    },
    {
        title: "7/24 Hizmet",
        description: "İstanbul genelinde forklift ve manitou kiralama ihtiyaçlarınıza hızlı çözümler sunuyoruz.",
        icon: Clock,
        theme: "primary"
    },
    {
        title: "Uzman Operatör Desteği",
        description: "Sertifikalı ve deneyimli operatörlerimizle, iş güvenliği standartlarına uygun profesyonel saha hizmeti sunuyoruz.",
        icon: UserCheck,
        theme: "light"
    }
];

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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export function Features() {
    return (
        <section className="py-20 bg-accent/30 relative">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-secondary mb-6 tracking-tight">
                        Bayraktar Forklift Kiralama
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Bayraktar; forklift, şantiye, depo ve sanayi alanları için hızlı ve güvenilir forklift kiralama hizmeti sunmaktadır. İstanbul ve çevresinde forklift ihtiyaçlarınıza aynı gün çözüm sağlıyoruz. Güçlü makine parkurumuz ve deneyimli operatörlerimiz ile kısa süreli ve uzun süreli forklift kiralama hizmeti vermekteyiz. Tüm forkliftlerimiz bakımlı, güvenli ve çalışmaya hazır durumdadır.
                    </p>
                </div>

                {/* Features Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {features.map((item, index) => {
                        const Icon = item.icon;

                        // Define styling based on the theme prop
                        let cardClasses = "relative overflow-hidden p-8 rounded-[1.5rem] border-0 shadow-soft-lg h-full transition-transform hover:-translate-y-1 duration-300";
                        let iconClasses = "w-8 h-8 mb-4 ";
                        let titleClasses = "text-xl font-bold mb-3 ";
                        let descClasses = "text-sm leading-relaxed ";

                        if (item.theme === "dark") {
                            cardClasses += " bg-[#151a25] text-white";
                            iconClasses += " text-primary";
                            titleClasses += " text-white";
                            descClasses += " text-gray-400";
                        } else if (item.theme === "primary") {
                            cardClasses += " bg-primary text-white";
                            iconClasses += " text-white";
                            titleClasses += " text-white";
                            descClasses += " text-white/90";
                        } else {
                            cardClasses += " bg-white";
                            iconClasses += " text-primary";
                            titleClasses += " text-secondary";
                            descClasses += " text-muted-foreground";
                        }

                        return (
                            <motion.div key={index} variants={itemVariants}>
                                <Card className={cardClasses}>
                                    <Icon className={iconClasses} strokeWidth={2.5} />
                                    <h3 className={titleClasses}>{item.title}</h3>
                                    <p className={descClasses}>{item.description}</p>

                                    {/* Decorative background icon for dark theme */}
                                    {item.theme === "dark" && (
                                        <Users className="absolute -right-4 -bottom-4 w-40 h-40 text-white/[0.03] pointer-events-none" />
                                    )}
                                </Card>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Machine Park Info Block */}
                <motion.div
                    className="bg-[#F8F9FA] rounded-[1.5rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-border/50 shadow-sm"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-secondary mb-3">Geniş Makine Parkuru</h3>
                        <p className="text-muted-foreground">
                            Bayraktar Forklift Kiralama olarak her türlü yükseklik ve ağırlık kapasitesine uygun, bakımları düzenli yapılmış en yeni model iş makineleriyle hizmetinizdeyiz.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-border/30 text-center min-w-[120px]">
                            <div className="text-3xl font-black text-primary">100+</div>
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">MAKİNE</div>
                        </div>
                        <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-border/30 text-center min-w-[120px]">
                            <div className="text-3xl font-black text-primary">20Y+</div>
                            <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">TECRÜBE</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
