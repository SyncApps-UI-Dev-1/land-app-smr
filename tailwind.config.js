/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7F56D9",
        customPurple: "#42307D", // Add your custom color
      },
    },
  },
  plugins: [],
};
