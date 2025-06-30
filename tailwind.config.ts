import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-green': '#0E2A25',
        'brand-light-green': '#14453D',
        'brand-background': '#050C0B',
        'brand-text-light': '#F4F4F4',
        'brand-text-medium': '#A6A6A6',
      },
      fontFamily: {
        sans: ['General Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config; 