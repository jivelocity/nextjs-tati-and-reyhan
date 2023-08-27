'use client'

import {Mail} from 'lucide-react'
import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'

import background from '../../public/images/openingImage.png'
import backgroundRight from '../../public/images/openingImageLeft1.webp'
import Image from 'next/image'

const OpeningSection = () => {
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      // Membersihkan efek sebelum komponen di-unmount
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <motion.div
      initial={{y: 0}} // Posisi awal sebelum animasi dimulai (di bawah)
      animate={{y: isOpen ? 0 : '-100%'}} // Posisi akhir setelah animasi (di atas)
      transition={{duration: 0.5, ease: 'easeInOut'}} // Durasi animasi
      className="flex fixed z-30 w-full h-full overflow-hidden "
    >
      <div className="hidden xl:inline-block xl:w-2/3 ">
        <Image
          className="w-full h-full object-cover object-top"
          src={background}
          alt="Background"
        />
      </div>
      <div className="xl:w-1/2 relative w-full h-full">
        <div className="absolute w-full h-full text-white flex flex-col items-center">
          <div className="flex-grow mt-10 space-y-12">
            <div className=" flex flex-col items-center gap-2">
              <h1 className="text-2xl font-kufi">بسم الله الرحمن الرحيم</h1>
              <p className="text-xs font-montserrat">
                Dengan mengharap Ridha Allah <span className="text-xl">ﷻ</span>{' '}
                semata
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <p className="font-montserrat text-sm">Kami akan menikah</p>
              <h1 className="font-sansilk text-6xl">Tati & Reyhan</h1>
            </div>
          </div>
          <div className="mb-24">
            <button
              onClick={() => setIsOpen(false)}
              className="font-montserrat flex items-center gap-3 border-y py-2 text-sm"
            >
              <Mail size={20} />
              Buka Undangan
            </button>
          </div>
        </div>
        <Image
          priority
          className="w-full h-full object-cover object-top"
          src={backgroundRight}
          alt="Background"
        />
      </div>
    </motion.div>
  )
}

export default OpeningSection
