/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        danger: 'var(--danger)',
        light: 'var(--light)',
        dark: 'var(--dark)',
        gray: 'var(--gray)',
        'light-gray': 'var(--light-gray)',
        'dark-gray': 'var(--dark-gray)',
        'code-bg': 'var(--code-bg)',
        'card-bg': 'var(--card-bg)',
        'card-border': 'var(--card-border)',
        correct: 'var(--correct)',
        incorrect: 'var(--incorrect)',
      },
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
      boxShadow: {
        DEFAULT: 'var(--shadow)',
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease forwards',
        'pulse': 'pulse 2s infinite',
        'slideIn': 'slideIn 0.3s ease forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        slideIn: {
          from: { transform: 'translateX(-20px)', opacity: 0 },
          to: { transform: 'translateX(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
}