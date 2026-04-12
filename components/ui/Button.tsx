import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  external?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-boby-yellow text-black hover:bg-boby-cta border-2 border-boby-yellow",
  secondary:
    "bg-boby-blue text-white hover:bg-blue-700 border-2 border-boby-blue",
  outline:
    "bg-transparent text-boby-blue border-2 border-boby-blue hover:bg-boby-blue hover:text-white",
};

export function Button({
  children,
  href,
  variant = "primary",
  external = false,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-block px-6 py-3 rounded font-semibold text-base uppercase tracking-wider text-center transition-colors duration-200";

  if (!href) {
    return (
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${baseStyles} ${variantStyles[variant]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        {children}
      </button>
    );
  }

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
