"use client";

import { motion } from "framer-motion";
import { Shield, Clock, Award, Users, ThumbsUp, BadgeCheck } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    title: "Snelle service",
    description: "Binnen 24 uur reactie op uw aanvraag. Bij spoed zijn we snel ter plaatse.",
  },
  {
    icon: Shield,
    title: "Veiligheid voorop",
    description: "Wij werken volgens de NEN-normen en leveren alleen veilige installaties.",
  },
  {
    icon: Award,
    title: "Gecertificeerd",
    description: "Erkend en gecertificeerd elektrotechnisch installatiebedrijf.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description: "Één vast aanspreekpunt. Duidelijke communicatie zonder vakjargon.",
  },
  {
    icon: ThumbsUp,
    title: "Transparante prijzen",
    description: "Duidelijke offerte vooraf. Geen verborgen kosten achteraf.",
  },
  {
    icon: BadgeCheck,
    title: "Garantie",
    description: "5 jaar garantie op onze installaties. Wij staan voor ons werk.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0f172a] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#1e3a5f]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f4c430]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#f4c430]/10 text-[#f4c430] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Waarom TBD?
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Uw vertrouwde elektricien in{" "}
              <span className="text-[#f4c430]">Cuijk</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Wij staan voor kwaliteit, betrouwbaarheid en persoonlijke service. 
              Met meer dan 10 jaar ervaring en honderden tevreden klanten zijn wij 
              uw partner voor alle elektrotechnische werkzaamheden.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-[#f4c430] mb-2">500+</p>
                <p className="text-gray-400 text-sm">Tevreden klanten</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-[#f4c430] mb-2">10+</p>
                <p className="text-gray-400 text-sm">Jaar ervaring</p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 hover:border-[#f4c430]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#f4c430]/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#f4c430]/20 transition-colors">
                  <reason.icon className="w-6 h-6 text-[#f4c430]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
