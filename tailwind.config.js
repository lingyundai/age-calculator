/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppinsBoldItalic: ['Poppins-Bold-Italic', 'sans-serif'],
        poppinsItalic: ['Poppins-Italic', 'sans-serif'],
      },
      maxHeight: {
        '128': '538px',
      },
      borderRadius: {
        'large': '170px',
        'default': '20px',
      },
      fontSize: {
        'lg': ['19px', '29px'],
      },
    },
  },
  plugins: [],
}
