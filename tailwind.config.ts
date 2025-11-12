import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Remap existing tokens to a completely different palette for a fresh look
        sand: {
          50: "#f8fafc", // light slate-50
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
        },
        ink: {
          50: "#f6f7f9",
          100: "#e9eef5",
          200: "#c9d4e7",
          300: "#9bb4d6",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1f2937",
          800: "#0f172a",
          900: "#0b1220",
        },
        rust: {
          DEFAULT: "#6366f1", // indigo-500 as the new accent
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        moss: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          300: "#6ee7b7",
          400: "#34d399",
          500: "#10b981",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
        },
        dusk: {
          DEFAULT: "#f43f5e", // rose-500
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter Tight", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "EB Garamond", "serif"],
      },
      backgroundImage: {
        "paper-fiber":
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.04) 1px, transparent 0)",
        "soft-gradient":
          "linear-gradient(135deg, rgba(244, 236, 222, 0.95) 0%, rgba(255, 251, 246, 0.9) 50%, rgba(237, 229, 216, 0.95) 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.75rem",
      },
      boxShadow: {
        soft: "0 20px 45px rgba(31, 41, 55, 0.08)",
        "soft-lg": "0 30px 60px rgba(15, 23, 42, 0.12)",
        bordered:
          "0 0 0 1px rgba(60, 52, 40, 0.08), 0 25px 60px rgba(15, 23, 42, 0.08)",
      },
      spacing: {
        18: "4.5rem",
        28: "7rem",
      },
      letterSpacing: {
        widest: ".32em",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "float-slow": "floatSlow 12s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
