import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        success: "#8ABC43",
        "bg-base": "#F4F4F4",
        "text-highlight": "#568942",
        "footer-bg": "#375E27",
        primary: "#32AAC6",
        "primary-hover": "#2B7983",
        "logo-yellow": "#F4B72E",
        "logo-orange": "#FB772A",
        "text-main": "#040811",
        "card-bg": "#FFFFFF",
        "text-muted": "#444444",
      },
      boxShadow: {
        card: "0px 0px 10px rgba(4, 8, 17, 0.25)",
        "card-soft": "0px 4px 20px rgba(4, 8, 17, 0.08)",
        button: "0px 4px 12px rgba(50, 170, 198, 0.35)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
