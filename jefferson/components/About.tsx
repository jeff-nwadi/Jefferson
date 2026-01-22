"use client"
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code2, Palette, Terminal } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export const About = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.from(".about-title", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".about-desc", {
      y: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5")
    .from(".skill-block", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "back.out(1.2)"
    }, "-=0.3")

  }, { scope: containerRef })

  return (
    <div id='about' ref={containerRef} className='w-full py-24 md:py-40 bg-background text-foreground relative overflow-hidden'>
        
        {/* Background Text */}
        <div className='absolute top-20 right-0 opacity-5 pointer-events-none select-none'>
            <h1 className='text-[20vw] font-black heading-text leading-[0.8] tracking-in-expand'>
                ABOUT
            </h1>
        </div>

        <div className='max-w-[1400px] mx-auto px-6 md:px-12 relative z-10'>
            <div className='flex flex-col lg:flex-row gap-20 items-start'>
                
                {/* Left Side: Editorial Typography */}
                <div className='w-full lg:w-3/5'>
                    <h2 className='about-title text-6xl md:text-8xl font-black mb-12 heading-text tracking-tight text-white'>
                        CREATIVE <br />
                        <span className='text-primary'>DEVELOPER</span>
                    </h2>
                    
                    <div className='space-y-8 text-lg md:text-xl font-medium leading-relaxed opacity-90 text-zinc-300 sub-head-text pr-0 md:pr-10'>
                        <p className='about-desc'>
                            I am a designer-turned-developer who believes that code is the ultimate design tool. My passion lies in building digital products that look beautiful and perform flawlessly.
                        </p>
                        <p className='about-desc'>
                            With a strong foundation in modern frontend architectures, I bridge the gap between creative vision and engineering reality. I don&apos;t just write code; I craft experiences that engage users and solve real-world problems.
                        </p>
                    </div>

                    <div className='mt-16 grid grid-cols-2 md:grid-cols-3 gap-8'>
                        {[
                            { number: "3+", label: "Years of Experience" },
                            { number: "12+", label: "Projects Completed" },
                            { number: "100%", label: "Client Satisfaction" }
                        ].map((stat, i) => (
                            <div key={i} className='about-desc flex flex-col'>
                                <span className='text-4xl md:text-5xl font-black text-primary heading-text'>{stat.number}</span>
                                <span className='text-sm uppercase tracking-widest text-zinc-500 font-bold mt-2'>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Skill Highlights */}
                <div className='w-full lg:w-2/5 flex flex-col gap-6 mt-10 lg:mt-0'>
                    {[
                        { 
                          icon: <Code2 className='w-6 h-6 text-black' />, 
                          title: "Frontend Engineering", 
                          desc: "React, Next.js, and TypeScript for scalable applications.",
                          color: "bg-emerald-400"
                        },
                        { 
                          icon: <Terminal className='w-6 h-6 text-black' />, 
                          title: "Backend Integration", 
                          desc: "Node.js, Postgres, and Serverless architectures.",
                          color: "bg-orange-400"
                        },
                        { 
                          icon: <Palette className='w-6 h-6 text-black' />, 
                          title: "Interactive Design", 
                          desc: "GSAP, Framer Motion, and WebGL for immersive feels.",
                          color: "bg-purple-400"
                        }
                    ].map((skill, index) => (
                        <div key={index} className='skill-block md:ml-auto w-full md:max-w-md bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-zinc-600 transition-colors group'>
                            <div className='flex items-center gap-4 mb-4'>
                                <div className={`p-3 rounded-lg ${skill.color}`}>
                                    {skill.icon}
                                </div>
                                <h3 className='text-xl font-bold text-white heading-text tracking-wide'>{skill.title}</h3>
                            </div>
                            <p className='text-zinc-400 font-medium leading-relaxed pl-16 sub-head-text'>
                                {skill.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    </div>
  )
}
