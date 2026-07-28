"use client"
import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useScrollStore } from '@/lib/store/useScrollStore'

export const SmoothScroll = () => {
  const setIsScrolled = useScrollStore(state => state.setIsScrolled)

  useEffect(() => {
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
    })

    if (typeof window !== 'undefined') {
        (window as any).lenis = lenis
    }

    lenis.on('scroll', (e: any) => {
      ScrollTrigger.update()
      setIsScrolled(e.scroll > 50)
    })

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
        if (typeof window !== 'undefined') {
            delete (window as any).lenis
        }
        lenis.destroy()
        gsap.ticker.remove((time) => {
            lenis.raf(time * 1000)
        })
    }
  }, [])

  return null
}
