"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Globe, Lock } from "lucide-react";

interface PreviewScreen {
  id: string;
  tabLabel: string;
  title: string;
  urlPath: string;
  fullUrl: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
}

const PREVIEW_SCREENS: PreviewScreen[] = [
  {
    id: "beranda",
    tabLabel: "Halaman Beranda",
    title: "Halaman Beranda",
    urlPath: "eksplotrip.vercel.app",
    fullUrl: "https://eksplotrip.vercel.app/",
    imageSrc: "/images/screenshots/preview-beranda.webp",
    imageAlt:
      "Tampilan desktop halaman Beranda website EksploTrip yang menampilkan hero wisata alam Bogor dan daftar destinasi populer terverifikasi",
    caption:
      "Menyambut pengunjung dengan proposisi nilai EksploTrip serta kurasi destinasi wisata alam populer di Bogor.",
  },
  {
    id: "eksplorasi",
    tabLabel: "Eksplorasi Destinasi",
    title: "Halaman Eksplorasi Destinasi",
    urlPath: "eksplotrip.vercel.app/eksplorasi",
    fullUrl: "https://eksplotrip.vercel.app/eksplorasi",
    imageSrc: "/images/screenshots/preview-eksplorasi-top.webp",
    imageAlt:
      "Tampilan desktop halaman Eksplorasi Destinasi website EksploTrip dengan klasifikasi tipe wisata curug, situ, dan gunung beserta kartu direktori",
    caption:
      "Menyajikan katalog direktori destinasi berdasarkan kategori alam serta karakteristik kondisi perjalanan.",
  },
  {
    id: "bantuan-darurat",
    tabLabel: "Bantuan Darurat",
    title: "Halaman Bantuan Darurat",
    urlPath: "eksplotrip.vercel.app/bantuan-darurat",
    fullUrl: "https://eksplotrip.vercel.app/bantuan-darurat",
    imageSrc: "/images/screenshots/preview-bantuan-darurat.webp",
    imageAlt:
      "Tampilan desktop halaman Bantuan Darurat website EksploTrip yang memuat langkah penanganan kondisi darurat dan tips keselamatan di alam",
    caption:
      "Memberikan panduan langkah darurat yang tenang, sistematis, serta edukasi persiapan keselamatan di alam.",
  },
  {
    id: "aiplo",
    tabLabel: "Asisten AI (Aiplo)",
    title: "Asisten AI EksploTrip (Aiplo)",
    urlPath: "eksplotrip.vercel.app",
    fullUrl: "https://eksplotrip.vercel.app/",
    imageSrc: "/images/screenshots/preview-aiplo-modal.webp",
    imageAlt:
      "Tampilan dialog Asisten AI EksploTrip (Aiplo) yang siap melayani pertanyaan seputar destinasi terverifikasi selama 24 jam",
    caption:
      "Layanan AI Chat Bot 24 jam yang siap menjawab pertanyaan dan merekomendasikan destinasi wisata terverifikasi.",
  },
];

export default function WebsitePreview() {
  const [activeId, setActiveId] = useState<string>("beranda");

  const activeScreen =
    PREVIEW_SCREENS.find((screen) => screen.id === activeId) ??
    PREVIEW_SCREENS[0];

  return (
    <section
      id="preview-website"
      aria-labelledby="preview-heading"
      className="scroll-mt-20 bg-card-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-highlight sm:text-sm">
            Website Showcase
          </p>
          <h2
            id="preview-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Explore the EksploTrip Experience
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            Lihat bagaimana EksploTrip menyajikan informasi wisata alam Bogor
            melalui antarmuka yang informatif dan mudah digunakan.
          </p>
        </div>

        {/* Interactive Page Selector Pills */}
        <div
          role="group"
          aria-label="Pilih tampilan halaman website EksploTrip"
          className="mt-9 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {PREVIEW_SCREENS.map((screen) => {
            const isSelected = screen.id === activeScreen.id;
            return (
              <button
                key={screen.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setActiveId(screen.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isSelected
                    ? "bg-primary text-white shadow-button"
                    : "border border-black/10 bg-bg-base text-text-muted hover:border-primary/40 hover:text-text-main"
                }`}
              >
                {screen.tabLabel}
              </button>
            );
          })}
        </div>

        {/* Featured Main Desktop Browser Mockup */}
        <figure className="mt-8 overflow-hidden rounded-2xl border border-black/10 bg-bg-base shadow-card sm:mt-10">
          {/* Desktop Browser Chrome Header */}
          <div className="flex items-center justify-between gap-3 border-b border-black/10 bg-[#EBEBEB] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
            </div>

            <div className="flex max-w-md flex-1 items-center justify-center gap-2 rounded-lg border border-black/[0.08] bg-card-bg px-3 py-1.5 text-xs text-text-muted sm:text-sm">
              <Lock
                className="h-3.5 w-3.5 shrink-0 text-text-highlight"
                aria-hidden="true"
              />
              <span className="truncate font-medium text-text-main">
                {activeScreen.urlPath}
              </span>
            </div>

            <a
              href={activeScreen.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Buka ${activeScreen.title} di tab baru`}
              className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold text-primary-hover transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
            >
              <span className="hidden sm:inline">Live</span>
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Main Screenshot Viewport (Preloaded Crossfade Stack) */}
          <div className="relative aspect-[16/10] w-full bg-card-bg">
            {PREVIEW_SCREENS.map((screen, index) => {
              const isCurrent = screen.id === activeScreen.id;
              return (
                <Image
                  key={screen.id}
                  src={screen.imageSrc}
                  alt={screen.imageAlt}
                  width={2160}
                  height={1350}
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1440px) 92vw, 1340px"
                  className={`absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-200 ${
                    isCurrent
                      ? "z-10 opacity-100"
                      : "pointer-events-none z-0 opacity-0"
                  }`}
                />
              );
            })}
          </div>

          <figcaption className="flex flex-col justify-between gap-2 border-t border-black/[0.08] bg-card-bg px-5 py-4 sm:flex-row sm:items-center sm:px-6">
            <div>
              <span className="text-sm font-bold text-text-main">
                {activeScreen.title}
              </span>
              <span className="mx-2 hidden text-black/25 sm:inline">•</span>
              <span className="block text-sm text-text-muted sm:inline">
                {activeScreen.caption}
              </span>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-text-highlight">
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Desktop Viewport (1440px)</span>
            </span>
          </figcaption>
        </figure>

        {/* Desktop Mockup Overview Cards */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PREVIEW_SCREENS.map((screen) => {
            const isSelected = screen.id === activeScreen.id;
            return (
              <article
                key={screen.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-card-bg transition-all duration-200 ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/25 shadow-card-soft"
                    : "border-black/10 shadow-card-soft hover:-translate-y-1 hover:border-primary/50"
                }`}
              >
                {/* Mini Browser Bar */}
                <div className="flex w-full items-center gap-2 border-b border-black/[0.08] bg-bg-base px-3.5 py-2.5">
                  <div className="flex items-center gap-1.5" aria-hidden="true">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                    <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="ml-1 truncate rounded bg-card-bg px-2 py-0.5 text-[11px] font-medium text-text-muted">
                    {screen.urlPath}
                  </span>
                </div>

                {/* Thumbnail Screenshot */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-black/[0.06] bg-bg-base">
                  <Image
                    src={screen.imageSrc}
                    alt={`Pratinjau ringkas ${screen.title}`}
                    width={2160}
                    height={1350}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Card Description */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-text-main">
                      <button
                        type="button"
                        onClick={() => setActiveId(screen.id)}
                        aria-pressed={isSelected}
                        className="rounded text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary after:absolute after:inset-0 after:content-['']"
                      >
                        {screen.title}
                      </button>
                    </h3>
                    {isSelected && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-semibold text-primary-hover">
                        Aktif
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {screen.caption}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA Button to Live EksploTrip Website */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-12">
          <a
            href="https://eksplotrip.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:text-base"
          >
            <span>Kunjungi Website</span>
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
          </a>
          <p className="text-xs text-text-muted sm:text-sm">
            Membuka aplikasi langsung di{" "}
            <span className="font-medium text-text-main">
              eksplotrip.vercel.app
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
