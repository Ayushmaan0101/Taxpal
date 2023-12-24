// tailwind.config.js
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {
      colors: {
        custom: {
          100: "#15202B",
          200: "#1E2732",
          300: "#273340",
          400: "#0F172A",
          500: "#111827"
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
        'noto-sans-sc': ['Noto Sans SC', 'sans-serif'], 
        'lexend': ['Lexend', 'sans-serif'] 
      }
    },
    screens: {
      'tablet': { 'max': '973px' },
      'tabletmini': { 'max': '670px' },
      'mobile': { 'max': '400px' },
      'desktop': { 'min': '974px' },
      
    },
  },
  plugins: [],
};
