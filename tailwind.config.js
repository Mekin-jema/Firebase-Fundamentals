/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom color using the name "customBlue"
        customBlue: "#5aafd7ff", // You can give it any name you want
      },
    },
  },
  plugins: [],
};
