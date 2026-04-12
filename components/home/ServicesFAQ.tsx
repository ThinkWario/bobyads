"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "¿Cuánto tiempo tarda en verse el primer resultado?",
    answer: "Dependiendo del nicho, comenzamos a optimizar desde el día 1. Generalmente, los primeros ajustes de conversión se ven en las primeras 2 semanas, y la escalabilidad real comienza a consolidarse entre el primer y segundo mes tras la optimización del embudo.",
  },
  {
    question: "¿Necesito un presupuesto mensual elevado para empezar?",
    answer: "No necesariamente. Lo más importante es que el presupuesto sea sostenible. Empezamos con una inversión controlada para validar la oferta y el embudo; una vez que el ROI es positivo, escalamos la inversión de forma agresiva y segura.",
  },
  {
    question: "¿En qué se diferencian de una agencia de marketing tradicional?",
    answer: "La mayoría de las agencias se enfocan en 'métricas de vanidad' (likes, impresiones). Nosotros nos enfocamos en la infraestructura técnica y el ROI. Si la landing no convierte, no sirve de nada traer más tráfico. Nosotros arreglamos la conversión primero.",
  },
  {
    question: "¿Cómo funciona la integración de la IA en mis campañas?",
    answer: "Utilizamos agentes de IA para la optimización de creativos, análisis de sentimiento de los leads y automatización de la calificación de prospectos. Esto reduce el costo por adquisición y aumenta la calidad de los leads que llegan a tu equipo de ventas.",
  },
  {
    question: "¿Tienen experiencia en mi sector específico?",
    answer: "Hemos trabajado con diversos modelos de Ecommerce y servicios digitales. Nuestra metodología es agnóstica al sector porque se basa en psicología de conversión y análisis de datos, lo que nos permite adaptar la estrategia a cualquier mercado.",
  },
];

function FAQItemComponent({ item, isOpen, toggle }: { item: FAQItem; isOpen: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-gray-200 last:border-none">
      <button
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? "text-boby-blue" : "text-boby-dark group-hover:text-boby-blue"}`}>
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`p-1 rounded-full ${isOpen ? "bg-boby-blue text-white" : "bg-gray-100 text-gray-500"}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-boby-dark/70 leading-relaxed">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-boby-blue mb-4">Preguntas Frecuentes</h2>
        <div className="w-16 h-1 bg-boby-yellow mx-auto rounded-full" />
      </div>
      <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        {FAQS.map((faq, index) => (
          <FAQItemComponent
            key={index}
            item={faq}
            isOpen={openIndex === index}
            toggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}
