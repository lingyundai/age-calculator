/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        poppinsItalic: ['Poppins-Bold-Italic', 'sans-serif'],
      },
      maxHeight: {
        '128': '538px',
      },
      borderRadius: {
        'large': '100px',
        'default': '30px',
      },
      fontSize: {
        'lg': ['19px', '29px'],
      },
    },
  },
  plugins: [],
}
