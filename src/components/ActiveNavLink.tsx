"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface ActiveNavLinkProps {
  href: string;
  children: ReactNode;
}

const ActiveNavLink = ({ href, children }: ActiveNavLinkProps) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`shrink-0 rounded-sm p-0.5 text-xs transition-colors active:scale-95 sm:text-base ${
        isActive
          ? "bg-cyan-700 font-semibold text-white"
          : "font-medium text-gray-700 hover:text-red-700"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveNavLink;
