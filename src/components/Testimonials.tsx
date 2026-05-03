"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jan van den Berg",
    location: "Cuijk",
    rating: 5,
    text: "TBD Installatietechniek heeft bij ons een laadpaal geïnstalleerd. Alles verliep vlot en professioneel. De prijs was duidelijk vooraf en de installatie ziet er netjes uit. Aanrader!",
    service: "Laadpaal installatie",
  },
  {
    name: "Maria Jansen",
    location: "Molenhoek",
    rating: 5,
    text: "Onze oude groepenkast is vervangen door een moderne variant. Zeer tevreden over het werk. De monteur legde alles duidelijk uit en werkte netjes. Binnen een dag was alles klaar.",
    service: "Groepenkast vervangen",
  },
  {
    name: "Peter de Vries",
    location: "Haps",
    rating: 5,
    text: "Snel geholpen bij een storing. Binnen 2 uur was de monteur ter plaatse en het probleem opgelost. Fijn dat er ook buiten kantooruren geholpen wordt. Bedankt!",
    service: "Storing verhelpen",
  },
  {
    name: "Linda Bakker",
    location: "Beers",
    rating: 5,
    text: "Zonnepanelen laten installeren inclusief omvormer en aansluiting. Alles werkt perfect en de opbrengst is zelfs hoger dan verwacht. Zeer professioneel bedrijf.",
    service: "Zonnepanelen",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#1e3a5f]/10 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Klanten vertellen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
            Wat onze <span className="gradient-text">klanten</span> zeggen
          </h2>
          <p className="text-gray-600 text-lg">
            Wij werken elke dag hard om onze klanten tevreden te stellen. 
            Lees hier wat zij over ons zeggen.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-gray-100">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#f4c430] fill-[#f4c430]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#0f172a]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
                <span className="text-xs bg-[#1e3a5f]/10 text-[#1e3a5f] px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="flex items-center gap-2 text-gray-500">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-[#f4c430] fill-[#f4c430]" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-sm">gemiddelde beoordeling</span>
          </div>
          <div className="w-px h-8 bg-gray-300 hidden sm:block" />
          <div className="text-gray-500">
            <span className="font-bold text-[#0f172a]">500+</span>{" "}
            <span className="text-sm">tevreden klanten</span>
          </div>
          <div className="w-px h-8 bg-gray-300 hidden sm:block" />
          <div className="text-gray-500">
            <span className="font-bold text-[#0f172a]">100%</span>{" "}
            <span className="text-sm">aanbevelingspercentage</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
