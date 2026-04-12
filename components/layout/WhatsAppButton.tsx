"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { BRAND } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={BRAND.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      animate={{
        boxShadow: [
          "0 0 0 0 rgba(34, 197, 94, 0.4)",
          "0 0 0 12px rgba(34, 197, 94, 0)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <MessageCircle size={28} className="text-white" />
    </motion.a>
  );
}
