/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mac: "1440px",
        pro: "912px",
      },
    },
  },
  plugins: [],
};
