import Image from "next/image";
import { Compass, ExternalLink, LifeBuoy, Route, ShieldCheck, Sparkles } from "lucide-react";

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

        {/* AI Chat Bot 24 Jam Highlight Card */}
        <article className="mt-8 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-card-bg via-card-bg to-primary/[0.04] p-6 shadow-card-soft transition-all duration-300 hover:shadow-card sm:p-8 lg:mt-10 lg:p-10">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
            {/* Left Column: Info & Capabilities */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary-hover">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span>Fitur AI 24 Jam Non-Stop</span>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-black/5">
                  <Image
                    src="/images/logo_aiplo.webp"
                    alt="Logo Asisten AI EksploTrip Aiplo"
                    width={34}
                    height={34}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-main sm:text-2xl">
                    Asisten AI EksploTrip (Aiplo)
                  </h3>
                  <p className="text-xs font-medium text-text-highlight sm:text-sm">
                    Layanan Tanya Jawab Destinasi Terverifikasi 24 Jam
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base sm:leading-relaxed">
                EksploTrip dilengkapi dengan chatbot cerdas berbasis AI yang siap
                melayani pertanyaan calon wisatawan selama 24 jam penuh. Tanya apa
                saja seputar rekomendasi curug yang ramah keluarga, danau tenang
                untuk berkemah, estimasi biaya riil, kondisi jalur perjalanan,
                hingga persiapan keselamatan yang seluruhnya bersumber dari data
                destinasi terverifikasi resmi.
              </p>

              {/* Capability Badges */}
              <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                <li className="flex items-center gap-2.5 rounded-xl border border-black/[0.06] bg-bg-base/70 px-3.5 py-2.5 text-xs font-medium text-text-main sm:text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-success/20 font-bold text-text-highlight">
                    ✓
                  </span>
                  <span>Data Destinasi Terverifikasi</span>
                </li>
                <li className="flex items-center gap-2.5 rounded-xl border border-black/[0.06] bg-bg-base/70 px-3.5 py-2.5 text-xs font-medium text-text-main sm:text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-primary/20 font-bold text-primary-hover">
                    ✓
                  </span>
                  <span>Simulasi Biaya &amp; Rute Instan</span>
                </li>
                <li className="flex items-center gap-2.5 rounded-xl border border-black/[0.06] bg-bg-base/70 px-3.5 py-2.5 text-xs font-medium text-text-main sm:text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-logo-yellow/20 font-bold text-[#B87A04]">
                    ✓
                  </span>
                  <span>Siap Melayani 24 Jam Non-Stop</span>
                </li>
                <li className="flex items-center gap-2.5 rounded-xl border border-black/[0.06] bg-bg-base/70 px-3.5 py-2.5 text-xs font-medium text-text-main sm:text-sm">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-logo-orange/20 font-bold text-logo-orange">
                    ✓
                  </span>
                  <span>Panduan Kesiapan &amp; Keselamatan</span>
                </li>
              </ul>

              <div className="mt-7">
                <a
                  href="https://eksplotrip.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-button transition-all duration-200 hover:bg-primary-hover hover:-translate-y-0.5"
                >
                  <span>Coba Aiplo di Website EksploTrip</span>
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Column: Simulated Live Chat Interface */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-black/10 bg-card-bg shadow-card">
                {/* Chat Top Bar */}
                <div className="flex items-center justify-between border-b border-black/[0.08] bg-footer-bg px-4 py-3 text-white">
                  <div className="flex items-center gap-2.5">
                    <Image
                      src="/images/logo_aiplo.webp"
                      alt="Aiplo"
                      width={24}
                      height={24}
                      className="h-6 w-6 object-contain"
                    />
                    <div>
                      <p className="text-xs font-bold leading-tight">
                        Asisten AI EksploTrip (Aiplo)
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-success"></span>
                        <span className="text-[10px] text-white/80">
                          Online 24 Jam • Terverifikasi
                        </span>
                      </div>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-white/90">
                    AI Bot 24/7
                  </span>
                </div>

                {/* Chat Messages */}
                <div className="space-y-3 bg-[#FAFAFA] p-4 text-xs sm:text-[13px]">
                  {/* User bubble */}
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-primary px-3.5 py-2.5 text-white shadow-sm">
                      <p>Rekomendasikan curug di Bogor yang ramah keluarga dengan tiket terjangkau dong!</p>
                      <span className="mt-1 block text-right text-[10px] text-white/70">14:15</span>
                    </div>
                  </div>

                  {/* Aiplo bubble */}
                  <div className="flex gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-footer-bg text-white shadow-sm">
                      <Image
                        src="/images/logo_aiplo.webp"
                        alt="Aiplo"
                        width={16}
                        height={16}
                        className="h-4 w-4 object-contain"
                      />
                    </div>
                    <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-black/[0.06] bg-card-bg p-3 shadow-sm">
                      <p className="font-semibold text-text-main">
                        Halo! Kamu bisa mengunjungi <span className="text-text-highlight">Curug Cibulao</span> di Megamendung! 🌊
                      </p>
                      <p className="mt-1.5 text-text-muted">
                        Status: <strong className="font-semibold text-success">✓ Terverifikasi Lapangan</strong>
                      </p>
                      <ul className="mt-1.5 space-y-1 text-text-muted">
                        <li>• Tiket: Rp17.000 / orang</li>
                        <li>• Jalur: Setapak tertata, ramah anak</li>
                        <li>• Fasilitas: Kamar bilas, mushola, warung</li>
                      </ul>
                      <span className="mt-2 block text-[10px] text-text-muted/60">Aiplo • Siap 24 Jam</span>
                    </div>
                  </div>
                </div>

                {/* Simulated Input */}
                <div className="flex items-center gap-2 border-t border-black/[0.08] bg-card-bg p-3">
                  <div className="flex-1 rounded-xl bg-bg-base px-3.5 py-2 text-xs text-text-muted/70">
                    Tanya seputar destinasi terverifikasi Bogor...
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white shadow-sm">
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
