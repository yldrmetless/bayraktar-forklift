"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png",
    "/gallery5.png",
    "/gallery6.png",
    "/gallery7.png",
    "/gallery8.png",
];

const lightboxSlides = images.map(src => ({ src }));

export function GalleryClient() {
    const [index, setIndex] = useState(-1);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50/30">
            <Navbar />
            <main className="flex-1 pt-12 md:pt-16 pb-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    {/* Header Section */}
                    <div className="mb-12">
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1A1D23] mb-4">
                                Galerimiz
                                <div className="mt-4 w-16 h-1.5 bg-primary rounded-full" />
                            </h1>
                            <p className="text-gray-500 text-lg md:text-xl font-medium mt-4 max-w-2xl leading-relaxed">
                                Güçlü filomuz ve operasyon anlarımızdan kareler. Endüstriyel çözümlerimizle her zaman yanınızdayız.
                            </p>
                        </div>
                    </div>

                    {/* Grid System */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
                        {images.map((src, idx) => (
                            <div
                                key={idx}
                                className="relative aspect-square rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl cursor-pointer group bg-gray-100 ring-1 ring-black/5 transition-all duration-300 transform hover:scale-[1.03]"
                                onClick={() => setIndex(idx)}
                            >
                                <Image
                                    src={src}
                                    alt={`Bayraktar Forklift Galeri ${idx + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 25vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    priority={idx < 2}
                                />
                                {/* Overlay to emphasize hover state */}
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            </div>
                        ))}
                    </div>

                    {/* Lightbox Component */}
                    <Lightbox
                        index={index}
                        open={index >= 0}
                        close={() => setIndex(-1)}
                        slides={lightboxSlides}
                        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.85)" } }}
                    />
                </div>
            </main>
            <Footer />
        </div>
    );
}
