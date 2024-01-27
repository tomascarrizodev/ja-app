/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontWeight: {
      'light': 200,
      'regular': 400,
      'medium': 500,
      'semi': 600,
      'bold': 800,
      'black': 900 
    },
    fontSize: {
      'info': '12px',
      'info-lg': '14px',
      'body': '14px',
      'body-lg': '16px',
      'subhead': '18px',
      'subhead-lg': '30px',
      'head': '21px',
      'head-lg': '36px'
    },
    colors: {
      'ja-dark': '#00141B',
      'ja-green': '#06D6A0',
      'ja-blue': '#118AB2',
      'ja-light': '#FFF3DE',
      'ja-gold': '#FFD166',
      'ja-magenta': '#EF476F',
      'ja-blue-white': '#FAFFFE',
      'ja-blue-dark': '#073B4C'
    },
    extend: {
      colors: {
        'ja-dark': '#00141B',
        'ja-green': '#06D6A0',
        'js-blue': '#118AB2',
        'ja-light': '#FFF3DE',
        'ja-gold': '#FFD166',
        'ja-magenta': '#EF476F',
        'ja-blue-white': '#FAFFFE'
      }
    },
  },
  plugins: [],
}

