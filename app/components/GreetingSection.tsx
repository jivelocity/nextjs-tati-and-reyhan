'use client'

import { useEffect, useState } from "react";
import { onGotoElement } from "../../lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";


const images = [
    {
        url: '/images/GreatingBackground1.webp',
    },
    {
        url: '/images/GreatingBackground3.webp',
    },
    {
        url: '/images/GreatingBackground4.webp',
    },
    {
        url: '/images/GreatingBackground5.webp',
    },
]

const GreetingSection = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevState) => (prevState + 1) % images.length);
    }, 6500);

    return () => {
      clearInterval(interval)
    };
  }, [currentState]);


  return (
        <div className="h-screen bg-grayColor overflow-hidden">
            <div className="h-full w-full relative"> {/* wrapper*/}
            {images.map((image,index) => (
                <Image
                    key={index}
                    src={image.url}
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                    className={`absolute inset-0 bg-center bg-cover transition-all duration-[1500ms] ease-in-out ${currentState === index ? 'opacity-100' : 'opacity-0'}`}
                />
            ))}
                <div className=" z-10 absolute inset-0 text-white flex flex-col justify-center items-center">
                    <div className="bg-black/20 rounded-xl w-[90%] max-w-lg p-4 flex flex-col items-center gap-6">
                       <h1 className="font-kufi text-xl">السلام عليكم ورحمة الله وبركاته</h1>
                       <p className="text-center text-sm font-semibold font-montserrat">
                            Maha suci Allah yang telah menciptakan makhluk-Nya dengan berpasang-pasangan. Dengan memohon ridha dan rahmat Allah ta&apos;alaa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri resepsi pernikahan putra & putri kami:
                       </p>
                       <h1 className="font-sansilk text-6xl">Tati & Reyhan</h1>
                    </div>
                    <span
                        className="absolute bottom-10 w-full flex justify-center items-center animate-bounce">
                        <ChevronDown className="cursor-pointer" onClick={() => onGotoElement("details")} size={60}/>
                    </span>
                </div>
            </div>
        </div>
  )
}

export default GreetingSection;
