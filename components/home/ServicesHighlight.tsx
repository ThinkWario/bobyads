"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { slideUp } from "@/lib/animations";

interface PlanPreview {
  name: string;
  price: string;
  features: string[];
}

const metaPlan: PlanPreview = {
  name: "Plan Experto Meta Ads",
  price: "El más solicitado",
  features: [
    "Múltiples campañas optimizadas",
    "Mayor inversión diaria gestionada",
    "Informe de resultados semanal",
    "Soporte prioritario vía WhatsApp",
  ],
};

const googlePlan: PlanPreview = {
  name: "Plan Experto Google Ads",
  price: "Máximo Alcance",
  features: [
    "Campañas de Search & Display",
    "Optimización de Keywords",
    "Informe de rendimiento semanal",
    "Soporte prioritario vía WhatsApp",
  ],
};

function PlanBlock({ plan }: { plan: PlanPreview }) {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
      <span className="inline-block bg-boby-yellow text-black text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
        {plan.price}
      </span>
      <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-boby-yellow transition-colors">
        {plan.name}
      </h3>
      <ul className="space-y-4 mb-8">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-white/80">
            <span className="w-1.5 h-1.5 bg-boby-yellow rounded-full mt-1.5 shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesHighlight() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper bg="blue">
      <motion.div
        variants={reducedMotion ? undefined : slideUp}
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Servicios Destacados
        </h2>
        <p className="text-white/70 mb-12 max-w-2xl mx-auto">
          Soluciones diseñadas para escalar tu negocio con precisión y eficiencia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <PlanBlock plan={metaPlan} />
          <PlanBlock plan={googlePlan} />
        </div>
        <div>
          <Button href="/servicios" variant="primary" className="px-10 py-4 text-lg">
            Ver Todos los Planes
          </Button>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
