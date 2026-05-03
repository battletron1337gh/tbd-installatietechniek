"use client";

import { motion } from "framer-motion";
import { FileText, Clock, Shield, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuoteForm from "@/components/QuoteForm";

const benefits = [
  {
    icon: Clock,
    title: "Binnen 24 uur reactie",
    description: "We nemen snel contact met u op na ontvangst van uw aanvraag.",
  },
  {
    icon: Shield,
    title: "Gratis en vrijblijvend",
    description: "Geen kosten voor de offerte en geen verplichtingen.",
  },
  {
    icon: CheckCircle2,
    title: "Transparante prijzen",
    description: "Duidelijke prijsopgave zonder verborgen kosten.",
  },
];

export default function OffertePage() {
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
              <FileText className="w-4 h-4 inline mr-2" />
              Offerte aanvragen
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Vraag een <span className="text-[#f4c430]">gratis</span> offerte aan
            </h1>
            <p className="text-gray-400 text-lg">
              Vul het formulier in en ontvang binnen 24 uur een vrijblijvende offerte 
              op maat voor uw project.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
              >
                <div className="w-10 h-10 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-5 h-5 text-[#1e3a5f]" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f172a] text-sm">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-500 text-xs mt-1">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <QuoteForm />
          </motion.div>
        </div>
      </section>

      {/* Info section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0f172a] mb-6">
                Wat gebeurt er na uw aanvraag?
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#f4c430] rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[#1e3a5f]">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a]">Ontvangst bevestiging</h3>
                    <p className="text-gray-600 text-sm">
                      U ontvangt direct een bevestiging per e-mail van uw aanvraag.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#f4c430] rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[#1e3a5f]">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a]">We nemen contact op</h3>
                    <p className="text-gray-600 text-sm">
                      Binnen 24 uur bellen of mailen we u voor een kort gesprek over uw wensen.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#f4c430] rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[#1e3a5f]">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a]">Bezoek ter plaatse (indien nodig)</h3>
                    <p className="text-gray-600 text-sm">
                      Voor grotere projecten komen we vrijblijvend bij u langs om de situatie te bekijken.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-[#f4c430] rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[#1e3a5f]">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a]">Offerte ontvangen</h3>
                    <p className="text-gray-600 text-sm">
                      U ontvangt een duidelijke, vrijblijvende offerte met alle kosten op een rij.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1e3a5f] rounded-2xl p-8 text-white"
            >
              <h3 className="text-xl font-bold mb-4">Waarom kiezen voor TBD?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4c430] flex-shrink-0 mt-0.5" />
                  <span>Meer dan 10 jaar ervaring in elektrotechniek</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4c430] flex-shrink-0 mt-0.5" />
                  <span>Gecertificeerd en erkend installateur</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4c430] flex-shrink-0 mt-0.5" />
                  <span>5 jaar garantie op onze installaties</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4c430] flex-shrink-0 mt-0.5" />
                  <span>Transparante prijzen, geen verborgen kosten</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4c430] flex-shrink-0 mt-0.5" />
                  <span>Persoonlijk contact en duidelijke communicatie</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#f4c430] flex-shrink-0 mt-0.5" />
                  <span>Snelle service in Cuijk en omgeving</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
