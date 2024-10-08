/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "800px",
      laptop: "1800px",
      desktop: "2500px",
    },
    extend: {},
  },
  plugins: [],
}

