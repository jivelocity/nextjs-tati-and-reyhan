'use client'

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { onGotoElement } from "../../lib/utils";
import { ChevronDown } from "lucide-react";

const images = [
    {
        url:'/images/GreatingBackground1.webp',
        alt:'GreatingBackground1'
    },
    {
        url:'/images/GreatingBackground2.webp',
        alt:'GreatingBackground2'
    },
    {
        url:'/images/GreatingBackground3.webp',
        alt:'GreatingBackground3'
    },
    {
        url:'/images/GreatingBackground4.webp',
        alt:'GreatingBackground4'
    },
]

const GreetingSection = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentState((prevState) => (prevState + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval)
    };
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${images[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100%',
  }
  const bounceAnimation = {
    animate: {
        y: ["0%", "-10%"], // Adjust these values if you want more or less bounce
        transition: {
        y: {
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
        }
        }
    },
    hover: {
        y: "0%",
        transition: {
        duration: 0.3
        }
    }
  }
  return (

        <div className="h-screen bg-green-900 overflow-hidden">
            <div className="h-full w-full relative"> {/* wrapper*/}
            {/* <AnimatePresence initial={false}>
                <motion.div
                    key={currentState}
                    initial={{ opacity: 0.5, x: "100%" }}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0.5, x: "-100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    style={bgImageStyle}
                    className="absolute inset-0"
                ></motion.div>
            </AnimatePresence> */}
             <div className="bgChangeImage absolute inset-0 bg-center bg-cover h-full"></div>
                <div className=" z-10 absolute inset-0 text-white flex flex-col justify-center items-center">
                    <div className="bg-black/20 rounded-xl w-[90%] max-w-lg p-4 flex flex-col items-center gap-6">
                       <h1 className="font-kufi text-xl">السلام عليكم ورحمة الله وبركاته</h1>
                       <p className="text-center text-sm font-semibold font-montserrat">
                            Maha suci Allah yang telah menciptakan makhluk-Nya dengan berpasang-pasangan. Dengan memohon ridha dan rahmat Allah ta&apos;alaa, kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri resepsi pernikahan putra & putri kami:
                       </p>
                       <h1 className="font-sansilk text-6xl">Tati & Reyhan</h1>
                    </div>
                    <motion.span
                        variants={bounceAnimation}
                        initial="animate"
                        animate="animate"
                        whileHover="hover"
                        className="cursor-pointer absolute bottom-10 w-full flex justify-center items-center "

                        onClick={() => onGotoElement("details")}
                    >
                        <ChevronDown size={60}/>
                    </motion.span>
                </div>
            </div>
        </div>
  )
}

export default GreetingSection;
