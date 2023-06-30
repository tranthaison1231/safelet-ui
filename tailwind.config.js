/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#EC6453',
        secondary: '#E6E6E6',
        error: '#FF0000',
        white: '#FFFFFF'
      }
    }
  },
  plugins: []
}
