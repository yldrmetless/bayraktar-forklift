"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Ana Sayfa', href: '/' },
        { name: 'Hizmetlerimiz', href: '/hizmetlerimiz' },
        { name: 'Filomuz', href: '/filomuz' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'Galeri', href: '/galeri' },
        { name: 'İletişim', href: '/iletisim' }
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white border-b border-border/40 shadow-sm">
            <div className="container mx-auto px-4 h-20 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">

                {/* Logo */}
                <div className="flex items-center gap-1 z-50 lg:justify-self-start">
                    <Link
                        href="/"
                        className="flex items-center"
                        onClick={() => setIsOpen(false)}
                    >
                        <div className="relative h-[55px] w-[260px] sm:h-[75px] sm:w-[320px]">
                            <Image
                                src="/logo.png"
                                alt="Bayraktar Forklift Logo"
                                fill
                                className="object-contain object-left"
                                priority
                            />
                        </div>
                    </Link>
                </div>
                {/* Desktop Nav Links */}
                <div className="hidden lg:flex items-center gap-8 lg:gap-12 lg:justify-self-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-semibold transition-colors ${pathname === link.href
                                ? 'text-primary'
                                : 'text-gray-500 hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Action Buttons & Mobile Toggle */}
                <div className="flex items-center gap-3 z-50 lg:justify-self-end">
                    {/* Desktop Teklif Al Button */}
                    <Link href="https://wa.me/905385147474?text=Merhaba%20forklift%20kiralamak%20istiyorum" target="_blank" rel="noopener noreferrer" className="hidden sm:block">
                        <Button className="cursor-pointer bg-[#008000] hover:bg-[#38b000] text-white font-bold px-6 py-2 rounded-lg transition-all shadow-md h-auto">
                            Teklif Al
                        </Button>
                    </Link>

                    {/* Mobile Hamburger Icon */}
                    <button
                        className="lg:hidden p-2 -mr-2 text-primary hover:bg-primary/10 rounded-md transition-colors focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                    </button>
                </div>

            </div>

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-[#1A1D23]/40 backdrop-blur-sm z-40 lg:hidden top-20"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Drawer content */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed top-20 right-0 w-[80%] max-w-sm h-[calc(100vh-5rem)] bg-white z-50 shadow-2xl flex flex-col lg:hidden border-l border-b border-border/50 overflow-hidden"
                        >
                            <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-3">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-lg font-bold px-5 py-4 rounded-xl transition-all flex items-center ${isActive
                                                ? 'bg-orange-50 text-primary border-l-4 border-primary'
                                                : 'text-[#1A1D23] hover:text-primary hover:bg-gray-50 border-l-4 border-transparent'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}

                                {/* Mobile Teklif Al Button in Drawer */}
                                <div className="mt-8 pt-8 border-t border-border/50 w-full">
                                    <p className="text-sm text-gray-500 mb-4 px-2 font-medium">Hızlı İletişim</p>
                                    <Link href="https://wa.me/905385147474?text=Merhaba%20forklift%20kiralamak%20istiyorum" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block w-full">
                                        <Button className="w-full bg-[#008000] hover:bg-[#008000] text-white font-bold px-6 py-2 rounded-lg transition-all shadow-md flex items-center justify-center text-lg h-14">
                                            Teklif Al
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
