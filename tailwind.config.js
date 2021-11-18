module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        100: "0px 4.6px 20px 3px rgba(0, 0, 0, 0.025)",
        200: "0px 4px 30px rgba(0, 0, 0, 0.05)",
        250: "0px 0px 6px 0px rgba(38, 71, 150, 0.1)",
        300: "0px 4px 50px rgba(0, 0, 0, 0.05)",
        400: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        bluish: "0px 0px 7px rgba(48, 168, 247, 0.15)",
      },
      colors: {
        bluish: {
          DEFAULT: "#1890FF",
          50: "#FEFEFF",
          100: "#E4F2FF",
          200: "#B1DAFF",
          300: "#7EC1FF",
          400: "#4BA9FF",
          500: "#1890FF",
          600: "#0076E4",
          700: "#005CB1",
          800: "#00417E",
          900: "#00274B",
        },
        primary: {
          DEFAULT: "#012A6A",
          50: "#5396FD",
          100: "#3A86FD",
          200: "#0767FD",
          300: "#0252CF",
          400: "#013E9D",
          500: "#012A6A",
          600: "#011637",
          700: "#000205",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
};
