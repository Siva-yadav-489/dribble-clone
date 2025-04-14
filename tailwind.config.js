/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "matter-light": ["MatterLight", "sans-serif"],
        "matter-regular": ["MatterRegular", "sans-serif"],
        "matter-medium": ["MatterMedium", "sans-serif"],
        "matter-semibold": ["MatterSemibold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
