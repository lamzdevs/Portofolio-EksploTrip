import { Compass, Layers, Target } from "lucide-react";

const OVERVIEW_CARDS = [
  {
    number: "01",
    title: "Latar Belakang",
    description:
      "Kawasan Bogor memiliki ratusan potensi wisata alam berupa curug, situ, serta gunung dan bukit, namun informasinya kerap tersebar dan belum terstandarisasi. Dibutuhkan satu direktori informasi yang lebih terpusat, terstruktur, dan mudah diakses oleh masyarakat luas.",
    icon: Compass,
    badgeColor: "bg-text-highlight/10 text-text-highlight",
    accentBar: "bg-text-highlight",
  },
  {
    number: "02",
    title: "Tujuan Project",
    description:
      "Membantu calon wisatawan mendapatkan gambaran menyeluruh mengenai profil destinasi, ketersediaan fasilitas lapangan, karakteristik rute perjalanan, hingga rincian estimasi biaya pendukung secara transparan sebelum melakukan perjalanan.",
    icon: Target,
    badgeColor: "bg-[#E5A919]/15 text-[#B87A04]",
    accentBar: "bg-[#E5A919]",
  },
  {
    number: "03",
    title: "Solusi Digital",
    description:
      "Menghadirkan platform direktori informasi wisata alam modern yang menggabungkan kurasi data destinasi terverifikasi, simulasi kebutuhan perjalanan, serta panduan edukasi keselamatan dalam satu pengalaman web yang intuitif.",
    icon: Layers,
    badgeColor: "bg-primary/10 text-primary-hover",
    accentBar: "bg-primary",
  },
];

export default function ProjectOverview() {
  return (
    <section
      id="tentang-project"
      aria-labelledby="overview-heading"
      className="scroll-mt-20 bg-bg-base py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-highlight sm:text-sm">
            Tentang Project
          </p>
          <h2
            id="overview-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Mengenal EksploTrip
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            EksploTrip hadir sebagai solusi informasi wisata alam yang
            mengutamakan kemudahan akses informasi, transparansi biaya, dan
            keamanan perjalanan.
          </p>
        </div>

        {/* Three Overview Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
          {OVERVIEW_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-card-bg p-7 shadow-card-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${card.accentBar}`}
                />

                <div className="flex items-center justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${card.badgeColor}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span
                    aria-hidden="true"
                    className="text-2xl font-bold tracking-tight text-black/10 transition-colors group-hover:text-black/20"
                  >
                    {card.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-text-main">
                  {card.title}
                </h3>

                <p className="mt-3 flex-1 text-[15px] leading-relaxed text-text-muted">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
