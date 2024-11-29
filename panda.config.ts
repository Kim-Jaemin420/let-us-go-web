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
        fonts: {
          intel: { value: ["intelone-mono-font-family-regular", "sans-serif"] },
        },
        colors: {
          primary: {
            100: { value: "#BCC6FF" },
            200: { value: "#2F50FF" },
            300: { value: "#1937E1" },
            400: { value: "#0B27BF" },
          },
          secondary: { value: "#ADFE00" },
          neutral: {
            100: { value: "#F7FAFC" },
            200: { value: "#EDF1F6" },
            300: { value: "#CCD5E0" },
            400: { value: "#A1ADC0" },
            500: { value: "#727F96" },
            600: { value: "#1B202C" },
            700: { value: "#212A39" },
          },
          white: { value: "#fff" },
          orange: { value: "#FD7A01" },
          pink: { value: "#F492FC" },
          purple: { value: "#8F00FF" },
          blue: { value: "#00C2FF" },
          yellow: { value: "#FFE500" },
        },
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": { transform: "translateY(0)" },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
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
