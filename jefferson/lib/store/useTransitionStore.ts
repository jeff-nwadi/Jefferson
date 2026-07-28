import { create } from 'zustand'

type TransitionStore = {
    isTransitioning: boolean
    transitionCallback: (() => void) | null
    triggerTransition: (callback: () => void) => void
    setTransitionCallback: (cb: (() => void) | null) => void
    finishTransition: () => void
}

export const useTransitionStore = create<TransitionStore>((set, get) => ({
    isTransitioning: false,
    transitionCallback: null,
    triggerTransition: (callback: () => void) => {
        if (get().isTransitioning) return
        set({ isTransitioning: true, transitionCallback: callback })
    },
    setTransitionCallback: (cb: (() => void) | null) => set({ transitionCallback: cb }),
    finishTransition: () => set({ isTransitioning: false, transitionCallback: null }),
}))
