'use client'

import { motion, useInView, useAnimation, cubicBezier } from "framer-motion";
import { useEffect, useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    delay?: number;
    width?: "w-fit" | "w-full";
    direction?: "x" | "y"
};

const Reveal:React.FC<RevealProps> = ({
    children,
    delay = 1,
    width = "w-fit",
    direction = "y"
}) => {

    let ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref)

    const textTransition = cubicBezier(0.17, 0.55, 0.55, 1);

    const mainControls = useAnimation();

    useEffect(() => {
        if(isInView){
            mainControls.start("visible")
        }
    },[isInView, mainControls])

    const variantY = {
        hidden: {opacity:0,y:75},
        visible: {opacity:1,y:0}
    }

    const variantX = {
        hidden: {opacity:0,x:75},
        visible: {opacity:1,x:0}
    }

    return (
        <div ref={ref} className={`${width}`}>
            <motion.div
                variants={ direction === "y" ? variantY : variantX}
                initial="hidden"
                animate={mainControls}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: textTransition
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
export default Reveal;
