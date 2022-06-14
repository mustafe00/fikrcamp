module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      primary: "#007aff",
      secondary: "#f8b336",
      background: "#d8eaff", //c4e0ff
      sBackground: "#fff2d5",
      lightPrimary: "#e5f1ff",
      lightGray: "#f0f0f0",
      // secondary: "#e7f2ff",
      gold: "#f8b335",
      white: "#ffffff",
      gray: "#7b8595",
      black: "#000000",
    },
    fontFamily: {
      // sans: ["Montserrat", "sans-serif"],
      // pans: ["Source Sans Pro", " sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
