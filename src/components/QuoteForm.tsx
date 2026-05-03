"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  FileText, 
  Upload, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle,
  Zap,
  Loader2
} from "lucide-react";

const steps = [
  { id: 1, title: "Contactgegevens", icon: User },
  { id: 2, title: "Project details", icon: FileText },
  { id: 3, title: "Bestanden", icon: Upload },
  { id: 4, title: "Bevestiging", icon: CheckCircle },
];

const serviceTypes = [
  "Laadpaal installeren",
  "Groepenkast vervangen/uitbreiden",
  "Zonnepanelen installeren",
  "Thuisbatterij installeren",
  "Storing verhelpen",
  "Extra groepen aanleggen",
  "Anders",
];

export default function QuoteForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    description: "",
    files: [] as File[],
    honeypot: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Naam is verplicht";
      if (!formData.email.trim()) {
        newErrors.email = "E-mail is verplicht";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Ongeldig e-mailadres";
      }
      if (!formData.phone.trim()) {
        newErrors.phone = "Telefoonnummer is verplicht";
      }
    }

    if (step === 2) {
      if (!formData.serviceType) newErrors.serviceType = "Selecteer een dienst";
      if (!formData.description.trim()) newErrors.description = "Beschrijving is verplicht";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    setErrors({});
  };

  const handleSubmit = async () => {
    if (formData.honeypot) return; // Spam protection
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev) => ({
        ...prev,
        files: [...prev.files, ...Array.from(e.target.files!)],
      }));
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl p-8 md:p-12 shadow-xl text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
          Bedankt voor uw aanvraag!
        </h3>
        <p className="text-gray-600 mb-6">
          We hebben uw offerte-aanvraag ontvangen. We nemen binnen 24 uur contact met u op.
        </p>
        <p className="text-sm text-gray-500">
          Een bevestiging is verstuurd naar {formData.email}
        </p>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      {/* Progress bar */}
      <div className="bg-gray-50 px-6 py-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  currentStep >= step.id
                    ? "bg-[#1e3a5f] text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {currentStep > step.id ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  step.id
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-12 md:w-24 h-1 mx-2 transition-all duration-300 ${
                    currentStep > step.id ? "bg-[#1e3a5f]" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-sm">
          {steps.map((step) => (
            <span
              key={step.id}
              className={`hidden md:block ${
                currentStep === step.id
                  ? "text-[#1e3a5f] font-semibold"
                  : "text-gray-400"
              }`}
            >
              {step.title}
            </span>
          ))}
        </div>
      </div>

      {/* Form content */}
      <div className="p-6 md:p-8">
        <AnimatePresence mode="wait">
          {/* Step 1: Contact info */}
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">
                Uw contactgegevens
              </h3>

              {/* Honeypot field */}
              <div className="hidden">
                <input
                  type="text"
                  value={formData.honeypot}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, honeypot: e.target.value }))
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Naam *
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all`}
                    placeholder="Uw naam"
                  />
                </div>
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mailadres *
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, email: e.target.value }))
                    }
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all`}
                    placeholder="uw@email.nl"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Telefoonnummer *
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, phone: e.target.value }))
                    }
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                      errors.phone ? "border-red-500" : "border-gray-200"
                    } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all`}
                    placeholder="06-12345678"
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Adres (optioneel)
                </label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, address: e.target.value }))
                    }
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all"
                    placeholder="Straatnaam 123, Plaats"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Project details */}
          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">
                Project details
              </h3>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type dienst *
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, serviceType: e.target.value }))
                  }
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.serviceType ? "border-red-500" : "border-gray-200"
                  } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all bg-white`}
                >
                  <option value="">Selecteer een dienst</option>
                  {serviceTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Beschrijving van uw project *
                </label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    value={formData.description}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, description: e.target.value }))
                    }
                    rows={5}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                      errors.description ? "border-red-500" : "border-gray-200"
                    } focus:border-[#1e3a5f] focus:ring-2 focus:ring-[#1e3a5f]/20 outline-none transition-all resize-none`}
                    placeholder="Beschrijf uw project zo gedetailleerd mogelijk..."
                  />
                </div>
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">{errors.description}</p>
                )}
              </div>
            </motion.div>
          )}

          {/* Step 3: Files */}
          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">
                Foto&apos;s toevoegen (optioneel)
              </h3>

              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#1e3a5f] transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">
                  Sleep foto&apos;s hierheen of{" "}
                  <label className="text-[#1e3a5f] font-semibold cursor-pointer hover:underline">
                    blader
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </p>
                <p className="text-gray-400 text-sm">
                  Ondersteunde formaten: JPG, PNG, GIF (max. 10MB per bestand)
                </p>
              </div>

              {formData.files.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">
                    Geselecteerde bestanden:
                  </p>
                  {formData.files.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 px-4 py-2 rounded-lg"
                    >
                      <span className="text-sm text-gray-600 truncate">
                        {file.name}
                      </span>
                      <button
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            files: prev.files.filter((_, i) => i !== index),
                          }))
                        }
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Verwijderen
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-[#0f172a] mb-6">
                Controleer uw gegevens
              </h3>

              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Naam</p>
                  <p className="font-medium">{formData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <p className="font-medium">{formData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Telefoon</p>
                  <p className="font-medium">{formData.phone}</p>
                </div>
                {formData.address && (
                  <div>
                    <p className="text-sm text-gray-500">Adres</p>
                    <p className="font-medium">{formData.address}</p>
                  </div>
                )}
                <div>
                  <p className="text-sm text-gray-500">Dienst</p>
                  <p className="font-medium">{formData.serviceType}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Beschrijving</p>
                  <p className="font-medium">{formData.description}</p>
                </div>
                {formData.files.length > 0 && (
                  <div>
                    <p className="text-sm text-gray-500">Bestanden</p>
                    <p className="font-medium">{formData.files.length} foto&apos;s</p>
                  </div>
                )}
              </div>

              <p className="text-sm text-gray-500">
                Door te verzenden gaat u akkoord met onze{" "}
                <a href="/privacy" className="text-[#1e3a5f] underline">
                  privacyverklaring
                </a>
                .
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
              currentStep === 1
                ? "text-gray-300 cursor-not-allowed"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            Terug
          </button>

          {currentStep < steps.length ? (
            <button
              onClick={handleNext}
              className="flex items-center gap-2 bg-[#1e3a5f] hover:bg-[#2d5a8f] text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Volgende
              <ChevronRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex items-center gap-2 bg-[#f4c430] hover:bg-[#e5b520] text-[#1e3a5f] px-8 py-3 rounded-full font-bold transition-all electric-glow-hover disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Verzenden...
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5" />
                  Offerte aanvragen
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
