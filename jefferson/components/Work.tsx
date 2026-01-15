"use client"
import React, { useRef } from 'react'
import { Briefcase } from 'lucide-react'
import Image from 'next/image'
import Artgigs from '../images/Artgigs.png'
import Plotline from '../images/Plotline.png'
import Vura from '../images/Vura.png'
import Waveroom from '../images/Waveroom.png'
import Yardage from '../images/Yardage.png'
import Jockify from '../images/jockify.png'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

// ... existing imports

const works = [
    {
        title: "PLOTLINE - Storytelling Platform",
        image: Plotline,
        color: "bg-[#F5E6E8]",
        link: "https://plotline-psi.vercel.app/"
    },
    {
        title: "VURA - Virtual Frame Hanging",
        image: Vura,
        color: "bg-[#E8F5E9]",
        link: "https://vura-nine.vercel.app/",
        status: "Under Development"
    },
    {
        title: "WAVEROOM - Social Playlist Sharing",
        image: Waveroom,
        color: "bg-[#FFF3E0]",
        link: "https://waveroom.vercel.app/",
        collaboration: {
            text: "with",
            name: "Hendo10X",
            url: "https://github.com/Hendo10X"
        }
    },
    {
        title: "YARDAGE - E-commerce platform for Students",
        image: Yardage,
        color: "bg-[#F3E5F5]",
        link: "https://yardage-waitlist.vercel.app/"
    },
    {
        title: "JOCKIFY - AI Song Remixing",
        image: Jockify,
        color: "bg-[#E3F2FD]",
        link: "https://jockify.vercel.app/",
        collaboration: {
            text: "with",
            name: "Hendo10X",
            url: "https://github.com/Hendo10X"
        }
    }
]

export const Work = () => {
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

    tl.from(".work-header", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    })
    .from(".work-item", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.3")

  }, { scope: containerRef })

  return (
    <div id='work' ref={containerRef} className='flex flex-col justify-center items-center py-10 md:py-20'>
        <div className='max-w-[1200px] w-full px-4 md:px-8'>
            <div className='flex items-center justify-center gap-3 md:gap-4 mb-10 md:mb-16 work-header'>
                <div className='p-2 md:p-3 bg-white rounded-xl shadow-sm border border-gray-100 '>
                    <Briefcase className='w-6 h-6 md:w-8 md:h-8 text-black delay-300 animate-[spin_10s_linear_infinite]' />
                </div>
                <h1 className='text-3xl md:text-4xl font-black text-gray-900 heading-text tracking-wider'>WORKS</h1>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {works.map((work, index) => (
                    <div key={index} className='group work-item'>
                        <Link href={work.link} className='cursor-pointer block' target={work.link !== '#' ? '_blank' : '_self'}>
                            <div className={`rounded-3xl overflow-hidden aspect-square relative mb-6 ${work.color} transition-transform duration-300 group-hover:-translate-y-2`}>
                                <div className='absolute inset-0 flex items-center justify-center p-8'>
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        className='object-cover rounded-xl shadow-lg transform transition-transform duration-500 group-hover:scale-105'
                                    />
                                </div>
                            </div>
                            <h3 className='text-sm font-bold text-gray-800 tracking-wider uppercase sub-head-text'>
                                {work.title}
                            </h3>
                        </Link>
                        {work.collaboration && (
                            <div className='mt-2 text-xs text-gray-500 font-medium tracking-wide sub-head-text'>
                                {work.collaboration.text} <a href={work.collaboration.url} target="_blank" className='underline hover:text-black transition-colors'>{work.collaboration.name}</a>
                            </div>
                        )}
                        {work.status && (
                            <div className='mt-2 text-xs text-amber-600 font-bold tracking-wide sub-head-text uppercase'>
                                • {work.status}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
