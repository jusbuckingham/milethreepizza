module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A0522D", // Red for primary elements
        secondary: "#FFFFFF", // White for secondary elements
        accent: "#A0522D", // Red for accents
        outline: "#000000", // Black for outlines
      },
    },
  },
  plugins: [],
};