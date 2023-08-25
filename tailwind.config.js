/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '750px',
      lg: '900px',
      xl: '1100px',
    },
    colors: {
      white: '#fff',
      black: '#0C0909',
      violet: '#7C1BFC'
    },
    extend: {},
  },
  plugins: [],
}

