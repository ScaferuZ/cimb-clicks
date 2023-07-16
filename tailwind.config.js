/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lato: ["Lato", "sans-serif"],
      },
      colors: {
        "cimb-black": "#252525",
        "cimb-red": "#C4291C",
        "cimb-grey": "#A5A1A1",
      },
      width: {
        mobile: "428px",
      },
      height: {
        mobile: "926px",
      },
    },
  },
  plugins: [],
};
