module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#B8A8ED",
        dark: "#3E3884",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
