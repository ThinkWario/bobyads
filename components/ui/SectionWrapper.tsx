import type { ReactNode } from "react";

type BgColor = "white" | "light" | "blue" | "dark";

interface SectionWrapperProps {
  children: ReactNode;
  bg?: BgColor;
  className?: string;
  id?: string;
}

const bgStyles: Record<BgColor, string> = {
  white: "bg-boby-white text-boby-dark",
  light: "bg-boby-light text-boby-dark",
  blue: "bg-boby-blue text-white",
  dark: "bg-boby-dark text-white",
};

export function SectionWrapper({
  children,
  bg = "white",
  className = "",
  id,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 ${bgStyles[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
