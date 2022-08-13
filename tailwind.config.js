module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        lightCyan: "hsl(193, 38%, 86%)",
        neonGreen: "#52ffa8",
        grayishBlue: "#4e5d73",
        veryDarkgrayishBlue: "#323a49",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: () => ({
        dots: "url('../images/bg-dots.svg')",
      }),
    },
  },
  plugins: [],
};
