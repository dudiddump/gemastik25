/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}', // kalau kamu pakai App Router
    ],
    darkMode: 'class', // bisa juga 'media' tapi 'class' lebih fleksibel
    theme: {
      extend: {
        colors: {
          primary: '#6366f1', // kamu bisa ganti sesuai branding
        },
      },
    },
    plugins: [],
  }
  