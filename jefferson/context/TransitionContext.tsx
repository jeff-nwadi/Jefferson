"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react'

type TransitionContextType = {
    triggerTransition: (callback: () => void) => void
    isTransitioning: boolean
    transitionCallback: (() => void) | null
    setTransitionCallback: (cb: (() => void) | null) => void
    finishTransition: () => void
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined)

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
    const [isTransitioning, setIsTransitioning] = useState(false)
    // We store the callback to execute after "exit" animation completes
    const [transitionCallback, setTransitionCallback] = useState<(() => void) | null>(null)

    const triggerTransition = (callback: () => void) => {
        if (isTransitioning) return
        setIsTransitioning(true)
        setTransitionCallback(() => callback)
    }

    const finishTransition = () => {
        setIsTransitioning(false)
        setTransitionCallback(null)
    }

    return (
        <TransitionContext.Provider value={{ 
            triggerTransition, 
            isTransitioning, 
            transitionCallback,
            setTransitionCallback,
            finishTransition
        }}>
            {children}
        </TransitionContext.Provider>
    )
}

export const useTransition = () => {
    const context = useContext(TransitionContext)
    if (!context) {
        throw new Error("useTransition must be used within a TransitionProvider")
    }
    return context
}


