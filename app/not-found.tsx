"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-boby-blue flex flex-col items-center justify-center px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-xl"
      >
        <p className="text-boby-yellow font-black text-[10rem] leading-none tracking-tighter">
          404
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
          Página no encontrada
        </h1>
        <p className="text-white/70 text-lg mb-10 leading-relaxed">
          Lo que buscas no está aquí, pero podemos ayudarte a convertir más.
        </p>
        <Button href="/" variant="primary" className="px-10 py-4 text-base">
          Volver al Inicio
        </Button>
      </motion.div>
    </div>
  );
}
