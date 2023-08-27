import './globals.css'
import type {Metadata} from 'next'
import localFont from 'next/font/local'
import {Montserrat} from 'next/font/google'
import {Hydrate} from './components/Hydate'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const avigea = localFont({
  src: '.././public/fonts/Avigea.woff2',
  variable: '--font-avigea',
})

const sansilk = localFont({
  src: '.././public/fonts/Sansilk.woff2',
  variable: '--font-sansilk',
})

const kufi = localFont({
  src: '.././public/fonts/Kufi.woff2',
  variable: '--font-kufi',
})

export const metadata: Metadata = {
  title: 'Tati & Reyhan',
  description:
    'Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/I berkenan untuk memberikan doa restu kepada kedua mempelai.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${avigea.variable} ${sansilk.variable} ${kufi.variable}`}
      >
        <Hydrate>{children}</Hydrate>
      </body>
    </html>
  )
}
