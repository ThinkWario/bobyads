"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

export function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-boby-white">
      {/* Animated dot-grid background */}
      <motion.div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        animate={
          reducedMotion
            ? undefined
            : { backgroundPosition: ["0px 0px", "28px 28px"] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      {/* Tech Premium Background: Dynamic SVG Particles */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#FEC301" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#FEC301" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="grad2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#0447AB" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0447AB" stopOpacity="0" />
            </radialGradient>
          </defs>
          <motion.circle
            cx="20%" cy="20%" r="150" fill="url(#grad1)"
            animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="80%" cy="80%" r="200" fill="url(#grad2)"
            animate={{ x: [0, -40, 0], y: [0, -60, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left Side: Content (60%) */}
        <motion.div
          className="lg:col-span-3 z-10"
          variants={staggerContainer}
          initial={reducedMotion ? undefined : "hidden"}
          animate={reducedMotion ? undefined : "visible"}
        >
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-boby-blue leading-[1.1] mb-6"
          >
            Convierte mas <span className="text-boby-yellow">prospectos</span> en clientes
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-boby-dark/80 mb-10 max-w-2xl leading-relaxed"
          >
            No somos una agencia más. Fusionamos <span className="font-semibold text-boby-blue">IA avanzada</span> y
            estrategias de conversión reales para escalar tu facturación con precisión quirúrgica.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="flex flex-wrap gap-4"
          >
            <Button href="/servicios" variant="primary" className="px-8 py-4 text-lg">
              Ver Servicios
            </Button>
            <Button href={BRAND.tiendaUrl} variant="outline" external className="px-8 py-4 text-lg">
              Ver Tienda
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Visual Asset (40%) */}
        <motion.div
          className="lg:col-span-2 relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Abstract Tech Shape */}
          <motion.div
            className="relative w-64 h-64 md:w-96 md:h-96"
            animate={reducedMotion ? undefined : {
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Layered Geometric Elements */}
            <div className="absolute inset-0 bg-boby-yellow rounded-3xl rotate-6 opacity-20 blur-xl" />
            <div className="absolute inset-0 bg-boby-blue rounded-3xl -rotate-3 opacity-10 blur-xl" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-boby-blue to-blue-800 rounded-2xl shadow-2xl rotate-12 flex items-center justify-center border-4 border-boby-yellow">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-xl -rotate-12 flex items-center justify-center shadow-inner">
                  <span className="text-6xl md:text-8xl font-bold text-boby-blue">B</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
