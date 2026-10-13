import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          black: "#090909",
          card: "#111111",
          cardSoft: "#151515",
          border: "rgba(255,255,255,.08)",
          muted: "#9ca3af",
        },
        primary: {
          red: "#ef4444",
          dark: "#dc2626",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        redGlow: "0 18px 70px rgba(239, 68, 68, 0.2)",
        redCard: "0 28px 90px rgba(220, 38, 38, 0.18)",
        luxury: "0 24px 80px rgba(0, 0, 0, 0.45)",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.04)" },
        },
        floatSoft: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
        floatSoft: "floatSoft 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
