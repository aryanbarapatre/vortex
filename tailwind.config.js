/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx,mdx}',
    './components/**/*.{html,js,ts,jsx,tsx,mdx}',
    './app/**/*.{html,js,ts,jsx,tsx,mdx}',
    './hero/**/*.{html,js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      anton: ['Anton'],
      poppins: ['Poppins'],
      roboto: ['Roboto'],
      barlow: ['Barlow'],
      vina: ['Vina-Sans'],
      jockey: ['Jockey One'],
      wide: ['Audiowide'],
      mont: ['Montserrat']
    },
    extend: {
      colors: {
        'greeny': '#00FF93',
        'blacky': '#222'
      }
    },
  },
  plugins: [],
}