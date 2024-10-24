// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B00020", // Bold red color
        secondary: "#FFFFFF", // White for contrast
        accent: "#EDEAE0", // Light beige for accent, similar to the uploaded image
      },
    },
  },
  plugins: [],
};
