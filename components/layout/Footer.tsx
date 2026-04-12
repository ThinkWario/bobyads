import Link from "next/link";
import { BRAND, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { Share2, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-boby-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Col 1: Logo + description */}
        <div>
          <h3 className="text-xl font-bold text-boby-yellow mb-3">BobyAds</h3>
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
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-boby-yellow">
              <Share2 size={20} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-boby-yellow">
              <Share2 size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-boby-yellow">
              <Share2 size={20} />
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
