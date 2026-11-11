"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  sectionId: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Beranda", href: "#beranda", sectionId: "beranda" },
  { label: "Tentang Project", href: "#tentang-project", sectionId: "tentang-project" },
  { label: "Fitur Unggulan", href: "#fitur-unggulan", sectionId: "fitur-unggulan" },
  { label: "Teknologi", href: "#teknologi", sectionId: "teknologi" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);

      const scrollPosition = window.scrollY + 140;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const element = document.getElementById(NAV_ITEMS[i].sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].sectionId);
          break;
        }
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 h-[80px] w-full bg-card-bg transition-shadow duration-200 ${
        isScrolled
          ? "border-b border-black/[0.06] shadow-card-soft"
          : "border-b border-black/[0.06]"
      }`}
    >
      <div className="section-container flex h-full items-center justify-between gap-4">
        {/* Left: Official EksploTrip Logo */}
        <a
          href="#beranda"
          onClick={closeMobileMenu}
          aria-label="EksploTrip Portfolio Beranda"
          className="inline-flex shrink-0 items-center rounded-lg py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Image
            src="/images/logo-eksplotrip-navbar.webp"
            alt="Logo EksploTrip"
            width={92}
            height={45}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </a>

        {/* Center: Desktop Navigation */}
        <nav aria-label="Navigasi Utama" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`relative py-2 text-[15px] font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
                      isActive
                        ? "text-primary-hover font-semibold"
                        : "text-text-muted hover:text-text-main"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-1 h-[2.5px] rounded-full bg-primary transition-transform duration-200 ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: External Website CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="https://eksplotrip.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span>Kunjungi Website</span>
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 bg-card-bg text-text-main transition-colors hover:bg-bg-base focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <nav
          id="mobile-navigation-menu"
          aria-label="Navigasi Mobile"
          className="border-b border-black/10 bg-card-bg shadow-card-soft lg:hidden"
        >
          <div className="section-container py-5">
            <ul className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                        isActive
                          ? "bg-primary/10 font-semibold text-primary-hover"
                          : "text-text-main hover:bg-bg-base"
                      }`}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="mt-4 border-t border-black/[0.08] pt-4 sm:hidden">
              <a
                href="https://eksplotrip.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-button transition-colors hover:bg-primary-hover"
              >
                <span>Kunjungi Website</span>
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
