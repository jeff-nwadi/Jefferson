"use client"
import React, { useRef } from 'react'
import { Layers } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stackData = [
    {
        category: "Languages",
        items: [
            { name: "JavaScript", className: "text-yellow-700 bg-yellow-50 border-yellow-200" },
            { name: "TypeScript", className: "text-blue-700 bg-blue-50 border-blue-200" }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "React", className: "text-sky-700 bg-sky-50 border-sky-200" },
            { name: "Next.js", className: "text-slate-800 bg-slate-100 border-slate-200" },
            { name: "Tailwind CSS", className: "text-cyan-700 bg-cyan-50 border-cyan-200" },
            { name: "Shadcn UI", className: "text-zinc-800 bg-zinc-50 border-zinc-200" },
            { name: "Framer Motion", className: "text-purple-700 bg-purple-50 border-purple-200" },
            { name: "GSAP", className: "text-green-700 bg-green-50 border-green-200" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", className: "text-green-700 bg-green-50 border-green-200" },
            { name: "Express.js", className: "text-gray-700 bg-gray-50 border-gray-200" }
        ]
    },
    {
        category: "Database",
        items: [
            { name: "PostgreSQL (Neon, Supabase)", className: "text-indigo-700 bg-indigo-50 border-indigo-200" },
            { name: "MongoDB", className: "text-emerald-700 bg-emerald-50 border-emerald-200" }
        ]
    },
    {
        category: "Version Control",
        items: [
            { name: "Git", className: "text-orange-700 bg-orange-50 border-orange-200" }
        ]
    }
]

export const Stack = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none"
      }
    })

    tl.from(".stack-header", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      clearProps: "all"
    })
    .from(".stack-category", {
      x: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power2.out",
      clearProps: "all"
    }, "-=0.3")
    .from(".stack-pill", {
      scale: 0,
      opacity: 0,
      stagger: 0.03,
      duration: 0.4,
      ease: "back.out(2)",
      clearProps: "all"
    }, "-=0.4")

  }, { scope: containerRef })

  return (
    <div id='stack' ref={containerRef} className='flex flex-col justify-center items-center py-10 md:py-24 pb-20 md:pb-40 px-4'>
        <div className='flex items-center gap-3 pb-8 md:pb-10 stack-header'>
            <div className='p-2 md:p-3 bg-white rounded-xl shadow-sm border border-gray-100'>
                 <Layers className='w-6 h-6 md:w-8 md:h-8 text-black delay-300 animate-[spin_10s_linear_infinite]' />
            </div>
            <h1 className='text-3xl md:text-4xl font-bold text-gray-900 heading-text tracking-wider'>Stack</h1>
        </div>
        <div className='w-full max-w-[1000px] bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 stack-card'>
            <div className='flex border-b border-gray-100 pb-4 md:pb-6 mb-6 md:mb-8 stack-header opacity-1'> {/* Keep opacity 1 handled by parent stagger or explicit class if needed, but header animation handles .stack-header */}
                <div className='w-full md:w-1/4 mb-2 md:mb-0'>
                    <h3 className='text-base md:text-lg font-bold text-gray-900 heading-text tracking-wider'>Category</h3>
                </div>
                <div className='hidden md:block w-3/4'>
                    <h3 className='text-lg font-bold text-gray-900 heading-text tracking-wider'>Tools & Tech</h3>
                </div>
            </div>

            <div className='flex flex-col gap-10'>
                {stackData.map((section, index) => (
                    <div key={index} className='flex flex-col md:flex-row items-start border-b border-dashed border-gray-200 last:border-0 pb-8 last:pb-0 stack-category'>
                        <div className='w-full md:w-1/4 mb-4 md:mb-0'>
                            <h4 className='text-lg text-gray-400 sub-head-text font-medium tracking-wider'>{section.category}</h4>
                        </div>
                        <div className='w-full md:w-3/4 flex flex-wrap gap-4'>
                            {section.items.map((item, i) => (
                                <span key={i} className={`px-5 py-2 rounded-xl text-sm font-bold tracking-wide hover:opacity-80 transition-all sub-head-text border cursor-default stack-pill ${item.className}`}>
                                    {item.name}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
