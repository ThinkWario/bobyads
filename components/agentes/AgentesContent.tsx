"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function FloatingShape({
  className,
  style,
  duration = 4,
  delay = 0,
}: {
  className: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, 15, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
    />
  );
}

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

const STATS = [
  { value: "3h", label: "Instalación" },
  { value: "24/7", label: "Activos" },
  { value: "+40%", label: "Conversión" },
  { value: "ROI", label: "Garantizado" },
];

const CARDS = [
  {
    title: "Agente Calificador",
    price: "$97",
    desc: "Califica leads automáticamente según criterios personalizados",
    features: [
      "Integración con Meta Ads",
      "Calificación en tiempo real",
      "Notificaciones WhatsApp",
      "Dashboard de métricas",
      "Soporte humano incluido",
    ],
    featured: false,
  },
  {
    title: "Agente de Seguimiento",
    price: "$147",
    desc: "Seguimiento automático de leads con mensajes personalizados",
    features: [
      "Todo lo del Calificador +",
      "Secuencias de follow-up",
      "IA conversacional",
      "Integración CRM",
      "A/B testing automático",
      "Reportes semanales",
    ],
    featured: true,
  },
  {
    title: "Agente Analista",
    price: "$127",
    desc: "Análisis profundo de campañas y audiencias con IA",
    features: [
      "Análisis de audiencias",
      "Optimización automática",
      "Predicción de ROAS",
      "Reportes ejecutivos",
      "Recomendaciones de presupuesto",
    ],
    featured: false,
  },
];

const STEPS = [
  {
    n: "01",
    title: "Conectamos",
    desc: "Integramos con tus herramientas actuales en menos de 3 horas",
  },
  {
    n: "02",
    title: "Entrenamos",
    desc: "El agente aprende tu negocio, industria y objetivos específicos",
  },
  {
    n: "03",
    title: "Automatizamos",
    desc: "El agente trabaja 24/7 calificando, siguiendo y reportando",
  },
];

export function AgentesContent() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center text-white pt-24 pb-20 px-4"
        style={{ backgroundColor: "#0447AB" }}
      >
        <FloatingShape duration={4} delay={0} className="absolute top-16 left-8 w-16 h-16 rounded-full opacity-30" style={{ backgroundColor: "#FEC301" } as React.CSSProperties} />
        <FloatingShape duration={5.5} delay={0.8} className="absolute top-32 right-16 w-10 h-10 rounded-full opacity-20 bg-white" />
        <FloatingShape duration={3.8} delay={1.2} className="absolute bottom-40 left-20 w-24 h-8 rounded-full opacity-25" style={{ backgroundColor: "#FEC301" } as React.CSSProperties} />
        <FloatingShape duration={6} delay={0.4} className="absolute bottom-24 right-12 w-12 h-12 rounded-full opacity-20 bg-white" />
        <FloatingShape duration={4.5} delay={2} className="absolute top-1/2 left-4 w-8 h-20 rounded-full opacity-15" style={{ backgroundColor: "#FEC301" } as React.CSSProperties} />

        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-8 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-xs font-semibold tracking-widest uppercase">
          NUEVO · INTELIGENCIA ARTIFICIAL · AUTOMATIZACIÓN
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.15 }} className="text-4xl md:text-6xl lg:text-7xl font-black text-center max-w-4xl leading-tight mb-6">
          Agentes de IA para{" "}
          <span style={{ color: "#FEC301" }}>tu Negocio</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg md:text-xl text-white/80 text-center max-w-2xl mb-10 leading-relaxed">
          Automatiza prospección, seguimiento y análisis con agentes inteligentes entrenados para tu industria
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.45 }} className="flex flex-col sm:flex-row gap-4">
          <Link href="#planes" className="px-8 py-4 rounded-full font-bold text-sm tracking-wide transition-transform hover:scale-105 active:scale-95" style={{ backgroundColor: "#FEC301", color: "#0447AB" }}>
            Ver Planes
          </Link>
          <Link href="https://wa.me/+56983537914" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full font-bold text-sm tracking-wide border-2 border-white text-white transition-all hover:bg-white hover:text-boby-blue active:scale-95">
            Hablar con un Agente
          </Link>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "#FEC301" }} className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.08}>
              <div className="font-black text-3xl md:text-4xl text-boby-blue">{s.value}</div>
              <div className="font-semibold text-sm text-boby-blue/70 mt-1 uppercase tracking-wider">{s.label}</div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Product Cards */}
      <section id="planes" className="py-24 px-4 bg-boby-light">
        <div className="max-w-6xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-boby-blue mb-4">Elige tu Agente</h2>
            <p className="text-boby-dark/70 text-lg max-w-xl mx-auto">Cada agente está entrenado para un rol específico dentro de tu embudo de ventas</p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {CARDS.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.12}>
                <motion.div
                  whileHover={{ scale: card.featured ? 1.03 : 1.02, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative rounded-2xl p-8 flex flex-col bg-white shadow-lg ${card.featured ? "md:scale-105 shadow-2xl" : "ring-1 ring-gray-100"}`}
                >
                  {card.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full text-xs font-black tracking-widest uppercase" style={{ backgroundColor: "#FEC301", color: "#0447AB" }}>
                      MÁS POPULAR
                    </div>
                  )}
                  {card.featured && (
                    <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ border: "4px solid #FEC301" }} />
                  )}

                  <h3 className="text-xl font-black text-boby-blue mb-2">{card.title}</h3>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-4xl font-black text-boby-dark">{card.price}</span>
                    <span className="text-boby-dark/50 mb-1">/mes</span>
                  </div>
                  <p className="text-boby-dark/70 text-sm mb-6 leading-relaxed">{card.desc}</p>

                  <ul className="flex flex-col gap-3 mb-8 flex-1">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0" style={{ backgroundColor: "#FEC301", color: "#0447AB" }}>✓</span>
                        <span className="text-boby-dark/80">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href="/contacto" className="block text-center py-3 px-6 rounded-full font-bold text-sm tracking-wide transition-all hover:scale-105 active:scale-95" style={card.featured ? { backgroundColor: "#FEC301", color: "#0447AB" } : { backgroundColor: "#0447AB", color: "#ffffff" }}>
                    Empezar Ahora
                  </Link>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeUp className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-boby-blue mb-4">Cómo Funciona</h2>
            <p className="text-boby-dark/70 text-lg">En 3 pasos pasas de cero a automatización total</p>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-10">
            {STEPS.map((step, i) => (
              <FadeUp key={step.n} delay={i * 0.15} className="flex flex-col items-center text-center">
                <motion.div whileInView={{ scale: [0.7, 1.1, 1] }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="w-20 h-20 rounded-full flex items-center justify-center font-black text-2xl text-white mb-6 shadow-lg" style={{ backgroundColor: "#0447AB" }}>
                  {step.n}
                </motion.div>
                <h3 className="text-xl font-black text-boby-blue mb-3">{step.title}</h3>
                <p className="text-boby-dark/70 leading-relaxed">{step.desc}</p>
              </FadeUp>
            ))}
          </div>

          <div className="hidden md:block relative -mt-36 pointer-events-none">
            <div className="absolute top-10 left-[calc(16.66%+40px)] right-[calc(16.66%+40px)] h-0.5 opacity-20" style={{ backgroundColor: "#0447AB" }} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 text-white text-center" style={{ backgroundColor: "#0447AB" }}>
        <FadeUp>
          <h2 className="text-3xl md:text-5xl font-black mb-4">
            ¿Listo para automatizar{" "}
            <span style={{ color: "#FEC301" }}>tu negocio?</span>
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
            Agenda una demo gratuita y te mostramos cómo un agente de IA puede transformar tu proceso de ventas en menos de una semana.
          </p>
          <Link href="/contacto" className="inline-block px-10 py-4 rounded-full font-black text-base tracking-wide transition-transform hover:scale-105 active:scale-95 shadow-xl" style={{ backgroundColor: "#FEC301", color: "#0447AB" }}>
            Solicitar Demo Gratis
          </Link>
        </FadeUp>
      </section>
    </main>
  );
}
