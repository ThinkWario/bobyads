"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import { Menu } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-xl text-boby-blue">
            BobyAds
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-boby-dark hover:text-boby-blue transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-boby-dark hover:text-boby-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="/contacto" variant="primary">
              Contactar
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
