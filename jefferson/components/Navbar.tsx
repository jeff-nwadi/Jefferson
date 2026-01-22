"use client"
import React, { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Menu, X } from 'lucide-react'
import { useTransition } from '@/context/TransitionContext'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLDivElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  
  const { triggerTransition } = useTransition()
  const { contextSafe } = useGSAP({ scope: containerRef })

  // Navbar scroll effect
  useEffect(() => {
    let ticking = false;
    
    const updateNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 50) {
        gsap.to(navRef.current, {
          backgroundColor: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(0,0,0,0.05)',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          duration: 0.3,
          overwrite: true
        })
      } else {
        gsap.to(navRef.current, {
          backgroundColor: 'transparent',
          backdropFilter: 'blur(0px)',
          borderBottom: '1px solid transparent',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
          duration: 0.3,
          overwrite: true
        })
      }
      ticking = false;
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Animation for menu toggle
  useGSAP(() => {
    if (isOpen) {
        // Stop any ongoing animations
        gsap.killTweensOf(menuRef.current)
        
        gsap.to(menuRef.current, {
            height: '100vh', // Ensure full viewport height
            scaleY: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            transformOrigin: "top"
        })
        gsap.fromTo(".mobile-nav-item", 
            { y: 20, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.4,
                delay: 0.2
            }
        )
    } else {
        gsap.killTweensOf(menuRef.current)
        
        gsap.to(menuRef.current, {
            height: 0,
            scaleY: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power3.in"
        })
    }
  }, [isOpen])

  const toggleMenu = contextSafe(() => {
    setIsOpen(!isOpen)
  })

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    if (isOpen) setIsOpen(false)
    
    triggerTransition(() => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'auto', block: 'start' })
        }
    })
  }

  return (
    <div ref={containerRef} className='fixed top-0 left-0 w-full z-50'>
        <div ref={navRef} className='flex justify-between items-center px-6 md:px-12 lg:px-24 py-6 transition-all will-change-transform'>
            <Link href="/" className='relative z-50 mix-blend-difference text-primary-foreground dark:text-foreground font-black text-2xl tracking-wider uppercase heading-text'>
                Jefferson
            </Link>
            
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center gap-8 mix-blend-mode-normal text-primary-foreground dark:text-foreground'>
                {['About', 'Work', 'Contact'].map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => handleNavClick(e, item.toLowerCase())}
                        className='text-sm font-medium hover:opacity-70 transition-opacity uppercase tracking-widest sub-head-text text-foreground cursor-pointer'
                    >
                        {item}
                    </a>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <div className='md:hidden z-50 flex items-center gap-4'>
                <button 
                    onClick={toggleMenu}
                    className='text-foreground p-2'
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
        </div>
        
        {/* Full Screen Mobile Menu Overlay */}
        <div 
            ref={menuRef}
            className='absolute top-0 left-0 w-full bg-background border-b border-border shadow-2xl overflow-hidden origin-top opacity-0 h-0 flex flex-col justify-center items-center py-20'
        >
             <div className='flex flex-col items-center gap-6'>
                {['About', 'Work', 'Contact'].map((item) => (
                    <a 
                        href={`#${item.toLowerCase()}`}
                        key={item}
                        onClick={(e) => handleNavClick(e, item.toLowerCase())}
                        className='text-4xl font-black uppercase tracking-tighter hover:text-primary transition-colors mobile-nav-item heading-text cursor-pointer'
                    >
                        {item}
                    </a>
                ))}
             </div>
        </div>
    </div>
  )
}
