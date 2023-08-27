'use client'
import Countdown, {CountdownRenderProps} from 'react-countdown'

const CountdownTime = () => {
  const weddingDate = new Date(1694228400000).getTime()
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return (
        <p className="font-avigea text-4xl md:text-7xl text-center">
          Kami Tunggu ditempat!
        </p>
      )
    } else {
      return (
        <div className="flex gap-4 font-montserrat">
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl">{days}</p>
            <p className="text-sm font-semibold">Days</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl">{hours}</p>
            <p className="text-sm font-semibold">Hours</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl">{minutes}</p>
            <p className="text-sm font-semibold">Minutes</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl">{seconds}</p>
            <p className="text-sm font-semibold">Seconds</p>
          </div>
        </div>
      )
    }
  }
  return (
    <div>
      <Countdown date={weddingDate} renderer={renderer} />
    </div>
  )
}

export default CountdownTime
