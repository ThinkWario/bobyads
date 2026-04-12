"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ProductCard } from "@/components/product/ProductCard";
import { staggerContainer, staggerItem } from "@/lib/animations";

const FEATURED_PRODUCTS = [
  {
    title: "100 Códigos Liquid para Shopify",
    description: "Optimiza tu tienda con los mejores snippets de Liquid para mejorar la conversión.",
    image: "/images/products/liquid-shopify.png",
    url: "https://tienda.bobyads.com/producto/liquid-shopify",
    isFree: true,
  },
  {
    title: "35 Códigos para WooCommerce",
    description: "Mejora la funcionalidad de tu tienda WordPress con fragmentos de código probados.",
    image: "/images/products/woo-codes.png",
    url: "https://tienda.bobyads.com/producto/woo-codes",
    isFree: true,
  },
  {
    title: "Agente IA Meta Ads",
    description: "Asistente inteligente para la creación y optimización de anuncios de alta conversión.",
    image: "/images/products/ai-meta.png",
    url: "https://tienda.bobyads.com/producto/ai-meta",
    isFree: false,
    price: "CLP 199.000",
  },
  {
    title: "Agente IA Google Ads",
    description: "Optimización automática de keywords y pujas para maximizar el retorno de inversión.",
    image: "/images/products/ai-google.png",
    url: "https://tienda.bobyads.com/producto/ai-google",
    isFree: false,
    price: "CLP 199.000",
  },
];

export function FeaturedProducts() {
  const reducedMotion = useReducedMotion();

  return (
    <SectionWrapper bg="white">
      <motion.div
        variants={reducedMotion ? undefined : staggerContainer}
        initial={reducedMotion ? undefined : "hidden"}
        whileInView={reducedMotion ? undefined : "visible"}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-boby-blue mb-4">
          Herramientas para tu Ecommerce
        </h2>
        <p className="text-boby-dark/60 mb-12 max-w-2xl mx-auto">
          Recursos gratuitos y agentes de IA diseñados para automatizar tu crecimiento.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => (
            <motion.div key={product.title} variants={reducedMotion ? undefined : staggerItem}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
