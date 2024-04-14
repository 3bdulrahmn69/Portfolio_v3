/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cBlack: '#282C35',
        'cBlack-dark': '#1E2028',
        cBlue: '#7C89BD',
        'cBlue-dark': '#6D7FA5',
      },
      fontFamily: {
        barlow: ['Barlow'],
      },
      animation: {
        FadeIn: 'cFadeIn 0.5s linear',
        FadeInRev: 'cFadeInRev 0.5s linear',
        slideUp: 'cSlideUp 0.5s linear',
        slideDown: 'cSlideDown 0.5s linear',
        handCheck: 'cHandCheck 1s linear infinite',
      },
      keyframes: {
        cFadeIn: {
          '0%, 25%': { transform: 'translateX(-20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        cFadeInRev: {
          '0%, 25%': { transform: 'translateX(20px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        cSlideUp: {
          '0%, 25%': { transform: 'translateY(50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        cSlideDown: {
          '0%, 25%': { transform: 'translateY(-50px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        cHandCheck: {
          '0%, 100% ': { transform: 'rotate(35deg) translateY(-50%);' },
          '50% ': { transform: 'rotate(0deg) translateY(-40%)' },
        },
      },
    },
  },
  plugins: [],
};
