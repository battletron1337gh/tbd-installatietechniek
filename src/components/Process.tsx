"use client";

import { motion } from "framer-motion";
import { MessageSquare, ClipboardCheck, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Kennismaking",
    description: "Neem contact met ons op via het formulier, telefoon of WhatsApp. We bespreken uw wensen en plannen een afspraak.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Advies & offerte",
    description: "We bezoeken u ter plaatse voor een vrijblijvend adviesgesprek. U ontvangt een duidelijke offerte zonder verborgen kosten.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Installatie",
    description: "Onze vakmensen voeren de werkzaamheden uit volgens de NEN-normen. Netjes, veilig en met oog voor detail.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Oplevering",
    description: "We leveren het werk op met uitleg en alle benodigde documentatie. Met 5 jaar garantie op onze installaties.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
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
            Ons proces
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
            Zo werken <span className="gradient-text">wij</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Van eerste contact tot oplevering: wij zorgen voor een soepel proces 
            met duidelijke communicatie en professionele uitvoering.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1e3a5f] via-[#f4c430] to-[#1e3a5f]" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-2xl p-8 h-full hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-8 bg-[#f4c430] text-[#1e3a5f] font-bold text-sm px-3 py-1 rounded-full">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-6 mt-2">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-10">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-[#f4c430] flex items-center justify-center">
                      <div className="w-2 h-2 bg-[#f4c430] rounded-full" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
