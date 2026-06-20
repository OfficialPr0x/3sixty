"use client";

import { motion } from "framer-motion";
import { Home, Building2, Factory, Landmark } from "lucide-react";

const clients = [
  { icon: <Home className="w-6 h-6" />, label: "Residential" },
  { icon: <Building2 className="w-6 h-6" />, label: "Commercial" },
  { icon: <Factory className="w-6 h-6" />, label: "Industrial" },
  { icon: <Landmark className="w-6 h-6" />, label: "Municipal" },
];

export default function Commitment() {
  return (
    <section id="commitment" className="py-32 bg-stone-900 relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -mr-32 -mt-32" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-6">
            Our Commitment
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
            Enhancing The Properties <br />
            <span className="text-accent italic">We Serve.</span>
          </h3>
          <p className="text-xl text-stone-300 leading-relaxed font-light">
            Our mission is to provide professional property maintenance solutions
            that enhance the appearance, safety, and value of every property we
            service. Whether it's seasonal lawn maintenance, landscaping
            improvements, or dependable winter snow plowing, our team is ready to
            help across Northern Ontario.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {clients.map((client, i) => (
            <motion.div
              key={client.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-[2rem] p-10 flex flex-col items-center text-center hover:bg-white/[0.08] transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center mb-6">
                {client.icon}
              </div>
              <div className="font-serif text-white text-xl">{client.label}</div>
              <div className="text-stone-500 text-[10px] font-bold uppercase tracking-widest mt-2">
                Clients Served
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
