import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Facebook, Instagram, Share2 } from 'lucide-react';
export function Footer() {
    return (
        <footer className="bg-[#111620] pt-20 pb-10 text-gray-300">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

                    {/* Brand Info */}
                    <div className="col-span-1 md:col-span-3 lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center relative h-10 sm:h-12 w-48 sm:w-64 mb-4">
                            <Image
                                src="/logo2.png"
                                alt="Bayraktar Forklift Footer Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="max-w-md text-gray-400 leading-relaxed">
                            Bayraktar Forklift Kiralama, şantiyelerin ve sanayinin iş makinesi ihtiyaçlarına güvenilir ve hızlı çözümler sunmaktadır. Profesyonel ekip ve geniş parkurumuzla yanınızdayız.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg">Hızlı Menü</h4>
                        <ul className="space-y-4">
                            <li><Link href="/filomuz" className="text-gray-400 hover:text-primary transition-colors">Forklift Kiralama</Link></li>
                            <li><Link href="/hakkimizda" className="text-gray-400 hover:text-primary transition-colors">Hakkımızda</Link></li>
                            <li><Link href="/iletisim" className="text-gray-400 hover:text-primary transition-colors">İletişim</Link></li>
                            <li><Link href="/hizmetlerimiz" className="text-gray-400 hover:text-primary transition-colors">Hizmetlerimiz</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold text-lg">İletişim</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary w-5 h-5 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">Ferhatpaşa Mahallesi 9. Sokak No 25/1 Ataşehir /<br />İstanbul</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary w-5 h-5" />
                                <span className="text-gray-400 text-sm">+90 538 514 74 74</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary w-5 h-5" />
                                <span className="text-gray-400 text-sm">info@bayraktarforklift.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom border and copyright */}
                <div className="pt-8 border-t border-white/10 flex flex-col items-center justify-center gap-4 text-center">
                    <Link
                        href="https://www.vizimagency.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group hover:opacity-80 transition-opacity"
                    >
                        <Image
                            src="/vizim.png"
                            alt="Vizim Agency"
                            width={20}
                            height={20}
                            className="object-contain"
                        />
                        <span className="text-sm text-gray-500 group-hover:text-primary transition-colors">
                            Vizim tarafından geliştirilmiştir.
                        </span>
                    </Link>

                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Bayraktar Forklift Kiralama. Tüm hakları saklıdır.
                    </p>
                </div>

            </div>
        </footer>
    );
}
