"use client";

import { motion } from "framer-motion";
import { 
  BatteryCharging, 
  Zap, 
  Sun, 
  Battery, 
  Wrench, 
  Plus,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import Link from "next/link";

const services = [
  {
    id: "laadpalen",
    icon: BatteryCharging,
    title: "Laadpalen",
    subtitle: "Laadpaal installatie aan huis of bedrijf",
    description: "Rijd je elektrisch of ben je van plan over te stappen? Dan is een eigen laadpaal aan huis of bij je bedrijf een slimme investering. Bij TBD Installatietechniek zorgen wij voor een vakkundige, veilige en snelle installatie van laadpalen, volledig afgestemd op jouw situatie.",
    benefits: [
      "Advies over de beste plek en het juiste type laadpaal",
      "Controle van je meterkast en aanpassing waar nodig",
      "Volledige installatie binnen 1 dag",
      "Keuring en uitleg na installatie",
      "Ook geschikt voor zonnepanelen of dynamisch laden",
    ],
    features: [
      { title: "Slimme laadpalen", desc: "Met app-bediening en laadstatistieken" },
      { title: "Dynamisch laden", desc: "Optimale verdeling van stroom" },
      { title: "Zonnepanelen koppeling", desc: "Laad op eigen zonne-energie" },
      { title: "Alle merken", desc: "O.a. Alfen, Wallbox, ChargePoint" },
    ],
    price: "Vanaf €1.200",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80",
  },
  {
    id: "groepenkasten",
    icon: Zap,
    title: "Groepenkasten",
    subtitle: "Vervanging of uitbreiding",
    description: "Een veilige elektrische installatie begint bij een goed functionerende groepenkast. Of je nu een verouderde kast hebt of nieuwe apparatuur wilt aansluiten — bij TBD Installatietechniek zorgen wij voor een professionele vervanging of uitbreiding van je groepenkast.",
    benefits: [
      "Vervanging van oude stoppenkasten naar moderne automaten",
      "Uitbreiding met extra groepen (bijv. voor laadpalen of keukenapparatuur)",
      "Installatie van aardlekschakelaars, hoofdschakelaars en slimme meters",
      "Alles volgens de NEN-normen",
    ],
    features: [
      { title: "NEN-norm conform", desc: "Veilig en volgens regels" },
      { title: "Extra groepen", desc: "Voor nieuwe apparaten" },
      { title: "Aardlekschakelaars", desc: "Maximale veiligheid" },
      { title: "Slimme meters", desc: "Inzicht in verbruik" },
    ],
    price: "Vanaf €800",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80",
  },
  {
    id: "zonnepanelen",
    icon: Sun,
    title: "Zonnepanelen",
    subtitle: "Duurzame energieopwekking",
    description: "Maak je woning duurzamer met zonnepanelen. Wij verzorgen de complete installatie inclusief montage, omvormer, bekabeling en aansluiting op je meterkast. Met zonnepanelen bespaar je op je energierekening en draag je bij aan een beter milieu.",
    benefits: [
      "Advies op maat voor optimale opbrengst",
      "Complete installatie inclusief omvormer",
      "Aansluiting op meterkast",
      "Monitoring via app",
      "5 jaar garantie op installatie",
    ],
    features: [
      { title: "Complete installatie", desc: "Van montage tot aansluiting" },
      { title: "Optimale opbrengst", desc: "Advies op maat" },
      { title: "Monitoring", desc: "Inzicht via app" },
      { title: "Topmerken", desc: "O.a. SunPower, LG, Panasonic" },
    ],
    price: "Op aanvraag",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
  },
  {
    id: "thuisbatterijen",
    icon: Battery,
    title: "Thuisbatterijen",
    subtitle: "Energie opslaan voor later",
    description: "Sla opgewekte energie op voor later gebruik. Ideaal in combinatie met zonnepanelen voor maximale energiebesparing. Een thuisbatterij zorgt ervoor dat je zelf opgewekte stroom kunt gebruiken wanneer je wilt, ook 's avonds of op bewolkte dagen.",
    benefits: [
      "Maximaal rendement uit zonnepanelen",
      "Energieonafhankelijkheid",
      "Back-up functie bij stroomuitval",
      "Slimme energieopslag",
      "Lagere energierekening",
    ],
    features: [
      { title: "Energie opslag", desc: "Gebruik later wat je nu opwekt" },
      { title: "Back-up stroom", desc: "Nooit meer zonder stroom" },
      { title: "Slimme regeling", desc: "Automatisch optimaal gebruik" },
      { title: "5+ kWh capaciteit", desc: "Voldoende voor een dag" },
    ],
    price: "Op aanvraag",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80",
  },
  {
    id: "storingen",
    icon: Wrench,
    title: "Storingen",
    subtitle: "Snelle hulp bij elektrische problemen",
    description: "Zit je ineens zonder stroom? Werkt een stopcontact of lichtpunt niet meer? Bij TBD Installatietechniek staan we paraat om elektrische storingen snel en veilig op te lossen. We zijn snel ter plaatse in Cuijk en omgeving.",
    benefits: [
      "Snel ter plaatse in Cuijk en omgeving",
      "Grondige analyse van het probleem",
      "Direct herstel waar mogelijk",
      "Advies om toekomstige storingen te voorkomen",
    ],
    features: [
      { title: "24/7 beschikbaar", desc: "Ook buiten kantooruren" },
      { title: "Snel ter plaatse", desc: "Meestal binnen 2 uur" },
      { title: "Garantie", desc: "Op reparatie" },
      { title: "Spoedservice", desc: "Voor urgente gevallen" },
    ],
    price: "Vanaf €85/uur",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80",
  },
  {
    id: "extra-groepen",
    icon: Plus,
    title: "Extra groepen",
    subtitle: "Uitbreiding van uw meterkast",
    description: "Nieuwe apparaten in huis? Wij leggen extra groepen aan in je meterkast voor een veilige stroomvoorziening. Of het nu gaat om een nieuwe keuken, airco of wasmachine — wij zorgen voor de juiste aansluiting.",
    benefits: [
      "Veilige aansluiting van nieuwe apparaten",
      "Geen overbelasting van bestaande groepen",
      "Volgens NEN-normen",
      "Netjes afgewerkt",
    ],
    features: [
      { title: "Keukenapparatuur", desc: "Oven, kookplaat, etc." },
      { title: "Airco", desc: "Airconditioning aansluiten" },
      { title: "Wasmachine/droger", desc: "Eigen groep" },
      { title: "Buitenstopcontact", desc: "Voor tuin/garage" },
    ],
    price: "Vanaf €150/groep",
    image: "https://images.unsplash.com/photo-1558618047-f4b511ba5ad8?auto=format&fit=crop&q=80",
  },
];

const trustBadges = [
  { icon: Clock, text: "Binnen 24 uur reactie" },
  { icon: Shield, text: "5 jaar garantie" },
  { icon: Award, text: "Gecertificeerd" },
];

export default function DienstenPage() {
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
              Onze diensten
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Wat wij voor u <span className="text-[#f4c430]">kunnen doen</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Van laadpalen tot groepenkasten, van zonnepanelen tot storingen. 
              Wij verzorgen alle elektrotechnische installaties in Cuijk en omgeving.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 text-[#f4c430] font-semibold">
                        <service.icon className="w-5 h-5" />
                        {service.price}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#0f172a] mb-2">
                    {service.title}
                  </h2>
                  <p className="text-[#f4c430] font-semibold mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#f4c430] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-[#0f172a] text-sm">
                          {feature.title}
                        </p>
                        <p className="text-gray-500 text-xs">{feature.desc}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/offerte"
                    className="inline-flex items-center gap-2 bg-[#f4c430] hover:bg-[#e5b520] text-[#1e3a5f] px-6 py-3 rounded-full font-bold transition-all"
                  >
                    Vraag offerte aan
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="w-12 h-12 bg-[#1e3a5f]/10 rounded-lg flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-[#1e3a5f]" />
                </div>
                <span className="font-semibold text-[#0f172a]">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
