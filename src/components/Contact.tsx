"use client";

import { motion } from "framer-motion";
import { PhoneCall, Mail, ArrowRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation requested", formData);
    alert("Your consultation request has been received. Our team will contact you shortly.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-5/12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-6">
                Consultation
              </h2>
              <h3 className="text-4xl md:text-6xl font-serif text-stone-900 mb-8 leading-tight">
                Begin Your <br />
                <span className="text-primary italic">Transformation.</span>
              </h3>
              <p className="text-xl text-stone-500 mb-12 leading-relaxed font-light">
                Our schedule fills quickly with preferred clients. Reserve your 
                consultation today to secure elite care for your property.
              </p>
              
              <div className="space-y-8 mb-12">
                <a
                  href="tel:7056906740"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center transition-transform group-hover:scale-110">
                    <PhoneCall className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Direct Line</div>
                    <div className="text-2xl font-serif text-stone-900">(705) 690-6740</div>
                  </div>
                </a>
                
                <a
                  href="mailto:support@3sixtynorthlawncareandlandscaping.com"
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-900 flex items-center justify-center transition-transform group-hover:scale-110">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-stone-400 text-xs font-bold uppercase tracking-widest mb-1">Inquiries</div>
                    <div className="text-lg font-serif text-stone-900 break-all">support@3sixtynorth.com</div>
                  </div>
                </a>
              </div>
              
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
                <div className="flex items-center gap-4 mb-4">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                  <span className="text-stone-900 font-bold uppercase text-xs tracking-widest">Client Priority</span>
                </div>
                <p className="text-stone-500 text-sm font-light">
                  Snow plowing memberships for the 2026/27 season are now 85% committed.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-7/12 w-full">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-stone-100 rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-stone-200/50"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-4">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 text-stone-900 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-stone-300 font-light"
                      placeholder="e.g. Sterling Archer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-4">Contact Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 text-stone-900 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-stone-300 font-light"
                      placeholder="(705) 555-0123"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-4">Property Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 text-stone-900 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-stone-300 font-light"
                    placeholder="Residential or Commercial Address"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-4">Desired Service</label>
                  <div className="relative">
                    <select
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 text-stone-900 focus:ring-2 focus:ring-primary/20 transition-all appearance-none font-light"
                    >
                      <option value="" disabled>Select Exclusive Service</option>
                      <option value="Snow Plowing">Elite Winter Management</option>
                      <option value="Lawn Care">Estate Lawn Maintenance</option>
                      <option value="Sod Installation">Premium Sod Transformation</option>
                      <option value="Cleanup">Seasonal Property Revival</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                      <ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em] ml-4">Additional Details</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border-none rounded-2xl px-6 py-4 text-stone-900 focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-stone-300 resize-none font-light"
                    placeholder="Tell us about your property's unique requirements..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-stone-900 hover:bg-black text-white font-bold text-lg py-5 rounded-2xl transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-black/20"
                >
                  Submit Consultation Request
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
