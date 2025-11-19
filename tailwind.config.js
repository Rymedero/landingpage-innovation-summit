/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        impact: ["Impact", "sans-serif"],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
      },
      scale: {
        '101': '1.01',
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f9e600",
          secondary: "#2E2E38",
          colorA: "#00276c",
          "1c1d1e": "#1c1d1e",
          
          accent: "#00276c",
          neutral: "#ff9800",
          "base-100": "#ffffff",
          info: "#340072",
          success: "#ffc122",
          warning: "#ed3419",
          error: "#ff0000",
        },
      },
    ],
  },
  plugins: [daisyui],
};

