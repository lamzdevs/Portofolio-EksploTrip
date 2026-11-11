import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EksploTrip - Project Showcase & Case Study | Wisata Alam Bogor",
  description:
    "Portfolio showcase dan studi kasus pengembangan EksploTrip, platform direktori informasi wisata alam Bogor yang terstruktur, aman, dan transparan.",
  keywords: [
    "EksploTrip",
    "Portfolio",
    "Project Showcase",
    "Case Study",
    "Wisata Alam Bogor",
    "Next.js",
    "UI/UX Design",
  ],
  openGraph: {
    title: "EksploTrip - Project Showcase & Case Study",
    description:
      "Menjelajahi Keindahan Alam Bogor Melalui Informasi Wisata yang Lebih Aman dan Transparan.",
    url: "https://eksplotrip.vercel.app/",
    siteName: "EksploTrip Portfolio Showcase",
    locale: "id_ID",
    type: "website",
  },
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={poppins.variable}>
      <body className="min-h-screen bg-bg-base font-sans text-text-main antialiased selection:bg-primary/20 selection:text-text-main">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-text-main focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Lewati ke konten utama
        </a>
        {children}
      </body>
    </html>
  );
}
