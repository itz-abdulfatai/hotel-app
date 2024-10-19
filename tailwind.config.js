/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#000000',
          accent1: '#696969',
          accent2: '#d9d9d9',
          accent3: '#4d5839',


        },
        dark: {
          primary: '#000000',
          secondary: '#ffffff',
          accent1: '#696969',
          accent2: '#d9d9d9',
          accent3: '#4d5839',
        }
      },
      fontFamily: {
        krona: ['Krona One', 'sans-serif'],     // Krona One
        montserrat: ['Montserrat', 'sans-serif'], // Montserrat
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-primary': {
          backgroundColor: 'var(--primary-color)',
        },
        '.bg-secondary': {
          backgroundColor: 'var(--secondary-color)',
        },
        '.bg-accent1': {
          backgroundColor: 'var(--accent1-color)',
        },
        '.bg-accent2': {
          backgroundColor: 'var(--accent2-color)',
        },
        '.bg-accent3': {
          backgroundColor: 'var(--accent3-color)',
        },
        '.text-primary': {
          color: 'var(--primary-color)',
        },
        '.text-secondary': {
          color: 'var(--secondary-color)',
        },
        '.text-accent1': {
          color: 'var(--accent1-color)',
        },
        '.text-accent2': {
          color: 'var(--accent2-color)',
        },
        '.text-accent3': {
          color: 'var(--accent3-color)',
        },
        'border-primary': {
          
        }
        
        

        
      });
    },
  ],
}