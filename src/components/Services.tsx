"use client";

import { motion } from "framer-motion";
import { Snowflake, Leaf, Trees, Plus } from "lucide-react";

const services = [
  {
    id: "lawn",
    title: "Lawn Care & Property Maintenance",
    subtitle: "Keeping Properties Pristine",
    icon: <Leaf className="w-6 h-6" />,
    description:
      "A well-maintained property creates a lasting first impression. Our team keeps your grounds looking their best throughout the season.",
    features: [
      "Lawn Cutting & Maintenance",
      "Spring Cleanups",
      "Fall Cleanups",
      "Brush Clearing & Vegetation Control",
      "Property Maintenance Programs",
      "Commercial Grounds Maintenance",
      "Residential Property Maintenance",
    ],
  },
  {
    id: "landscaping",
    title: "Landscaping Services",
    subtitle: "Enhancing Your Outdoor Space",
    icon: <Trees className="w-6 h-6" />,
    description:
      "Whether you're improving curb appeal or upgrading your outdoor space, our landscaping services transform and enhance your property.",
    features: [
      "Landscape Design Support",
      "Landscape Enhancements",
      "Garden Bed Maintenance",
      "Shrub & Hedge Maintenance",
      "Property Improvements",
    ],
  },
  {
    id: "snow",
    title: "Snow Plowing Services",
    subtitle: "Dependable Winter Service",
    icon: <Snowflake className="w-6 h-6" />,
    description:
      "Northern Ontario winters demand dependable service. We keep properties accessible, safe, and operational during snow events.",
    features: [
      "Commercial Parking Lot Plowing",
      "Residential Driveway Plowing",
      "Private Road Plowing",
      "Seasonal Snow Plowing Contracts",
      "Winter Property Maintenance",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-6">
              Our Services
            </h2>
            <h3 className="text-4xl md:text-6xl font-serif text-stone-900 leading-tight">
              Complete Property Care, <br />
              <span className="text-primary italic">Every Season.</span>
            </h3>
          </div>
          <p className="text-stone-500 text-lg max-w-sm mb-2 font-light">
            From routine lawn maintenance and landscaping projects to winter snow
            plowing, we keep your property safe, clean, and professionally
            maintained year-round.
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
                    <Plus className="w-3 h-3 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
