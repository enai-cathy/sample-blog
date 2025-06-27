"use client";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "@/app/ui/components/nav-links";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";


export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-black text-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <Link
            href="/"
            className="text-xl font-outfit font-bold text-white flex items-center gap-2"
          >
            404-FOUND!
          </Link>

          {/* Hamburger Menu for Mobile and Tablet (visible below lg) */}
          <button
            className=" p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay (below lg) */}
      {mobileMenuOpen && (
        <div
          className="absolute top-16 right-4 sm:right-0 md:right-6 lg:right-8
                   w-full sm:w-full md:w-1/2 lg:w-[400px]
                   bg-black/50 backdrop-blur-sm
                   px-4 py-6 space-y-4 rounded-md shadow-lg animate-fade-in z-50"
        >
          <NavLinks onClick={handleLinkClick} />
        </div>
      )}
    </nav>
  );
}
