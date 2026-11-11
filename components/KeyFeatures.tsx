import { Compass, LifeBuoy, Route, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    title: "Eksplorasi Destinasi",
    description:
      "Menampilkan informasi berbagai wisata alam Bogor, mulai dari curug, situ atau danau, hingga gunung dan bukit.",
    highlightTag: "Katalog Alam Bogor",
    icon: Compass,
    iconBg: "bg-primary/10 text-primary-hover",
  },
  {
    title: "Informasi Terverifikasi",
    description:
      "Menyediakan informasi destinasi, fasilitas, serta karakteristik lokasi berdasarkan proses pendataan dan verifikasi.",
    highlightTag: "Survei & Validasi",
    icon: ShieldCheck,
    iconBg: "bg-success/15 text-text-highlight",
  },
  {
    title: "Informasi Rute dan Biaya",
    description:
      "Membantu wisatawan memahami informasi rute perjalanan dan estimasi biaya sebelum berkunjung.",
    highlightTag: "Transparansi Perjalanan",
    icon: Route,
    iconBg: "bg-primary/10 text-primary-hover",
  },
  {
    title: "Bantuan Darurat",
    description:
      "Menyediakan panduan keselamatan, informasi bantuan, dan edukasi ketika menghadapi kondisi darurat saat berwisata.",
    highlightTag: "Mitigasi & Edukasi",
    icon: LifeBuoy,
    iconBg: "bg-text-highlight/10 text-text-highlight",
  },
];

export default function KeyFeatures() {
  return (
    <section
      id="fitur-unggulan"
      aria-labelledby="features-heading"
      className="scroll-mt-20 bg-bg-base py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-highlight sm:text-sm">
            Fitur Unggulan
          </p>
          <h2
            id="features-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Fitur yang Menjadi Bagian dari EksploTrip
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            Empat pilar fungsional yang dirancang untuk mendukung perencanaan
            perjalanan wisata alam secara informatif, aman, dan terukur.
          </p>
        </div>

        {/* Four Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:mt-14">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="flex flex-col rounded-2xl border border-black/[0.06] bg-card-bg p-6 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-7"
              >
                <div className="flex items-center justify-between gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-bg-base px-3 py-1 text-xs font-medium text-text-muted">
                    {feature.highlightTag}
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold text-text-main sm:text-xl">
                  {feature.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
