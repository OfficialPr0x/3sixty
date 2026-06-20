"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const principles = [
  {
    title: "Reliable Service",
    description: "Clients depend on us to show up on time and complete the job professionally. Reliability is at the core of everything we do.",
  },
  {
    title: "Quality Workmanship",
    description: "We take pride in delivering quality results and paying attention to the details that make a difference.",
  },
  {
    title: "Customer-Focused Approach",
    description: "Every property is different. We work closely with clients to understand their needs and deliver solutions that fit their goals and budget.",
  },
  {
    title: "Proudly Indigenous-Owned",
    description: "As a 100% Indigenous-owned company, we're proud to contribute to the communities we serve, building lasting relationships through trust and respect.",
  },
];

export default function Features() {
  return (
    <section id="why-us" className="py-32 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img 
                  src="/hero-bg.png" 
                  alt="Quality workmanship" 
                  className="w-full h-full object-cover grayscale-[30%]"
                />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[2rem] shadow-2xl z-20 max-w-[280px]">
                <Quote className="w-8 h-8 text-accent mb-6" />
                <p className="text-stone-900 font-serif text-lg leading-relaxed italic mb-6">
                  "Quality workmanship, reliable service, and professional results you can depend on."
                </p>
                <div className="text-stone-400 text-xs font-bold uppercase tracking-widest">
                  The 3Sixty North Standard
                </div>
              </div>

              {/* Decorative Accent */}
              <div className="absolute -top-10 -left-10 w-40 h-40 border border-accent/20 rounded-full z-0" />
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-6">
              Why Choose 3Sixty North?
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12 leading-tight">
              Built On Trust, <br />
              <span className="text-primary italic">Respect & Results.</span>
            </h3>

            <div className="space-y-12">
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="shrink-0">
                    <div className="w-1px h-full bg-stone-200 group-hover:bg-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-stone-900 mb-4 tracking-tight">
                      {p.title}
                    </h4>
                    <p className="text-stone-500 font-light leading-relaxed max-w-md">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
