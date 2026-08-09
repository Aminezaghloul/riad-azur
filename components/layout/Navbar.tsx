"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "../ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Rooms", href: "/rooms" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300 border-b",
          isScrolled
            ? "bg-sand-100/90 backdrop-blur-md border-sand-300 py-4 shadow-subtle"
            : "bg-sand-100 border-transparent py-6"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex flex-col group focus:outline-none"
            aria-label={`${siteConfig.name} Home`}
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.25em] text-obsidian-900 font-normal transition-colors group-hover:text-terracotta-500">
              {siteConfig.logoText || siteConfig.name}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-taupe-600 font-sans font-medium">
              {siteConfig.city}
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-[0.2em] font-sans transition-colors relative py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500",
                    isActive
                      ? "text-obsidian-900 font-semibold"
                      : "text-taupe-600 hover:text-obsidian-900"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-px w-5 -translate-x-1/2 bg-terracotta-500" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link href="/contact">
              <Button variant="primary" size="md">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex lg:hidden items-center space-x-3">
            <Link href="/contact">
              <Button
                variant="primary"
                size="sm"
                className="text-[10px] px-3 py-2"
              >
                Contact
              </Button>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-obsidian-900 hover:text-terracotta-500 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-sand-100/98 backdrop-blur-lg flex flex-col justify-between p-8 overflow-y-auto">
          <div className="flex items-center justify-between border-b border-sand-300 pb-6">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex flex-col"
            >
              <span className="font-serif text-2xl tracking-[0.25em] text-obsidian-900">
                {siteConfig.name}
              </span>
              <span className="text-[8px] uppercase tracking-[0.3em] text-taupe-600">
                {siteConfig.city}
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-obsidian-900 hover:text-terracotta-500 focus:outline-none"
              aria-label="Close mobile menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-6 my-10 text-center" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "font-serif text-2xl tracking-widest transition-colors",
                    isActive ? "text-terracotta-500 font-normal" : "text-obsidian-900 hover:text-terracotta-500"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Bottom Actions inside Mobile Drawer */}
          <div className="border-t border-sand-300 pt-6 space-y-4 text-center">
            <Link href="/contact">
              <Button
                variant="primary"
                size="lg"
                className="w-full py-4 text-xs"
              >
                Contact Us
              </Button>
            </Link>
            <p className="pt-2 text-[10px] uppercase tracking-[0.2em] text-taupe-600">Concept website — fictional property</p>
          </div>
        </div>
      )}

    </>
  );
}
