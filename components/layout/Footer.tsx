import Link from "next/link";
import Image from "next/image";
import { BRAND, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone } from "lucide-react";

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-boby-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Logo + description */}
        <div>
          <Image src="/logo.png" alt="BobyAds" width={140} height={47} className="h-10 w-auto mb-3 brightness-0 invert" />
          <p className="text-sm text-gray-300 leading-relaxed">
            Agencia de publicidad digital enfocada en resultados. Convierte mas
            prospectos en clientes con campanas optimizadas.
          </p>
        </div>

        {/* Col 2: Quick links */}
        <div>
          <h4 className="font-semibold mb-3">Links</h4>
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-300 hover:text-boby-yellow transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-boby-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Services */}
        <div>
          <h4 className="font-semibold mb-3">Servicios</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Meta Ads (Facebook & Instagram)</li>
            <li>Línea de Google Ads (Search & Display)</li>
            <li>Embudos de Venta</li>
            <li>Email Marketing</li>
          </ul>
        </div>

        {/* Col 4: Contact + social */}
        <div>
          <h4 className="font-semibold mb-3">Contacto</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Phone size={14} />
              <a href={`tel:${BRAND.whatsapp}`} className="hover:text-boby-yellow">
                +56 9 8353 7914
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} />
              <a href={`mailto:${BRAND.email}`} className="hover:text-boby-yellow">
                {BRAND.email}
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-boby-yellow transition-colors">
              <IconInstagram />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-boby-yellow transition-colors">
              <IconFacebook />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-boby-yellow transition-colors">
              <IconLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-600 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} BobyAds. Todos los derechos reservados.
      </div>
    </footer>
  );
}
