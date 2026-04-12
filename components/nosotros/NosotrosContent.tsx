"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { slideUp, staggerContainer, staggerItem } from "@/lib/animations";
import { Target, Zap, ShieldCheck, Heart } from "lucide-react";

export function NosotrosContent() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section: Brand Statement */}
      <SectionWrapper bg="blue" className="pt-24 pb-16">
        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            No somos una agencia, somos tu <span className="text-boby-yellow">Socio de Crecimiento Técnico</span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Nacimos de la frustración de ver cómo el marketing tradicional ignoraba la base técnica,
            destruyendo presupuestos en anuncios que llevaban a páginas que no convertían.
          </p>
          <Button href="/contacto" variant="primary" className="px-8 py-4 text-lg bg-boby-yellow text-black hover:bg-white">
            Hablemos de tu Negocio
          </Button>
        </motion.div>
      </SectionWrapper>

      {/* Our Story */}
      <SectionWrapper bg="white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -inset-4 bg-boby-yellow/20 rounded-3xl rotate-3" />
            <div className="relative aspect-square bg-gray-100 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
              <div className="w-full h-full flex items-center justify-center text-boby-blue/20 font-bold text-9xl">B</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-boby-blue">El problema que resolvemos</h2>
            <p className="text-boby-dark/70 text-lg leading-relaxed">
              Durante años, el mundo del marketing se dividió en dos: los "creativos" que hacían anuncios bonitos y los "técnicos" que mantenían el servidor.
            </p>
            <p className="text-boby-dark/70 text-lg leading-relaxed">
              En <strong>BobyAds</strong>, eliminamos esa brecha. Entendemos que un anuncio es solo la mitad de la ecuación. La otra mitad es la infraestructura: el píxel, la velocidad de carga, el copy persuasivo y la experiencia de usuario.
            </p>
            <p className="text-boby-dark/70 text-lg leading-relaxed font-semibold text-boby-blue">
              Si la base técnica falla, el marketing es solo un gasto. Si la base técnica es sólida, el marketing es una inversión.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Core Values */}
      <SectionWrapper bg="light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-boby-blue mb-4">Nuestros Pilares Innegociables</h2>
            <div className="w-20 h-1 bg-boby-yellow mx-auto rounded-full" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Target, title: "Precisión Quirúrgica", desc: "No adivinamos. Utilizamos datos reales y auditorías técnicas para tomar cada decisión de pauta." },
              { icon: Zap, title: "Velocidad de Ejecución", desc: "El mercado no espera. Implementamos, medimos y optimizamos en ciclos rápidos para ganar ventaja competitiva." },
              { icon: ShieldCheck, title: "Transparencia Total", desc: "Tus datos son tuyos. Reportes claros, sin métricas de vanidad, enfocados únicamente en el ROI y la facturación." },
            ].map((value, i) => (
              <motion.div key={i} variants={staggerItem} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center group">
                <div className="w-16 h-16 bg-boby-blue text-white rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-boby-yellow group-hover:text-boby-blue transition-colors duration-300">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-boby-blue mb-3">{value.title}</h3>
                <p className="text-boby-dark/70 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Vision Section */}
      <SectionWrapper bg="white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-boby-blue text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 opacity-10">
              <Heart size={200} fill="currentColor" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Queremos democratizar el acceso a la infraestructura de crecimiento de alto nivel.
              Que cualquier negocio, sin importar su tamaño, tenga la capacidad técnica de competir con los gigantes del mercado.
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full overflow-hidden border-2 border-boby-yellow">
                <div className="w-full h-full bg-gray-200" />
              </div>
              <div className="text-left">
                <p className="font-bold text-white">Equipo BobyAds</p>
                <p className="text-white/60 text-xs">Expertos en Crecimiento Técnico</p>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper bg="blue" className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">¿Construimos tu sistema de crecimiento?</h2>
          <Button href="/contacto" variant="primary" className="px-12 py-6 text-xl bg-boby-yellow text-black hover:bg-white">
            Contactar Ahora
          </Button>
        </div>
      </SectionWrapper>
    </div>
  );
}
