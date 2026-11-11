import type { ReactNode } from "react";

interface TechItem {
  name: string;
  category: string;
  description: string;
  icon: ReactNode;
}

const TECHNOLOGIES: TechItem[] = [
  {
    name: "Next.js",
    category: "Web Framework",
    description:
      "Arsitektur App Router untuk perutean halaman yang cepat, modular, dan optimal.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
      >
        <circle cx="12" cy="12" r="10" fill="#040811" />
        <path
          d="M8.5 16V8L16.8 18.2"
          stroke="#FFFFFF"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 8V13"
          stroke="#FFFFFF"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "React",
    category: "UI Library",
    description:
      "Membangun antarmuka pengguna berbasis komponen yang deklaratif dan mudah dikelola.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
      >
        <circle cx="12" cy="12" r="2" fill="#32AAC6" />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.8"
          stroke="#32AAC6"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.8"
          transform="rotate(60 12 12)"
          stroke="#32AAC6"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.8"
          transform="rotate(120 12 12)"
          stroke="#32AAC6"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    category: "Language",
    description:
      "Pengetikan statis untuk menjaga konsistensi model data destinasi dan komponen.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
      >
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
        <path
          d="M7.2 11.2H12.4M9.8 11.2V18M17.8 12.4C17.3 11.7 16.5 11.3 15.6 11.3C14.4 11.3 13.7 11.9 13.7 12.8C13.7 13.7 14.4 14.1 15.7 14.5C17 14.9 17.9 15.4 17.9 16.6C17.9 17.7 16.9 18.3 15.5 18.3C14.4 18.3 13.6 17.9 13.1 17.1"
          stroke="#FFFFFF"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    category: "Core Scripting",
    description:
      "Mendukung interaktivitas antarmuka, kalkulasi estimasi biaya, dan navigasi dinamis.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
      >
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
        <path
          d="M11.2 11.5V16.4C11.2 17.5 10.5 18.1 9.5 18.1C8.7 18.1 8.1 17.7 7.8 17.1M17.8 12.5C17.4 11.9 16.7 11.5 15.9 11.5C14.8 11.5 14.1 12.1 14.1 12.9C14.1 13.7 14.8 14.1 16 14.5C17.2 14.9 18 15.4 18 16.5C18 17.6 17 18.2 15.7 18.2C14.6 18.2 13.9 17.8 13.4 17"
          stroke="#040811"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "HTML5",
    category: "Semantic Markup",
    description:
      "Struktur dokumen web semantik yang mendukung keterbacaan konten dan aksesibilitas.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
      >
        <path
          d="M4 3H20L18.5 19.2L12 21L5.5 19.2L4 3Z"
          fill="#E34F26"
        />
        <path
          d="M16.4 7.5H7.6L8 11.8H15.8L15.3 16.2L12 17.1L8.7 16.2L8.5 14.2"
          stroke="#FFFFFF"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "CSS3",
    category: "Styling & Tokens",
    description:
      "Implementasi variabel warna identitas EksploTrip serta tata letak responsif.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
      >
        <path
          d="M4 3H20L18.5 19.2L12 21L5.5 19.2L4 3Z"
          fill="#1572B6"
        />
        <path
          d="M7.6 7.5H16.4L16 11.6H9L9.3 15.8L12 16.6L14.7 15.8L15 12.2"
          stroke="#FFFFFF"
          strokeWidth="1.65"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Supabase",
    category: "Cloud Database",
    description:
      "Penyimpanan basis data destinasi terpusat dengan proteksi Row Level Security.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
      >
        <path
          d="M13.4 20.6C12.9 21.3 11.8 20.9 11.8 20V13H19.1C19.9 13 20.4 13.9 19.9 14.6L13.4 20.6Z"
          fill="#3ECF8E"
        />
        <path
          d="M10.6 3.4C11.1 2.7 12.2 3.1 12.2 4V11H4.9C4.1 11 3.6 10.1 4.1 9.4L10.6 3.4Z"
          fill="#249361"
        />
      </svg>
    ),
  },
  {
    name: "Figma",
    category: "UI/UX Design",
    description:
      "Perancangan wireframe, sistem desain warna, tipografi, dan prototipe antarmuka.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-7 w-7"
        fill="none"
      >
        <path
          d="M9 3H12V9H9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3Z"
          fill="#F24E1E"
        />
        <path
          d="M12 3H15C16.66 3 18 4.34 18 6C18 7.66 16.66 9 15 9H12V3Z"
          fill="#FF7262"
        />
        <path
          d="M12 12C12 10.34 13.34 9 15 9C16.66 9 18 10.34 18 12C18 13.66 16.66 15 15 15C13.34 15 12 13.66 12 12Z"
          fill="#1ABCFE"
        />
        <path
          d="M9 9H12V15H9C7.34 15 6 13.66 6 12C6 10.34 7.34 9 9 9Z"
          fill="#A259FF"
        />
        <path
          d="M9 15H12V18C12 19.66 10.66 21 9 21C7.34 21 6 19.66 6 18C6 16.34 7.34 15 9 15Z"
          fill="#0ACF83"
        />
      </svg>
    ),
  },
];

export default function TechnologyStack() {
  return (
    <section
      id="teknologi"
      aria-labelledby="tech-heading"
      className="scroll-mt-20 bg-card-bg py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text-highlight sm:text-sm">
            Technology Stack
          </p>
          <h2
            id="tech-heading"
            className="mt-3 text-2xl font-bold tracking-tight text-text-main sm:text-3xl lg:text-4xl"
          >
            Technologies Behind the Project
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">
            Dibangun dengan memanfaatkan teknologi pengembangan web modern untuk
            menghasilkan platform informasi yang responsif dan mudah
            dikembangkan.
          </p>
        </div>

        {/* Authentic Tech Stack Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {TECHNOLOGIES.map((tech) => (
            <article
              key={tech.name}
              className="group flex flex-col rounded-2xl border border-black/[0.08] bg-bg-base/50 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-card-bg hover:shadow-card-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/[0.06] bg-card-bg shadow-sm">
                  {tech.icon}
                </div>
                <span className="rounded-full border border-black/[0.06] bg-card-bg px-3 py-1 text-xs font-medium text-text-muted">
                  {tech.category}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-text-main">
                {tech.name}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                {tech.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
