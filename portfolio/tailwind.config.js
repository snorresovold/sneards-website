/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#202225',
          800: '#2f3136',
          700: '#36393f',
          600: '#4f545c',
          400: '#d4d7dc',
          300: '#e3e5e8',
          200: '#ebedef',
          100: '#f2f3f5',
        },
      },
      spacing: {
        88: '22rem',
      },
    },
  },
  plugins: [],
  animation: {
    none: 'none',
    spin: 'spin 1s linear infinite',
    ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    bounce: 'bounce 1s infinite',
    float: 'float 3s infinite',
    refloat: 'refloat 3s infinite',
  },
  keyframes: {
    spin: {
      to: { transform: 'rotate(360deg)' },
    },
    ping: {
      '75%, 100%': { transform: 'scale(2)', opacity: '0' },
    },
    pulse: {
      '50%': { opacity: '.5' },
    },
    bounce: {
      '0%, 100%': {
        transform: 'translateY(-25%)',
        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
      },
      '50%': {
        transform: 'none',
        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
      },
    },
    float: {
      '0%': {
        transform: 'translateY(0px)',
        animationTimingFunction: 'ease-in-out',
      },
      '50%': {
        transform: 'translateY(-20px)',
        animationTimingFunction: 'ease-in-out',
      },
      '100%': {
        transform: 'translateY(0px)',
        animationTimingFunction: 'ease-in-out',
      },
    },
    refloat: {
      '0%': {
        transform: 'translateY(-20px)',
        animationTimingFunction: 'ease-in-out',
      },
      '50%': {
        transform: 'translateY(0px)',
        animationTimingFunction: 'ease-in-out',
      },
      '100%': {
        transform: 'translateY(-20px)',
        animationTimingFunction: 'ease-in-out',
      },
    },
  },
}