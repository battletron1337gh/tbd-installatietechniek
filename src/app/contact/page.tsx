"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ContactPage() {
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
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Neem <span className="text-[#f4c430]">contact</span> op
            </h1>
            <p className="text-gray-400 text-lg">
              Heb je een vraag, wil je advies of een offerte aanvragen? 
              Bel, mail of vul het formulier in. We reageren meestal binnen 24 uur.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
                Direct contact
              </h2>
              <p className="text-gray-600 mb-8">
                Kies de manier die jou het beste past. We zijn bereikbaar via 
                telefoon, WhatsApp, e-mail of het contactformulier.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+31639683418"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center group-hover:bg-[#f4c430] transition-colors">
                    <Phone className="w-6 h-6 text-white group-hover:text-[#1e3a5f] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefoon</p>
                    <p className="font-semibold text-[#0f172a]">+31 6 39683418</p>
                  </div>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=%2B31639683418"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">WhatsApp</p>
                    <p className="font-semibold text-[#0f172a]">+31 6 39683418</p>
                  </div>
                </a>

                <a
                  href="mailto:daminstallaties@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                >
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center group-hover:bg-[#f4c430] transition-colors">
                    <Mail className="w-6 h-6 text-white group-hover:text-[#1e3a5f] transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-mail</p>
                    <p className="font-semibold text-[#0f172a]">daminstallaties@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Adres (geen bezoekadres)</p>
                    <p className="font-semibold text-[#0f172a]">De Nieuwe Erven 3, 5431 NV Cuijk</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                  <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Beschikbaarheid</p>
                    <p className="font-semibold text-[#0f172a]">Ma - Vr: 08:00 - 18:00</p>
                    <p className="text-xs text-gray-500">Spoed: 24/7 beschikbaar</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-[#f4c430]/10 rounded-xl border border-[#f4c430]/20">
                <p className="text-sm text-gray-600">
                  <strong className="text-[#1e3a5f]">Snelle reactie garantie:</strong><br />
                  We reageren binnen 24 uur op je bericht. Bij spoed zijn we 
                  snel ter plaatse in Cuijk en omgeving.
                </p>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#0f172a] mb-6">
                  Stuur ons een bericht
                </h3>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                        placeholder="Uw naam"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                        placeholder="06-12345678"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                      placeholder="uw@email.nl"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Onderwerp
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all bg-white">
                      <option>Algemene vraag</option>
                      <option>Offerte aanvragen</option>
                      <option>Laadpaal installatie</option>
                      <option>Groepenkast</option>
                      <option>Zonnepanelen</option>
                      <option>Storing</option>
                      <option>Anders</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all resize-none"
                      placeholder="Uw bericht..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white px-6 py-4 rounded-xl font-bold transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Verstuur bericht
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    Door te verzenden gaat u akkoord met onze{" "}
                    <a href="/privacy" className="text-[#1e3a5f] underline">
                      privacyverklaring
                    </a>
                    .
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0f172a] mb-4">
              Werkgebied
            </h2>
            <p className="text-gray-600">
              Wij zijn actief in Cuijk en omgeving. Ook daarbuiten? Neem contact 
              op voor de mogelijkheden.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-lg aspect-[21/9] bg-gray-200 relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1234567890123!2d5.8736!3d51.7306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6f7c3c3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sCuijk!5e0!3m2!1snl!2snl!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(20%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </motion.div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {["Cuijk", "Molenhoek", "Haps", "Beers", "Vianen", "Katwijk"].map((place) => (
              <span
                key={place}
                className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 shadow-sm"
              >
                {place}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
