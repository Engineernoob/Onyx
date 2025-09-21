/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./notes/**/*.{md,mdx}", // include vault
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          bg: "#1e1e2e",
          fg: "#cdd6f4",
          accent: "#89b4fa",
          muted: "#6c7086",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-rubik)",
          "var(--font-merriweather-sans)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
