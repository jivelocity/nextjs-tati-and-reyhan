'use client'
import {useEffect} from 'react'

import Lenis from '@studio-freight/lenis'

const ScrollSmooth = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      orientation: 'vertical', // vertical, horizontal
      gestureOrientation: 'vertical', // vertical, horizontal, both
      wheelMultiplier: 0.5,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time: any) {
      if (!time) {
        return
      }
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      window.cancelAnimationFrame(raf as any)
    }
  }, [])

  return <></>
}

export default ScrollSmooth
