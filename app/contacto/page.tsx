"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { slideUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Mail, Phone, MessageSquare, Send, CheckCircle2 } from "lucide-react";

export default function ContactoPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <SectionWrapper bg="blue" className="pt-24 pb-16">
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hablemos de tu <span className="text-boby-yellow">Crecimiento</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Estamos listos para analizar tu negocio y diseñar el sistema técnico que necesitas para escalar.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper bg="white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-boby-blue mb-6">¿Por qué contactarnos?</h2>
              <p className="text-boby-dark/70 text-lg leading-relaxed mb-8">
                No somos una agencia de "gestión de anuncios". Somos ingenieros de conversión.
                Si buscas alguien que solo configure campañas, no somos para ti.
                Si buscas un socio que optimice cada centímetro de tu embudo, estás en el lugar correcto.
              </p>

              <div className="space-y-6">
                {[
                  { icon: CheckCircle2, text: "Auditoría técnica exhaustiva antes de pautar" },
                  { icon: CheckCircle2, text: "Implementación de Agentes de IA para leads" },
                  { icon: CheckCircle2, text: "Enfoque obsesivo en el ROI real" },
                  { icon: CheckCircle2, text: "Transparencia total en datos y reportes" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-boby-dark/80 font-medium">
                    <item.icon size={20} className="text-boby-yellow" />
                    {item.text}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-boby-blue text-white rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-boby-dark/50 uppercase font-bold">Email</p>
                  <p className="font-bold text-boby-blue">hola@bobyads.com</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-boby-blue text-white rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-boby-dark/50 uppercase font-bold">WhatsApp</p>
                  <p className="font-bold text-boby-blue">+56 9 1234 5678</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 relative"
          >
            {status === "success" ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-2xl font-bold text-boby-blue mb-4">¡Mensaje Enviado!</h3>
                <p className="text-boby-dark/60 mb-8">
                  Gracias por contactarnos. Analizaremos tu información y te responderemos en menos de 24 horas.
                </p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="px-8 py-3">
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-boby-dark/70 ml-1">Nombre Completo</label>
                    <input
                      required
                      type="text"
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-boby-blue focus:ring-2 focus:ring-boby-blue/20 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-boby-dark/70 ml-1">Email Corporativo</label>
                    <input
                      required
                      type="email"
                      placeholder="juan@empresa.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-boby-blue focus:ring-2 focus:ring-boby-blue/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-boby-dark/70 ml-1">Sitio Web / Landing Page</label>
                  <input
                      required
                      type="url"
                      placeholder="https://tu-sitio.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-boby-blue focus:ring-2 focus:ring-boby-blue/20 outline-none transition-all"
                    />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-boby-dark/70 ml-1">Presupuesto Mensual Estimado</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-boby-blue focus:ring-2 focus:ring-boby-blue/20 outline-none transition-all bg-white">
                    <option value="low">Menos de $1.000 USD</option>
                    <option value="mid">$1.000 - $5.000 USD</option>
                    <option value="high">$5.000 - $20.000 USD</option>
                    <option value="enterprise">$20.000+ USD</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-boby-dark/70 ml-1">Mensaje / Objetivo</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tu negocio y qué quieres lograr..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-boby-blue focus:ring-2 focus:ring-boby-blue/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full py-4 text-lg bg-boby-blue text-white hover:bg-boby-blue/90 flex items-center justify-center gap-2"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={20} /> Enviar Solicitud
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Final Footer-like CTA */}
      <SectionWrapper bg="light" className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-boby-blue mb-6">¿Prefieres hablar por WhatsApp?</h2>
          <p className="text-boby-dark/60 mb-10 text-lg">
            Si tienes una urgencia o prefieres una comunicación más directa, escríbenos ahora mismo.
          </p>
          <Button
            href="https://wa.me/56912345678"
            variant="primary"
            className="px-10 py-4 text-lg bg-green-500 text-white hover:bg-green-600"
          >
            <MessageSquare size={20} className="mr-2" /> Chat Directo con Boby
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
