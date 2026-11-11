import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="kunjungi-eksplotrip"
      aria-labelledby="final-cta-heading"
      className="bg-card-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-footer-bg px-6 py-14 text-white shadow-card sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          {/* Background Nature Photography of Bogor */}
          <div className="absolute inset-0">
            <Image
              src="/images/banner-curug-cibulao.webp"
              alt="Pemandangan air terjun alami dan pepohonan hijau asri di kawasan Bogor"
              fill
              sizes="(max-width: 1440px) 95vw, 1340px"
              className="object-cover object-right"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[#040811]/60"
            />
          </div>

          {/* CTA Content */}
          <div className="relative z-10 max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
              <span>Live Platform</span>
            </p>

            <h2
              id="final-cta-heading"
              className="mt-4 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              Siap Mengenal Keindahan Alam Bogor?
            </h2>

            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Temukan bagaimana EksploTrip menghadirkan informasi wisata alam
              Bogor dalam satu platform yang informatif dan mudah diakses.
            </p>

            <div className="mt-8">
              <a
                href="https://eksplotrip.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
              >
                <span>Jelajahi Website EksploTrip</span>
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
