"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { UserButton, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "jobs", href: "/jobs" },
    { name: "Usage", href: "/usage" },
    { name: "Settings", href: "/settings" },
    { name: "Announcement", href: "/announcement" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between backdrop-blur-xl bg-[#0a0514]/80 border-b border-white/10">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-md bg-[#c0ff00] flex items-center justify-center font-black text-black">N</div>
        <span className="text-xl font-bold uppercase tracking-widest text-white">vixion</span>
      </Link>

      {/* Links */}
      <div className="flex items-center gap-1">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className={`px-4 py-2 text-sm font-bold tracking-wide transition-colors ${
              pathname === link.href ? "text-black bg-[#c0ff00] rounded-md" : "text-gray-400 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Auth */}
      <div className="flex items-center gap-4">
        {/* We use standard Clerk buttons without the wrapper components to avoid build errors */}
        <SignInButton mode="modal">
          <button className="text-sm font-bold uppercase text-[#c0ff00] hover:text-white transition-colors">
            Login
          </button>
        </SignInButton>
        <UserButton />
      </div>
    </nav>
  );
}
