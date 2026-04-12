"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  price?: string;
  url: string;
  isFree?: boolean;
}

export function ProductCard({ title, description, image, price, url, isFree }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 flex flex-col h-full transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative w-full h-48 mb-5 overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="mb-3">
        {isFree ? (
          <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-1 rounded-full uppercase tracking-wider">
            Gratis
          </span>
        ) : (
          <span className="text-[10px] font-bold bg-boby-yellow text-black px-2 py-1 rounded-full uppercase tracking-wider">
            {price}
          </span>
        )}
      </div>
      <h3 className="font-bold text-lg text-boby-blue mb-2 line-clamp-1">
        {title}
      </h3>
      <p className="text-sm text-boby-dark/60 mb-6 flex-1 line-clamp-2 leading-relaxed">
        {description}
      </p>
      <Button href={url} variant="outline" className="w-full py-2 text-sm">
        {isFree ? "Descargar Gratis" : "Adquirir Ahora"}
      </Button>
    </motion.div>
  );
}
