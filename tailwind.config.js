/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-lato)"],
      },
      keyframes: {
        fadeInRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(20px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        fadeOutRight: {
          "0%": {
            opacity: 1,
            transform: "translateX(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateX(20px)",
          },
        },
      },
      animation: {
        fadeInRight: "fadeInRight 0.2s ease-out",
        fadeOutRight: "fadeOutRight 0.2s ease-out",
      },
      colors: {
        gray6: "#F2F2F2",
        blue1: "#2F80ED",
        blue2: "#E9F3FF",
        purple1: "#8885FF",
        purple2: "#9B51E0",
        purple3: "#EEDCFF",
        pink1: "#F9E0FD",
        yellow1: "#F8B76B",
        yellow2: "#FCEED3",
        yellow3: "#E5A443",
        gray4: "#BDBDBD",
        gray3: "#333333",
        gray2: "#4F4F4F",
        gray1: "#828282",
        red1: "#EB5757",
      },
      boxShadow: {
        light2: "0 4px 4px 0 rgba(0, 0, 0, 0.1)", // Customize the values as needed
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar"), require("@tailwindcss/forms")],
  variants: {
    extend: { scrollbar: ["rounded"] },
  },
};
