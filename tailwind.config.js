/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: {
        DEFAULT: '#1ABC9C',
        dark: '#12836D',
        neon: '#249C8D',
      },
      black: '#404040',
      grey: {
        light: '#E5E6E0',
        DEFAULT: '#727272',
      },
    },
    fontFamily: {
      title: ['Saira', 'sans-serif'],
      DEFAULT: ['Kanit', 'sans-serif'],
    },
    boxShadow: {
      DEFAULT: '0px 2px 4px 0px rgba(18, 131, 109, 0.15)',
    },
    extend: {
      borderRadius: {
        small: '2rem',
      },
    },
  },
}
