import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}","./src/components/**/*.{js,ts,jsx,tsx,mdx}","./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: { 50:'#f0f4ff',100:'#dbe4fe',200:'#bfcffc',300:'#93aef8',400:'#6486f2',500:'#4361ee',600:'#3347d9',700:'#2a3ab8',800:'#273395',900:'#1e2a6e' },
        secondary: { 50:'#fef3e2',100:'#fde2b3',200:'#fbd083',300:'#f9be53',400:'#f7b02f',500:'#f5a623',600:'#e0941a',700:'#c47e13',800:'#a8690e',900:'#7d4e09' },
        accent: { 50:'#e8f8f5',100:'#d1f2eb',200:'#a3e4d7',300:'#76d7c4',400:'#48c9b0',500:'#1abc9c',600:'#17a589',700:'#148f77',800:'#117a65',900:'#0e6251' },
        neutral: { 0:'#ffffff',50:'#fafbfc',100:'#f0f2f5',200:'#e4e7eb',300:'#d1d5db',400:'#9ca3af',500:'#6b7280',600:'#4b5563',700:'#374151',800:'#1f2937',900:'#111827' },
      },
      fontFamily: { display: ['"DM Serif Display"','Georgia','serif'], body: ['"DM Sans"','system-ui','-apple-system','sans-serif'] },
      borderRadius: { '2xl': '1rem', '3xl': '1.5rem' },
    },
  },
  plugins: [],
};
export default config;
