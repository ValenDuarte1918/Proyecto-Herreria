/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gainsboro: "#d7dacf",
        white: "#fff",
        gray: "rgba(0, 0, 0, 0.5)",
        darkslategray: {
          "100": "#3b3b3b",
          "200": "#203b1b",
        },
        midnightblue: "#0c2075",
      },
      spacing: {},
      fontFamily: {
        "segoe-ui": "'Segoe UI'",
        roboto: "Roboto",
      },
    },
    fontSize: {
      xl: "20px",
      "37xl": "56px",
      base: "16px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      'sm': '640px',
      'md': '947px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  corePlugins: {
    preflight: false,
  },
};