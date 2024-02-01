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
        gray: "rgba(0, 0, 0, 0.5)",
        white: "#fff",
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
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};