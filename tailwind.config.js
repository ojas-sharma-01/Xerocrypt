/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
        cus2: ['Cyber', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
