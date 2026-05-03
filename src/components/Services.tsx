"use client";

import { motion } from "framer-motion";
import { 
  Zap, 
  Battery, 
  Sun, 
  BatteryCharging, 
  Wrench, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: BatteryCharging,
    title: "Laadpalen",
    description: "Laat een laadpaal installeren bij je woning of bedrijf. Wij regelen alles van A tot Z, inclusief groepenkast-aanpassing.",
    features: ["Slimme laadpalen", "Dynamisch laden", "Zonnepanelen koppeling"],
    href: "/diensten#laadpalen",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Zap,
    title: "Groepenkasten",
    description: "Vervanging of uitbreiding nodig? We installeren veilig en volgens de NEN-norm. Van oude stoppenkast naar moderne automaten.",
    features: ["NEN-norm conform", "Extra groepen", "Aardlekschakelaars"],
    href: "/diensten#groepenkasten",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Sun,
    title: "Zonnepanelen",
    description: "Maak je woning duurzamer met zonnepanelen. Inclusief montage, advies en aansluiting op je meterkast.",
    features: ["Complete installatie", "Optimale opbrengst", "Monitoring"],
    href: "/diensten#zonnepanelen",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Battery,
    title: "Thuisbatterijen",
    description: "Sla opgewekte energie op voor later gebruik. Ideaal in combinatie met zonnepanelen voor maximale energiebesparing.",
    features: ["Energie opslag", "Back-up stroom", "Slimme regeling"],
    href: "/diensten#thuisbatterijen",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Wrench,
    title: "Storingen",
    description: "Zit je zonder stroom? Bel ons en wij lossen de storing snel op. Snel ter plaatse in Cuijk en omgeving.",
    features: ["24/7 beschikbaar", "Snel ter plaatse", "Garantie op reparatie"],
    href: "/diensten#storingen",
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    icon: Zap,
    title: "Extra groepen",
    description: "Nieuwe apparaten in huis? Wij leggen extra groepen aan in je meterkast voor een veilige stroomvoorziening.",
    features: ["Keukenapparatuur", "Airco", "Wasmachine/droger"],
    href: "/diensten#extra-groepen",
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Services() {
  return (
    <section className="py-24 bg-gray-50" id="diensten">
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
            Onze diensten
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
            Alles voor uw{" "}
            <span className="gradient-text">elektrotechniek</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Van laadpalen tot groepenkasten, van zonnepanelen tot storingen. 
            Wij verzorgen alle elektrotechnische installaties in Cuijk en omgeving.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#f4c430] transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-white group-hover:text-[#1e3a5f] transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#1e3a5f] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-[#f4c430] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#1e3a5f] font-semibold group/link"
                >
                  <span className="animated-underline">Meer informatie</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
          >
            Bekijk alle diensten
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
