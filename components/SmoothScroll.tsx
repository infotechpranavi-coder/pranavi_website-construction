'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function SmoothScroll() {
  useEffect(() => {
    // Initialize Lenis for luxurious, calm, slow momentum scrolling
    const lenis = new Lenis({
      duration: 1.8, // 1.8s duration for slower, weighted, cinematic scroll glide
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth exponential deceleration curve
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.8, // dampened wheel speed so it doesn't fly abruptly
      touchMultiplier: 1.2,
      infinite: false,
    })

    // Expose lenis globally for anchor links and scroll-to-top buttons
    ;(window as any).lenis = lenis

    let animationFrameId: number

    function raf(time: number) {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    // Smoothly and slowly scroll internal anchor links (e.g. #projects, #services)
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (href && href.startsWith('#') && href.length > 1) {
        const el = document.querySelector(href)
        if (el) {
          e.preventDefault()
          lenis.scrollTo(el as HTMLElement, {
            offset: -80, // account for navbar
            duration: 2.0,
          })
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
      delete (window as any).lenis
    }
  }, [])

  return null
}
