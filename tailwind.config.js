/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      primary: {
        DEFAULT: '#1ABC9C',
        dark: '#12836D',
        neon: '#249C8D',
        select: 'rgba(26, 188, 156, 0.2)'
      },
      black: '#010907',
      grey: {
        light: '#E5E6E0',
        DEFAULT: '#727272',
        dark: '#303030'
      },
      yellow: '#FFAA00',
      white: '#FBFEFE',
      transparent: 'transparent',
      current: 'currentColor'
    },
    fontFamily: {
      title: ['Saira', 'sans-serif'],
      sans: ['Kanit', 'sans-serif']
    },
    boxShadow: {
      DEFAULT: '0px 2px 4px 0px rgba(18, 131, 109, 0.15)'
    },
    fontSize: {
      h1: '1.75rem',
      p: '1rem',
      md: '0.875rem',
      sm: '0.75rem'
    },
    extend: {
      borderRadius: {
        small: '2rem'
      }
    }
  }
}
