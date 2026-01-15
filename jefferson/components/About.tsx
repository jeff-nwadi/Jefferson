"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Monitor, Server, Paintbrush } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.from(".about-card", {
      opacity: 0,
      y: 100,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".about-text", {
      opacity: 0,
      x: -50,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .from(".stat-card", {
      opacity: 0,
      scale: 0.8,
      rotation: -10,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.7)"
    }, "-=0.2")

  }, { scope: containerRef })

  return (
    <div id='about' ref={containerRef} className='flex justify-center items-center pb-20 overflow-hidden'>
        <div className='about-card bg-[#8B5CF6] w-full max-w-[1000px] min-h-[600px] h-auto rounded-lg mx-4 md:mx-0'>
            <div className='p-8 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 py-16'>
                <div className='sub-head-text w-full md:w-1/2 about-text'>
                    <h1 className='uppercase text-3xl md:text-5xl mb-6 tracking-wider font-extrabold  leading-12 text-white heading-text text-center md:text-left'>About me</h1>
                    <p className='text-white w-full text-base md:text-lg text-center md:text-left'>
                        <span className='mb-6 block'>
                            I specialize in building high-performance, responsive web applications. I’ve always been driven by the intersection of logic and creativity, which led me to focus on mastering Next.js and modern web standards.
                        </span>
                        <span className='mb-6 block'>
                            <h1 className='text-xl tracking-wider leading-8 md:leading-12 mb-2'>My approach is simple:</h1> 
                            I bridge the gap between elegant design and scalable code. I believe that a great digital product should not only look stunning but also be fast, accessible, and built to grow. Whether I’m developing a complex user interface or optimizing a site’s performance, I am committed to writing clean code that delivers a seamless user experience.
                            I thrive on solving technical challenges and turning ambitious ideas into functional, pixel-perfect reality.
                        </span>
                    </p>
                </div>
                <div className='flex flex-col gap-6 w-full md:w-auto items-center'>
                    <div className='stat-card bg-white text-black h-auto min-h-[99px] w-full max-w-[330px] md:w-[330px] -rotate-6 md:-rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#6982FF] text-xl md:text-2xl tracking-wider font-extrabold'>
                                Frontend 
                        </span>
                        <Monitor className='text-[#6982FF]' size={48} strokeWidth={1.5} />
                    </div>
                    <div className='stat-card bg-white text-black h-auto min-h-[99px] w-full max-w-[330px] md:w-[330px] rotate-6 md:rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#00D74C] text-xl md:text-2xl tracking-wider font-extrabold'>
                            Backend 
                        </span>
                        <Server className='text-[#00D74C]' size={48} strokeWidth={1.5} />
                    </div>
                    <div className='stat-card bg-white text-black h-auto min-h-[99px] w-full max-w-[330px] md:w-[330px] -rotate-6 md:-rotate-6 heading-text rounded-lg p-5 flex justify-between items-center'>
                        <span className='text-[#D70032] text-xl md:text-2xl tracking-wider font-extrabold'>
                            UI/UX Design
                        </span>
                        <Paintbrush className='text-[#D70032]' size={48} strokeWidth={1.5} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
