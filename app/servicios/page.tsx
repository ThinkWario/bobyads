import type { Metadata } from "next";
import { ServiciosContent } from "@/components/servicios/ServiciosContent";

export const metadata: Metadata = {
  title: "Planes y Precios",
  description: "Conoce nuestros planes de Meta Ads y Google Ads diseñados para escalar tu negocio.",
};

export default function ServicesPage() {
  return <ServiciosContent />;
}
