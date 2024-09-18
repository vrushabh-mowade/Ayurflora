
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

backgroundImage: {
  'flower': "url('https://www.jekkas.com/cdn/shop/collections/Chelsea-3_1944x.jpg?v=1546366982')",
  'footer-texture': "url('/img/footer-texture.png')",
}
    },
  },
  plugins: [],
}

