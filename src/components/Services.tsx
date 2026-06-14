"use client";

import { motion } from "framer-motion";
import {
  Snowflake,
  Leaf,
  Sprout,
  Sun,
  Wind,
  Plus,
} from "lucide-react";

const services = [
  {
    id: "snow",
    title: "Elite Winter Management",
    subtitle: "Precision Plowing & Safety",
    icon: <Snowflake className="w-6 h-6" />,
    description:
      "When the storm hits, our precision fleet is already in motion. We provide surgical snow removal and meticulous de-icing for properties that cannot afford downtime or safety risks.",
    features: ["Priority Storm Response", "Walkway Finishing", "Snow Relocation", "Site Monitoring"],
  },
  {
    id: "lawn",
    title: "Estate Maintenance",
    subtitle: "Golf-Course Standards",
    icon: <Leaf className="w-6 h-6" />,
    description:
      "More than just a cut. We manage the health, vitality, and aesthetic perfection of your lawn with deep fertilization programs and laser-straight edging.",
    features: ["Precision Mowing", "Soil Health Analysis", "Seasonal Feeding", "Edge Detailing"],
  },
  {
    id: "sod",
    title: "Instant Transformation",
    subtitle: "Premium Sod Installation",
    icon: <Sprout className="w-6 h-6" />,
    description:
      "Replace years of neglect with an instant masterpiece. We source the highest grade turf and prepare the foundation with horticultural precision for long-term health.",
    features: ["Foundation Grading", "Premium Kentucky Blue", "Irrigation Tuning", "Post-Care Guide"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-6">
              Our Expertise
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
              A Masterclass In <br />
              <span className="text-primary italic">Property Stewardship.</span>
            </h3>
          </div>
          <p className="text-stone-500 text-lg max-w-sm mb-2 font-light">
            We don't just maintain; we elevate. Every service is a commitment to 
            long-term property value and immediate aesthetic impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-stone-100 border border-stone-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-200/50">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-12 group hover:bg-stone-50 transition-colors"
            >
              <div className="flex items-center justify-between mb-12">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <span className="text-stone-300 font-serif text-4xl">0{index + 1}</span>
              </div>
              
              <div className="mb-10">
                <h4 className="text-2xl font-serif text-stone-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-accent text-xs font-bold uppercase tracking-widest mb-6">
                  {service.subtitle}
                </p>
                <p className="text-stone-500 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-stone-600 font-medium">
                    <Plus className="w-3 h-3 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Seasonal Accent Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-stone-900 rounded-[2rem] p-12 text-white relative overflow-hidden group"
          >
            <div className="relative z-10">
              <Sun className="w-10 h-10 text-accent mb-6" />
              <h4 className="text-3xl font-serif mb-4">Spring Revival</h4>
              <p className="text-stone-400 font-light mb-8 max-w-sm">
                The critical window for property health. Dethatching, garden prep, and debris removal.
              </p>
              <button className="text-accent text-sm font-bold uppercase tracking-widest border-b border-accent/30 pb-1 group-hover:border-accent transition-all">
                Learn More
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-accent/10 transition-all duration-700" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-primary rounded-[2rem] p-12 text-white relative overflow-hidden group"
          >
            <div className="relative z-10">
              <Wind className="w-10 h-10 text-white/50 mb-6" />
              <h4 className="text-3xl font-serif mb-4">Autumn Fortification</h4>
              <p className="text-white/70 font-light mb-8 max-w-sm">
                Preparing the landscape for its winter rest. Deep leaf removal and garden bed protection.
              </p>
              <button className="text-white text-sm font-bold uppercase tracking-widest border-b border-white/30 pb-1 group-hover:border-white transition-all">
                Learn More
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20 group-hover:bg-white/10 transition-all duration-700" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
