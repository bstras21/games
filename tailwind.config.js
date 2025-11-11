/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          magenta: '#ff00ff',
          cyan: '#00ffff',
          'magenta-dark': '#cc00cc',
          'cyan-dark': '#00cccc',
        }
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { 
            textShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff',
            boxShadow: '0 0 10px #ff00ff, 0 0 20px #ff00ff',
          },
          '100%': { 
            textShadow: '0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff',
            boxShadow: '0 0 20px #00ffff, 0 0 30px #00ffff',
          },
        },
      },
    },
  },
  plugins: [],
}

