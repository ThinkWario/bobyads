"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Target, Rocket, TrendingUp, Search } from "lucide-react";
import React, { useRef } from "react";

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
  step: string;
}

const STEPS: Step[] = [
  {
    step: "01",
    title: "Auditoría Profunda",
    description: "Analizamos tu ecosistema digital, identificando fugas de conversión y oportunidades ocultas en tus datos.",
    icon: Search,
  },
  {
    step: "02",
    title: "Estrategia de Precisión",
    description: "Diseñamos un embudo de ventas optimizado y seleccionamos los canales de adquisición con mayor ROI.",
    icon: Target,
  },
  {
    step: "03",
    title: "Implementación Técnica",
    description: "Desplegamos campañas de alta conversión y configuramos la automatización de IA para escalar resultados.",
    icon: Rocket,
  },
  {
    step: "04",
    title: "Optimización Continua",
    description: "Iteramos basándonos en datos reales, maximizando el retorno de inversión mediante A/B testing constante.",
    icon: TrendingUp,
  },
];

export function Methodology() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <SectionWrapper bg="white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-boby-blue mb-4">
            Nuestro Método de Crecimiento
          </h2>
          <div className="w-20 h-1 bg-boby-yellow mx-auto rounded-full" />
          <p className="text-boby-dark/60 mt-6 max-w-2xl mx-auto text-lg">
            Un proceso sistemático y basado en datos para transformar prospectos en clientes leales.
          </p>
        </div>

        <div ref={containerRef} className="relative">
          {/* Progress Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="w-full h-full bg-boby-yellow"
            />
          </div>

          <div className="space-y-16 md:space-y-0">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;

              const contentBlock = (
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 group ${
                    isEven ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <h3 className="text-xl font-bold text-boby-blue mb-2 group-hover:text-boby-yellow transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-boby-dark/70 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );

              const numberBlock = (
                <motion.div
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex items-center ${isEven ? "md:justify-start" : "md:justify-end"}`}
                >
                  <span className="text-7xl font-black text-boby-blue/10 select-none leading-none">
                    {step.step}
                  </span>
                </motion.div>
              );

              return (
                <div
                  key={step.title}
                  className="relative flex flex-col md:flex-row items-center md:py-8"
                >
                  {/* Mobile: show step number above content */}
                  <div className="md:hidden flex items-center gap-3 mb-3 w-full">
                    <span className="text-4xl font-black text-boby-blue/20 leading-none">
                      {step.step}
                    </span>
                    <step.icon className="w-6 h-6 text-boby-blue" />
                  </div>

                  {/* Left side */}
                  <div className="flex-1 w-full">
                    {isEven ? contentBlock : numberBlock}
                  </div>

                  {/* Icon Center (desktop only) */}
                  <div className="hidden md:flex relative z-10 mx-4 shrink-0 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                      className="w-16 h-16 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-xl hover:border-boby-yellow transition-colors duration-300 group"
                    >
                      <step.icon className="w-8 h-8 text-boby-blue group-hover:text-boby-yellow transition-colors" />
                    </motion.div>
                  </div>

                  {/* Right side */}
                  <div className="flex-1 w-full">
                    {isEven ? numberBlock : contentBlock}
                  </div>

                  {/* Mobile Progress Line */}
                  {index < STEPS.length - 1 && (
                    <div className="md:hidden absolute bottom-[-32px] left-6 w-1 h-8 bg-gray-100">
                      <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="w-full h-full bg-boby-yellow"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
