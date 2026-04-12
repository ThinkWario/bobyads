"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Filter, Mail } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { LucideIcon } from "lucide-react";

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: BarChart3,
    title: "Meta & Google Ads",
    description:
      "Campanas publicitarias optimizadas en las plataformas mas efectivas para tu negocio, enfocadas en el ROI.",
  },
  {
    icon: Filter,
    title: "Embudos de Venta",
    description:
      "Estrategias de conversion que guian a tus prospectos desde el primer clic hasta la compra final.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Sistemas de automatizacion que fidelizan clientes y maximizan el valor de vida del usuario.",
  },
];

export function ValueProp() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper bg="light">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-boby-blue mb-4">
          Impulsamos tu crecimiento digital
        </h2>
        <div className="w-20 h-1 bg-boby-yellow mx-auto rounded-full" />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={reducedMotion ? undefined : staggerContainer}
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true }}
      >
        {pillars.map((pillar) => (
          <motion.div
            key={pillar.title}
            variants={reducedMotion ? undefined : staggerItem}
            whileHover={{ y: -8 }}
            className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
          >
            <div className="w-16 h-16 bg-boby-blue text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-boby-yellow group-hover:text-boby-blue transition-colors duration-300 shadow-lg">
              <pillar.icon size={32} strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-boby-blue mb-3">
              {pillar.title}
            </h3>
            <p className="text-boby-dark/70 text-sm leading-relaxed">
              {pillar.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
