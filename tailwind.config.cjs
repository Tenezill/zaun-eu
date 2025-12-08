module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        concrete: {
          light: '#F5F6F8',   // Light mode background
          mid: '#D4D7DC',     // Light mode border
          dark: '#42474F',    // Light mode text
          deep: '#23262B',    // Dark mode card background
        },
        brand: {
          dark: '#0B1015',    // Full dark background
          primary: '#1F3A56', // Blue-ish accent
          accent: '#F28C38',  // Orange accent
          muted: '#E5E5E5',
          success: '#2F6F3E',
        },
        accent: {
          green: '#3A7F4B',
          orange: '#E98B3A',
        }
      }
    }
  },
  plugins: [],
}
