"use client"
import React, { useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const Preloader = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)

  useGSAP(() => {
    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
        onComplete: () => {
            setIsVisible(false);
            document.body.style.overflow = '';
        }
    })

    tl.to(".preloader-text", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
    })
    .to(".preloader-text", {
        y: -50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5,
        delay: 0.8,
        ease: "power2.in"
    })
    .to(containerRef.current, {
        y: "-100%",
        duration: 0.8,
        ease: "power4.inOut"
    }, "-=0.2")

  }, { scope: containerRef })

  if (!isVisible) return null;

  return (
    <div ref={containerRef} className='fixed inset-0 z-[9999] bg-[#9369FF] flex justify-center items-center'>
        <div className='flex gap-3 md:gap-5 overflow-hidden heading-text text-2xl md:text-5xl text-white'>
            <span className='preloader-text translate-y-20 opacity-0 block'>Code</span>
            <span className='preloader-text translate-y-20 opacity-0 block'>with</span>
            <span className='preloader-text translate-y-20 opacity-0 block'>Jefferson</span>
        </div>
    </div>
  )
}
