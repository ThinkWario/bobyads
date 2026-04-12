"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function HomeCTA() {
  return (
    <section className="bg-boby-yellow py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-black text-boby-blue mb-6 leading-tight">
          ¿Listo para escalar tu negocio?
        </h2>
        <p className="text-boby-blue/80 text-lg md:text-xl mb-10 leading-relaxed">
          Agenda una llamada gratis y descubre cómo triplicar tu ROAS en 90 días.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            href="/contacto"
            variant="secondary"
            className="px-10 py-4 text-base"
          >
            Agendar Llamada Gratis
          </Button>
          <Button
            href="/agentes"
            variant="outline"
            className="px-10 py-4 text-base border-boby-blue text-boby-blue hover:bg-boby-blue hover:text-white"
          >
            Ver Agentes IA
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
