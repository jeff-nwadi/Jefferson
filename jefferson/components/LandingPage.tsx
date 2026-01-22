"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import Jeff from '../images/jeff.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowDownRight } from 'lucide-react'

export const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    // Reveal huge text
    tl.from(".hero-text-line", {
      y: 100,
      opacity: 0,
      rotateX: -45,
      stagger: 0.1,
      duration: 1.2,
      ease: "power4.out"
    })
    
    // Reveal image with a scale effect
    .from(".hero-image-container", {
      scale: 0.8,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out"
    }, "-=1")

    // Reveal sub-elements
    .from(".hero-meta", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=1")

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-10'>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className='relative z-10 flex flex-col items-center text-center w-full max-w-[90vw]'>
            
            {/* Top Tagline */}
            <div className='hero-meta mb-4 inline-flex items-center gap-2 border border-border px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm'>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse'></span>
              <span className='sub-head-text text-xs font-bold uppercase tracking-wider text-muted-foreground'>Available for freelance</span>
            </div>

            {/* Massive Typography */}
            <div className='flex flex-col items-center leading-[0.85] tracking-tighter'>
              <h1 className='hero-text-line heading-text text-[15vw] md:text-[12rem] lg:text-[14rem] text-primary select-none'>
                FRONT
              </h1>
              
              <div className='hero-text-line flex items-center justify-center gap-4 md:gap-12 w-full'>
                <span className='heading-text text-[15vw] md:text-[12rem] lg:text-[14rem] text-primary/20 hover:text-primary transition-colors duration-700 select-none'>
                  END
                </span>
                {/* Image integrated into the text flow */}
                <div className='hero-image-container relative w-[15vw] h-[15vw] md:w-32 md:h-32 lg:w-48 lg:h-48 shrink-0 border-4 border-background rounded-full overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500'>
                  <Image 
                    src={Jeff} 
                    alt="Jefferson" 
                    fill
                    className='object-cover hover:scale-110 transition-transform duration-700'
                  />
                </div>
                <span className='heading-text text-[15vw] md:text-[12rem] lg:text-[14rem] text-primary select-none'>
                  DEV
                </span>
              </div>
            </div>

            {/* Description and CTA */}
            <div className='hero-meta mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-4'>
               <p className='max-w-md text-center md:text-left text-base md:text-lg font-medium text-muted-foreground leading-relaxed'>
                 Hi, I&apos;m <span className='text-foreground font-bold'>Jefferson</span>. I build accessible, pixel-perfect, and performant web experiences.
               </p>

               <a href="#work" className='group mt-8 md:mt-0 flex items-center gap-4 cursor-pointer'>
                 <div className='w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300'>
                    <ArrowDownRight className='w-5 h-5 md:w-8 md:h-8' />
                 </div>
                 <div className='flex flex-col text-left'>
                    <span className='uppercase text-xs font-bold text-muted-foreground tracking-widest'>See Projects</span>
                    <span className='heading-text text-xl md:text-3xl'>Portfolio</span>
                 </div>
               </a>
            </div>

        </div>
    </div>
  )
}
