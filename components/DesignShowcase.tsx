import Image from "next/image";
import { LayoutGrid, Lock, MonitorSmartphone, Palette, SlidersHorizontal } from "lucide-react";

const COLOR_SWATCHES = [
  { name: "Primary Cyan", hex: "#32AAC6", bgClass: "bg-primary", role: "Aksi Utama" },
  { name: "Success Green", hex: "#8ABC43", bgClass: "bg-success", role: "Status Verifikasi" },
  { name: "Warm Yellow", hex: "#F4B72E", bgClass: "bg-logo-yellow", role: "Aksen Logo" },
  { name: "Sunset Orange", hex: "#FB772A", bgClass: "bg-logo-orange", role: "Aksen Logo" },
  { name: "Forest Highlight", hex: "#568942", bgClass: "bg-text-highlight", role: "Aksen Alam" },
  { name: "Canopy Dark", hex: "#375E27", bgClass: "bg-footer-bg", role: "Identitas Footer" },
  { name: "Deep Ink", hex: "#040811", bgClass: "bg-text-main", role: "Teks Utama" },
  { name: "Surface Mist", hex: "#F4F4F4", bgClass: "bg-bg-base border border-black/10", role: "Latar Dasar" },
];

export default function DesignShowcase() {
  return (
    <section
      id="design-showcase"
      aria-labelledby="design-heading"
      className="scroll-mt-20 bg-bg-base py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-highlight sm:text-sm">
            UI/UX Design Showcase
          </p>
          <h2
            id="design-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Designed to Make Exploration Easier
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            Pendekatan desain antarmuka EksploTrip berfokus pada kejelasan
            visual, keterbacaan informasi lapangan, dan pengalaman eksplorasi
            yang konsisten di berbagai ukuran layar.
          </p>
        </div>

        {/* Row 1: Color Consistency + Card Design & Navigation */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-8">
          {/* Card 1: Konsistensi Warna */}
          <article className="min-w-0 flex flex-col rounded-2xl border border-black/[0.06] bg-card-bg p-6 shadow-card-soft sm:p-8 lg:col-span-5">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-text-highlight/10 px-3.5 py-1.5 text-xs font-semibold text-text-highlight">
                <Palette className="h-4 w-4" aria-hidden="true" />
                <span>Konsistensi Warna &amp; Tipografi</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-text-main">
                Palet Warna Alam &amp; Identitas Logo
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                Kombinasi hijau alam, biru air terjun, kuning keemasan, serta
                oranye hangat dari logo berpadu dengan warna netral untuk
                menjaga kontras baca sekaligus memperkuat identitas visual
                EksploTrip.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {COLOR_SWATCHES.map((swatch) => (
                <div
                  key={swatch.hex}
                  className="rounded-xl border border-black/[0.06] bg-bg-base/60 p-2 sm:p-2.5"
                >
                  <div
                    aria-hidden="true"
                    className={`h-10 w-full rounded-lg ${swatch.bgClass}`}
                  />
                  <p className="mt-2 text-xs font-bold text-text-main">
                    {swatch.hex}
                  </p>
                  <p className="truncate text-[11px] text-text-muted">
                    {swatch.role}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-5">
              <div className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-bg-base px-4 py-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Primary Typeface
                  </p>
                  <p className="text-base font-bold text-text-main">
                    Poppins - Regular, Medium, Bold
                  </p>
                </div>
                <span
                  aria-hidden="true"
                  className="text-2xl font-bold tracking-tight text-primary-hover"
                >
                  Aa
                </span>
              </div>
            </div>
          </article>

          {/* Card 2: Desain Kartu Destinasi & Kemudahan Navigasi */}
          <article className="min-w-0 flex flex-col rounded-2xl border border-black/[0.06] bg-card-bg p-6 shadow-card-soft sm:p-8 lg:col-span-7">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary-hover">
                <LayoutGrid className="h-4 w-4" aria-hidden="true" />
                <span>Desain Kartu Destinasi &amp; Navigasi</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-text-main">
                Navigasi Jelas &amp; Kartu Destinasi Informatif
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                Struktur menu utama dibuat ringkas menjadi tiga fokus halaman,
                sementara setiap kartu destinasi langsung menampilkan kategori
                alam, lokasi kecamatan, tag kondisi rute, serta lencana status
                verifikasi dalam satu pandangan.
              </p>
            </div>

            <figure className="mt-6 flex-1 overflow-hidden rounded-xl border border-black/10 bg-bg-base">
              <Image
                src="/images/screenshots/showcase-cards-desktop.webp"
                alt="Desain navigasi utama dan kartu destinasi populer pada website EksploTrip yang menampilkan Curug Cibulao, Situ Tamansari, dan Gunung Luhur"
                width={2160}
                height={1350}
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="h-full w-full object-cover object-top"
              />
            </figure>
          </article>
        </div>

        {/* Row 2: Hierarki Informasi + Responsivitas Desktop & Mobile */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-12 lg:gap-8">
          {/* Card 3: Hierarki Informasi (Desktop View Aligned Side-by-Side with Mobile) */}
          <article className="min-w-0 flex flex-col rounded-2xl border border-black/[0.06] bg-card-bg p-6 shadow-card-soft sm:p-8 lg:col-span-6">
            <div className="lg:min-h-[144px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-success/15 px-3.5 py-1.5 text-xs font-semibold text-text-highlight">
                <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                <span>Hierarki Informasi Terstruktur</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-text-main">
                Penyajian Detail Lokasi &amp; Estimasi Biaya
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                Halaman detail destinasi menyusun informasi kompleks secara
                bertingkat: mulai dari ringkasan lokasi, indikator verifikasi
                survei lapangan, kalkulator biaya kunjungan, hingga katalog
                visual fasilitas.
              </p>
            </div>

            <div className="mt-6 flex flex-1 items-center justify-center rounded-xl border border-black/[0.08] bg-bg-base p-4 sm:p-5">
              <figure className="flex w-full flex-col items-center">
                <div className="w-full overflow-hidden rounded-xl border border-black/15 bg-card-bg shadow-card-soft">
                  {/* Mini Desktop Browser Bar */}
                  <div className="flex items-center gap-2 border-b border-black/[0.08] bg-[#EBEBEB] px-3 py-2">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-[#FF5F56]" />
                      <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                      <span className="h-2 w-2 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="mx-auto flex items-center gap-1.5 rounded bg-card-bg px-2.5 py-0.5 text-[11px] font-medium text-text-muted">
                      <Lock
                        className="h-2.5 w-2.5 text-text-highlight"
                        aria-hidden="true"
                      />
                      <span className="truncate">
                        eksplotrip.vercel.app/destinasi/curug-cibulao
                      </span>
                    </div>
                  </div>

                  <Image
                    src="/images/screenshots/showcase-detail-top.webp"
                    alt="Hierarki informasi halaman detail destinasi Curug Cibulao di website EksploTrip beserta kalkulator biaya dan katalog visual"
                    width={2160}
                    height={1350}
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2.5 text-center text-xs font-semibold text-text-muted">
                  Desktop - Detail Destinasi
                </figcaption>
              </figure>
            </div>
          </article>

          {/* Card 4: Responsivitas Desktop dan Mobile */}
          <article className="min-w-0 flex flex-col rounded-2xl border border-black/[0.06] bg-card-bg p-6 shadow-card-soft sm:p-8 lg:col-span-6">
            <div className="lg:min-h-[144px]">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary-hover">
                <MonitorSmartphone className="h-4 w-4" aria-hidden="true" />
                <span>Responsivitas Desktop &amp; Mobile</span>
              </div>

              <h3 className="mt-4 text-xl font-bold text-text-main">
                Optimal untuk Perencanaan &amp; Akses Lapangan
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-text-muted sm:text-[15px]">
                Tata letak beradaptasi secara mulus dari layar monitor lebar ke
                layar ponsel, dengan tab navigasi mobile yang mudah dijangkau
                satu tangan dan kartu satu kolom yang tetap proporsional.
              </p>
            </div>

            <div className="mt-6 grid flex-1 grid-cols-2 items-center gap-4 rounded-xl border border-black/[0.08] bg-bg-base p-4 sm:p-5">
              {/* Mobile Frame 1 */}
              <figure className="flex flex-col items-center">
                <div className="w-full max-w-[172px] overflow-hidden rounded-2xl border-[3px] border-text-main/85 bg-card-bg shadow-card-soft">
                  <Image
                    src="/images/screenshots/showcase-mobile-beranda.webp"
                    alt="Tampilan responsif mobile halaman Beranda EksploTrip pada layar smartphone"
                    width={780}
                    height={1688}
                    sizes="(max-width: 640px) 42vw, 172px"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2.5 text-center text-xs font-semibold text-text-muted">
                  Mobile - Beranda
                </figcaption>
              </figure>

              {/* Mobile Frame 2 */}
              <figure className="flex flex-col items-center">
                <div className="w-full max-w-[172px] overflow-hidden rounded-2xl border-[3px] border-text-main/85 bg-card-bg shadow-card-soft">
                  <Image
                    src="/images/screenshots/showcase-mobile-eksplorasi.webp"
                    alt="Tampilan responsif mobile halaman Eksplorasi Destinasi EksploTrip pada layar smartphone"
                    width={780}
                    height={1688}
                    sizes="(max-width: 640px) 42vw, 172px"
                    className="h-auto w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2.5 text-center text-xs font-semibold text-text-muted">
                  Mobile - Eksplorasi
                </figcaption>
              </figure>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
