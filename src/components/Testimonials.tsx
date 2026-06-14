"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Finding reliable snow plowing in Sudbury was a nightmare until we found 3Sixty. Their precision is unmatched.",
    author: "James Harrison",
    title: "Residential Estate Owner",
  },
  {
    id: 2,
    quote: "Our commercial properties have never looked sharper. They treat every lawn like a golf course fairway.",
    author: "Sarah McLellan",
    title: "Property Management Director",
  },
  {
    id: 3,
    quote: "The sod installation was seamless. They transformed our landscape in 48 hours. Absolutely elite service.",
    author: "Robert Chen",
    title: "Sudbury Resident",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-stone-900 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-6">
            Success Stories
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
            Trusted By Sudbury's <br />
            <span className="text-accent italic">Finest Addresses.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-12 rounded-[2rem] hover:bg-white/[0.07] transition-all duration-500 flex flex-col"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-xl text-stone-200 mb-10 leading-relaxed font-light italic">"{t.quote}"</p>
              
              <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-serif text-xl">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-serif text-white text-lg">{t.author}</div>
                  <div className="text-stone-500 text-xs font-bold uppercase tracking-widest">{t.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
