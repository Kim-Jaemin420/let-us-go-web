import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          background: {
            100: { value: "#ffffff" },
            200: { value: "#ABB5C3" },
            300: { value: "#2F343C" },
            400: { value: "#242931" },
            500: { value: "#13161C" },
          },
          summer: { value: "#FFF849" },
        },
      },
      keyframes: {
        leftToRightInfiniteSlide1: {
          "0%": {
            transform: "translateX(0%)",
          },
          "50%": {
            transform: "translateX(-100%)",
          },
          "50.1%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        leftToRightInfiniteSlide2: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(-200%)",
          },
        },
        rightToLeftInfiniteSlide1: {
          "0%": {
            transform: "translateX(0%)",
          },
          "49.9%": {
            transform: "translateX(100%)",
          },
          "50%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        rightToLeftInfiniteSlide2: {
          "0%": {
            transform: "translateX(-200%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
