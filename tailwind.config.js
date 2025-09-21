/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./notes/**/*.{md,mdx}", // include your markdown vault!
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-rubik)",
          "var(--font-merriweather-sans)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        obsidian: {
          bg: "#1e1e2e",
          fg: "#cdd6f4",
          accent: "#89b4fa",
          muted: "#6c7086",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.obsidian.fg"),
            a: { color: theme("colors.obsidian.accent") },
            strong: { color: theme("colors.obsidian.accent") },
            code: { color: theme("colors.obsidian.muted") },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
