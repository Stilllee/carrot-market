import Link from "next/link";
import React from "react";

interface FloatingButton {
  children: React.ReactNode;
  href: string;
}

export default function FloatingButton({ children, href }: FloatingButton) {
  return (
    <Link
      href={href}
      className="fixed flex items-center justify-center p-4 text-white transition-colors border-transparent border-none rounded-full shadow-xl cursor-pointer bottom-24 right-5 bg-main-blue hover:bg-hover-blue aspect-square w-14"
    >
      {children}
    </Link>
  );
}
