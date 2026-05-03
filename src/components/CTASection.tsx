"use client";

import { motion } from "framer-motion";
import { Zap, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-[#1e3a5f] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-[#f4c430]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Klaar om uw project te{" "}
            <span className="text-[#f4c430]">starten</span>?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Vraag nu een vrijblijvende offerte aan of neem contact met ons op. 
            Wij helpen u graag met al uw elektrotechnische werkzaamheden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/offerte"
              className="group inline-flex items-center justify-center gap-2 bg-[#f4c430] hover:bg-[#e5b520] text-[#1e3a5f] px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 electric-glow-hover"
            >
              <Zap className="w-5 h-5" />
              Gratis offerte aanvragen
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+31639683418"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              Bel direct: 06-39683418
            </a>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            Binnen 24 uur reactie • Geen verborgen kosten • 5 jaar garantie
          </p>
        </motion.div>
      </div>
    </section>
  );
}
