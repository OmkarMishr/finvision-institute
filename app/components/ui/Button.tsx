"use client";
import Link from "next/link";

type Variant = "red" | "outline" | "wapp" | "white" | "transparent";

interface ButtonProps {
  variant?: Variant;
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  style?: React.CSSProperties;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  variant = "red",
  href,
  onClick,
  children,
  style,
  fullWidth,
  type = "button",
}: ButtonProps) {
  const cls = `btn btn-${variant}${fullWidth ? " w-full" : ""}`;

  if (href) {
    return (
      <Link href={href} className={cls} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick} style={style}>
      {children}
    </button>
  );
}