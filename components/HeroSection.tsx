import Image from "next/image";
import { ArrowDown, ExternalLink, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="beranda"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[520px] scroll-mt-20 items-center overflow-hidden bg-text-main text-white lg:min-h-[580px]"
    >
      {/* Background Nature Image of Bogor */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bogor-nature.webp"
          alt="Panorama pegunungan, curug, danau, serta hutan tropis di Bogor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[63%_center]"
        />
        {/* Dark Neutral Scrim Overlay for High Readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[#040811]/65"
        />
      </div>

      {/* Hero Main Content */}
      <div className="section-container relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          {/* Main Heading (H1) */}
          <h1
            id="hero-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-[44px] md:leading-[1.2] lg:text-[50px] lg:leading-[1.18]"
          >
            Menjelajahi Keindahan Alam Bogor Melalui Informasi Wisata yang Lebih{" "}
            <span className="text-success">Aman dan Transparan.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/90 sm:text-lg sm:leading-relaxed">
            EksploTrip merupakan platform direktori informasi wisata alam yang
            dirancang untuk membantu masyarakat mengenal berbagai destinasi
            curug, danau, serta gunung atau bukit di Bogor melalui informasi
            yang lebih terstruktur, transparan, dan mudah diakses.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col gap-3.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-4">
            <a
              href="#preview-website"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-7 sm:text-base"
            >
              <span>Lihat Project</span>
              <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <a
              href="https://eksplotrip.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white hover:text-text-main focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7 sm:text-base"
            >
              <span>Kunjungi Website</span>
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Location Info */}
          <div className="mt-10 border-t border-white/15 pt-6">
            <p className="inline-flex items-center gap-2.5 text-sm font-medium text-white/90">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/10">
                <MapPin className="h-4 w-4 text-success" aria-hidden="true" />
              </span>
              <span>Bogor, Indonesia</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
