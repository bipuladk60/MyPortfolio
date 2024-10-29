/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#A020F0',
        secondary: '#A020F0',
        accent: '#39FF14',
        bg: '#121212',
        cardBg: 'rgba(255, 255, 255, 0.1)',
        highlight: '#FF66B2',
        text: '#CCCCCC',
      },
      fontSize: {
        title: '4rem',
        large: '4rem',
        med: '2.5rem',
        small: '1.5rem',
        subtitle: '2rem',
        paragraph: '1rem',

      },
      spacing: {
        section: '4rem',
        'card-padding': '1.5rem',
      },
      borderRadius: {
        card: '0.75rem',
        button: '9999px',
      },
      boxShadow: {
        neon: '0 0 10px #00D4FF',
      },
    },
  },
  plugins: [],
}

