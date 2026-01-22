"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

// Import existing images
import Artgigs from '../images/Artgigs.png'
import Plotline from '../images/Plotline.png'
import Vura from '../images/Vura.png'
import Waveroom from '../images/Waveroom.png'
import Yardage from '../images/Yardage.png'
import Jockify from '../images/jockify.png'

gsap.registerPlugin(ScrollTrigger)

const works = [
    {
        title: "Plotline",
        category: "Storytelling Platform",
        image: Plotline,
        link: "https://plotline-psi.vercel.app/",
        year: "2024"
    },
    {
        title: "Vura",
        category: "Virtual Frame Hanging",
        image: Vura,
        link: "https://vura-nine.vercel.app/",
        year: "2023",
        status: "Development"
    },
    {
        title: "Waveroom",
        category: "Social Playlist Sharing",
        image: Waveroom,
        link: "https://waveroom.vercel.app/",
        year: "2023"
    },
    {
        title: "Yardage",
        category: "E-commerce for Students",
        image: Yardage,
        link: "https://yardage-waitlist.vercel.app/",
        year: "2023"
    },
    {
        title: "Jockify",
        category: "AI Song Remixing",
        image: Jockify,
        link: "https://jockify.vercel.app/",
        year: "2023"
    },
    {
        title: "Artgigs",
        category: "Freelance Marketplace",
        image: Artgigs,
        link: "#",
        year: "2022"
    }
]

export const Work = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const sections = gsap.utils.toArray('.project-card')
    
    sections.forEach((section: any) => {
        gsap.from(section, {
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "top 20%",
                toggleActions: "play none none reverse"
            }
        })
    })

  }, { scope: containerRef })

  return (
    <div id='work' ref={containerRef} className='w-full py-20 px-4 md:px-12 bg-background'>
        
        {/* Section Header */}
        <div className='flex flex-col md:flex-row justify-between items-end mb-20 border-b border-border pb-8'>
            <h2 className='heading-text text-[15vw] md:text-[8rem] leading-[0.8] text-primary/10 select-none absolute left-0 -z-10 opacity-50'>
                WORKS
            </h2>
            <div className='z-10'>
                <h3 className='text-sm font-bold tracking-widest uppercase text-muted-foreground mb-2 sub-head-text'>Selected Projects</h3>
                <h2 className='text-4xl md:text-6xl font-black heading-text text-foreground'>
                    FEATURED <br/> <span className='text-primary'>WORK</span>
                </h2>
            </div>
            <div className='mt-8 md:mt-0 max-w-sm text-right hidden md:block'>
                <p className='text-muted-foreground font-medium sub-head-text'>
                    A collection of digital experiences crafted with precision and passion.
                </p>
            </div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24'>
            {works.map((work, index) => (
                <Link 
                    href={work.link} 
                    key={index}
                    target={work.link !== '#' ? '_blank' : '_self'}
                    className={`group project-card flex flex-col gap-6 ${index % 2 !== 0 ? 'md:mt-32' : ''}`}
                >
                    <div className='relative w-full aspect-4/3 overflow-hidden rounded-2xl bg-secondary'>
                        <div className='absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply' />
                        <Image
                            src={work.image}
                            alt={work.title}
                            fill
                            className='object-cover transform transition-transform duration-700 group-hover:scale-110'
                        />
                        <div className='absolute top-4 right-4 z-20 bg-card/90 p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100'>
                            <ArrowUpRight className='w-6 h-6 text-primary' />
                        </div>
                    </div>

                    <div className='flex flex-col gap-2 border-l-2 border-border pl-6 transition-all duration-300 group-hover:border-primary'>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-3xl font-bold heading-text text-foreground group-hover:text-primary transition-colors'>
                                {work.title}
                            </h3>
                            <span className='text-sm font-bold text-muted-foreground border border-border px-2 py-1 rounded-md sub-head-text'>
                                {work.year}
                            </span>
                        </div>
                        <p className='text-lg text-muted-foreground font-medium sub-head-text'>
                            {work.category}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
        
    </div>
  )
}
