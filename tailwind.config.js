/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInRight: {
          '0%': {
            opacity: 0,
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        fadeOutRight: {
          '0%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateX(20px)',
          },
      },
    },
      animation: {
        fadeInRight: 'fadeInRight 0.2s ease-out',
        fadeOutRight: 'fadeOutRight 0.2s ease-out',
      },
      colors: {
        gray6: '#F2F2F2',
        blue1: "#2F80ED",
        purple1: "#8885FF",
        yellow1: " #F8B76B",
        gray3: "#333333",
        gray2: "#4F4F4F",
      },
      boxShadow: {
        light2: '0 4px 4px 0 rgba(0, 0, 0, 0.1)' // Customize the values as needed
      }
    },
  },
  plugins: [],
}
