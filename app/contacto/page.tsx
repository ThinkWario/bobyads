import type { Metadata } from "next";
import { ContactoContent } from "@/components/contacto/ContactoContent";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Habla con nuestro equipo y empieza a escalar tu negocio hoy.",
};

export default function ContactoPage() {
  return <ContactoContent />;
}
