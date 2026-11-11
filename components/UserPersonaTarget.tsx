"use client";

import { useState } from "react";
import {
  Compass,
  MapPin,
  Users,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Footprints,
  Baby,
  Tent,
  ArrowRight,
  ShieldCheck,
  Coins,
  Car,
} from "lucide-react";

interface PersonaData {
  id: string;
  name: string;
  age: number;
  role: string;
  origin: string;
  categoryBadge: string;
  icon: typeof Footprints;
  accentColor: string;
  quote: string;
  traits: string[];
  goals: string[];
  painPoints: string[];
  solution: string;
  preferredCluster: string;
}

const PERSONAS: PersonaData[] = [
  {
    id: "solo-explorer",
    name: "Rian Pratama",
    age: 24,
    role: "Karyawan Swasta & Solo Hiker",
    origin: "Jakarta Selatan",
    categoryBadge: "Solo & Teman Sebaya",
    icon: Footprints,
    accentColor: "border-primary bg-primary/10 text-primary-hover",
    quote:
      "Gue pengen tahu kondisi rute jalan kaki sebenarnya sebelum berangkat, jangan sampai kena getok tiket dobel atau jalur berbahaya tanpa persiapan.",
    traits: [
      "Mobilitas dengan motor atau KRL + ojek online",
      "Suka trekking curug tersembunyi berair jernih",
      "Menyukai one-day trip efisien di akhir pekan",
    ],
    goals: [
      "Menemukan rute curug alami yang menantang namun aman untuk dijelajahi.",
      "Mendapatkan simulasi biaya riil (tiket masuk, parkir resmi, retribusi pos) tanpa pungli.",
      "Mengetahui kondisi fisik jalur (berbatu, licin, atau butuh sepatu khusus).",
    ],
    painPoints: [
      "Review di media sosial sering kali tidak update perihal jalanan rusak atau cuaca ekstrem.",
      "Kerap menemui tiket ganda dan pungutan parkir liar tidak resmi di pintu masuk.",
    ],
    solution:
      "Filter tingkat kesulitan rute jalur, katalog foto realita medan, dan Kalkulator Biaya End-to-End transparan.",
    preferredCluster: "Sentul & Pamijahan (Gn. Salak Endah)",
  },
  {
    id: "family-planner",
    name: "Bunda Sarah Utami",
    age: 34,
    role: "Ibu Rumah Tangga & Family Planner",
    origin: "Depok, Jawa Barat",
    categoryBadge: "Wisatawan Keluarga",
    icon: Baby,
    accentColor: "border-success bg-success/15 text-text-highlight",
    quote:
      "Prioritas utama saya adalah keamanan anak-anak dan orang tua, tersedianya toilet bersih, serta akses jalan yang nyaman untuk mobil keluarga.",
    traits: [
      "Perjalanan keluarga bersama anak (6 & 9 thn) dan lansia",
      "Menggunakan mobil pribadi",
      "Mengutamakan kenyamanan, kebersihan, dan keselamatan",
    ],
    goals: [
      "Mencari destinasi curug landai atau danau sejuk yang ramah anak dan lansia.",
      "Memastikan ketersediaan fasilitas penting seperti toilet bersih, mushola, dan warung.",
      "Mengetahui estimasi total pengeluaran rombongan keluarga sebelum memulai perjalanan.",
    ],
    painPoints: [
      "Khawatir salah memilih curug dengan jalur setapak curam yang membahayakan anak.",
      "Informasi online jarang menyebutkan kebersihan toilet dan jarak jalan kaki dari parkiran.",
    ],
    solution:
      "Tag kurasi khusus 'Ramah Keluarga', checklist fasilitas lapangan lengkap, serta konsultasi cepat 24 jam bersama Asisten AI Aiplo.",
    preferredCluster: "Puncak & Tamansari (Kaki Gunung Salak)",
  },
  {
    id: "nature-camper",
    name: "Dimas Aditya",
    age: 28,
    role: "Fotografer & Penggiat Camping",
    origin: "Tangerang",
    categoryBadge: "Komunitas & Camping",
    icon: Tent,
    accentColor: "border-logo-yellow bg-logo-yellow/15 text-[#B87A04]",
    quote:
      "Butuh kepastian legalitas izin camping, kontak resmi pos pengelola, dan panduan mitigasi darurat saat cuaca buruk di lereng gunung.",
    traits: [
      "Membawa tenda dan peralatan kamera lanskap sendiri",
      "Berburu pemandangan sunrise, kabut, dan lanskap danau",
      "Peduli konservasi alam dan regulasi keselamatan kawasan",
    ],
    goals: [
      "Menemukan spot camping resmi berizin yang aman dari risiko longsor dan banjir bandang.",
      "Mengetahui jam buka operasional pos malam hari dan kontak pengelola terverifikasi.",
      "Mendapatkan kepastian biaya sewa kavling tenda dan ketersediaan sumber air bersih.",
    ],
    painPoints: [
      "Ketidakjelasan kontak pos darurat saat terjadi hujan lebat atau angin kencang di alam.",
      "Informasi tarif sewa kavling camping yang simpang siur antara warga lokal dan pengelola.",
    ],
    solution:
      "Panduan Bantuan Darurat & Edukasi Keselamatan terstruktur, kontak resmi pengelola terverifikasi, dan katalog visual lanskap.",
    preferredCluster: "Pamijahan (GSE) & Sukamakmur (Jonggol)",
  },
];

interface WilayahCluster {
  id: string;
  name: string;
  subTitle: string;
  highlights: string[];
  popularDestinations: string[];
  accessChar: string;
  suitability: string;
}

const WILAYAH_CLUSTERS: WilayahCluster[] = [
  {
    id: "sentul",
    name: "Klaster Babakan Madang & Sentul",
    subTitle: "Trekking Sungai & Curug Tebing Bebatuan Toska",
    highlights: [
      "Akses tercepat dari Tol Jagorawi Sentul Selatan",
      "Karakter air jernih kehijauan di antara dinding tebing kapur",
      "Favorit untuk one-day trekking singkat warga Jakarta",
    ],
    popularDestinations: [
      "Curug Leuwi Hejo",
      "Curug Putri Kencana",
      "Curug Leuwi Lieuk",
      "Wisata Alam Gunung Pancar",
    ],
    accessChar: "Aspal mulus hingga area parkir utama, dilanjutkan trekking jalan setapak 15-30 menit.",
    suitability: "Solo Explorer, Pemuda, & Komunitas Trekking",
  },
  {
    id: "gse",
    name: "Klaster Pamijahan & Gn. Salak Endah (GSE)",
    subTitle: "Curug Biru Jernih, Kawah Alami, & Hutan Pinus",
    highlights: [
      "Berada di kawasan penyangga Taman Nasional Gunung Halimun Salak",
      "Air terjun sangat dingin dan jernih langsung dari mata air gunung",
      "Kawasan favorit mendirikan tenda dan eksplorasi kawah belerang",
    ],
    popularDestinations: [
      "Curug Pangeran",
      "Curug Balong Endah",
      "Kawah Ratu Gn. Salak",
      "Curug Ciampea",
    ],
    accessChar: "Jalan pegunungan menanjak dan berliku, aspal beton dengan udara sejuk berkabut.",
    suitability: "Pencinta Alam, Fotografer, & Solo Hiker",
  },
  {
    id: "puncak",
    name: "Klaster Puncak & Megamendung",
    subTitle: "Wisata Dingin, Perkebunan Teh, & Curug Keluarga",
    highlights: [
      "Kawasan legendaris dengan panorama hamparan kebun teh dan danau",
      "Fasilitas lapangan lengkap (mushola, warung, kamar bilas memadai)",
      "Destinasi utama liburan keluarga dengan akses kendaraan prima",
    ],
    popularDestinations: [
      "Curug Cibulao Megamendung",
      "Curug Panjang",
      "Telaga Saat Puncak",
      "Curug Cilember",
    ],
    accessChar: "Jalan raya Puncak beraspal baik dengan sistem rekayasa lalu lintas berkala.",
    suitability: "Keluarga, Pasangan, & Rombongan Santai",
  },
  {
    id: "sukamakmur",
    name: "Klaster Sukamakmur & Jonggol",
    subTitle: "Curug Megah Tebing Tinggi & Panorama Lembah Asri",
    highlights: [
      "Bentang alam pegunungan timur Bogor yang masih alami dan luas",
      "Air terjun bertingkat dengan debit air melimpah dan jembatan gantung",
      "Jalur petualangan dengan sensasi berkendara di punggung bukit",
    ],
    popularDestinations: [
      "Curug Ciherang",
      "Curug Cipamingkis",
      "Curug Mariuk",
      "Villa Khayangan Highland",
    ],
    accessChar: "Kontur jalan perbukitan menanjak dengan jalan beton dan aspal berliku.",
    suitability: "Petualang Bermotor, Komunitas Mobil, & Camper",
  },
  {
    id: "tamansari",
    name: "Klaster Tamansari & Ciapus",
    subTitle: "Danau Alami, Curug Kaki Salak, & Wisata Edukasi",
    highlights: [
      "Lokasi paling dekat dan mudah dijangkau dari pusat Kota dan Stasiun Bogor",
      "Kombinasi situ resapan air tenang dan komplek curug rimbun",
      "Kawasan ramah anak dengan jalur trekking relatif landai",
    ],
    popularDestinations: [
      "Situ Tamansari",
      "Curug Nangka",
      "Curug Daun",
      "Curug Luhur Ciapus",
    ],
    accessChar: "Jalur lingkar perkotaan beraspal mulus, sangat mudah dijangkau angkutan umum.",
    suitability: "Keluarga Kota, Pelajar, & Rekreasi Singkat",
  },
];

export default function UserPersonaTarget() {
  const [activeTab, setActiveTab] = useState<"persona" | "wilayah">("persona");
  const [selectedPersona, setSelectedPersona] = useState<string>("solo-explorer");

  return (
    <section
      id="target-persona"
      aria-labelledby="persona-target-heading"
      className="scroll-mt-20 border-y border-black/[0.06] bg-card-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-text-highlight/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-text-highlight sm:text-sm">
            <Compass className="h-4 w-4" aria-hidden="true" />
            <span>Riset Pengguna &amp; Target Wilayah</span>
          </div>

          <h2
            id="persona-target-heading"
            className="mt-4 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Target Wilayah &amp; User Persona
          </h2>

          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            Desain antarmuka dan struktur fitur EksploTrip dikembangkan berdasarkan
            riset mendalam terhadap karakteristik wisatawan Jabodetabek serta
            pemetaan 5 klaster wisata alam utama di kawasan Bogor.
          </p>
        </div>

        {/* Dual Tab Navigation Switcher */}
        <div className="mt-10 flex justify-center">
          <div
            role="tablist"
            aria-label="Pilihan tampilan riset"
            className="inline-flex rounded-2xl border border-black/[0.08] bg-bg-base p-1.5 shadow-sm"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "persona"}
              aria-controls="tabpanel-persona"
              id="tab-persona"
              onClick={() => setActiveTab("persona")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                activeTab === "persona"
                  ? "bg-primary text-white shadow-button"
                  : "text-text-muted hover:bg-card-bg hover:text-text-main"
              }`}
            >
              <Users className="h-4 w-4" aria-hidden="true" />
              <span>User Persona (3 Profil Pengguna)</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "wilayah"}
              aria-controls="tabpanel-wilayah"
              id="tab-wilayah"
              onClick={() => setActiveTab("wilayah")}
              className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                activeTab === "wilayah"
                  ? "bg-primary text-white shadow-button"
                  : "text-text-muted hover:bg-card-bg hover:text-text-main"
              }`}
            >
              <MapPin className="h-4 w-4" aria-hidden="true" />
              <span>Target Wilayah (5 Klaster Bogor)</span>
            </button>
          </div>
        </div>

        {/* =========================================================================
            TAB PANEL 1: USER PERSONA
           ========================================================================= */}
        {activeTab === "persona" && (
          <div
            id="tabpanel-persona"
            role="tabpanel"
            aria-labelledby="tab-persona"
            className="mt-10 animate-fadeIn"
          >
            {/* Quick Context Banner */}
            <div className="mb-8 rounded-2xl border border-primary/20 bg-card-bg p-5 shadow-card-soft sm:p-6">
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-hover">
                    <Users className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-main sm:text-lg">
                      Tiga Persona Kunci Wisatawan Alam Bogor
                    </h3>
                    <p className="text-xs text-text-muted sm:text-sm">
                      Masing-masing persona mewakili kebutuhan informasi, tingkat kehati-hatian medan, dan budget yang spesifik.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-lg bg-bg-base px-3 py-1 font-medium text-text-main">
                    📍 Asal: Jabodetabek
                  </span>
                  <span className="rounded-lg bg-bg-base px-3 py-1 font-medium text-text-main">
                    ⏱ Frekuensi: Weekend Getaway
                  </span>
                </div>
              </div>
            </div>

            {/* 3 Persona Cards Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {PERSONAS.map((persona) => {
                const IconComponent = persona.icon;
                const isSelected = selectedPersona === persona.id;

                return (
                  <article
                    key={persona.id}
                    onClick={() => setSelectedPersona(persona.id)}
                    className={`flex cursor-pointer flex-col rounded-3xl border bg-card-bg p-6 shadow-card-soft transition-all duration-300 hover:shadow-card sm:p-7 ${
                      isSelected
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-black/[0.06]"
                    }`}
                  >
                    {/* Top Identity */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${persona.accentColor}`}
                        >
                          <IconComponent className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-text-main">
                            {persona.name}
                          </h4>
                          <p className="text-xs font-medium text-text-muted">
                            {persona.age} Tahun - {persona.origin}
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full border border-black/[0.08] bg-bg-base px-2.5 py-1 text-[11px] font-semibold text-text-main">
                        {persona.categoryBadge}
                      </span>
                    </div>

                    {/* Role Title */}
                    <p className="mt-3 text-xs font-semibold text-text-highlight">
                      {persona.role}
                    </p>

                    {/* Persona Quote */}
                    <blockquote className="mt-3.5 rounded-2xl border-l-4 border-primary bg-bg-base/70 p-3.5 text-xs italic leading-relaxed text-text-main sm:text-[13px]">
                      &ldquo;{persona.quote}&rdquo;
                    </blockquote>

                    {/* Persona Key Traits */}
                    <div className="mt-5">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-text-muted">
                        Karakteristik &amp; Mobilitas
                      </h5>
                      <ul className="mt-2 space-y-1.5 text-xs text-text-muted">
                        {persona.traits.map((trait, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{trait}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Goals / Motivasi */}
                    <div className="mt-5">
                      <h5 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-text-highlight">
                        <CheckCircle2 className="h-3.5 w-3.5 text-success" />
                        <span>Kebutuhan &amp; Tujuan (Goals)</span>
                      </h5>
                      <ul className="mt-2 space-y-1.5 text-xs text-text-main">
                        {persona.goals.map((goal, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-bold text-success">✓</span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pain Points */}
                    <div className="mt-5">
                      <h5 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#C04928]">
                        <AlertTriangle className="h-3.5 w-3.5 text-[#C04928]" />
                        <span>Kendala di Lapangan (Pain Points)</span>
                      </h5>
                      <ul className="mt-2 space-y-1.5 text-xs text-text-muted">
                        {persona.painPoints.map((pain, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="font-bold text-[#C04928]">-</span>
                            <span>{pain}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Solution in EksploTrip */}
                    <div className="mt-6 flex-1 rounded-2xl border border-primary/20 bg-primary/[0.04] p-3.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-primary-hover">
                        Solusi EksploTrip:
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-text-main font-medium">
                        {persona.solution}
                      </p>
                    </div>

                    {/* Preferred Cluster Pill */}
                    <div className="mt-4 flex items-center justify-between border-t border-black/[0.06] pt-3 text-[11px] text-text-muted">
                      <span>Klaster Favorit:</span>
                      <span className="font-semibold text-text-highlight">
                        {persona.preferredCluster}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            TAB PANEL 2: TARGET WILAYAH
           ========================================================================= */}
        {activeTab === "wilayah" && (
          <div
            id="tabpanel-wilayah"
            role="tabpanel"
            aria-labelledby="tab-wilayah"
            className="mt-10 animate-fadeIn"
          >
            {/* Wilayah Overview Box */}
            <div className="rounded-3xl border border-black/[0.06] bg-card-bg p-6 shadow-card-soft sm:p-8 lg:p-10">
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary-hover">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>Fokus Geografis: Bogor Raya</span>
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-text-main sm:text-2xl lg:text-3xl">
                    Kawasan Bogor Raya: Episentrum Wisata Alam Jawa Barat
                  </h3>

                  <p className="mt-3.5 text-sm leading-relaxed text-text-muted sm:text-base">
                    Bogor Raya (Kabupaten Bogor dan Kota Bogor) memiliki ratusan potensi
                    destinasi alam yang diapit lereng Gunung Salak, Gunung Gede-Pangrango,
                    serta bentang perbukitan Sentul dan Sukamakmur. EksploTrip memetakan
                    kawasan ini ke dalam 5 klaster wisata strategis untuk mempermudah
                    eksplorasi bagi lebih dari 30 juta masyarakat Jabodetabek.
                  </p>

                  {/* 4 Geographic Highlights */}
                  <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    <div className="rounded-2xl border border-black/[0.06] bg-bg-base p-3.5 text-center">
                      <p className="text-lg font-bold text-primary sm:text-xl">100+</p>
                      <p className="mt-1 text-[11px] font-medium text-text-muted">
                        Potensi Curug &amp; Situ
                      </p>
                    </div>
                    <div className="rounded-2xl border border-black/[0.06] bg-bg-base p-3.5 text-center">
                      <p className="text-lg font-bold text-success sm:text-xl">30 Juta+</p>
                      <p className="mt-1 text-[11px] font-medium text-text-muted">
                        Pasar Jabodetabek
                      </p>
                    </div>
                    <div className="rounded-2xl border border-black/[0.06] bg-bg-base p-3.5 text-center">
                      <p className="text-lg font-bold text-logo-yellow sm:text-xl">5 Klaster</p>
                      <p className="mt-1 text-[11px] font-medium text-text-muted">
                        Wilayah Terpetakan
                      </p>
                    </div>
                    <div className="rounded-2xl border border-black/[0.06] bg-bg-base p-3.5 text-center">
                      <p className="text-lg font-bold text-footer-bg sm:text-xl">100%</p>
                      <p className="mt-1 text-[11px] font-medium text-text-muted">
                        Terverifikasi Tim
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Context: Inbound Target Map Flow */}
                <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-bg-base via-card-bg to-primary/[0.05] p-5 lg:col-span-5 sm:p-6">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-text-main">
                    <Car className="h-4 w-4 text-primary" />
                    <span>Arus Wisatawan (Inbound Audience)</span>
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">
                    Wisatawan didominasi oleh penduduk kawasan aglomerasi Jabodetabek
                    yang mencari liburan akhir pekan singkat (1-2 hari):
                  </p>

                  <div className="mt-4 space-y-2.5 text-xs">
                    <div className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-card-bg p-2.5">
                      <span className="font-semibold text-text-main">Jakarta &amp; Depok</span>
                      <span className="text-text-highlight">Tol Jagorawi → Sentul / Puncak</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-card-bg p-2.5">
                      <span className="font-semibold text-text-main">Tangerang &amp; Tangsel</span>
                      <span className="text-text-highlight">Tol BORR → Pamijahan / Ciapus</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl border border-black/[0.06] bg-card-bg p-2.5">
                      <span className="font-semibold text-text-main">Bekasi &amp; Cikarang</span>
                      <span className="text-text-highlight">Jalur Cibubur → Jonggol / Sukamakmur</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-success/15 px-3 py-2 text-[11px] font-medium text-text-highlight">
                    <ShieldCheck className="h-4 w-4 shrink-0" />
                    <span>Fokus: Bebas pungli, rute teruji aman, &amp; data transparan.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5 Regional Clusters Cards */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {WILAYAH_CLUSTERS.map((cluster, index) => (
                <article
                  key={cluster.id}
                  className="flex flex-col rounded-3xl border border-black/[0.06] bg-card-bg p-6 shadow-card-soft transition-all duration-300 hover:shadow-card"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-xs font-bold text-primary-hover">
                      0{index + 1}
                    </span>
                    <span className="rounded-full bg-bg-base px-2.5 py-1 text-[11px] font-semibold text-text-highlight">
                      {cluster.suitability}
                    </span>
                  </div>

                  <h4 className="mt-4 text-lg font-bold text-text-main">
                    {cluster.name}
                  </h4>
                  <p className="mt-1 text-xs font-medium text-primary-hover">
                    {cluster.subTitle}
                  </p>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5 text-xs text-text-muted">
                    {cluster.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Popular Verified Destinations */}
                  <div className="mt-5 border-t border-black/[0.06] pt-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-text-muted">
                      Destinasi Terverifikasi EksploTrip:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {cluster.popularDestinations.map((dest) => (
                        <span
                          key={dest}
                          className="rounded-lg border border-black/[0.06] bg-bg-base px-2.5 py-1 text-[11px] font-medium text-text-main"
                        >
                          {dest}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Accessibility & Road Condition */}
                  <div className="mt-5 flex-1 rounded-2xl bg-bg-base/70 p-3 text-[11px] text-text-muted">
                    <strong className="font-semibold text-text-main">Karakter Akses: </strong>
                    {cluster.accessChar}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Insight / Summary Box */}
        <div className="mt-10 rounded-2xl border border-black/[0.06] bg-card-bg p-5 text-center shadow-card-soft sm:p-6">
          <div className="mx-auto flex max-w-2xl flex-col items-center justify-center gap-2 text-xs sm:flex-row sm:text-sm">
            <span className="inline-flex items-center gap-1.5 font-semibold text-text-main">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Korelasi Riset &amp; Fitur:</span>
            </span>
            <p className="text-text-muted">
              Seluruh kebutuhan user persona dan spesifikasi 5 klaster wilayah ini
              dijawab langsung oleh fitur Kalkulator Biaya, Filter Jalur, Status Verifikasi,
              serta Asisten AI 24 Jam di EksploTrip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}