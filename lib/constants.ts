export const BRAND = {
  name: "BobyAds",
  whatsapp: "+56983537914",
  whatsappUrl: "https://wa.me/+56983537914?text=Hola%20BobyAds%2C%20quiero%20más%20información",
  email: "contacto@bobyads.com",
  tiendaUrl: "https://tienda.bobyads.com",
  blogUrl: "https://blog.bobyads.com",
} as const;

export const NAV_LINKS = [
  { label: "Inicio", href: "/", external: false },
  { label: "Servicios", href: "/servicios", external: false },
  { label: "Agentes IA", href: "/agentes", external: false },
  { label: "Tienda", href: BRAND.tiendaUrl, external: true },
  { label: "Blog", href: BRAND.blogUrl, external: true },
  { label: "Nosotros", href: "/nosotros", external: false },
  { label: "Contacto", href: "/contacto", external: false },
] as const;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/bobyads",
  facebook: "https://www.facebook.com/bobyads",
  linkedin: "https://www.linkedin.com/company/bobyads",
} as const;
