"use client"
import React, { useRef,  } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useTransition } from '@/context/TransitionContext'

export const TransitionOverlay = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const { transitionCallback, setTransitionCallback, finishTransition } = useTransition()

    useGSAP(() => {
        if (transitionCallback) {
            const tl = gsap.timeline({
                onComplete: () => {
                    transitionCallback()
                    setTransitionCallback(null) 

                    gsap.delayedCall(0.1, () => {
                        gsap.to([".shutter-1", ".shutter-2", ".shutter-3", ".shutter-4"], {
                            scaleY: 0,
                            duration: 0.8,
                            stagger: 0.05,
                            ease: "power4.inOut",
                            transformOrigin: "top",
                            onComplete: finishTransition
                        })
                    })
                }
            })

            tl.set([".shutter-1", ".shutter-2", ".shutter-3", ".shutter-4"], {
                scaleY: 0,
                transformOrigin: "bottom" 
            })
            .to([".shutter-1", ".shutter-2", ".shutter-3", ".shutter-4"], {
                scaleY: 1,
                duration: 0.5,
                stagger: 0.05,
                ease: "power3.inOut"
            })
        }
    }, [transitionCallback])

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[99999]">
            <div className="shutter-1 fixed top-0 left-0 w-1/4 h-screen bg-primary scale-y-0" />
            <div className="shutter-2 fixed top-0 left-[25%] w-1/4 h-screen bg-primary scale-y-0" />
            <div className="shutter-3 fixed top-0 left-[50%] w-1/4 h-screen bg-primary scale-y-0" />
            <div className="shutter-4 fixed top-0 left-[75%] w-1/4 h-screen bg-primary scale-y-0" />
        </div>
    )
}
