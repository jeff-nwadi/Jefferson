"use client"
import Link from "next/link"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const socials = [
    { name: "X (Twitter)", url: "https://x.com/jefftech91" },
    { name: "GitHub", url: "https://github.com/jeff-nwadi" },
    { name: "Instagram", url: "https://www.instagram.com/jefftech_5/" },
    { name: "LinkedIn", url: "https://linkedin.com/in/jefferson-nwadi" }, // Added LinkedIn for standard portfolio
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
    <div id="contact" ref={containerRef} className="relative z-10 bg-background pt-20">
        <div className="bg-card text-card-foreground py-20 px-4 md:px-12 rounded-t-[3rem] min-h-[600px] flex flex-col justify-between shadow-2xl border-t border-white/5">
            <div className="max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-10 pt-10">
                
                {/* Left: Big CTA */}
                <div className="flex flex-col gap-8 footer-reveal w-full lg:w-3/5">
                    <h2 className="heading-text text-[12vw] lg:text-[7rem] font-black uppercase leading-[0.85] tracking-tighter">
                        Let&apos;s Work <br/> <span className="text-primary stroke-text">Together</span>
                    </h2>
                    <p className="sub-head-text text-zinc-400 text-lg md:text-2xl max-w-xl font-medium leading-relaxed">
                        Have a project in mind? Let&apos;s turn your ideas into a digital reality. I&apos;m always open to new challenges.
                    </p>
                    <Link href="mailto:jefftech108@gmail.com" className="inline-flex items-center gap-4 group mt-4">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                             <ArrowUpRight size={32} />
                        </div>
                        <span className="text-3xl md:text-5xl font-bold heading-text hover:text-primary transition-colors duration-300">
                            jefftech108@gmail.com
                        </span>
                    </Link>
                </div>

                {/* Right: Rolling Links */}
                <div className="flex flex-col gap-8 footer-reveal items-start lg:items-end w-full lg:w-auto mt-10 lg:mt-0">
                     <h3 className="text-zinc-500 uppercase tracking-[0.2em] text-sm font-bold mb-4">Connect</h3>
                     <div className="flex flex-col gap-2">
                        {socials.map((social, idx) => (
                            <Link 
                                key={idx} 
                                href={social.url} 
                                target="_blank"
                                className="group relative h-10 md:h-12 overflow-hidden w-fit"
                            >
                                <div className="flex flex-col transition-transform duration-500 ease-in-out group-hover:-translate-y-10 md:group-hover:-translate-y-12">
                                    <span className="heading-text text-4xl md:text-5xl font-bold h-10 md:h-12 flex items-center tracking-wide text-zinc-300">{social.name}</span>
                                    <span className="heading-text text-4xl md:text-5xl font-bold h-10 md:h-12 flex items-center text-primary tracking-wide">{social.name}</span>
                                </div>
                            </Link>
                        ))}
                     </div>
                </div>

            </div>

            <div className="max-w-[1400px] mx-auto w-full mt-24 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm font-bold tracking-wider footer-reveal gap-4">
                 <span>&copy; {new Date().getFullYear()} Jefferson Nwadi.</span>
                 <span className="uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available Worldwide
                 </span>
            </div>
        </div>
    </div>
  )
}
