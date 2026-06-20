"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Before & After", href: "#work" },
    { name: "Why Us", href: "#why-us" },
    { name: "Our Commitment", href: "#commitment" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-4 py-6 pointer-events-none">
      <div className="container mx-auto max-w-7xl flex justify-center">
        <div 
          className={`pointer-events-auto transition-all duration-500 ease-in-out flex items-center justify-between px-6 py-2.5 rounded-full border border-stone-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white/80 backdrop-blur-xl w-full max-w-5xl ${
            scrolled ? "py-2 px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] scale-[0.98]" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <img 
              src="https://res.cloudinary.com/doajstql7/image/upload/v1778953853/ChatGPT_Image_May_15_2026_09_27_33_PM_iyeu8w.png" 
              alt="3Sixty North Logo" 
              className={`transition-all duration-300 ${scrolled ? "h-10 sm:h-12" : "h-12 sm:h-14"} w-auto object-contain`}
            />
          </Link>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-[15px] font-serif font-medium text-stone-600 hover:text-stone-900 transition-all rounded-full hover:bg-stone-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:7056906740"
              className="flex items-center gap-2 text-[14px] font-semibold text-stone-900 hover:text-primary transition-colors pr-2"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              (705) 690-6740
            </a>
            <Link
              href="#contact"
              className="relative overflow-hidden px-7 py-3 rounded-full bg-primary text-white font-bold text-[14px] transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5 active:scale-95 group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Free Quote
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-stone-900 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Sophisticated Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 bg-white rounded-3xl border border-stone-200 p-8 md:hidden flex flex-col gap-8 shadow-2xl pointer-events-auto"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-serif text-stone-900 border-b border-stone-100 pb-2"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-4">
              <a
                href="tel:7056906740"
                className="flex items-center justify-center gap-3 text-stone-900 font-bold text-lg py-4 rounded-2xl bg-stone-50"
              >
                <Phone className="w-5 h-5 text-primary" />
                (705) 690-6740
              </a>
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="text-center px-6 py-4 rounded-2xl bg-primary text-white font-bold text-lg"
              >
                Request A Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
