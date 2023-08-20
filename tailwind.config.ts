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
      },
      keyframes:{
        'imageAnimationFrame': {
            '0%': { backgroundImage: 'url(/images/GreatingBackground1.webp)' },
            '20%': { backgroundImage: "url(/images/GreatingBackground2.webp)" },
            '40%': { backgroundImage: "url(/images/GreatingBackground3.webp)" },
            '60%': { backgroundImage: "url(/images/GreatingBackground4.webp)" },
            '80%': { backgroundImage: "url(/images/GreatingBackground5.webp)" },
            '100%': { backgroundImage: "url(/images/GreatingBackground1.webp)" },
        }
      },
      animation:{
        'imageAnimation': 'imageAnimationFrame 25s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
export default config
