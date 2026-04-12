export const BRAND = {
  name: "BobyAds",
  whatsapp: "+56983537914",
  whatsappUrl: "https://wa.me/+56983537914?text=Hola%20BobyAds%2C%20quiero%20más%20información",
  email: "contacto@bobyads.com",
  tiendaUrl: "https://tienda.bobyads.com",
  blogUrl: "https://blog.bobyads.com",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Tienda", href: BRAND.tiendaUrl, external: true },
  { label: "Blog", href: BRAND.blogUrl, external: true },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/bobyads",
  facebook: "https://www.facebook.com/bobyads",
  linkedin: "https://www.linkedin.com/company/bobyads",
} as const;
