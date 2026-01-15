"use client"
import React, { useRef, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export const ScrollToTop = () => {
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [isVisible, setIsVisible] = useState(false)
    const { contextSafe } = useGSAP({ scope: buttonRef })

    useGSAP(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                if (!isVisible) setIsVisible(true)
            } else {
                if (isVisible) setIsVisible(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isVisible])

    useGSAP(() => {
        if (isVisible) {
            gsap.fromTo(buttonRef.current, 
                { scale: 0, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
            )
        } else {
            gsap.to(buttonRef.current, { scale: 0, opacity: 0, duration: 0.3 })
        }
    }, [isVisible])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleHover = contextSafe(() => {
        gsap.to(".arrow-icon", {
            y: -5,
            duration: 0.2,
            yoyo: true,
            repeat: 1
        })
    })

    if (!isVisible) return null

    return (
        <button
            ref={buttonRef}
            onClick={scrollToTop}
            onMouseEnter={handleHover}
            className='fixed bottom-10 right-10 z-[90] bg-black text-white p-4 rounded-full shadow-2xl hover:bg-gray-800 transition-colors group'
        >
            <ArrowUp className='w-6 h-6 arrow-icon' />
        </button>
    )
}
