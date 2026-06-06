/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gaming: {
          black: "#0a0a0f",
          dark: "#12121a",
          darker: "#0d0d14",
          card: "#1a1a24",
          border: "#2a2a3a",
          neonGreen: "#00ff88",
          neonBlue: "#00d4ff",
          neonOrange: "#ff6b35",
          neonPurple: "#a855f7",
          neonRed: "#ff3366",
          text: "#e4e4e7",
          muted: "#71717a",
        },
      },
      fontFamily: {
        gaming: ["system-ui", "sans-serif"],
        heading: ["system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
}

