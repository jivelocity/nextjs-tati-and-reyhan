import {CalendarClock} from 'lucide-react'
import CountdownTime from './CountdownTime'

import background from '../../public/images/background2.webp'
import Reveal from './Reveal'
import Image from 'next/image'

const TimeSection = () => {
  return (
    <div
      id="details"
      className="relative text-white w-full flex flex-col justify-center items-center"
    >
      <div className="z-10 flex flex-col justify-center items-center pt-14">
        <Reveal delay={0.5}>
          <CountdownTime />
        </Reveal>
        <Reveal delay={1}>
          <div
            className="
                grid
                grid-flow-col-dense
                grid-rows-2
                text-5xl
                md:text-7xl
                mt-14
            "
          >
            <h1 className="font-avigea border-b-2 pr-4 text-right drop-shadow-xl">
              <Reveal>Sabtu</Reveal>
            </h1>
            <h1 className="font-avigea row-start-2 pr-4 pt-2 drop-shadow-xl">
              <Reveal>9 Sept</Reveal>
            </h1>
            <h1 className="font-avigea pl-4 border-l-2 drop-shadow-xl">
              <Reveal>20</Reveal>
            </h1>
            <h1 className="font-avigea pl-4 border-l-2 pt-2 drop-shadow-xl">
              <Reveal>23</Reveal>
            </h1>
          </div>
        </Reveal>
        <Reveal delay={1.4}>
          <a
            href="https://calendar.google.com/calendar/u/0/r/eventedit?text=Pernikahan+Tati+dan+Reyhan&dates=20230909/20230909"
            target="_blank"
          >
            <button className="my-8 flex gap-2 justify-center items-center px-2 py-1 border rounded-xl font-semibold">
              <CalendarClock size={20} />
              Save the Date
            </button>
          </a>
        </Reveal>
        <Reveal delay={1.7}>
          <div className="max-w-md text-sm space-y-4 mb-64 px-2 font-semibold">
            <p className="text-center font-montserrat">
              “Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
              mengingat (kebesaran Allah)“
            </p>
            <p className="text-center font-montserrat">(QS. Az Zariat : 49) </p>
          </div>
        </Reveal>
      </div>
      <Image
        className="absolute w-full h-full object-cover"
        src={background}
        alt="background"
        priority
      />
    </div>
  )
}

export default TimeSection
