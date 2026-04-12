"use client";

const METRICS = [
  "+500 Clientes Activos",
  "98% Retención",
  "3x ROAS Promedio",
  "+$15M Invertidos",
  "Meta Ads · Google Ads · IA",
  "Agencia #1 en Conversión",
];

function MarqueeItem({ text }: { text: string }) {
  return (
    <>
      <span className="px-8 text-sm font-semibold uppercase tracking-widest text-boby-yellow select-none">
        ▶
      </span>
      <span className="px-8 text-sm font-semibold uppercase tracking-widest text-white whitespace-nowrap select-none">
        {text}
      </span>
    </>
  );
}

export function MarqueeStats() {
  return (
    <div
      className="bg-boby-blue overflow-hidden py-3"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="animate-marquee flex w-max">
        {/* First copy */}
        {METRICS.map((m) => (
          <MarqueeItem key={`a-${m}`} text={m} />
        ))}
        {/* Duplicate for seamless loop */}
        {METRICS.map((m) => (
          <MarqueeItem key={`b-${m}`} text={m} />
        ))}
      </div>
    </div>
  );
}
