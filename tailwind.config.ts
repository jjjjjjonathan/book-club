/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';
export default {
  content: [
    './renderer/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
