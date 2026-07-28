import { create } from 'zustand'

type ScrollStore = {
    isScrolled: boolean
    setIsScrolled: (isScrolled: boolean) => void
}

export const useScrollStore = create<ScrollStore>((set) => ({
    isScrolled: false,
    setIsScrolled: (isScrolled) => set({ isScrolled }),
}))
