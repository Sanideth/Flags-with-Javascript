module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.6)), url('../img/hero.jpg')",
      },
    },
    fontFamily: {
      main: ["Nunito Sans", "sans-serif"],
    },
  },
  plugins: [],
};
