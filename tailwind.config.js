/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          blue950: "hsl(213, 96%, 18%)",
          purple600: "hsl(243, 100%, 62%)",
          blue300: "hsl(228, 100%, 84%)",
          blue200: "hsl(206, 94%, 87%)",
          red500: "hsl(354, 84%, 57%)",
        },
        neutral: {
          grey500: "hsl(231, 11%, 63%)",
          purple200: "hsl(229, 24%, 87%)",
          blue100: "hsl(218, 100%, 97%)",
          blue50: "hsl(231, 100%, 99%)",
          white: "hsl(0, 100%, 100%)",
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
