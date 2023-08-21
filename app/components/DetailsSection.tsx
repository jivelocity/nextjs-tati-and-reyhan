'use client'

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

import muslimah from "../../public/images/muslimah.png";
import muslim from "../../public/images/muslim.png";
import separator from "../../public/images/separator.png";

import leaf1 from "../../public/images/leaf1.png";
import leaf2 from "../../public/images/leaf2.png";
import leaf3 from "../../public/images/leaf3.png";
import Reveal from "./Reveal";
import Counter from "./Counter";
import Image from "next/image";


const DetailsSection = () => {

  return (
    <div  className="relative bg-grayColor px-4 overflow-hidden">
        <div className="absolute inset-0 w-full h-4 bg-gradient-to-b from-[#4c524e] to-transparent"></div>
        <div className="flex w-full justify-center">
            <Reveal>
                <p className="text-white max-w-md text-center my-8 font-montserrat font-semibold text-sm">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami,
                    apabila Bapak/Ibu/Saudara/I berkenan untuk memberikan doa restu
                    kepada kedua mempelai.
                </p>
            </Reveal>
        </div>
        <div className="bg-creamColor relative h-full w-full rounded-[36px] bg-repeat">
            <div className="absolute w-full h-full mix-blend-multiply bg-center bg-repeat rounded-[36px]" style={{backgroundImage:'url(/images/texture.png)'}}/>
            <div className="w-full min-h-fit flex flex-col items-center mb-4">
                <div className="flex flex-col md:flex-row gap-8 md:gap-0 w-full justify-evenly items-center text-grayColor mt-16 px-2 z-20">
                    <div className="flex flex-col justify-center items-center">
                        <Reveal delay={1.2}><Image src={muslimah} alt="muslimah" /></Reveal>
                        <Reveal delay={1.2}>
                            <h1 className="font-avigea text-xl text-center mt-3">Tri Nurhartati</h1>
                        </Reveal>
                        <Reveal delay={1.2} direction="x"><Image src={separator} alt="line" /></Reveal>
                        <Reveal delay={1.2}>
                            <p className="font-montserrat text-xs  text-center font-semibold">
                                Putri ketiga dari <br/>
                                Bapak M. Harmadi <span className="font-kufi">رَحِمَهُ اللهُ</span> & Ibu Penih
                            </p>
                        </Reveal>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Reveal delay={1.3}><Image src={muslim} alt="muslimah" /></Reveal>
                        <Reveal delay={1.3}>
                            <h1 className="font-avigea text-xl text-center mt-3">Daris Reyhan Muhammad</h1>
                        </Reveal>
                        <Reveal delay={1.3} direction="x"><Image src={separator} alt="line" /></Reveal>
                        <Reveal delay={1.3}>
                            <p className="font-montserrat text-xs  text-center font-semibold">
                                Putra kedua dari <br/>
                                Bapak Dedi Supriadi & N. Enung Nuriah
                            </p>
                        </Reveal>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center text-grayColor mt-12 px-2 z-20">

                        <Reveal>
                            <p className="font-montserrat text-center text-sm mt-12 max-w-md font-semibold">
                            Dengan memohon Ridho Rahmat Allah <span className="text-xl font-normal">ﷻ</span>, kami bermaksud
                            menyelenggarakan acara pernikahan kami.
                            </p>
                        </Reveal>
                        <Reveal><p className="font-montserrat text-center text-sm mt-4 max-w-md font-semibold">Yang insyaallah akan diselenggarakan pada</p></Reveal>

                            <Reveal>
                                <div className="grid grid-flow-row-dense grid-cols-1 mt-4">
                                    <div className=" text-center font-montserrat font-semibold text-xl py-2">Sabtu</div>
                                    <div className=" text-center font-avigea border-y-2 border-grayColor text-6xl pt-4">
                                        <Counter from={99} to={9} />
                                    </div>
                                    <div className=" text-center font-montserrat font-semibold text-xl py-2">September 2023</div>
                                </div>
                            </Reveal>


                        <div className="flex w-full items-center justify-center gap-4 md:gap-8 my-2">
                            <div className="flex flex-col justify-center items-center">
                                <Reveal>
                                    <p className="text-center font-montserrat font-bold">Akad Nikah</p>
                                    <p className="text-center font-montserrat text-sm font-semibold">Pukul: 09.00 WIB - Selesai</p>
                                </Reveal>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <Reveal>
                                    <p className="text-center font-montserrat font-bold">Resepsi</p>
                                    <p className="text-center font-montserrat text-sm font-semibold">Pukul: 09.00 WIB - 19.00 WIB</p>
                                </Reveal>
                            </div>
                        </div>

                        <Reveal>
                            <p className="text-center leading-relaxed font-montserrat text-sm pt-2 font-semibold">
                                Bertempat di:  <br />
                                Kp. Cironggeng Barat RT001/RW008, <br />
                                Desa Wanajaya, Kecamatan Cibitung, Kabupaten Bekasi <br />
                                Provinsi Jawa Barat, 17520
                            </p>
                        </Reveal>

                        <Reveal>
                            <a href="https://www.google.com/maps/place/6%C2%B015'30.6%22S+107%C2%B005'43.8%22E/@-6.2585034,107.0929222,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-6.2585034!4d107.0954971?hl=en&entry=ttu" target="_blank">
                                <button className="flex px-2 py-1 gap-1 text-sm items-center bg-grayColor text-creamColor rounded-xl my-8 font-semibold">
                                    <MapPin size={20}/>
                                    Open Map
                                </button>
                            </a>
                        </Reveal>

                        <Reveal><p className="font-montserrat text-grayColor text-center text-sm max-w-xs font-semibold">Atas kehadiran dan doa kami ucapkan Jazakumullahu khaira.</p></Reveal>
                </div>
                <div className="mt-14 md:mt-28 w-full h-20 bg-[url('/images/footer.png')] bg-cover bg-center bg-opacity-75 rounded-b-[36px]">
                    <h1 className="w-full h-full flex justify-center items-center font-sansilk text-4xl text-grayColor">
                        <Reveal>
                            Tati & Reyhan
                        </Reveal>
                    </h1>
                </div>
            </div>
        </div>
        <motion.div
            className="absolute z-10 -left-7 top-28 origin-top-left"
            animate={{
                rotate: [0, -5],
                y: [0,-5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                ease:"easeInOut"
              }}
        >
            <Image src={leaf1} alt="Daun" />
        </motion.div>
        <motion.div
            className="absolute z-10 -right-[4rem] top-[27rem] origin-top-right "
            animate={{
                rotate: [0, -8],
                y: [0,-5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.5,
                ease:"easeInOut"
              }}
        >
            <Image src={leaf2} alt="Daun" />
        </motion.div>
        <motion.div
            className="absolute z-20 -left-5 top-[39.5rem] origin-top-left"
            animate={{
                rotate: [0, -5],
                y: [0,-5],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.7,
                ease:"easeInOut"
              }}
        >
            <Image src={leaf3} alt="Daun" />
        </motion.div>
    </div>
  )
}

export default DetailsSection;
