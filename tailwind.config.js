/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        main: "1400px"
      },

      colors: {
        bg: {
          body: "#ccc1be",
          main: "#fbf7f4"
        },
        dark: "#1d1d1d",
        semilight: "#a4bdc7"
      },

      fontFamily: {
        main: ["Poppins", "system-ui", "sans-serif"],
      }
    },
  },
  plugins: [],
}
