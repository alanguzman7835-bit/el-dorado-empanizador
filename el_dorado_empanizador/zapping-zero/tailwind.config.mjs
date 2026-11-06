/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts}'],
  theme: {
    extend: {
      colors: { hueso: '#FAF8F5', carbon: '#1C1A17', piedra: '#6F6A62', linea: '#E4DED4', dorado: '#B07D1F' },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
};
