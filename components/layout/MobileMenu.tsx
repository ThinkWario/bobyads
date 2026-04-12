"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-xl p-6 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <button
              onClick={onClose}
              className="self-end p-2 mb-6"
              aria-label="Cerrar menu"
            >
              <X size={24} />
            </button>

            <ul className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-lg font-medium text-boby-dark hover:text-boby-blue"
                      onClick={onClose}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="block text-lg font-medium text-boby-dark hover:text-boby-blue"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <Button href="/contacto" variant="primary" className="w-full text-center">
                Contactar
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
