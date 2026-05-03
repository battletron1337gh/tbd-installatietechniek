"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Home, Zap, ArrowRight, Info } from "lucide-react";
import Link from "next/link";

type CalculatorType = "laadpaal" | "groepenkast" | null;

interface LaadpaalState {
  woningType: string;
  afstand: number;
  graafwerk: boolean;
  vermogen: string;
}

interface GroepenkastState {
  aantalGroepen: number;
  fase: string;
  aardlek: boolean;
  slimmeMeter: boolean;
}

export default function PriceCalculator() {
  const [activeCalculator, setActiveCalculator] = useState<CalculatorType>(null);
  const [laadpaalData, setLaadpaalData] = useState<LaadpaalState>({
    woningType: "tussenwoning",
    afstand: 5,
    graafwerk: false,
    vermogen: "11kw",
  });
  const [groepenkastData, setGroepenkastData] = useState<GroepenkastState>({
    aantalGroepen: 8,
    fase: "1-fase",
    aardlek: true,
    slimmeMeter: false,
  });

  const calculateLaadpaalPrice = () => {
    let basePrice = 1200;

    // Woning type
    if (laadpaalData.woningType === "vrijstaand") basePrice += 200;
    if (laadpaalData.woningType === "appartement") basePrice += 400;

    // Afstand
    if (laadpaalData.afstand > 10) basePrice += (laadpaalData.afstand - 10) * 25;

    // Graafwerk
    if (laadpaalData.graafwerk) basePrice += 350;

    // Vermogen
    if (laadpaalData.vermogen === "22kw") basePrice += 400;
    if (laadpaalData.vermogen === "3fase") basePrice += 600;

    return { min: Math.round(basePrice * 0.9), max: Math.round(basePrice * 1.1) };
  };

  const calculateGroepenkastPrice = () => {
    let basePrice = 800;

    // Aantal groepen
    basePrice += (groepenkastData.aantalGroepen - 6) * 75;

    // Fase
    if (groepenkastData.fase === "3-fase") basePrice += 400;

    // Aardlek
    if (groepenkastData.aardlek) basePrice += 150;

    // Slimme meter
    if (groepenkastData.slimmeMeter) basePrice += 250;

    return { min: Math.round(basePrice * 0.9), max: Math.round(basePrice * 1.1) };
  };

  const laadpaalPrice = calculateLaadpaalPrice();
  const groepenkastPrice = calculateGroepenkastPrice();

  return (
    <section className="py-24 bg-white" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block bg-[#f4c430]/20 text-[#1e3a5f] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Calculator className="w-4 h-4 inline mr-2" />
            Prijsindicatie
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-6">
            Bereken uw <span className="gradient-text">prijsindicatie</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Benieuwd naar de kosten? Gebruik onze rekentools voor een indicatie 
            van de prijs voor uw project.
          </p>
        </motion.div>

        {/* Calculator Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => setActiveCalculator("laadpaal")}
            className={`p-8 rounded-2xl border-2 text-left transition-all duration-300 ${
              activeCalculator === "laadpaal"
                ? "border-[#1e3a5f] bg-[#1e3a5f]/5"
                : "border-gray-200 hover:border-[#1e3a5f]/50"
            }`}
          >
            <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Laadpaal</h3>
            <p className="text-gray-600">
              Bereken de kosten voor het installeren van een laadpaal
            </p>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => setActiveCalculator("groepenkast")}
            className={`p-8 rounded-2xl border-2 text-left transition-all duration-300 ${
              activeCalculator === "groepenkast"
                ? "border-[#1e3a5f] bg-[#1e3a5f]/5"
                : "border-gray-200 hover:border-[#1e3a5f]/50"
            }`}
          >
            <div className="w-14 h-14 bg-[#1e3a5f] rounded-xl flex items-center justify-center mb-4">
              <Home className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f172a] mb-2">Groepenkast</h3>
            <p className="text-gray-600">
              Bereken de kosten voor vervanging of uitbreiding
            </p>
          </motion.button>
        </div>

        {/* Laadpaal Calculator */}
        {activeCalculator === "laadpaal" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#0f172a]">Laadpaal calculator</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Type woning
                  </label>
                  <select
                    value={laadpaalData.woningType}
                    onChange={(e) =>
                      setLaadpaalData((prev) => ({ ...prev, woningType: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none"
                  >
                    <option value="tussenwoning">Tussenwoning</option>
                    <option value="hoekwoning">Hoekwoning</option>
                    <option value="vrijstaand">Vrijstaand</option>
                    <option value="appartement">Appartement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Afstand meterkast → laadpaal: {laadpaalData.afstand} meter
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={laadpaalData.afstand}
                    onChange={(e) =>
                      setLaadpaalData((prev) => ({ ...prev, afstand: parseInt(e.target.value) }))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e3a5f]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1m</span>
                    <span>30m</span>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={laadpaalData.graafwerk}
                      onChange={(e) =>
                        setLaadpaalData((prev) => ({ ...prev, graafwerk: e.target.checked }))
                      }
                      className="w-5 h-5 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                    />
                    <span className="text-gray-700">Graafwerk nodig</span>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vermogen laadpaal
                  </label>
                  <select
                    value={laadpaalData.vermogen}
                    onChange={(e) =>
                      setLaadpaalData((prev) => ({ ...prev, vermogen: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none"
                  >
                    <option value="7.4kw">7,4 kW (1-fase)</option>
                    <option value="11kw">11 kW (3-fase)</option>
                    <option value="22kw">22 kW (3-fase)</option>
                  </select>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 flex flex-col justify-center">
                <p className="text-gray-600 mb-2">Geschatte prijs:</p>
                <p className="text-4xl font-bold text-[#0f172a] mb-4">
                  €{laadpaalPrice.min.toLocaleString()} - €{laadpaalPrice.max.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Inclusief installatie, materialen en btw
                </p>
                <div className="flex items-start gap-2 text-sm text-gray-500 mb-6">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>
                    Dit is een indicatieprijs. De exacte prijs hangt af van de 
                    specifieke situatie ter plaatse.
                  </p>
                </div>
                <Link
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4c430] hover:bg-[#e5b520] text-[#1e3a5f] px-6 py-3 rounded-full font-bold transition-all"
                >
                  Vraag exacte offerte aan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Groepenkast Calculator */}
        {activeCalculator === "groepenkast" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-[#0f172a]">Groepenkast calculator</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aantal groepen: {groepenkastData.aantalGroepen}
                  </label>
                  <input
                    type="range"
                    min="4"
                    max="24"
                    value={groepenkastData.aantalGroepen}
                    onChange={(e) =>
                      setGroepenkastData((prev) => ({ ...prev, aantalGroepen: parseInt(e.target.value) }))
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#1e3a5f]"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>4</span>
                    <span>24</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Aansluiting
                  </label>
                  <div className="flex gap-4">
                    <label className="flex-1">
                      <input
                        type="radio"
                        name="fase"
                        value="1-fase"
                        checked={groepenkastData.fase === "1-fase"}
                        onChange={(e) =>
                          setGroepenkastData((prev) => ({ ...prev, fase: e.target.value }))
                        }
                        className="hidden peer"
                      />
                      <div className="px-4 py-3 rounded-xl border-2 border-gray-200 text-center cursor-pointer peer-checked:border-[#1e3a5f] peer-checked:bg-[#1e3a5f]/5 transition-all">
                        1-fase
                      </div>
                    </label>
                    <label className="flex-1">
                      <input
                        type="radio"
                        name="fase"
                        value="3-fase"
                        checked={groepenkastData.fase === "3-fase"}
                        onChange={(e) =>
                          setGroepenkastData((prev) => ({ ...prev, fase: e.target.value }))
                        }
                        className="hidden peer"
                      />
                      <div className="px-4 py-3 rounded-xl border-2 border-gray-200 text-center cursor-pointer peer-checked:border-[#1e3a5f] peer-checked:bg-[#1e3a5f]/5 transition-all">
                        3-fase
                      </div>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={groepenkastData.aardlek}
                      onChange={(e) =>
                        setGroepenkastData((prev) => ({ ...prev, aardlek: e.target.checked }))
                      }
                      className="w-5 h-5 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                    />
                    <span className="text-gray-700">Extra aardlekschakelaar</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={groepenkastData.slimmeMeter}
                      onChange={(e) =>
                        setGroepenkastData((prev) => ({ ...prev, slimmeMeter: e.target.checked }))
                      }
                      className="w-5 h-5 rounded border-gray-300 text-[#1e3a5f] focus:ring-[#1e3a5f]"
                    />
                    <span className="text-gray-700">Slimme meter</span>
                  </label>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 flex flex-col justify-center">
                <p className="text-gray-600 mb-2">Geschatte prijs:</p>
                <p className="text-4xl font-bold text-[#0f172a] mb-4">
                  €{groepenkastPrice.min.toLocaleString()} - €{groepenkastPrice.max.toLocaleString()}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Inclusief installatie, materialen en btw
                </p>
                <div className="flex items-start gap-2 text-sm text-gray-500 mb-6">
                  <Info className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <p>
                    Dit is een indicatieprijs. De exacte prijs hangt af van de 
                    specifieke situatie ter plaatse.
                  </p>
                </div>
                <Link
                  href="/offerte"
                  className="inline-flex items-center justify-center gap-2 bg-[#f4c430] hover:bg-[#e5b520] text-[#1e3a5f] px-6 py-3 rounded-full font-bold transition-all"
                >
                  Vraag exacte offerte aan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
