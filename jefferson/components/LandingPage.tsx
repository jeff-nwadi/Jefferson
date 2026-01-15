"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import Will from '../images/will.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.from(".landing-img", {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1, 0.7)"
    })
    .from(".landing-text h1", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from(".landing-desc", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='flex flex-col justify-center items-center py-10 md:py-20 pb-20 md:pb-40 px-4'>
        <div className="landing-img">
            <Image src={Will} alt="Will" width={100} height={100} className='rounded-full w-20 h-20 md:w-[100px] md:h-[100px]'/>
        </div>
        <div className='text-center py-5 heading-text text-2xl md:text-4xl tracking-wider leading-8 md:leading-12 landing-text'>
            <h1>Hello, I'm Jefferson</h1>
            <h1 className='max-w-4xl text-xl md:text-4xl mt-2'>a Frontend Developer crafting high-performance web applications by bridging design and scalable code.</h1>   
        </div> 
        <p className='py-5 sub-head-text text-sm md:text-base text-center max-w-md md:max-w-none landing-desc'>Building playful and vibrant web experiences since - Y:2021.</p>
    </div>
  )
}
