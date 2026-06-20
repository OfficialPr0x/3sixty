"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";

const projects = [
  {
    src: "https://res.cloudinary.com/dpfapm0tl/image/upload/v1781930853/964e8add-b024-49e7-ac62-869ef89ff368_oxfjrj.jpg",
    title: "Front Lawn Restoration",
    type: "Residential",
    location: "Sudbury, ON",
    description:
      "A bare, rocky front yard transformed into a lush, healthy lawn with fresh garden beds.",
  },
  {
    src: "https://res.cloudinary.com/dpfapm0tl/image/upload/v1781930853/9d914ce5-4534-446c-ba4a-b22f056855fc_vvhfh8.jpg",
    title: "Overgrown Lot Reclaim",
    type: "Property Maintenance",
    location: "Greater Sudbury",
    description:
      "Knee-high brush and weeds cleared back to a clean, usable, well-cut yard.",
  },
  {
    src: "https://res.cloudinary.com/dpfapm0tl/image/upload/v1781930853/b5213dd1-ac7e-4f94-9a14-3bc9f29cc212_nnsw8r.jpg",
    title: "Spring Cleanup & Grass Cut",
    type: "Commercial Grounds",
    location: "Sudbury, ON",
    description:
      "Full spring cleanup, bed edging, and grass cut for a crisp, professional curb appeal.",
  },
];

export default function Gallery() {
  return (
    <section id="work" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-6">
              Before &amp; After
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
              Real Results From <br />
              <span className="text-primary italic">Sudbury Properties.</span>
            </h3>
          </div>
          <p className="text-stone-500 text-lg max-w-sm mb-2 font-light">
            See the difference for yourself. Every project reflects the quality
            workmanship Sudbury trusts from its premier 100% Indigenous-owned lawn
            care and property maintenance team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (index % 2) * 0.15 }}
              className={`group relative rounded-[2rem] overflow-hidden bg-stone-900 shadow-2xl shadow-stone-300/40 ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.src}
                alt={`${project.title} — before and after by 3Sixty North in ${project.location}`}
                className="w-full h-full object-cover aspect-[16/10] group-hover:scale-[1.02] transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/90 text-stone-900 px-3 py-1 text-[11px] font-bold uppercase tracking-widest mb-4">
                    {project.type}
                  </span>
                  <h4 className="text-2xl md:text-3xl font-serif text-white mb-2">
                    {project.title}
                  </h4>
                  <p className="text-stone-300 font-light max-w-md mb-3 hidden sm:block">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-stone-400 text-xs font-bold uppercase tracking-widest">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    {project.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-9 py-4 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-lg transition-all shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30"
          >
            Get Results Like These
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
