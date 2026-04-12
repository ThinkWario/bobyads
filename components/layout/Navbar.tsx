"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
          <Link href="/" aria-label="BobyAds - Inicio">
            <Image
              src="/logo.png"
              alt="BobyAds"
              width={140}
              height={47}
              priority
              className="h-10 w-auto transition-all duration-300"
              style={scrolled
                ? { filter: "brightness(0)" }
                : { filter: "drop-shadow(0 1px 4px rgba(0,0,0,0.35))" }
              }
            />
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
                    className={`text-sm font-medium transition-colors ${
                      scrolled
                        ? "text-boby-dark hover:text-boby-blue"
                        : "text-white/90 hover:text-boby-yellow"
                    }`}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      scrolled
                        ? "text-boby-dark hover:text-boby-blue"
                        : "text-white/90 hover:text-boby-yellow"
                    }`}
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
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-boby-dark" : "text-white"}`}
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
