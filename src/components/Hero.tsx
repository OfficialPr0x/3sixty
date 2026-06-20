"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-background">
      {/* Premium Background Treatment */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Luxury property by 3Sixty North"
          fill
          className="object-cover object-center opacity-30 grayscale-[20%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_100%)] z-10" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-primary text-xs font-bold tracking-[0.2em] uppercase">
              <Star className="w-3.5 h-3.5 fill-primary" />
              Sudbury's #1 Indigenous-Owned Property Care
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-serif text-stone-900 mb-10 leading-[1.1] tracking-tight"
          >
            Sudbury's Best In <br />
            <span className="text-primary italic">Lawn & Property Care.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-stone-600 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Proudly 100% Indigenous-owned. Dependable lawn care, landscaping, and
            snow plowing for residential, commercial, industrial, and municipal
            clients across Sudbury and Northern Ontario.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              href="#contact"
              className="group flex items-center gap-3 px-10 py-5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
            >
              Request A Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-10 text-[13px] font-bold text-stone-400 tracking-[0.2em] uppercase"
          >
            <div className="flex items-center gap-3 border-r border-stone-200 pr-10 last:border-0 last:pr-0">
              <ShieldCheck className="w-5 h-5 text-accent" />
              Established 2024
            </div>
            <div className="flex items-center gap-3 border-r border-stone-200 pr-10 last:border-0 last:pr-0">
              <ShieldCheck className="w-5 h-5 text-accent" />
              Sudbury Based
            </div>
            <div className="flex items-center gap-3 border-r border-stone-200 pr-10 last:border-0 last:pr-0">
              <ShieldCheck className="w-5 h-5 text-accent" />
              Year-Round Service
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elegant Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-30" />
    </section>
  );
}
