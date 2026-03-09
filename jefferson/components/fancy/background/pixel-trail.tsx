"use client"

import React, { useCallback, useMemo, useRef, useEffect } from "react"
import { motion, useAnimationControls } from "motion/react"
import { v4 as uuidv4 } from "uuid"

import { cn } from "@/lib/utils"
import { useDimensions } from "@/hooks/use-dimensions"

interface PixelTrailProps {
  pixelSize: number 
  fadeDuration?: number
  delay?: number 
  className?: string
  pixelClassName?: string
  exclusionHeight?: number 
  exclusionSelectors?: string[] 
}

const PixelTrail: React.FC<PixelTrailProps> = ({
  pixelSize = 20,
  fadeDuration = 500,
  delay = 0,
  className,
  pixelClassName,
  exclusionHeight = 0,
  exclusionSelectors = [],
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const dimensions = useDimensions(containerRef)
  const trailId = useRef(uuidv4())

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      if (e.clientY < exclusionHeight) return

      if (exclusionSelectors.length > 0) {
        const target = e.target as HTMLElement
        const isExcluded = exclusionSelectors.some(selector => 
            target.closest(selector)
        )
        if (isExcluded) return
      }

      const rect = containerRef.current.getBoundingClientRect()
      
      const xIndex = Math.floor((e.clientX - rect.left) / pixelSize)
      const yIndex = Math.floor((e.clientY - rect.top) / pixelSize)

      if (
        xIndex >= 0 &&
        xIndex < Math.ceil(dimensions.width / pixelSize) &&
        yIndex >= 0 &&
        yIndex < Math.ceil(dimensions.height / pixelSize)
      ) {
         const pixelElement = document.getElementById(
          `${trailId.current}-pixel-${xIndex}-${yIndex}`
        )
        if (pixelElement) {
          const animatePixel = (pixelElement as any).__animatePixel
          if (animatePixel) animatePixel()
        }
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [dimensions.width, dimensions.height, pixelSize, exclusionHeight, exclusionSelectors])

  const columns = useMemo(
    () => Math.ceil(dimensions.width / pixelSize),
    [dimensions.width, pixelSize]
  )
  const rows = useMemo(
    () => Math.ceil(dimensions.height / pixelSize),
    [dimensions.height, pixelSize]
  )

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 w-full h-full pointer-events-none", 
        className
      )}
    >
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <PixelDot
              key={`${colIndex}-${rowIndex}`}
              id={`${trailId.current}-pixel-${colIndex}-${rowIndex}`}
              size={pixelSize}
              fadeDuration={fadeDuration}
              delay={delay}
              className={pixelClassName}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default PixelTrail

interface PixelDotProps {
  id: string
  size: number
  fadeDuration: number
  delay: number
  className?: string
}

const PixelDot: React.FC<PixelDotProps> = React.memo(
  ({ id, size, fadeDuration, delay, className }) => {
    const controls = useAnimationControls()

    const animatePixel = useCallback(() => {
      controls.start({
        opacity: [1, 0],
        transition: { duration: fadeDuration / 1000, delay: delay / 1000 },
      })
    }, [])

    const ref = useCallback(
      (node: HTMLDivElement | null) => {
        if (node) {
          ;(node as any).__animatePixel = animatePixel
        }
      },
      [animatePixel]
    )

    return (
      <motion.div
        id={id}
        ref={ref}
        className={cn("cursor-pointer-none", className)}
        style={{
          width: `${size}px`,
          height: `${size}px`,
        }}
        initial={{ opacity: 0 }}
        animate={controls}
        exit={{ opacity: 0 }}
      />
    )
  }
)

PixelDot.displayName = "PixelDot"
