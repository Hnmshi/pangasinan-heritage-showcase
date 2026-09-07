import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50:'#e6f4f9',100:'#b3dff0',200:'#80cae6',300:'#4db5dc',400:'#26a5d5',500:'#0077a8',600:'#006590',700:'#005278',800:'#003f5e',900:'#002c44' },
        secondary: { 50:'#fdf6ee',100:'#f8e4cc',200:'#f3d2aa',300:'#edc088',400:'#e8b370',500:'#d4944a',600:'#b87d3a',700:'#9a662e',800:'#7c5024',900:'#5e3a1a' },
        accent: { 50:'#edf7ed',100:'#c8e6c8',200:'#a3d5a3',300:'#7ec47e',400:'#5cb85c',500:'#3d8b3d',600:'#2e7a2e',700:'#256425',800:'#1c4e1c',900:'#133813' },
        neutral: { 0:'#ffffff',50:'#f8f9fa',100:'#f1f3f5',200:'#e9ecef',300:'#dee2e6',400:'#adb5bd',500:'#6c757d',600:'#495057',700:'#343a40',800:'#212529',900:'#0d1117' },
      },
      fontFamily: { display: ['"Playfair Display"','Georgia','serif'], body: ['"Inter"','system-ui','-apple-system','sans-serif'] },
    },
  },
  plugins: [],
};
export default config;
