/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Assistant: ['Assistant', 'sans-serif'],
      },
      colors: {
        blue: {
          900: '#004f71',
        },
        gray: {
          100: '#F9FAFB',
          600: '#81849c',
        },
        yellow: {
          500: '#ffcb05',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
