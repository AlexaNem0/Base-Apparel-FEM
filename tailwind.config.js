/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_pattern: "url('./images/bg-pattern-desktop.svg')",
      },
    },
  },
  plugins: [],
};
