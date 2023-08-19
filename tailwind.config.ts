import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'sansilk': ['var(--font-sansilk)', 'sans-serif'],
        'avigea' : ['var(--font-avigea)', 'sans-serif'],
        'kufi' : ['var(--font-kufi)', 'sans-serif'],
      },
      colors:{
        'creamColor': '#f5f1db',
        'grayColor': '#5e6661'
      }
    },
  },
  plugins: [],
}
export default config
