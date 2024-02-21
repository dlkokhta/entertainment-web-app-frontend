/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        red: "#FC4747",
        darckBlue: "#10141E",
        grey: "#5A698F",
        semyDarck: "#161D2F",
        white: "#FFFFFF",
      },

      // backgroundImage: {
      //   destinationMobile: "url('./assets/destination/background-destination-mobile.jpg')",
      //   destinationTablet: "url('./assets/destination/background-destination-tablet.jpg')",

      // },
    },

    fontFamily: {
      outfit: ["Outfit", "sans-serif"],
    },

    // fontSize: {
    //   "3.2xl": "32px",
    // },
    screens: {
      sm: "378px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1440px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
};
