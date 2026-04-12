"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CheckCircle2, Target, Rocket, TrendingUp, Search } from "lucide-react";
import { staggerContainer, staggerItem } from "@/lib/animations";
import React, { useRef } from "react";

interface Step {
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const STEPS: Step[] = [
  {
    title: "Auditoría Profunda",
    description: "Analizamos tu ecosistema digital, identificando fugas de conversión y oportunidades ocultas en tus datos.",
    icon: Search,
    color: "text-boby-blue",
  },
  {
    title: "Estrategia de Precisión",
    description: "Diseñamos un embudo de ventas optimizado y seleccionamos los canales de adquisición con mayor ROI.",
    icon: Target,
    color: "text-boby-blue",
  },
  {
    title: "Implementación Técnica",
    description: "Desplegamos campañas de alta conversión y configuramos la automatización de IA para escalar resultados.",
    icon: Rocket,
    color: "text-boby-blue",
  },
  {
    title: "Optimización Continua",
    description: "Iteramos basándonos en datos reales, maximizando el retorno de inversión mediante A/B testing constante.",
    icon: TrendingUp,
    color: "text-boby-blue",
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
      <div className="max-w-6xl mx-auto px-4">
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

          <div className="space-y-12 md:space-y-0">
            {STEPS.map((step, index) => (
              <div key={step.title} className="relative flex flex-col md:flex-row items-center">
                {/* Content Left */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:order-last md:text-left"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300 group"
                  >
                    <h3 className="text-xl font-bold text-boby-blue mb-2 group-hover:text-boby-yellow transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-boby-dark/70 leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Icon Center */}
                <div className="relative z-10 my-6 md:my-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: index * 0.1 }}
                    className="w-16 h-16 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center shadow-xl group hover:border-boby-yellow transition-colors duration-300"
                  >
                    <step.icon className={`w-8 h-8 ${step.color} group-hover:text-boby-yellow transition-colors`} />
                  </motion.div>

                  {/* Mobile Progress Line */}
                  <div className="md:hidden absolute top-16 bottom-[-48px] left-1/2 -translate-x-1/2 w-1 bg-gray-100">
                    <motion.div
                      style={{ scaleY, originY: 0 }}
                      className="w-full h-full bg-boby-yellow"
                    />
                  </div>
                </div>

                {/* Content Right */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`hidden md:block p-6 ${index % 2 === 0 ? "text-left" : "text-right"}`}>
                    {/* Spacer for asymmetric layout */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
