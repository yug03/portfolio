/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Sora'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        canvas: "#07090f",
        surface: "#0d1117",
        panel: "#111827",
        border: "#1e2535",
        cyan: {
          accent: "#00d4ff",
          muted: "#00d4ff33",
          soft: "#00d4ff18",
        },
        gold: {
          accent: "#f0a500",
          muted: "#f0a50033",
          soft: "#f0a50012",
        },
        text: {
          primary: "#f0f4ff",
          secondary: "#8b95a9",
          muted: "#4a5568",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(197,100%,64%,0.07) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(38,100%,60%,0.05) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(197,100%,64%,0.05) 0px, transparent 50%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
