"use client"

import React, { useRef } from 'react'
import Image from 'next/image'
import Jeff from '../images/jeff.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowDownRight } from 'lucide-react'


export const LandingPage = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Standard robust animation sequence
    // Elements start visible in DOM, GSAP immediately handles the 'from' state
    const tl = gsap.timeline({ delay: 2.2 }) // Delay to sync roughly with Preloader (0.8s + 0.5s + buffer)

    tl.from([".hero-title", ".hero-image", ".hero-meta"], {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        clearProps: "all" // Ensure cleanup after animation to preventing styling locks
    })
    .from(".hero-image", {
        scale: 0.8,
        duration: 1.2,
        ease: "back.out(1.2)",
        clearProps: "all"
    }, "<") // Run concurrently

    // Mouse Move Parallax
    const handleMouseMove = (e: MouseEvent) => {
        if (!imageRef.current) return
        const { clientX, clientY } = e
        const { innerWidth, innerHeight } = window
        
        const xPos = (clientX / innerWidth - 0.5) * 30
        const yPos = (clientY / innerHeight - 0.5) * 30
        
        gsap.to(imageRef.current, {
            x: xPos,
            y: yPos,
            duration: 1,
            ease: "power2.out"
        })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)

  }, { scope: containerRef })

  return (
    <div ref={containerRef} className='min-h-screen w-full flex flex-col justify-center items-center relative overflow-hidden pt-20 pb-10'>
        
        {/* Background decorative elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className='relative z-10 flex flex-col items-center text-center w-full max-w-[90vw]'>
            
            {/* Top Tagline */}
            <div className='hero-meta mb-8 inline-flex items-center gap-2 border border-border px-4 py-1.5 rounded-full bg-secondary/50 backdrop-blur-sm shadow-sm'>
              <span className='w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]'></span>
              <span className='sub-head-text text-xs font-bold uppercase tracking-wider text-muted-foreground'>Available for freelance</span>
            </div>

            {/* Typography */}
            <div className='flex flex-col items-center leading-[0.85] tracking-tighter'>
              <h1 className='hero-title heading-text text-[15vw] md:text-[12rem] lg:text-[14rem] text-primary/80 select-none mix-blend-overlay dark:mix-blend-normal'>
                FRONT
              </h1>
              
              <div className='flex items-center justify-center gap-4 md:gap-12 w-full'>
                <span className='hero-title heading-text text-[15vw] md:text-[12rem] lg:text-[14rem] text-muted-foreground/20 hover:text-primary transition-colors duration-700 select-none'>
                  END
                </span>
                
                {/* Image */}
                <div className='hero-image relative w-[15vw] h-[15vw] md:w-32 md:h-32 lg:w-48 lg:h-48 shrink-0 border-4 border-background rounded-full overflow-hidden shadow-2xl z-20 hover:scale-105 transition-transform duration-500'>
                  <div ref={imageRef} className="w-full h-full relative rounded-full">
                    <Image 
                        src={Jeff} 
                        alt="Jefferson" 
                        fill
                        className='object-cover'
                    />
                  </div>
                </div>
                
                <span className='hero-title heading-text text-[15vw] md:text-[12rem] lg:text-[14rem] text-primary select-none drop-shadow-2xl'>
                  DEV
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className='hero-meta mt-12 md:mt-20 flex flex-col md:flex-row items-center justify-between w-full max-w-4xl px-4 gap-8 md:gap-0'>
               <p className='max-w-md text-center md:text-left text-base md:text-lg font-medium text-muted-foreground leading-relaxed'>
                 Hi, I&apos;m <span className='text-foreground font-bold'>Jefferson</span>. I build accessible, pixel-perfect, and performant web experiences.
               </p>

               <a href="#work" className='group flex items-center gap-4 cursor-pointer'>
                 <div className='w-12 h-12 md:w-16 md:h-16 rounded-full border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg'>
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
