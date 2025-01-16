/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7F56D9",
        customPurple: "#42307D", // Add your custom color
        primarySecond: {
          400: "#B3E5FC", // Light
          600: "#03A9F4", // Medium
          900: "#01579B", // Dark
        },
      },
    },
  },
  plugins: [],
};
