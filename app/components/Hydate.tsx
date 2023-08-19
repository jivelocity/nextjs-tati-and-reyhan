'use client'

import { ReactNode, useEffect, useState } from "react"
import { Player } from "@lottiefiles/react-lottie-player";
import loading  from "../../public/images/loading.json";

interface HydrateProps {
  children:ReactNode
}

export const Hydrate: React.FC<HydrateProps> = ({
    children
 }) => {
    const [isHydrate, setIsHydrate] = useState(false);
    useEffect(() => {
        setIsHydrate(true)
    },[])
  return (
        <>
            {isHydrate ? <>{children}</> : <>
                <div className="flex w-full h-screen justify-center items-center">
                    <Player loop autoplay src={loading} />
                </div>
            </>}
        </>
  )
}
