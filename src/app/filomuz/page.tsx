"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import {
    UserCheck,
    Clock,
    Calendar,
    CalendarDays,
    Zap,
    ShieldCheck,
    UserCog,
    ClipboardCheck,
    Phone,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const locations = [
    {
        "id": "atasehir",
        "district": "Ataşehir",
        "description": "Bayraktar Forklift olarak Ataşehir kiralık forklift ve Ataşehir forklift kiralama hizmetlerimiz ile depo, şantiye ve işletmeler için 7/24 acil forklift kiralama Ataşehir hizmeti sunuyoruz. Ataşehir genelinde acil kiralık forklift, operatörlü forklift kiralama ve 3 tonluk forklift kiralama ihtiyaçlarınıza en hızlı çözümleri sağlamaktayız.",
        "neighborhoods": ["Aşıkveysel", "Atatürk", "Barbaros", "Esatpaşa", "Ferhatpaşa", "İçerenköy", "İnönü", "Kayışdağı", "Küçükbakkalköy", "Mevlana", "Mimar Sinan", "Mustafa Kemal", "Örnek", "Yeniçamlıca", "Yenişehir"]
    },
    {
        "id": "beykoz",
        "district": "Beykoz",
        "description": "Bayraktar Forklift olarak Beykoz forklift kiralama hizmetimiz kapsamında orman köyleri, sahil hattı ve şantiye projelerinizin aksamaması için 7/24 acil forklift kiralama hizmeti sunuyoruz. Beykoz genelinde 3 tonluk forklift kiralama, operatörlü forklift kiralama ve engebeli araziye uygun forklift kiralama ihtiyaçlarınıza en hızlı çözümleri sağlıyoruz.",
        "neighborhoods": ["Acarlar", "Anadoluhisarı", "Anadolukavağı", "Baklacı", "Çamlıbahçe", "Çengeldere", "Çiftlik", "Çiğdem", "Çubuklu", "Fatih", "Göksu", "Göztepe", "Gümüşsuyu", "İncirköy", "Kanlıca", "Kavacık", "Merkez", "Ortaçeşme", "Paşabahçe", "Rüzgarlıbahçe", "Soğuksu", "Tokatköy", "Yalıköy", "Yavuzselim", "Yenimahalle"]
    },
    {
        "id": "bostanci",
        "district": "Bostancı",
        "description": "Bayraktar Forklift olarak Bostancı acil kiralık forklift hizmetimiz ile depo, nakliye ve şantiye işleriniz için 7/24 forklift kiralama hizmeti sunuyoruz. Acil forklift ihtiyaçlarınızda Bostancı'nın her noktasına en hızlı teslimatı gerçekleştiriyoruz. Operatörlü, saatlik ve günlük kiralama seçenekleri sunmaktayız.",
        "neighborhoods": ["Bostancı Mahallesi"]
    },
    {
        "id": "cekmekoy",
        "district": "Çekmeköy",
        "description": "Çekmeköy kiralık forklift hizmetimiz ile inşaat alanları, depo taşımaları ve fabrika yükleme işlemleriniz için profesyonel çözümler sunuyoruz. Bayraktar Forklift olarak 7/24 acil forklift kiralama Çekmeköy hizmeti vermekteyiz.",
        "neighborhoods": ["Alemdağ", "Aydınlar", "Çamlık", "Çatalmeşe", "Ekşioğlu", "Güngören", "Hamidiye", "Kirazlıdere", "Mehmet Akif", "Merkez", "Mimar Sinan", "Nişantepe", "Ömerli", "Reşadiye", "Sırapınar", "Soğukpınar", "Taşdelen"]
    },
    {
        "id": "kadikoy",
        "district": "Kadıköy",
        "description": "Kadıköy kiralık forklift hizmetimiz ile işletmelerin yükleme ve boşaltma işlemlerini güvenli ve hızlı şekilde gerçekleştiriyoruz. Kadıköy acil forklift kiralama hizmetimiz sayesinde 7/24 adresinize forklift gönderiyoruz.",
        "neighborhoods": ["Bostancı", "Caddebostan", "Caferağa", "Erenköy", "Fenerbahçe", "Feneryolu", "Fikirtepe", "Göztepe", "Hasanpaşa", "Koşuyolu", "Kozyatağı", "Merdivenköy", "Osmanağa", "Rasimpaşa", "Suadiye", "Zühtüpaşa"]
    },
    {
        "id": "kartal",
        "district": "Kartal",
        "description": "Kartal kiralık forklift hizmetimiz ile sanayi bölgeleri ve depo alanlarında profesyonel forklift kiralama hizmeti sunuyoruz. Kartal acil forklift kiralama hizmetimiz ile en kısa sürede adresinize ulaşmaktayız.",
        "neighborhoods": ["Atalar", "Cevizli", "Cumhuriyet", "Esentepe", "Gümüşpınar", "Hürriyet", "Karlıktepe", "Kordonboyu", "Orhantepe", "Petrol İş", "Soğanlık", "Topselvi", "Uğurmumcu", "Yakacık", "Yalı", "Yukarı Mahalle"]
    },
    {
        "id": "maltepe",
        "district": "Maltepe",
        "description": "Maltepe kiralık forklift hizmetimiz ile depo, fabrika ve şantiye alanlarında profesyonel forklift kiralama hizmeti sunuyoruz. Maltepe acil forklift kiralama ihtiyaçlarınıza hızlı çözümler sağlıyoruz.",
        "neighborhoods": ["Altayçeşme", "Aydınevler", "Bağlarbaşı", "Büyükbakkalköy", "Cevizli", "Esenkent", "Feyzullah", "Girne", "Gülsuyu", "İdealtepe", "Küçükyalı", "Yalı", "Zümrütevler"]
    },
    {
        "id": "pendik",
        "district": "Pendik",
        "description": "Bayraktar Forklift olarak Pendik kiralık forklift ve Pendik forklift kiralama hizmetlerimiz ile sanayi bölgeleri, depolar ve şantiyeler için profesyonel çözümler sunuyoruz. 7/24 acil kiralık forklift Pendik hizmetimiz sayesinde forklift ihtiyaçlarınıza en kısa sürede çözüm sağlıyoruz.",
        "neighborhoods": ["Ahmet Yesevi", "Bahçelievler", "Ballıca", "Batı", "Çamçeşme", "Dumlupınar", "Esenler", "Esenyalı", "Fatih", "Fevzi Çakmak", "Güzelyalı", "Harmandere", "Kavakpınar", "Kaynarca", "Kurtköy", "Orhangazi", "Sapanbağları", "Velibaba", "Yenişehir", "Yeşilbağlar"]
    },
    {
        "id": "tuzla",
        "district": "Tuzla",
        "description": "Tuzla kiralık forklift ve Tuzla forklift kiralama hizmetlerimiz ile tersaneler, fabrikalar ve depolar için profesyonel forklift çözümleri sunuyoruz. Bayraktar Forklift olarak acil kiralık forklift Tuzla ihtiyaçlarınızda 7/24 hizmet veriyoruz.",
        "neighborhoods": ["Aydınlı", "Cami", "Evliya Çelebi", "Fatih", "İçmeler", "Mescit", "Mimar Sinan", "Orhanlı", "Orta", "Postane", "Şifa", "Tepeören"]
    },
    {
        "id": "umraniye",
        "district": "Ümraniye",
        "description": "Ümraniye kiralık forklift ve Ümraniye forklift kiralama hizmetimiz ile sanayi siteleri, depolar ve şantiye alanlarında profesyonel çözümler sunuyoruz. Acil kiralık forklift Ümraniye hizmetimiz ile 7/24 forklift temin ediyoruz.",
        "neighborhoods": ["Adem Yavuz", "Altınşehir", "Armağanevler", "Atakent", "Atatürk", "Çakmak", "Çamlık", "Dudullu", "Elmalıkent", "Esenşehir", "Hekimbaşı", "Ihlamurkuyu", "İnkılap", "Kazım Karabekir", "Madenler", "Mehmet Akif", "Namık Kemal", "Necip Fazıl", "Parseller", "Site", "Tatlısu", "Tepeüstü", "Yamanevler"]
    },
    {
        "id": "uskudar",
        "district": "Üsküdar",
        "description": "Üsküdar kiralık forklift ve Üsküdar forklift kiralama hizmetimiz ile inşaat alanları, depo taşımaları ve işletmeler için profesyonel çözümler sunuyoruz. Acil kiralık forklift Üsküdar hizmetimiz ile 7/24 adresinize forklift gönderiyoruz.",
        "neighborhoods": ["Acıbadem", "Altunizade", "Aziz Mahmut Hüdayi", "Bahçelievler", "Barbaros", "Beylerbeyi", "Bulgurlu", "Burhaniye", "Cumhuriyet", "Çengelköy", "Ferah", "Güzeltepe", "İcadiye", "Kandilli", "Kirazlıtepe", "Kısıklı", "Kuleli", "Küçükçamlıca", "Küplüce", "Mehmet Akif Ersoy", "Mimar Sinan", "Muratreis", "Salacak", "Selami Ali", "Selimiye", "Sultantepe", "Ünalan", "Valide-i Atik", "Yavuztürk", "Zeynep Kamil"]
    },
    {
        "id": "sancaktepe",
        "district": "Sancaktepe",
        "description": "Sancaktepe kiralık forklift ve Sancaktepe forklift kiralama hizmetimiz ile şantiye ve depo alanlarında profesyonel çözümler sunuyoruz. 7/24 acil kiralık forklift Sancaktepe hizmetimiz bulunmaktadır.",
        "neighborhoods": ["Abdurrahmangazi", "Akpınar", "Atatürk", "Emek", "Eyüp Sultan", "Fatih", "Hilal", "İnönü", "Kemal Türkler", "Meclis", "Merve", "Osmangazi", "Paşaköy", "Safa", "Sarıgazi", "Veysel Karani", "Yenidoğan"]
    },
    {
        "id": "sultanbeyli",
        "district": "Sultanbeyli",
        "description": "Sultanbeyli kiralık forklift ve Sultanbeyli forklift kiralama hizmetimiz ile fabrika, depo ve şantiye alanlarında profesyonel çözümler sunuyoruz. Acil kiralık forklift Sultanbeyli hizmetimiz 7/24 devam etmektedir.",
        "neighborhoods": ["Abdurrahmangazi", "Adil", "Ahmet Yesevi", "Akşemsettin", "Battalgazi", "Fatih", "Hamidiye", "Hasanpaşa", "Mehmet Akif", "Mecidiye", "Necip Fazıl", "Orhangazi", "Turgutreis", "Yavuz Selim"]
    },
    {
        "id": "sile",
        "district": "Şile",
        "description": "Şile kiralık forklift ve vinç hizmetimiz ile şantiye alanları, sahil projeleri ve orman köylerinde profesyonel çözümler sunuyoruz. Şile forklift kiralama ve Şile vinç kiralama hizmetlerimiz ile engebeli arazilerde güvenli çalışma imkanı sağlıyoruz.",
        "neighborhoods": ["Ağva", "Ahmetli", "Akçakese", "Balibey", "Bozgoca", "Çavuş", "Doğancılı", "Esenceli", "Göksu", "Hacıllı", "İmrendere", "Kabakoz", "Karacaköy", "Kervansaray", "Kumbaba", "Meşrutiyet", "Oruçoğlu", "Sahilköy", "Satmazlı", "Ulupelit", "Yeniköy"]
    }
];

const serviceIcons = [
    { label: "OPERATÖRLÜ", icon: UserCheck },
    { label: "SAATLİK", icon: Clock },
    { label: "GÜNLÜK", icon: Calendar },
    { label: "AYLIK", icon: CalendarDays },
    { label: "ACİL", icon: Zap }
];

export default function Filomuz() {
    const [activeDistrictData, setActiveDistrictData] = useState(locations[0]);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50/30 relative">
            <Navbar />

            <main className="flex-1 overflow-hidden">
                {/* Hero Section */}
                <section className="pt-20 pb-12 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-white bg-primary font-bold text-xs tracking-widest uppercase inline-block mb-6 px-4 py-1.5 rounded-sm shadow-sm">
                                HİZMET BÖLGELERİ
                            </span>
                            <h1 className="text-3xl md:text-5xl font-extrabold text-[#1A1D23] leading-tight mb-6">
                                İstanbul Genelinde Kiralık Forklift Çözümleri
                            </h1>
                            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                                Tüm bölgelerde 7/24 acil, operatörlü ve güvenli kiralama hizmeti sunuyoruz. İstanbul'un her iki yakasında, projenizin büyüklüğü ne olursa olsun yanınızdayız.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Regional Tabs Layout */}
                <section className="py-16 bg-accent/10 border-t border-b border-border/40">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">

                            {/* Sidebar (Vertical Tabs) */}
                            <div className="md:w-64 lg:w-72 shrink-0">
                                <div className="bg-white rounded-2xl shadow-sm border border-border/50 overflow-hidden flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible no-scrollbar max-h-[700px] overflow-y-auto">
                                    {locations.map((loc) => {
                                        const isActive = activeDistrictData.district === loc.district;
                                        return (
                                            <button
                                                key={loc.district}
                                                onClick={() => setActiveDistrictData(loc)}
                                                className={`
                                                    text-left px-6 py-4 font-semibold text-sm transition-all whitespace-nowrap md:whitespace-normal shrink-0
                                                    ${isActive
                                                        ? 'bg-orange-50 text-primary border-b-4 md:border-b-0 md:border-l-[4px] border-primary'
                                                        : 'text-gray-500 hover:bg-gray-50 hover:text-[#1A1D23] border-b-4 md:border-b-0 md:border-l-[4px] border-transparent'}
                                                `}
                                            >
                                                {loc.district}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 min-w-0">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeDistrictData.district}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-border/50 h-full flex flex-col"
                                    >
                                        {/* Header */}
                                        <div className="mb-10">
                                            <h2 className="text-3xl font-extrabold text-[#1A1D23] mb-4">
                                                {activeDistrictData.district} Kiralık Forklift
                                                <div className="mt-4 w-16 h-1 bg-primary rounded-full" />
                                            </h2>
                                            <p className="text-gray-500 font-medium leading-relaxed">
                                                {activeDistrictData.description}
                                            </p>
                                        </div>

                                        {/* Service Icons Grid */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
                                            {serviceIcons.map((service, idx) => {
                                                const Icon = service.icon;
                                                return (
                                                    <div key={idx} className="flex flex-col items-center justify-center p-4 border border-border/60 rounded-xl hover:border-primary/30 hover:bg-orange-50 transition-colors group">
                                                        <Icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                                        <span className="text-xs font-bold text-[#1A1D23] tracking-wider">{service.label}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* Neighborhoods (Scroll Area) */}
                                        <div className="mb-12 flex-1">
                                            <h3 className="font-extrabold text-[#1A1D23] text-lg mb-4">Hizmet Bölgelerimiz</h3>
                                            <div className="flex flex-wrap gap-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
                                                {activeDistrictData.neighborhoods.map((n, i) => {
                                                    const cleanName = n.replace(/forklift kiralama/gi, '').trim();
                                                    return (
                                                        <Badge key={i} variant="outline" className="font-normal text-gray-700 bg-gray-100 hover:bg-gray-200 cursor-default border-none px-3 py-1.5 text-sm transition-colors rounded-lg">
                                                            {cleanName}
                                                        </Badge>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Emergency Contact Box */}
                                        <div className="mt-8 bg-orange-50 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-orange-100">
                                            <div className="text-center sm:text-left">
                                                <h4 className="font-extrabold text-[#1A1D23] text-lg lg:text-xl mb-1">Kiralık Forklift Hattı - 0538 514 74 74</h4>
                                                <p className="text-primary text-sm font-medium">Hemen arayın, 30 dakikada sahada olalım.</p>
                                            </div>
                                            <div className="text-2xl lg:text-3xl font-black text-primary shrink-0 hidden md:block">
                                                0538 514 74 74
                                            </div>
                                        </div>

                                    </motion.div>
                                </AnimatePresence>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Trust Section */}
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4 max-w-4xl text-center">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1D23] mb-12">
                            Güvenli ve Profesyonel Hizmet
                        </h2>
                        <motion.div
                            className="flex justify-center gap-8 mb-10"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            {[ShieldCheck, UserCog, ClipboardCheck].map((Icon, idx) => (
                                <div key={idx} className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100 shadow-sm transition-transform hover:scale-110">
                                    <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                                </div>
                            ))}
                        </motion.div>
                        <motion.p
                            className="text-gray-500 text-lg leading-relaxed font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Tüm forkliftlerimiz düzenli bakımdan geçirilmekte olup iş sağlığı ve güvenliği standartlarına uygun şekilde sahaya gönderilmektedir. Operatörlü kiralama hizmetimizde uzman personelimiz güvenli çalışma prensiplerine uygun olarak görev yapmaktadır.
                        </motion.p>
                        <motion.p
                            className="text-gray-500 text-lg leading-relaxed font-bold mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            Bayraktar Forklift olarak amacımız, müşterilerimize sorunsuz ve güvenilir forklift kiralama hizmeti sunmaktır.
                        </motion.p>
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
                                    className="w-full sm:w-[240px] h-[56px] bg-white text-[#FF6600] rounded-xl font-bold flex items-center justify-center gap-3 shadow-lg hover:bg-gray-50 transition-colors"
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
