/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#3ebf7f",
        primary: "#66d79f",
      },
      fontFamily: {
        Inter: ['"Inter"'],
      },
    },
  },
  plugins: [],
};
