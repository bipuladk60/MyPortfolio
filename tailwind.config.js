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
        stroke: '#e0e0e0',
        secondary: '#00000',
        accent: '#F8F8FF',
        bg: '#0B1215',
        cardBg: 'rgba(255, 255, 255, 0.1)',
        highlight: '#FF66B2',
        text: '#F8F8FF',
        active: '#CCCCCC',
        inactive: 'gray-600'
      },
      fontSize: {
        title: '4rem',
        title_sm: '6xl',
        large: '4rem',
        med: '2.5rem',
        small: '1.5rem',
        subtitle: '2rem',
        sibtitle_sm: '1rem',
        paragraph: '0.75rem',
        paragraph_sm: '0.5rem',
        icon: '8xl',

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
      animation: {
        grid: "grid 15s linear infinite",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
}

