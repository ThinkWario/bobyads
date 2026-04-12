"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface SpringCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
}

function SpringCounter({ target, prefix = "", suffix = "" }: SpringCounterProps) {
  const [display, setDisplay] = useState(0);
  const spring = useSpring(0, { bounce: 0, duration: 1500 });

  useEffect(() => {
    const unsubscribe = spring.on("change", (v) => setDisplay(Math.round(v)));
    return () => unsubscribe();
  }, [spring]);

  return (
    <motion.div
      onViewportEnter={() => spring.set(target)}
      onViewportLeave={() => spring.set(0)}
    >
      <span
        className="font-bold text-6xl md:text-8xl leading-none"
        style={{ color: "#FEC301", fontFamily: "Poppins, sans-serif" }}
      >
        {prefix}{display}{suffix}
      </span>
    </motion.div>
  );
}

const STATS = [
  { target: 500, prefix: "+", suffix: "", label: "Clientes Activos" },
  { target: 98,  prefix: "",  suffix: "%", label: "Retención" },
  { target: 3,   prefix: "",  suffix: "x", label: "ROAS Promedio" },
  { target: 15,  prefix: "$", suffix: "M", label: "USD Gestionados" },
];

export function AnimatedStats() {
  return (
    <section
      className="border-t-2 border-boby-yellow"
      style={{ background: "#111" }}
    >
      {/* Section heading */}
      <div className="flex justify-center pt-10 pb-2 px-4">
        <p
          className="text-white text-sm font-semibold uppercase tracking-[0.3em]"
        >
          RESULTADOS QUE HABLAN
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((stat, i) => (
          <div key={stat.label} className="relative flex flex-col items-center justify-center py-12 px-8">
            {/* Vertical divider (not on last column) */}
            {i < STATS.length - 1 && (
              <div
                className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px hidden md:block"
                style={{ background: "rgba(254,195,1,0.3)" }}
              />
            )}
            {/* Mobile divider (bottom, not on last row) */}
            {i < 2 && (
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-px md:hidden"
                style={{ background: "rgba(254,195,1,0.3)" }}
              />
            )}

            <SpringCounter
              target={stat.target}
              prefix={stat.prefix}
              suffix={stat.suffix}
            />
            <p className="mt-3 text-white text-xs font-semibold uppercase tracking-widest text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
