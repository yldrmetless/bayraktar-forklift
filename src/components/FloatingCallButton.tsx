"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";

export function FloatingCallButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Initial check in case they reload scrolled down
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 150, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 150, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 25 }}
                    className="fixed left-0 right-0 z-[9999] px-4 md:hidden pointer-events-none"
                    style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
                >
                    <a
                        href="tel:+905385147474"
                        aria-label="Tıkla Ara"
                        className="
                            pointer-events-auto
                            flex items-center justify-center gap-3 w-full max-w-sm mx-auto h-[56px]
                            bg-[#16A34A]/90 backdrop-blur-md
                            border-t border-white/20
                            rounded-[20px] shadow-[0px_-10px_25px_rgba(22,163,74,0.3)]
                            text-white font-bold uppercase tracking-[1.5px] text-[15px]
                            active:scale-95 transition-transform origin-bottom
                        "
                    >
                        <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        >
                            <Phone strokeWidth={2.5} className="w-[20px] h-[20px]" fill="currentColor" />
                        </motion.div>
                        Tıkla Ara
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
