"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const techStack = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express", 
    "Tailwind CSS", "GSAP", "Framer Motion", "PostgreSQL", "MongoDB", "Git", "Figma", "Prisma"
]

export const Stack = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const sliderRef = useRef<HTMLDivElement>(null)
    let xPercent = 0
    let direction = -1

    useGSAP(() => {
        requestAnimationFrame(animation)
    }, { scope: containerRef })

    const animation = () => {
        if (xPercent <= -100) {
            xPercent = 0
        }
        if (xPercent > 0) {
            xPercent = -100
        }
        gsap.set(sliderRef.current, { xPercent: xPercent })
        xPercent += 0.05 * direction
        requestAnimationFrame(animation)
    }

    return (
        <div id='stack' ref={containerRef} className='relative flex h-[200px] overflow-hidden bg-background border-y border-border'>
            <div className='absolute inset-0 flex items-center'>
                <div ref={sliderRef} className='relative flex whitespace-nowrap'>
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className='flex items-center'>
                            {techStack.map((tech, index) => (
                                <div key={index} className='flex items-center px-8 md:px-16'>
                                    <span className='text-4xl md:text-7xl font-black uppercase text-foreground/10 heading-text tracking-widest hover:text-primary hover:opacity-100 transition-colors duration-300 cursor-default'>
                                        {tech}
                                    </span>
                                    <span className='ml-8 md:ml-16 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full opacity-20'></span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Vignetts for fade effect */}
            <div className='absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background to-transparent z-10' />
            <div className='absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background to-transparent z-10' />
        </div>
    )
}
