"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  CheckCircle2,
  MapPin,
  Phone,
  Mail
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import Image from "next/image";

const values = [
  {
    icon: Shield,
    title: "Veiligheid",
    description: "Veiligheid staat bij ons altijd op nummer één. We werken volgens de NEN-normen.",
  },
  {
    icon: Clock,
    title: "Betrouwbaarheid",
    description: "We komen onze afspraken na. Binnen 24 uur reactie en snelle service.",
  },
  {
    icon: Award,
    title: "Kwaliteit",
    description: "Vakmanschap en aandacht voor detail in elk project dat we uitvoeren.",
  },
  {
    icon: Users,
    title: "Klantgericht",
    description: "Persoonlijk contact en duidelijke communicatie zonder vakjargon.",
  },
];

const timeline = [
  {
    year: "2014",
    title: "Oprichting TBD",
    description: "TBD Installatietechniek werd opgericht met de missie om kwalitatieve elektrotechniek te bieden.",
  },
  {
    year: "2018",
    title: "Focus op duurzaamheid",
    description: "Uitbreiding van diensten met zonnepanelen en laadpalen installaties.",
  },
  {
    year: "2022",
    title: "500+ klanten",
    description: "Mijlpaal bereikt van meer dan 500 tevreden klanten in de regio.",
  },
  {
    year: "2024",
    title: "Thuisbatterijen",
    description: "Nieuwe dienst: installatie van thuisbatterijen voor optimale energieopslag.",
  },
];

const certifications = [
  "NEN 3140 gecertificeerd",
  "Erkend installateur",
  "VCA gecertificeerd",
  "EV-laadpaal specialist",
];

export default function OverOnsPage() {
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
              Over ons
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Uw vertrouwde <span className="text-[#f4c430]">elektricien</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Al meer dan 10 jaar de specialist in elektrotechniek voor Cuijk en omgeving. 
              Betrouwbaar, vakkundig en altijd persoonlijk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-6">
                Wie zijn wij?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  TBD Installatietechniek is een jong en dynamisch elektrotechnisch 
                  installatiebedrijf uit Cuijk. Wij zijn gespecialiseerd in alle 
                  voorkomende elektrotechnische werkzaamheden voor zowel particuliere 
                  als zakelijke klanten.
                </p>
                <p>
                  Of het nu gaat om het installeren van een laadpaal, het vervangen 
                  van een groepenkast, het plaatsen van zonnepanelen of het verhelpen 
                  van storingen — wij staan voor u klaar.
                </p>
                <p>
                  Wij geloven in persoonlijk contact, duidelijke communicatie en 
                  vakmanschap. Geen verborgen kosten, geen vakjargon, gewoon goed 
                  werk geleverd door een betrouwbare partner.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-[#f4c430]">500+</p>
                  <p className="text-gray-600 text-sm">Tevreden klanten</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-3xl font-bold text-[#f4c430]">10+</p>
                  <p className="text-gray-600 text-sm">Jaar ervaring</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/portfolio1.jpg"
                  alt="TBD Installatietechniek werk"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#1e3a5f] text-white rounded-xl p-6 shadow-xl">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm opacity-80">Aanbevelingspercentage</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              Onze kernwaarden
            </h2>
            <p className="text-gray-600">
              Dit zijn de waarden waar wij voor staan en die u van ons kunt verwachten.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <h3 className="font-bold text-[#0f172a] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0f172a] mb-4">
              Onze geschiedenis
            </h2>
            <p className="text-gray-600">
              Een kijkje in de ontwikkeling van TBD Installatietechniek door de jaren heen.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden lg:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  <div className="hidden lg:block w-1/2" />
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#f4c430] rounded-full border-4 border-white shadow hidden lg:block" />
                  <div className="lg:w-1/2 lg:px-12">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <span className="text-[#f4c430] font-bold text-lg">{item.year}</span>
                      <h3 className="font-bold text-[#0f172a] text-xl mt-1 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Gecertificeerd en <span className="text-[#f4c430]">erkend</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Wij werken volgens de hoogste kwaliteitsnormen en zijn gecertificeerd 
                voor diverse elektrotechnische werkzaamheden.
              </p>

              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#f4c430]" />
                    <span className="text-white">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Contactgegevens</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f4c430]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#f4c430]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Adres</p>
                    <p className="text-gray-400 text-sm">
                      De Nieuwe Erven 3<br />
                      5431 NV Cuijk
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f4c430]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#f4c430]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Telefoon</p>
                    <a href="tel:+31639683418" className="text-gray-400 text-sm hover:text-[#f4c430] transition-colors">
                      +31 6 39683418
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#f4c430]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#f4c430]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">E-mail</p>
                    <a href="mailto:daminstallaties@gmail.com" className="text-gray-400 text-sm hover:text-[#f4c430] transition-colors">
                      daminstallaties@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-500 text-sm">KVK: 87826097</p>
                <p className="text-gray-500 text-sm">BTW: NL004487901B55</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
