import Image from "next/image";
import { ExternalLink } from "lucide-react";

const COL_2_LINKS = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Project", href: "#tentang-project" },
  { label: "Preview Website", href: "#preview-website" },
];

const COL_3_LINKS = [
  { label: "Fitur Unggulan", href: "#fitur-unggulan" },
  { label: "Technology Stack", href: "#teknologi" },
  { label: "Design Showcase", href: "#design-showcase" },
];

const COL_4_LINKS = [
  {
    label: "Website EksploTrip",
    href: "https://eksplotrip.vercel.app/",
  },
  {
    label: "Instagram EksploTrip",
    href: "https://www.instagram.com/eksplotrip/",
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white">
      <h2 className="sr-only">Informasi dan Navigasi Footer EksploTrip</h2>

      <div className="section-container py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Kolom 1: Logo & Deskripsi Singkat Project */}
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#beranda"
              aria-label="Kembali ke bagian atas halaman EksploTrip Portfolio"
              className="inline-block rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src="/images/logo-eksplotrip-footer.webp"
                alt="Logo EksploTrip"
                width={140}
                height={70}
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85">
              Halaman portfolio dan studi kasus project EksploTrip - platform
              direktori informasi wisata alam Bogor yang mengedepankan keamanan
              perjalanan, transparansi biaya, dan kemudahan akses informasi.
            </p>
          </div>

          {/* Kolom 2: Navigasi Bagian Awal */}
          <nav
            aria-label="Navigasi Bagian Utama"
            className="lg:col-span-2 lg:col-start-6"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/95">
              Navigasi
            </h3>
            <ul className="mt-4 space-y-3">
              {COL_2_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolom 3: Eksplorasi Showcase */}
          <nav
            aria-label="Navigasi Eksplorasi Showcase"
            className="lg:col-span-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/95">
              Studi Kasus
            </h3>
            <ul className="mt-4 space-y-3">
              {COL_3_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kolom 4: Tautan Resmi */}
          <nav aria-label="Tautan Eksternal EksploTrip" className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/95">
              Tautan Resmi
            </h3>
            <ul className="mt-4 space-y-3">
              {COL_4_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-white/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    <span>{link.label}</span>
                    <ExternalLink
                      className="h-3.5 w-3.5 shrink-0 opacity-80"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-white/15 pt-7 text-center">
          <p className="text-sm text-white/80">
            © 2026 EksploTrip. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
