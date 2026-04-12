"use client";

import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";

const WORDS = ["Meta Ads", "Google Ads", "Agentes IA"];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden" style={{ backgroundColor: "#0447AB" }}>

      {/* ── Video background (plays when hero.mp4 exists) ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setVideoReady(true)}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: videoReady ? 1 : 0 }}
        aria-hidden
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* ── Fallback background (shown until video loads) ── */}
      <div
        className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
        style={{ opacity: videoReady ? 0 : 1 }}
      >
        {/* Dot grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
          animate={reducedMotion ? undefined : { backgroundPosition: ["0px 0px", "28px 28px"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      {/* ── Dark overlay for text readability over video ── */}
      {videoReady && (
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(4,71,171,0.55)" }} />
      )}

      {/* ── Content overlay ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
        <motion.div
          variants={staggerContainer}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.3em] px-4 py-2 border"
              style={{ borderColor: "rgba(254,195,1,0.4)", color: "#FEC301" }}
            >
              Agencia #1 en Conversión · Chile
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-none text-white mb-4"
            style={{ letterSpacing: "-2px" }}
          >
            Publicidad<br />
            <span style={{ color: "#FEC301" }}>que</span> Convierte
          </motion.h1>

          {/* Rotating service */}
          <motion.div variants={staggerItem} className="mb-8 h-[2rem] overflow-hidden flex items-center gap-3">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: "#FEC301" }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={WORDS[wordIndex]}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-semibold uppercase tracking-[0.25em]"
                style={{ color: "#FEC301" }}
              >
                {WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-white/70 mb-10 max-w-2xl leading-relaxed"
          >
            Fusionamos <span className="text-white font-semibold">IA avanzada</span> y estrategias
            de conversión reales para escalar tu facturación con precisión quirúrgica.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={staggerItem} className="flex flex-wrap gap-4">
            <Button href="/servicios" variant="primary" className="px-8 py-4 text-lg">
              Ver Servicios
            </Button>
            <Button href={BRAND.tiendaUrl} variant="outline" external className="px-8 py-4 text-lg">
              Ver Tienda
            </Button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            variants={staggerItem}
            className="mt-16 flex flex-wrap gap-8"
          >
            {[
              { value: "+500", label: "Clientes Activos" },
              { value: "3x", label: "ROAS Promedio" },
              { value: "98%", label: "Retención" },
              { value: "$15M", label: "USD Gestionados" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 pl-4" style={{ borderColor: "#FEC301" }}>
                <div className="text-3xl font-black text-white leading-none">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
