"use client"
import Link from "next/link"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const socials = [
    { name: "X/Twitter", url: "https://x.com/jefftech91" },
    { name: "GitHub", url: "https://github.com/jeff-nwadi" },
    { name: "Instagram", url: "https://www.instagram.com/jefftech_5/" },
]

export const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    gsap.from(".footer-reveal", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
        }
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative z-10">
        <div className="bg-[#1a1a1a] text-[#EFEFEF] py-20 px-4 md:px-10 mt-20 rounded-t-[3rem] min-h-[500px] flex flex-col justify-between">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-start gap-16 md:gap-10 pt-10">
                
                {/* Left: Big CTA */}
                <div className="flex flex-col gap-6 footer-reveal w-full md:w-1/2">
                    <h2 className="heading-text text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
                        Let&apos;s Work <br/> <span className="text-[#8B5CF6]">Together</span>
                    </h2>
                    <p className="sub-head-text text-gray-400 text-lg md:text-xl max-w-md mt-4 font-medium">
                        Have a project in mind? Let&apos;s turn your ideas into a digital reality. I&apos;m always open to new challenges.
                    </p>
                    <Link href="mailto:jefftech108@gmail.com" className="mt-4 flex items-center gap-3 text-2xl md:text-3xl font-bold w-fit hover:text-[#8B5CF6] transition-colors duration-300 group">
                        jefftech108@gmail.com 
                        <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={32} />
                    </Link>
                </div>

                {/* Right: Rolling Links */}
                <div className="flex flex-col gap-6 footer-reveal items-start md:items-end w-full md:w-auto mt-4 md:mt-2">
                     <h3 className="text-gray-500 uppercase tracking-widest text-sm font-bold mb-2">Socials</h3>
                     {socials.map((social, idx) => (
                        <Link 
                            key={idx} 
                            href={social.url} 
                            target="_blank"
                            className="group relative h-8 overflow-hidden w-fit"
                        >
                            <div className="flex flex-col transition-transform duration-300 group-hover:-translate-y-8">
                                <span className="heading-text text-3xl font-bold h-8 flex items-center tracking-wide">{social.name}</span>
                                <span className="heading-text text-3xl font-bold h-8 flex items-center text-[#8B5CF6] tracking-wide">{social.name}</span>
                            </div>
                        </Link>
                     ))}
                </div>

            </div>

            <div className="max-w-[1400px] mx-auto w-full mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-medium footer-reveal gap-4">
                 <span>&copy; {new Date().getFullYear()} Jefferson Nwadi. All rights reserved.</span>
                 <span className="uppercase tracking-widest text-xs"> Available Worldwide</span>
            </div>
        </div>
    </div>
  )
}
