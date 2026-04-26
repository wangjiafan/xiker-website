/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF6B35",  // Orange accent color (x.ai style)
          dark: "#E55A2B",
          light: "#FF8555",
        },
        dark: {
          DEFAULT: "#000000",  // Pure black background
          light: "#0a0a0a",   // Slightly lighter black
        },
        light: {
          DEFAULT: "#111111",  // Dark gray for cards
          gray: "#1a1a1a",     // Another dark gray
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
