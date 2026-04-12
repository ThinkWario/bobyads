import type { Metadata } from "next";
import { NosotrosContent } from "@/components/nosotros/NosotrosContent";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conoce al equipo de BobyAds y nuestra historia.",
};

export default function NosotrosPage() {
  return <NosotrosContent />;
}
