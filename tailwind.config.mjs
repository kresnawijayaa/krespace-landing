/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        base: "#FAFAFA",
        dark: "#111827",
        brand: {
          blue: "#3B82F6",
          green: "#10B981",
          yellow: "#FBBF24",
          purple: "#8B5CF6",
          orange: "#F97316",
          teal: "#14B8A6",
          lime: "#84CC16",
          warmYellow: "#FCD34D",
          vividPurple: "#A855F7",
        },
      },
      boxShadow: {
        "neo-sm": "3px 3px 0px 0px rgba(17, 24, 39, 1)",
        neo: "5px 5px 0px 0px rgba(17, 24, 39, 1)",
        "neo-lg": "8px 8px 0px 0px rgba(17, 24, 39, 1)",
      },
    },
  },
  plugins: [],
};
