"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import Image from "next/image";

const categories = [
  { id: "all", label: "Alles" },
  { id: "laadpalen", label: "Laadpalen" },
  { id: "groepenkasten", label: "Groepenkasten" },
  { id: "zonnepanelen", label: "Zonnepanelen" },
];

const portfolioItems = [
  {
    id: 1,
    title: "Laadpaal installatie",
    category: "laadpalen",
    location: "Cuijk",
    description: "Installatie van een 11kW slimme laadpaal bij een vrijstaande woning.",
    image: "/portfolio1.jpg",
  },
  {
    id: 2,
    title: "Groepenkast vervanging",
    category: "groepenkasten",
    location: "Molenhoek",
    description: "Complete vervanging van oude stoppenkast naar moderne automatenkast.",
    image: "/portfolio2.jpg",
  },
  {
    id: 3,
    title: "Zonnepanelen + omvormer",
    category: "zonnepanelen",
    location: "Haps",
    description: "Installatie van 12 zonnepanelen met omvormer en aansluiting.",
    image: "/portfolio3.jpg",
  },
  {
    id: 4,
    title: "Laadpaal met graafwerk",
    category: "laadpalen",
    location: "Beers",
    description: "Laadpaal installatie inclusief graafwerk over 15 meter.",
    image: "/portfolio4.jpg",
  },
  {
    id: 5,
    title: "3-fase groepenkast",
    category: "groepenkasten",
    location: "Cuijk",
    description: "Uitbreiding naar 3-fase aansluiting met nieuwe groepenkast.",
    image: "/portfolio5.jpg",
  },
  {
    id: 6,
    title: "Zonnepanelen op schuur",
    category: "zonnepanelen",
    location: "Vianen",
    description: "Installatie van zonnepanelen op een landelijke schuur.",
    image: "/portfolio6.jpg",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block bg-[#f4c430]/20 text-[#f4c430] px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Onze projecten
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Portfolio <span className="text-[#f4c430]">gerealiseerde</span> werken
            </h1>
            <p className="text-gray-400 text-lg">
              Bekijk een selectie van onze afgeronde elektrotechnische projecten 
              voor particulieren en bedrijven in Cuijk en omgeving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            <Filter className="w-5 h-5 text-gray-400 mr-2" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2 rounded-full font-medium transition-all ${
                  activeFilter === category.id
                    ? "bg-[#1e3a5f] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Overlay content */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-[#f4c430] text-sm font-semibold uppercase tracking-wider mb-2">
                        {categories.find((c) => c.id === item.category)?.label}
                      </span>
                      <h3 className="text-white font-bold text-xl mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{item.location}</p>
                    </div>

                    {/* Zoom icon */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Card content */}
                  <div className="mt-4">
                    <h3 className="font-bold text-[#0f172a] text-lg group-hover:text-[#1e3a5f] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{item.location}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="relative aspect-square md:aspect-auto">
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-[#f4c430] font-semibold uppercase tracking-wider text-sm mb-2">
                    {categories.find((c) => c.id === selectedItem.category)?.label}
                  </span>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{selectedItem.location}</p>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
