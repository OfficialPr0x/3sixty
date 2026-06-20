"use client";

import { Phone, Mail, MapPin, Globe, MessageCircle, Users } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 text-white pt-24 pb-12 overflow-hidden relative">
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-10 transition-transform hover:scale-105">
              <img 
                src="https://res.cloudinary.com/doajstql7/image/upload/v1778953853/ChatGPT_Image_May_15_2026_09_27_33_PM_iyeu8w.png" 
                alt="3Sixty North Logo" 
                className="h-16 w-auto object-contain"
              />
            </Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-8 font-light">
              Sudbury's #1 100% Indigenous-owned lawn care and property maintenance
              company. Dependable lawn care, landscaping, and snow plowing for
              residential, commercial, industrial, and municipal clients across
              Sudbury and Northern Ontario since 2024.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Globe className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Users className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Curated Services */}
          <div>
            <h4 className="text-logo-green font-bold text-xs uppercase tracking-[0.3em] mb-10">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="text-stone-500 hover:text-logo-green transition-colors text-sm font-light">
                  Lawn Care & Maintenance
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-stone-500 hover:text-logo-green transition-colors text-sm font-light">
                  Landscaping Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-stone-500 hover:text-logo-green transition-colors text-sm font-light">
                  Snow Plowing Services
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-stone-500 hover:text-logo-green transition-colors text-sm font-light">
                  Commercial Grounds Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Access */}
          <div>
            <h4 className="text-logo-green font-bold text-xs uppercase tracking-[0.3em] mb-10">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#work" className="text-stone-500 hover:text-logo-green transition-colors text-sm font-light">
                  Before &amp; After
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="text-stone-500 hover:text-logo-green transition-colors text-sm font-light">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#commitment" className="text-stone-500 hover:text-logo-green transition-colors text-sm font-light">
                  Our Commitment
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-stone-500 hover:text-logo-green transition-colors text-sm font-light">
                  Request A Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-logo-green font-bold text-xs uppercase tracking-[0.3em] mb-10">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <a href="tel:7056906740" className="text-white hover:text-logo-green transition-colors text-lg font-serif">
                    (705) 690-6740
                  </a>
                  <span className="text-stone-600 text-[10px] uppercase tracking-widest block mt-1">Direct Line</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <a href="mailto:support@3sixtynorthlawncareandlandscaping.com" className="text-stone-400 hover:text-logo-green transition-colors text-sm font-light pt-1 break-all">
                  support@3sixtynorthlawncareandlandscaping.com
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="text-stone-400 text-sm font-light pt-1">
                  Northern Ontario<br/>
                  <span className="text-stone-600 text-xs">Residential, Commercial, Industrial & Municipal</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-stone-600 text-[11px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} 3Sixty North Lawn Care & Landscaping &middot; Proudly Indigenous-Owned
          </p>
          <div className="flex gap-8 text-[11px] uppercase tracking-widest text-stone-600">
            <Link href="#" className="hover:text-logo-green transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-logo-green transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
