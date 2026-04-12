"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "La implementación de los agentes de IA de BobyAds transformó nuestra captación de leads. Pasamos de un ROI de 2x a 5x en menos de tres meses.",
    author: "Carlos Ruiz",
    role: "CEO de EcomStore",
    avatar: "https://i.pravatar.cc/150?u=carlos",
  },
  {
    quote: "El método de auditoría es quirúrgico. Encontraron fugas en nuestro checkout que nos estaban costando miles de dólares al mes.",
    author: "Ana Martínez",
    role: "Directora de Marketing en GrowFast",
    avatar: "https://i.pravatar.cc/150?u=ana",
  },
  {
    quote: "Los recursos gratuitos de Liquid para Shopify son oro puro. Ahorramos semanas de desarrollo implementando snippets que realmente convierten.",
    author: "Jorge Luna",
    role: "Founder de ShopMaster",
    avatar: "https://i.pravatar.cc/150?u=jorge",
  },
];

const PARTNERS = [
  "Shopify", "WooCommerce", "Meta Ads", "Google Ads", "TikTok Ads", "PayPal", "Stripe", "Klaviyo"
];

export function TrustSection() {
  return (
    <SectionWrapper bg="light">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-boby-blue mb-4">
            Confianza Basada en Resultados
          </h2>
          <div className="w-20 h-1 bg-boby-yellow mx-auto rounded-full mb-6" />
          <p className="text-boby-dark/60 max-w-2xl mx-auto text-lg">
            Ayudamos a cientos de negocios a escalar su facturación mediante la optimización técnica y la IA.
          </p>
        </div>

        {/* Logo Cloud */}
        <div className="mb-24">
          <p className="text-center text-sm font-semibold text-boby-dark/40 uppercase tracking-widest mb-8">
            Tecnologías y Plataformas que Dominamos
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {PARTNERS.map((partner) => (
              <div key={partner} className="flex items-center justify-center text-center font-bold text-xl text-boby-dark/80">
                {partner}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.author}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col relative overflow-hidden group"
            >
              {/* Decorative Quote Mark */}
              <div className="absolute -top-4 -right-4 text-boby-yellow/10 group-hover:text-boby-yellow/20 transition-colors">
                <Star size={120} fill="currentColor" />
              </div>

              <div className="flex gap-1 mb-4 text-boby-yellow">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-boby-dark/80 italic mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-boby-yellow" />
                <div>
                  <h4 className="font-bold text-boby-blue text-sm">{t.author}</h4>
                  <p className="text-xs text-boby-dark/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
