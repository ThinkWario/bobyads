import type { Metadata } from "next";
import { AgentesContent } from "@/components/agentes/AgentesContent";

export const metadata: Metadata = {
  title: "Agentes de IA",
  description: "Automatiza tu negocio con agentes de IA para calificación de leads, seguimiento y análisis de campañas.",
};

export default function AgentesPage() {
  return <AgentesContent />;
}
