"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import Jeff from '../images/jeff.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 2.5 })

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
    .from(".hero-btn", {
      scale: 0,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.4")

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='flex flex-col justify-center items-center py-10 md:py-20 pb-20 md:pb-40 px-4'>
        <div className="landing-img border-2 border-gray-400 rounded-full p-2">
            <Image src={Jeff} alt="jeff" width={100} height={100} className='rounded-full w-20 h-20 md:w-[100px] md:h-[100px]'/>
        </div>
        <div className='text-center py-5 heading-text text-xl md:text-4xl font-extrabold tracking-wider leading-8 md:leading-12 landing-text'>
            <h1>Hello, I&apos;m Jefferson</h1>
            <h1 className='max-w-4xl text-xl md:text-4xl mt-2 font-extrabold'>a Frontend Developer crafting high-performance web applications by bridging design and scalable code.</h1>   
        </div> 
        <p className='py-5 sub-head-text text-sm md:text-base text-center max-w-md md:max-w-none landing-desc'>Building playful and vibrant web experiences since - Y:2021.</p>
        <Link 
          href="mailto:jefftech91@gmail.com" 
          className='py-5 hero-btn group relative inline-flex items-center gap-2 overflow-hidden'
        >
          <span className='text-xl md:text-2xl font-bold heading-text relative z-10 group-hover:text-[#8B5CF6] transition-colors duration-300'>
            Get in touch
            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#8B5CF6] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left'></span>
          </span>
          <ArrowRight className='w-6 h-6 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-[#8B5CF6]' />
        </Link>
    </div>
  )
}
