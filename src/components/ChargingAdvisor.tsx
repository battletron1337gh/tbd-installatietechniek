"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Car, 
  Home, 
  Sun, 
  Zap, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle,
  BatteryCharging,
  Info
} from "lucide-react";
import Link from "next/link";

interface Answers {
  woningType: string;
  zonnepanelen: string;
  kmPerDag: string;
  aansluiting: string;
}

const questions = [
  {
    id: "woningType",
    icon: Home,
    question: "Wat voor type woning heeft u?",
    options: [
      { value: "tussen", label: "Tussenwoning / rijtjeshuis", description: "Gedeelde muren met buren" },
      { value: "hoek", label: "Hoekwoning", description: "Aan het einde van de rij" },
      { value: "vrijstaand", label: "Vrijstaand", description: "Geen gedeelde muren" },
      { value: "appartement", label: "Appartement", description: "Flat of appartement" },
    ],
  },
  {
    id: "zonnepanelen",
    icon: Sun,
    question: "Heeft u zonnepanelen?",
    options: [
      { value: "ja", label: "Ja", description: "Ik heb zonnepanelen op mijn dak" },
      { value: "nee", label: "Nee", description: "Geen zonnepanelen (nog niet)" },
      { value: "plan", label: "In planning", description: "Ik overweeg zonnepanelen" },
    ],
  },
  {
    id: "kmPerDag",
    icon: Car,
    question: "Hoeveel kilometer rijdt u gemiddeld per dag?",
    options: [
      { value: "30", label: "0 - 30 km", description: "Korte ritten, bijv. woon-werk" },
      { value: "60", label: "30 - 60 km", description: "Gemiddeld dagelijks gebruik" },
      { value: "100", label: "60 - 100 km", description: "Veel onderweg" },
      { value: "100+", label: "100+ km", description: "Zakelijke rijder / veel kilometers" },
    ],
  },
  {
    id: "aansluiting",
    icon: Zap,
    question: "Wat voor aansluiting heeft u?",
    options: [
      { value: "1fase", label: "1-fase", description: "Standaard huisaansluiting" },
      { value: "3fase", label: "3-fase", description: "Krachtstroom aansluiting" },
      { value: "weetniet", label: "Weet ik niet", description: "Ik ben het niet zeker" },
    ],
  },
];

export default function ChargingAdvisor() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    woningType: "",
    zonnepanelen: "",
    kmPerDag: "",
    aansluiting: "",
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const questionId = questions[currentQuestion].id as keyof Answers;
    setAnswers((prev) => ({ ...prev, [questionId]: value }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const getRecommendation = () => {
    const { zonnepanelen, kmPerDag, aansluiting } = answers;

    let laadpaal = "";
    let vermogen = "";
    let upgrade = "";
    let explanation = "";

    // Determine charging station type
    if (kmPerDag === "100+" || kmPerDag === "100") {
      laadpaal = "Slimme 3-fase laadpaal";
      vermogen = "11 kW of 22 kW";
      explanation = "Door uw hoge kilometerage adviseren wij een krachtige 3-fase laadpaal voor snel laden.";
    } else if (zonnepanelen === "ja" || zonnepanelen === "plan") {
      laadpaal = "Slimme laadpaal met zonnepanelen-koppeling";
      vermogen = aansluiting === "3fase" ? "11 kW" : "7,4 kW";
      explanation = "Met zonnepanelen is een slimme laadpaal ideaal. Deze laadt op zonne-energie wanneer mogelijk.";
    } else if (kmPerDag === "30") {
      laadpaal = "Basis laadpaal";
      vermogen = "7,4 kW";
      explanation = "Voor uw korte ritten is een basis laadpaal voldoende. Goedkoper en efficiënt.";
    } else {
      laadpaal = "Slimme laadpaal";
      vermogen = aansluiting === "3fase" ? "11 kW" : "7,4 kW";
      explanation = "Een slimme laadpaal biedt de beste prijs-kwaliteit verhouding voor uw situatie.";
    }

    // Check if upgrade needed
    if (aansluiting === "1fase" && (kmPerDag === "100+" || kmPerDag === "100")) {
      upgrade = "Aanbevolen: 1-fase naar 3-fase upgrade";
    } else if (aansluiting === "weetniet") {
      upgrade = "Wij controleren gratis uw aansluiting";
    }

    return { laadpaal, vermogen, upgrade, explanation };
  };

  const recommendation = getRecommendation();
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const CurrentIcon = questions[currentQuestion].icon;

  if (showResult) {
    return (
      <section className="py-24 bg-[#0f172a]" id="keuzehulp">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-2">
                Onze aanbeveling
              </h2>
              <p className="text-gray-600">
                Gebaseerd op uw antwoorden adviseren wij:
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center flex-shrink-0">
                  <BatteryCharging className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-1">
                    {recommendation.laadpaal}
                  </h3>
                  <p className="text-[#f4c430] font-semibold mb-2">
                    {recommendation.vermogen}
                  </p>
                  <p className="text-gray-600">{recommendation.explanation}</p>
                </div>
              </div>

              {recommendation.upgrade && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#1e3a5f] mt-0.5" />
                    <p className="text-gray-700">{recommendation.upgrade}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/offerte"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#f4c430] hover:bg-[#e5b520] text-[#1e3a5f] px-6 py-4 rounded-full font-bold transition-all"
              >
                Vraag offerte aan
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                onClick={() => {
                  setShowResult(false);
                  setCurrentQuestion(0);
                  setAnswers({
                    woningType: "",
                    zonnepanelen: "",
                    kmPerDag: "",
                    aansluiting: "",
                  });
                }}
                className="inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-4 rounded-full font-semibold transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Opnieuw beginnen
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-[#0f172a]" id="keuzehulp">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#f4c430]/20 text-[#f4c430] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <BatteryCharging className="w-4 h-4 inline mr-2" />
            Keuzehulp
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Welke laadpaal past bij u?
          </h2>
          <p className="text-gray-400 text-lg">
            Beantwoord 4 korte vragen en ontvang een persoonlijk advies
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Vraag {currentQuestion + 1} van {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#f4c430]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white rounded-2xl p-8"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-[#1e3a5f] rounded-lg flex items-center justify-center">
                <CurrentIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#0f172a]">
                {questions[currentQuestion].question}
              </h3>
            </div>

            <div className="space-y-3">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full text-left p-4 rounded-xl border-2 border-gray-200 hover:border-[#1e3a5f] hover:bg-[#1e3a5f]/5 transition-all group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-[#0f172a] group-hover:text-[#1e3a5f]">
                        {option.label}
                      </p>
                      <p className="text-sm text-gray-500">{option.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#1e3a5f]" />
                  </div>
                </button>
              ))}
            </div>

            {currentQuestion > 0 && (
              <button
                onClick={handleBack}
                className="mt-6 flex items-center gap-2 text-gray-500 hover:text-[#1e3a5f] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Vorige vraag
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
