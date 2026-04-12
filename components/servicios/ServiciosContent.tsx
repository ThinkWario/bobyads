"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { staggerContainer, staggerItem, slideUp } from "@/lib/animations";
import { CheckCircle2, Zap, ShieldCheck, BarChart3, Globe, Cpu } from "lucide-react";
import { ServicesFAQ } from "@/components/home/ServicesFAQ";

interface ServicePlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  highlighted?: boolean;
}

const PLANS: ServicePlan[] = [
  {
    id: "meta-expert",
    name: "Plan Experto Meta Ads",
    tagline: "Dominio Total de Facebook & Instagram",
    price: "Consultar Precio",
    description: "Diseñado para negocios que buscan escalar agresivamente sus ventas mediante la segmentación avanzada y creativos de alto impacto.",
    features: [
      "Auditoría de cuenta y píxel",
      "Estrategia de embudos (TOFU, MOFU, BOFU)",
      "Gestión de campañas de conversión",
      "Optimización de creativos basada en datos",
      "Informe de resultados semanal",
      "Soporte prioritario vía WhatsApp",
    ],
    icon: Globe,
    highlighted: true,
  },
  {
    id: "google-expert",
    name: "Plan Experto Google Ads",
    tagline: "Captura la Intención de Compra",
    price: "Consultar Precio",
    description: "Posicionamos tu marca frente a usuarios que ya están buscando activamente tu producto o servicio.",
    features: [
      "Investigación profunda de Keywords",
      "Campañas de Search, Display y PMax",
      "Optimización de Quality Score",
      "A/B Testing de Landing Pages",
      "Seguimiento de conversiones avanzado",
      "Soporte prioritario vía WhatsApp",
    ],
    icon: BarChart3,
  },
  {
    id: "ia-automation",
    name: "Automatización con IA",
    tagline: "Eficiencia Quirúrgica",
    price: "Consultar Precio",
    description: "Implementamos agentes de IA y flujos de trabajo automatizados para reducir costos operativos y aumentar la conversión.",
    features: [
      "Despliegue de Agentes de IA personalizados",
      "Automatización de Lead Qualification",
      "Sincronización con CRM",
      "Optimización de mensajes de venta",
      "Análisis predictivo de comportamiento",
      "Soporte técnico especializado",
    ],
    icon: Cpu,
  },
];

function PlanCard({ plan }: { plan: ServicePlan }) {
  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-3xl border transition-all duration-300 group ${
        plan.highlighted
          ? "bg-boby-blue text-white border-boby-blue shadow-2xl shadow-boby-blue/20"
          : "bg-white text-boby-dark border-gray-100 shadow-sm hover:shadow-xl"
      }`}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-boby-yellow text-black text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
          Más Solicitado
        </div>
      )}

      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors ${
        plan.highlighted ? "bg-white/20 text-white" : "bg-boby-blue/10 text-boby-blue group-hover:bg-boby-yellow group-hover:text-black"
      }`}>
        <plan.icon size={28} />
      </div>

      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className={`text-sm font-medium mb-4 ${plan.highlighted ? "text-boby-yellow" : "text-boby-blue"}`}>
        {plan.tagline}
      </p>
      <p className={`text-sm mb-8 leading-relaxed ${plan.highlighted ? "text-white/80" : "text-boby-dark/60"}`}>
        {plan.description}
      </p>

      <ul className="space-y-4 mb-10">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <CheckCircle2 size={18} className={plan.highlighted ? "text-boby-yellow" : "text-boby-blue"} />
            <span className={plan.highlighted ? "text-white/90" : "text-boby-dark/70"}>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-current/10">
        <span className="text-lg font-bold">{plan.price}</span>
        <Button
          href="/contacto"
          variant={plan.highlighted ? "primary" : "outline"}
          className={plan.highlighted ? "bg-boby-yellow text-black hover:bg-white" : ""}
        >
          Solicitar
        </Button>
      </div>
    </motion.div>
  );
}

export function ServiciosContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <SectionWrapper bg="blue" className="pt-24 pb-16">
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Soluciones de <span className="text-boby-yellow">Crecimiento Acelerado</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            No vendemos clics, vendemos resultados. Implementamos sistemas de adquisición
            basados en datos y optimizados con IA para escalar tu facturación.
          </p>
        </motion.div>
      </SectionWrapper>

      {/* Plans Grid */}
      <SectionWrapper bg="light">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Trust/Guarantee Section */}
      <SectionWrapper bg="white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck size={120} className="text-boby-blue" />
            </div>
            <h2 className="text-3xl font-bold text-boby-blue mb-6">Garantía de Ejecución Técnica</h2>
            <p className="text-boby-dark/70 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
              A diferencia de las agencias tradicionales, nos enfocamos en la <strong>infraestructura de conversión</strong>.
              Si el píxel no mide, el anuncio no convierte y la landing no retiene, no hay ROI.
              Nosotros resolvemos la base técnica antes de invertir un solo dólar en pauta.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-sm font-semibold text-boby-blue">
                <Zap size={18} className="text-boby-yellow" /> Implementación Rápida
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-boby-blue">
                <BarChart3 size={18} className="text-boby-yellow" /> Reportes Transparentes
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-boby-blue">
                <ShieldCheck size={18} className="text-boby-yellow" /> Enfoque en ROI
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper bg="light">
        <ServicesFAQ />
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper bg="blue" className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            ¿Listo para escalar tu negocio?
          </h2>
          <Button href="/contacto" variant="primary" className="px-12 py-6 text-xl bg-boby-yellow text-black hover:bg-white">
            Agendar Consultoría Gratuita
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
