'use client'
import { useState, useEffect, useRef } from 'react'

// ── REVEAL ON SCROLL ─────────────────────────────────────────
export function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.75,
  className = '',
  style = {},
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
  duration?: number
  className?: string
  style?: React.CSSProperties
}) {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    )
    const current = domRef.current
    if (current) observer.observe(current)
    return () => { if (current) observer.unobserve(current) }
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)'
    switch (direction) {
      case 'up':    return 'translate3d(0, 36px, 0) scale(1)'
      case 'down':  return 'translate3d(0, -36px, 0) scale(1)'
      case 'left':  return 'translate3d(40px, 0, 0) scale(1)'
      case 'right': return 'translate3d(-40px, 0, 0) scale(1)'
      case 'scale': return 'translate3d(0, 20px, 0) scale(0.96)'
      default:      return 'translate3d(0, 0, 0) scale(1)'
    }
  }

  return (
    <div
      ref={domRef}
      className={className}
      style={{
        ...style,
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}

// ── COUNT UP ─────────────────────────────────────────────────
export function CountUp({
  end,
  suffix = '',
  prefix = '',
  duration = 2800,
  delay = 0,
  style = {},
}: {
  end: number
  suffix?: string
  prefix?: string
  duration?: number
  delay?: number
  style?: React.CSSProperties
}) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const domRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setCount(end)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            setStarted(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    const el = domRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [end, started])

  useEffect(() => {
    if (!started) return
    let startTime: number | null = null
    const delayTimer = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        // easeOutExpo – slow, dramatic finish
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(eased * end))
        if (progress < 1) requestAnimationFrame(step)
        else setCount(end)
      }
      requestAnimationFrame(step)
    }, delay)
    return () => clearTimeout(delayTimer)
  }, [started, end, duration, delay])

  return (
    <span
      ref={domRef}
      style={{
        fontVariantNumeric: 'tabular-nums',
        display: 'inline-block',
        ...style,
      }}
    >
      {prefix}{count}{suffix}
    </span>
  )
}
