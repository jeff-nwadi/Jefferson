"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Menu, X } from 'lucide-react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const { contextSafe } = useGSAP({ scope: containerRef })

  /* eslint-disable-next-line react-hooks/exhaustive-deps */
  const handleHover = contextSafe(() => {
    if (!isOpen) {
      gsap.to(buttonRef.current, {
        y: -3,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      })
    }
  })

  // Animation for dropdown entrance
  useGSAP(() => {
    if (isOpen) {
      gsap.from(".nav-dropdown", {
        y: -10,
        opacity: 0,
        duration: 0.4,
        ease: "back.out(1.7)"
      })
      
      gsap.from(".nav-item", {
        y: -5,
        opacity: 0,
        stagger: 0.05,
        duration: 0.3,
        delay: 0.1
      })
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className='relative z-50'>
        <div className='flex justify-between px-6 md:px-20 lg:px-70 items-center py-10 md:py-20'>
            <Link href="/" className='heading-text text-xl cursor-pointer hover:scale-105 transition-transform'>Jefferson</Link>
            <div className='relative'>
                <button 
                    ref={buttonRef}
                    onClick={() => setIsOpen(!isOpen)}
                    onMouseEnter={handleHover}
                    className='bg-white p-3 rounded-full shadow-sm border border-gray-100 hover:shadow-md transition-all active:scale-95'
                >
                    {isOpen ? <X size={24} className="text-gray-800" /> : <Menu size={24} className="text-gray-800" />}
                </button>
                
                {isOpen && (
                    <div className='absolute right-0 top-full mt-4 w-48 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 flex flex-col p-2 overflow-hidden nav-dropdown origin-top-right'>
                        {['About', 'Stack', 'Work'].map((item) => (
                            <Link 
                                href={`#${item.toLowerCase()}`}
                                key={item}
                                onClick={() => setIsOpen(false)}
                                className='px-4 py-3 hover:bg-gray-50 rounded-xl sub-head-text text-sm font-bold text-gray-700 hover:text-black transition-colors nav-item'
                            >
                                {item}
                            </Link>
                        ))}
                         <div className='h-px bg-gray-100 my-1 mx-2'></div>
                         <div className='flex justify-center gap-2 p-2'>
                            {/* Social mini links if needed or just Contact */}
                             <Link 
                                href="mailto:jefftech108@gmail.com"
                                className='w-full text-center px-4 py-2 bg-black text-white rounded-lg sub-head-text text-xs font-bold hover:bg-gray-800 transition-colors nav-item'
                            >
                                Contact
                            </Link>
                         </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}
