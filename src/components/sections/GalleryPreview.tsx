"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button } from '@/components/ui/button';

const images = [
    "/gallery1.png",
    "/gallery2.png",
    "/gallery3.png",
    "/gallery4.png"
];

const lightboxSlides = images.map(src => ({ src }));

export function GalleryPreview() {
    const [index, setIndex] = useState(-1);

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827] mb-4">
                            Galerimiz
                        </h2>
                        <div className="w-16 h-1 bg-[#008000] rounded-full mb-4" />
                        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
                            Güçlü filomuz ve sahadaki operasyon anlarımız.
                        </p>
                    </div>
                </div>

                {/* Grid System */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {images.map((src, idx) => (
                        <div
                            key={idx}
                            className="relative aspect-square rounded-[24px] overflow-hidden shadow-sm hover:shadow-lg cursor-pointer group bg-gray-100 transition-all duration-300 transform hover:scale-105"
                            onClick={() => setIndex(idx)}
                        >
                            <Image
                                src={src}
                                alt={`Bayraktar Forklift Galeri ${idx + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            {/* Overlay to emphasize hover state */}
                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex justify-center">
                    <Link href="/galeri">
                        <Button
                            variant="outline"
                            size="lg"
                            className="cursor-pointer border-2 border-[#008000] text-[#008000] hover:bg-[#008000] hover:text-white rounded-full font-bold px-8 h-12 transition-colors text-base"
                        >
                            Tümünü Gör
                        </Button>
                    </Link>
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
        </section>
    );
}
