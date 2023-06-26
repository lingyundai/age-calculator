/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      maxHeight: {
        '128': '538px',
      },
      borderRadius: {
        'large': '100px',
        'default': '30px',
      },
    },
  },
  plugins: [],
}
