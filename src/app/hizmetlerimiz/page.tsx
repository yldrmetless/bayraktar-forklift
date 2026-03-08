"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import {
    Hammer,
    Warehouse,
    Factory,
    CalendarDays,
    CalendarRange,
    Timer,
    UserCheck,
    CheckCircle2,
    ShieldCheck,
    UserCog,
    ClipboardCheck,
    Phone
} from 'lucide-react';
import { Card } from '@/components/ui/card';

const serviceList = [
    {
        title: "Şantiye forklift kiralama",
        icon: Hammer,
        desc: "Zorlu şantiye sahalarında yükleme ve boşaltma işlemleriniz için profesyonel çözümler sunuyoruz."
    },
    {
        title: "Depo forklift kiralama",
        icon: Warehouse,
        desc: "Depolama alanlarındaki dikey ve yatay taşıma ihtiyaçlarınıza en uygun araçları sağlıyoruz."
    },
    {
        title: "Fabrika forklift kiralama",
        icon: Factory,
        desc: "Üretim hatlarında sürekliliği sağlamak için modern ve bakımlı ekipmanlarla yanınızdayız."
    },
    {
        title: "Günlük forklift kiralama",
        icon: CalendarDays,
        desc: "Kısa süreli projeleriniz ve anlık yük taşıma ihtiyaçlarınız için hızlı teslimat seçenekleri."
    },
    {
        title: "Aylık forklift kiralama",
        icon: CalendarRange,
        desc: "Orta vadeli işlerinizde maliyet avantajı sağlayan ekonomik aylık kiralama paketleri."
    },
    {
        title: "Uzun dönem forklift kiralama",
        icon: Timer,
        desc: "İşletmenizin demirbaş maliyetini düşüren, servis ve bakım dahil uzun dönemli anlaşmalar."
    },
    {
        title: "Operatörlü forklift kiralama",
        icon: UserCheck,
        desc: "Alanında uzman, sertifikalı ve güvenli sürüş tekniklerine hakim operatörlerimizle tam hizmet."
    }
];

const advantagesList = [
    "Bakımlı ve güçlü forkliftler",
    "Hızlı teslimat",
    "Uygun fiyat avantajı",
    "Deneyimli operatörler",
    "Güvenli çalışma",
    "Eksiksiz iş güvenliği evrakları",
    "Zamanında hizmet",
    "Şantiyeye uygun çözümler"
];

const trustSectionText = [
    "Tüm forkliftlerimiz düzenli bakımdan geçirilmekte olup iş sağlığı ve güvenliği standartlarına uygun şekilde sahaya gönderilmektedir. Operatörlü kiralama hizmetimizde uzman personelimiz güvenli çalışma prensiplerine uygun olarak görev yapmaktadır.",
    "Bayraktar Forklift olarak amacımız, müşterilerimize sorunsuz ve güvenilir forklift kiralama hizmeti sunmaktır."
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export default function Hizmetlerimiz() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50/30 relative">
            <Navbar />

            <main className="flex-1 overflow-hidden">

                {/* Hero Section */}
                <section className="py-20 lg:py-28 bg-white">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                            {/* Text Content (60%) */}
                            <motion.div
                                className="lg:col-span-6 xl:col-span-7 space-y-6"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, ease: "easeOut" }}
                            >
                                <div>
                                    <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-4 bg-primary/10 w-fit px-3 py-1 rounded-sm">
                                        KURUMSAL
                                    </span>
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1D23] leading-tight mb-8">
                                        Hizmetlerimiz
                                    </h1>
                                </div>

                                <div className="space-y-5 text-gray-500 leading-relaxed text-[15px] md:text-base">
                                    <p>
                                        <strong>Bayraktar Forklift</strong>, <strong>Ataşehir forklift kiralama</strong> başta olmak üzere İstanbul Anadolu Yakası genelinde hızlı ve güvenilir forklift kiralama hizmeti sunmaktadır. Şantiyeler, depolar, fabrikalar ve sanayi tesisleri için profesyonel forklift çözümleri sağlıyoruz.
                                    </p>
                                    <p>
                                        Forklift kiralama hizmetimiz kapsamında tüm makinelerimiz bakımlı, güvenli ve çalışmaya hazır şekilde teslim edilir. Deneyimli operatör kadromuz ile yük indirme, taşıma ve istifleme işlemlerinde güvenli ve sorunsuz hizmet sunmaktayız.
                                    </p>
                                    <p>
                                        Günlük, haftalık ve aylık forklift kiralama seçenekleri ile Ataşehir ve çevresindeki işletmelere ekonomik ve pratik çözümler sağlıyoruz. <strong>7/24 forklift kiralama</strong> hizmetimiz ile acil işlerde de hızlı destek sunuyoruz.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Image Content (40%) */}
                            <motion.div
                                className="lg:col-span-6 xl:col-span-5 relative w-full"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                            >
                                <div className="relative aspect-square lg:aspect-[4/5] w-full rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] ring-1 ring-border/10 bg-gray-100">
                                    <Image
                                        src="/forklift1.png"
                                        alt="Forklift Services"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Service Grid Section */}
                <section className="py-24 bg-accent/20">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1D23] inline-block relative">
                                Forklift Kiralama Hizmetlerimiz
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-primary rounded-full" />
                            </h2>
                        </div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            {serviceList.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <motion.div
                                        key={idx}
                                        variants={itemVariants}
                                        className="h-full"
                                    >
                                        <Card className="bg-white rounded-2xl p-8 border-none shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-start group">
                                            <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-6 border border-orange-100 group-hover:scale-110 transition-transform duration-300">
                                                <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                                            </div>
                                            <h3 className="text-xl font-bold text-[#1A1D23] mb-4 group-hover:text-primary transition-colors">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-500 leading-relaxed text-[15px] flex-1">
                                                {item.desc}
                                            </p>
                                        </Card>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </section>

                {/* Advantages Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1D23] mb-4 uppercase">
                                BAYRAKTAR KİRALIK FORKLİFT
                            </h2>
                            <p className="text-gray-500 text-[15px] max-w-2xl mx-auto uppercase tracking-wide">
                                Forklift kiralama hizmetinde güvenilir ve çözüm odaklı hizmet anlayışıyla çalışıyoruz.
                            </p>
                            <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-6" />
                        </div>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {advantagesList.map((adv, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    <div className="flex items-center gap-4 bg-gray-50/50 p-5 rounded-r-xl border-l-[4px] border-primary shadow-sm hover:shadow-md transition-shadow">
                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={2.5} />
                                        <span className="font-bold text-[#1A1D23] text-sm md:text-[15px]">{adv}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-24 bg-accent/10 border-t border-border/40">
                    <div className="container mx-auto px-4 max-w-4xl text-center">

                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1D23] mb-12">
                            Güvenli ve Profesyonel Hizmet
                        </h2>

                        {/* Icons */}
                        <motion.div
                            className="flex justify-center gap-8 mb-10"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {[ShieldCheck, UserCog, ClipboardCheck].map((Icon, idx) => (
                                <motion.div key={idx} variants={itemVariants}>
                                    <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 shadow-sm transition-transform hover:scale-110">
                                        <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Text Blocks */}
                        <motion.div
                            className="space-y-6 text-gray-500 text-lg leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            {trustSectionText.map((text, idx) => (
                                <p key={idx}>{text}</p>
                            ))}
                        </motion.div>

                    </div>
                </section>

                {/* Full-width CTA Banner */}
                <section className="bg-primary w-full py-16 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <motion.div
                            className="flex flex-col lg:flex-row items-center justify-between gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Text */}
                            <div className="text-center lg:text-left text-white max-w-2xl">
                                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
                                    HEMEN TEKLİF ALIN – 0538 514 74 74
                                </h2>
                                <p className="text-white/90 text-[17px] font-medium">
                                    Hızlı temin ve güvenilir hizmet için bize dilediğiniz zaman ulaşabilirsiniz.
                                </p>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                                <a
                                    href="https://wa.me/905385147474?text=Merhaba%20forklift%20kiralamak%20istiyorum"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full sm:w-[240px] h-[56px] bg-white text-[#38b000] rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-gray-50 transition-colors"
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-[#25D366]"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>
                                    WhatsApp Destek
                                </a>

                                <a
                                    href="tel:+905385147474"
                                    className="w-full sm:w-[240px] h-[56px] bg-[#1A1D23] text-white rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-[#252a31] transition-colors"
                                >
                                    <Phone className="w-5 h-5" fill="currentColor" />
                                    Hemen Ara
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
