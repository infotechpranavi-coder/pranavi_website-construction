'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Check,
  Star,
  Brain,
  Globe,
  Layers,
  Smartphone,
  Wrench,
  Cloud,
  Search,
  Share2,
  Lightbulb,
  Video,
  ShieldCheck,
  Target,
  Landmark,
  Building2,
  User,
} from 'lucide-react'

// Curated Enterprise Banner Slides for Hero Section
const heroSlides = [
  {
    image: '/hero_team_coding.jpg',
    kicker: 'AI SYSTEMS • CUSTOM SOFTWARE • DIGITAL MARKETING',
    title: 'Transforming Enterprises & Government Projects with Scalable Tech',
    desc: 'Engineering resilient cloud microservices, bespoke AI agent systems, and government-grade cryptographic platforms for mission-critical scale.',
    ctaText: 'GET IN TOUCH',
    ctaLink: '/contact',
  },
  {
    image: '/hero_meeting_handshake.jpg',
    kicker: 'AI SYSTEMS • CUSTOM SOFTWARE • CLOUD INFRASTRUCTURE',
    title: 'Engineering Resilient Cloud & Intelligent AI Systems',
    desc: 'Bespoke artificial intelligence pipelines, automated RAG enterprise knowledge systems, and fault-tolerant cloud backends built for high concurrency.',
    ctaText: 'EXPLORE OUR SERVICES',
    ctaLink: '/services',
  },
  {
    image: '/hero_team_strategy.jpg',
    kicker: 'FULL-FUNNEL DIGITAL MARKETING • SEO • BRAND ACCELERATION',
    title: 'Driving Organic Dominance & High-Converting Revenue',
    desc: 'Technical SEO dominance, high-ROI paid search advertising, and programmatic growth engines turning organic traffic into measurable revenue.',
    ctaText: 'VIEW CASE STUDIES',
    ctaLink: '/work',
  },
]

// Government & Private Enterprise Projects for Showcase
export interface ProjectItem {
  id: string
  title: string
  type: 'govt' | 'private'
  typeLabel: string
  client: string
  desc: string
  metrics: string
  image: string
  tech: string[]
  link: string
}

const homepageProjects: ProjectItem[] = [
  {
    id: 'nuhm-pmc',
    title: 'NUHM — Public Dispensary & Urban Health Platform',
    type: 'govt',
    typeLabel: 'GOVERNMENT • PMC',
    client: 'Pune Municipal Corporation (PMC)',
    desc: 'Centralized urban health data exchange and clinic dispensary workflow system connecting 50+ municipal dispensaries with real-time OPD and medicine inventory.',
    metrics: '50+ Dispensaries • 1.2M+ Patient Records',
    image: '/project_nuhm_pmc.jpg',
    tech: ['Next.js 15', 'Node.js', 'PostgreSQL', 'GIS Health Mapping', 'Aadhaar ABHA'],
    link: '/work#nuhm-pmc',
  },
  {
    id: 'sikkim-egov',
    title: 'Sikkim State E-Governance & Citizen Portal',
    type: 'govt',
    typeLabel: 'GOVERNMENT • SIKKIM',
    client: 'Government of Sikkim — IT Department',
    desc: 'Statewide digital administration portal delivering automated citizen certificates, district revenue workflows, and GIS mountain land record verification.',
    metrics: '1.1M+ Digital Certificates • 4 Districts',
    image: '/project_sikkim_egov.jpg',
    tech: ['FastAPI', 'React', 'PostgreSQL GIS', 'DigiLocker API', 'Kubernetes'],
    link: '/work#sikkim-egov',
  },
  {
    id: 'smart-transit',
    title: 'Smart Transit & Municipal Fleet Telematics',
    type: 'govt',
    typeLabel: 'GOVERNMENT PROJECT',
    client: 'Municipal Urban Transport Corporation',
    desc: 'Real-time transit command system tracking 3,200+ municipal transit units with dynamic passenger dispatch, IoT diagnostics, and automated fare validation.',
    metrics: '3,200+ Transit Units • Real-Time GPS',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    tech: ['Node.js', 'Redis Streams', 'MQTT IoT', 'Docker Kubernetes'],
    link: '/work#smart-transit',
  },
  {
    id: 'hrms-payroll-ai',
    title: 'WorkPulse AI — HRMS & Payroll Ecosystem',
    type: 'private',
    typeLabel: 'ENTERPRISE • AI HRMS',
    client: 'WorkPulse Enterprise Ecosystem',
    desc: 'Autonomous AI-powered HRMS suite featuring automated biometric attendance, tax-compliant one-click payroll disbursement, and predictive talent analytics.',
    metrics: '$1.8M Monthly Payroll • 2,485+ Employees',
    image: '/project_hrms_payroll.jpg',
    tech: ['Next.js 15', 'Python AI', 'PostgreSQL', 'Bank API Sync', 'Redis Streams'],
    link: '/work#hrms-payroll-ai',
  },
  {
    id: 'quantumerp-inventory',
    title: 'QuantumERP — Advanced Inventory System',
    type: 'private',
    typeLabel: 'ENTERPRISE • CLOUD ERP',
    client: 'Apex Global Supply Chain & Logistics',
    desc: 'High-velocity, multi-warehouse inventory management and ERP engine with automated SKU replenishment, barcode tracking, and real-time ledger accounting.',
    metrics: '48k+ Active SKUs • 0 Stockout Incidents',
    image: '/project_enterprise_erp.jpg',
    tech: ['Go Microservices', 'Next.js 15', 'Redis Cache', 'Kafka', 'PostgreSQL'],
    link: '/work#quantumerp-inventory',
  },
  {
    id: 'recruitai-job-portal',
    title: 'RecruitAI — Smart Recruiter & Job Portal',
    type: 'private',
    typeLabel: 'ENTERPRISE • AI RECRUITER',
    client: 'TalentScale HR Network',
    desc: 'AI-driven recruiter ATS and high-traffic job board platform with automated candidate resume parsing, skill matching scores, and interview pipeline orchestration.',
    metrics: '3,200+ Applicants/Day • 96% Match Accuracy',
    image: '/project_recruiter_portal.jpg',
    tech: ['Next.js 15', 'FastAPI LLM', 'pgvector', 'Elasticsearch', 'Node.js'],
    link: '/work#recruitai-job-portal',
  },
  {
    id: 'vaultpay',
    title: 'VaultPay — FinTech Payment Orchestrator',
    type: 'private',
    typeLabel: 'ENTERPRISE • FINTECH',
    client: 'VaultPay Global Payments',
    desc: 'Multi-tenant high-throughput settlement engine processing $18M+ monthly volume with sub-200ms latency and multi-gateway failover.',
    metrics: '+$18M Monthly Vol • Sub-200ms Latency',
    image: '/project_vaultpay.png',
    tech: ['Go / NestJS', 'PostgreSQL', 'Stripe API', 'AWS ECS'],
    link: '/work#vaultpay',
  },
  {
    id: 'meditrack',
    title: 'MediTrack — Clinical Telehealth EHR Suite',
    type: 'private',
    typeLabel: 'ENTERPRISE • HEALTHTECH',
    client: 'MediTrack Healthcare Systems',
    desc: 'HIPAA-compliant encrypted telemedicine network connecting 45,000+ active patients and clinicians with zero-latency WebRTC consults.',
    metrics: '45k+ Patients • HIPAA Certified',
    image: '/project_meditrack.png',
    tech: ['Flutter', 'Node.js', 'WebRTC', 'AWS HealthLake'],
    link: '/work#meditrack',
  },
]


export interface ServiceItem {
  id: string
  title: string
  category: 'primary' | 'technologies' | 'marketing'
  categoryLabel: string
  isPrimary?: boolean
  desc: string
  purpose?: string
  tag?: string
  link: string
  chips: string[]
  icon: any
}

// 12 Comprehensive Services - 4 Primary Core + Image Dropdowns (Technologies & Digital Marketing)
const services: ServiceItem[] = [
  // ── 4 PRIMARY CORE SERVICES (Featured) ──
  {
    id: 'ai-systems',
    title: 'AI Based Systems',
    category: 'primary',
    categoryLabel: 'PRIMARY CORE',
    tag: '01 • AUTOMATION',
    isPrimary: true,
    desc: 'Bespoke artificial intelligence pipelines, custom LLM fine-tuning, RAG enterprise knowledge systems, and autonomous agent workflows designed for maximum automation.',
    purpose: 'Autonomous AI agents, custom LLMs & automated RAG pipelines.',
    link: '/services#ai-systems',
    chips: ['LLMs & RAG', 'AI Agents', 'Vector Search'],
    icon: Brain,
  },
  {
    id: 'web-development',
    title: 'Website Development',
    category: 'primary',
    categoryLabel: 'PRIMARY CORE',
    tag: '02 • HIGH CONVERSION',
    isPrimary: true,
    desc: 'High-performance Next.js 15 and React web applications, custom enterprise merchant portals, headless CMS solutions, and responsive web products engineered for speed.',
    purpose: 'High-speed Next.js platforms, client portals & headless CMS.',
    link: '/services#web-development',
    chips: ['Next.js 15', 'Client Portals', 'Headless CMS'],
    icon: Globe,
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    category: 'primary',
    categoryLabel: 'PRIMARY CORE',
    tag: '03 • SCALABILITY',
    isPrimary: true,
    desc: 'Bespoke enterprise software built to exact business logic, modular microservices systems, high-concurrency cloud backends, and robust API integrations with zero technical debt.',
    purpose: 'Bespoke microservices, resilient cloud backends & secure APIs.',
    link: '/services#custom-software',
    chips: ['Microservices', 'Cloud APIs', 'Zero-Debt'],
    icon: Layers,
  },
  {
    id: 'mobile-app',
    title: 'Mobile App',
    category: 'primary',
    categoryLabel: 'PRIMARY CORE',
    tag: '04 • MOBILITY',
    isPrimary: true,
    desc: 'High-velocity cross-platform Flutter and React Native apps alongside native iOS & Android applications with smooth 60fps animations and offline-first SQLite caching.',
    purpose: 'Native iOS & Android apps with offline SQLite sync & fluid UX.',
    link: '/services#mobile-app',
    chips: ['iOS & Android', 'Flutter Apps', 'Offline Sync'],
    icon: Smartphone,
  },

  // ── TECHNOLOGIES & SUPPORT (From Image 1) ──
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    category: 'technologies',
    categoryLabel: 'TECHNOLOGY',
    desc: 'Proactive uptime monitoring, automated security vulnerability patching, speed optimization audits, dependency upgrades, and guaranteed SLA incident support.',
    link: '/services#maintenance',
    chips: ['24/7 Monitoring', 'Security Patches', 'Speed Audits'],
    icon: Wrench,
  },
  {
    id: 'hosting',
    title: 'Hosting Support',
    category: 'technologies',
    categoryLabel: 'TECHNOLOGY',
    desc: 'Managed enterprise cloud hosting across AWS and GCP, Docker & Kubernetes container orchestration, automated backups, SSL encryption, and multi-region failover.',
    link: '/services#hosting',
    chips: ['AWS & GCP Cloud', 'Docker / Kubernetes', '99.99% Uptime'],
    icon: Cloud,
  },

  // ── DIGITAL MARKETING (From Image 2) ──
  {
    id: 'seo',
    title: 'SEO (Search Optimization)',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING',
    desc: 'Technical search engine optimization, keyword ranking dominance, on-page semantic structure, Core Web Vitals engineering, and authority link acquisition.',
    link: '/services#seo',
    chips: ['Technical SEO', 'Keyword Dominance', 'Core Web Vitals'],
    icon: Search,
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING',
    desc: 'Targeted multi-channel brand positioning, viral creative content calendars, influencer outreach syndication, and high-conversion community engagement funnels.',
    link: '/services#smm',
    chips: ['Multi-Channel Strategy', 'Viral Content', 'Audience Growth'],
    icon: Share2,
  },
  {
    id: 'design-thinking',
    title: 'Design Thinking & UI/UX',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING',
    desc: 'User journey mapping, wireframing, interactive high-fidelity clickable Figma prototypes, accessibility compliance, and design token libraries.',
    link: '/services#design-thinking',
    chips: ['Figma Design Tokens', 'User Journey Mapping', 'Clickable Prototypes'],
    icon: Lightbulb,
  },
  {
    id: 'video-production',
    title: 'Video Production',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING',
    desc: 'High-impact corporate brand films, 3D motion graphics, commercial explainer videos, cinematic product showcase animations, and social video reels.',
    link: '/services#video-production',
    chips: ['Corporate Brand Films', '3D Motion Graphics', 'Product Demos'],
    icon: Video,
  },
  {
    id: 'orm',
    title: 'ORM (Reputation Management)',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING',
    desc: 'Proactive brand sentiment monitoring, executive leadership positioning, positive review acceleration pipelines, and PR crisis mitigation strategies.',
    link: '/services#orm',
    chips: ['Brand Sentiment Defense', 'Executive PR', 'Review Strategy'],
    icon: ShieldCheck,
  },
  {
    id: 'google-ads',
    title: 'Google Ads & PPC',
    category: 'marketing',
    categoryLabel: 'DIGITAL MARKETING',
    desc: 'High-ROI paid search advertising, Google Display Network campaigns, smart retargeting funnels, automated bidding algorithms, and precision conversion tracking.',
    link: '/services#google-ads',
    chips: ['High-ROI Search Ads', 'Smart Retargeting', 'Conversion Tracking'],
    icon: Target,
  },
]


// Authentic Testimonials from Enterprise & Public Sector Partners
const testimonials = [
  {
    quote:
      '“Partnering with Pranavi Infotech transformed our digital infrastructure. Their engineering team engineered our enterprise web platform with exceptional speed and security, while their technical SEO strategy increased our qualified inbound pipeline by over 300%. After working with them across multiple milestones since 2018, their dedication and technical rigor are unmatched.”',
    author: 'Rajesh Sharma',
    role: 'Director of Technology, Apex Enterprise Solutions',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    quote:
      '“For our public sector e-governance initiatives, Pranavi Infotech delivered world-class software engineering and strict data security compliance. They satisfied every single government compliance benchmark ahead of schedule with zero security vulnerabilities. Truly an elite IT partner established with deep integrity.”',
    author: 'Anand Verma',
    role: 'Program Director, Public Sector Digital Infrastructure',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    quote:
      '“Pranavi Infotech scaled our financial technology infrastructure across 12 countries to handle peak transactional loads with sub-second latency. Their dual mastery of custom software development and performance digital marketing has accelerated our roadmap by six months.”',
    author: 'Elena Rostova',
    role: 'Chief Strategy Officer, FinCore Global',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
]


// Smooth Scroll-Revealing Component with Cubic-Bezier Transition
function RevealOnScroll({
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

    return () => {
      if (current) observer.unobserve(current)
    }
  }, [])

  const getTransform = () => {
    if (isVisible) return 'translate3d(0, 0, 0) scale(1)'
    switch (direction) {
      case 'up':
        return 'translate3d(0, 32px, 0) scale(1)'
      case 'down':
        return 'translate3d(0, -32px, 0) scale(1)'
      case 'left':
        return 'translate3d(36px, 0, 0) scale(1)'
      case 'right':
        return 'translate3d(-36px, 0, 0) scale(1)'
      case 'scale':
        return 'translate3d(0, 20px, 0) scale(0.96)'
      case 'none':
      default:
        return 'translate3d(0, 0, 0) scale(1)'
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

// Animated Counter that counts up from 0 when it enters the viewport
function CountUp({
  end,
  suffix = '',
  duration = 2000,
  delay = 0,
  style = {},
}: {
  end: number
  suffix?: string
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
    const startVal = 0

    const delayTimer = setTimeout(() => {
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / duration, 1)
        // easeOutExpo
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        setCount(Math.floor(startVal + (end - startVal) * eased))
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
      {count}{suffix}
    </span>
  )
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)
  const [projectTab, setProjectTab] = useState<'all' | 'govt' | 'private'>('all')
  const [heroMounted, setHeroMounted] = useState(false)
  const projectSliderRef = useRef<HTMLDivElement>(null)
  const [sliderIndex, setSliderIndex] = useState(0)

  const primaryServices = services.filter((s) => s.isPrimary)

  const filteredProjects =
    projectTab === 'all'
      ? homepageProjects
      : homepageProjects.filter((p) => p.type === projectTab)

  const handleTabChange = (tab: 'all' | 'govt' | 'private') => {
    setProjectTab(tab)
    setSliderIndex(0)
    if (projectSliderRef.current) {
      projectSliderRef.current.scrollTo({ left: 0, behavior: 'smooth' })
    }
  }

  const scrollProjectSlider = (direction: 'left' | 'right') => {
    if (!projectSliderRef.current) return
    const container = projectSliderRef.current
    const cardEl = container.firstElementChild as HTMLElement | null
    const cardWidth = cardEl ? cardEl.offsetWidth + 24 : 380
    container.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    })
  }

  const handleProjectScroll = () => {
    if (!projectSliderRef.current) return
    const container = projectSliderRef.current
    const cardEl = container.firstElementChild as HTMLElement | null
    const cardWidth = cardEl ? cardEl.offsetWidth + 24 : 380
    const newIdx = Math.round(container.scrollLeft / cardWidth)
    setSliderIndex(Math.min(newIdx, filteredProjects.length - 1))
  }

  const scrollToProjectDot = (idx: number) => {
    if (!projectSliderRef.current) return
    const container = projectSliderRef.current
    const cardEl = container.firstElementChild as HTMLElement | null
    const cardWidth = cardEl ? cardEl.offsetWidth + 24 : 380
    container.scrollTo({
      left: idx * cardWidth,
      behavior: 'smooth',
    })
    setSliderIndex(idx)
  }

  useEffect(() => {
    setHeroMounted(true)
  }, [])

  // Auto-play hero slider every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div style={{ position: 'relative', overflowX: 'clip' }}>
      {/* ── SECTION 1: HERO (STICKY 100VH VIEWPORT WITH FULL-BLEED IMAGE BANNER) ── */}
      <section
        className="hero-viewport-section"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          minHeight: '680px',
          zIndex: 1,
          overflow: 'hidden',
          color: '#FFFFFF',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingTop: 'clamp(85px, 11vh, 120px)',
          paddingBottom: 'clamp(28px, 4vh, 50px)',
        }}
      >
        {/* Full-Bleed Corporate Banner Images with Smooth Cross-Fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
          }}
          aria-hidden="true"
        >
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                inset: 0,
                opacity: activeHeroSlide === idx ? 1 : 0,
                transform: activeHeroSlide === idx ? 'scale(1)' : 'scale(1.05)',
                transition: 'opacity 1s ease-in-out, transform 7s ease-out',
                pointerEvents: 'none',
              }}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center 35%',
                }}
              />
            </div>
          ))}

          {/* Corporate Multi-Stop Navy Overlay for High Contrast and Text Readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(6, 22, 41, 0.95) 0%, rgba(6, 22, 41, 0.84) 45%, rgba(6, 22, 41, 0.52) 80%, rgba(6, 22, 41, 0.72) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(6, 22, 41, 0.35) 0%, transparent 40%, rgba(6, 22, 41, 0.65) 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 70% 55% at 75% 30%, rgba(242, 101, 34, 0.12) 0%, transparent 70%)',
            }}
          />

          {/* Topographic Contour Vector Overlay */}
          <div
            className="hero-contour-pattern"
            style={{ opacity: 0.18 }}
            aria-hidden="true"
          />
        </div>

        <div className="responsive-pad-container" style={{ maxWidth: '1360px', width: '100%', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '820px' }}>
            {/* Top Kicker in Brand Orange */}
            <div
              style={{
                marginBottom: '16px',
                opacity: heroMounted ? 1 : 0,
                transform: heroMounted ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: 800,
                  color: '#F26522',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {heroSlides[activeHeroSlide].kicker}
              </span>
            </div>

            {/* Bold H1 Headline */}
            <h1
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 4.6vw, 56px)',
                fontWeight: 850,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                marginBottom: '20px',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.5)',
                opacity: heroMounted ? 1 : 0,
                transform: heroMounted ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.25s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.25s',
              }}
            >
              {heroSlides[activeHeroSlide].title}
            </h1>

            {/* Concise Supporting Description */}
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.88)',
                fontSize: 'clamp(15px, 1.3vw, 17px)',
                lineHeight: 1.65,
                maxWidth: '660px',
                marginBottom: '32px',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.45)',
                opacity: heroMounted ? 1 : 0,
                transform: heroMounted ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.4s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
              }}
            >
              {heroSlides[activeHeroSlide].desc}
            </p>

            {/* Orange CTA Button & Slide Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                opacity: heroMounted ? 1 : 0,
                transform: heroMounted ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.55s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.55s',
              }}
            >
              <Link href={heroSlides[activeHeroSlide].ctaLink} className="btn-bizzen-lime">
                <span>{heroSlides[activeHeroSlide].ctaText}</span>
                <ArrowRight size={17} />
              </Link>

              {/* Slider Prev / Next Controls */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() =>
                    setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
                  }
                  className="hero-arrow-btn"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.28)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={() =>
                    setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length)
                  }
                  className="hero-arrow-btn"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.28)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                  aria-label="Next Slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Slide Indicator Dots */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '34px',
                opacity: heroMounted ? 1 : 0,
                transform: heroMounted ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.7s, transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
              }}
            >
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveHeroSlide(idx)}
                  style={{
                    width: activeHeroSlide === idx ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: activeHeroSlide === idx ? '#F26522' : 'rgba(255, 255, 255, 0.38)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    padding: 0,
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERLAPPING CURTAIN: ALL SUBSEQUENT SECTIONS SLIDE UP OVER THE STICKY HERO ── */}
      <div
        className="content-overlap-curtain"
        style={{
          position: 'relative',
          zIndex: 10,
          background: '#FFFFFF',
          boxShadow: '0 -24px 60px rgba(6, 22, 41, 0.4)',
          borderTopLeftRadius: '36px',
          borderTopRightRadius: '36px',
        }}
      >
        {/* ── SECTION 2: SERVICES (PRIMARY CORE + TECHNOLOGIES & DIGITAL MARKETING) ── */}
        <section
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(28px, 4vh, 48px) 0',
            background: '#FFFFFF',
            position: 'relative',
          }}
          id="services"
          className="homepage-viewport-section"
        >
          <div className="responsive-pad-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', width: '100%' }}>
            {/* Section Header with Coral Kicker & Line */}
            <RevealOnScroll direction="up" delay={0.1}>
              <div style={{ textAlign: 'center', marginBottom: 'clamp(26px, 3.8vh, 42px)' }}>
                <div style={{ marginBottom: '10px' }}>
                  <span className="kicker-coral">SERVICES</span>
                </div>
                <h2
                  className="bizzen-section-title"
                  style={{ fontSize: 'clamp(22px, 2vw, 30px)', lineHeight: 1.2, marginBottom: '10px', letterSpacing: '-0.02em' }}
                >
                  What We Build &amp; Deliver
                </h2>
                <p
                  style={{
                    color: '#4A5E78',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    maxWidth: '560px',
                    margin: '0 auto',
                    fontWeight: 450,
                  }}
                >
                  Software engineering, AI systems &amp; performance digital marketing — end to end.
                </p>
              </div>
            </RevealOnScroll>

            {/* 4 Premium Primary Core Cards Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
              }}
              className="services-4col-grid"
            >
              {primaryServices.map((item, idx) => {
                const Icon = item.icon
                return (
                  <RevealOnScroll
                    key={item.id}
                    direction="up"
                    delay={0.15 + idx * 0.1}
                    style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                  >
                    <div
                      className="service-card-premium"
                      style={{
                        padding: '22px 20px 18px',
                        borderRadius: '16px',
                        background: '#FFFFFF',
                        border: '1px solid rgba(10, 33, 61, 0.08)',
                        boxShadow: '0 4px 18px rgba(10, 33, 61, 0.03)',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.25s ease',
                        height: '100%',
                      }}
                    >
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        {/* Top Row: Icon + Badge */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginBottom: '12px',
                          }}
                        >
                          <div
                            className="service-icon-box"
                            style={{
                              width: '40px',
                              height: '40px',
                              borderRadius: '10px',
                              background: 'rgba(242, 101, 34, 0.08)',
                              color: '#F26522',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'transform 0.3s ease',
                            }}
                          >
                            <Icon size={20} strokeWidth={2} />
                          </div>
                          <span
                            style={{
                              fontSize: '10px',
                              fontWeight: 800,
                              letterSpacing: '0.06em',
                              padding: '3px 8px',
                              borderRadius: '20px',
                              background: 'rgba(10, 33, 61, 0.06)',
                              color: '#0A213D',
                              fontFamily: 'var(--font-display)',
                            }}
                          >
                            {item.tag || `0${idx + 1} • CORE`}
                          </span>
                        </div>

                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '17px',
                            fontWeight: 800,
                            color: '#0A213D',
                            marginBottom: '8px',
                            letterSpacing: '-0.015em',
                            lineHeight: 1.25,
                          }}
                        >
                          {item.title}
                        </h3>

                        {/* Very short brief: easily understandable purpose & execution */}
                        <p
                          style={{
                            color: '#4A5E78',
                            fontSize: '12.5px',
                            lineHeight: '1.4',
                            marginBottom: '12px',
                            minHeight: '36px',
                          }}
                        >
                          {item.purpose || item.desc}
                        </p>

                        {/* Execution Capabilities Micro-Tags */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                          {item.chips.map((chip, cIdx) => (
                            <span
                              key={cIdx}
                              style={{
                                fontSize: '10.5px',
                                fontWeight: 600,
                                padding: '2.5px 8px',
                                background: '#F8FAFC',
                                borderRadius: '5px',
                                border: '1px solid rgba(226, 232, 240, 0.9)',
                                color: '#0A213D',
                                letterSpacing: '0.01em',
                              }}
                            >
                              {chip}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action: Border Top + Explore Service Link */}
                      <div
                        style={{
                          borderTop: '1px solid rgba(226, 232, 240, 0.8)',
                          paddingTop: '12px',
                          marginTop: 'auto',
                        }}
                      >
                        <Link
                          href={item.link}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontFamily: 'var(--font-display)',
                            fontSize: '12px',
                            fontWeight: 800,
                            color: '#F26522',
                            textDecoration: 'none',
                            letterSpacing: '0.04em',
                            textTransform: 'uppercase',
                            transition: 'color 0.2s ease, gap 0.2s ease',
                          }}
                          className="get-started-link"
                        >
                          <span>EXPLORE SERVICE</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  </RevealOnScroll>
                )
              })}
            </div>

            {/* Simple View All Services Button with Upward Cross Arrow */}
            <RevealOnScroll direction="up" delay={0.4}>
              <div style={{ textAlign: 'center', marginTop: 'clamp(22px, 3.2vh, 32px)' }}>
                <Link
                  href="/services"
                  className="services-view-all-btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#F26522',
                    color: '#FFFFFF',
                    padding: '11px 26px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 700,
                    fontFamily: 'var(--font-display)',
                    textDecoration: 'none',
                    boxShadow: '0 4px 18px rgba(242, 101, 34, 0.28)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <span>View All Services</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </RevealOnScroll>
          </div>
        </section>

      {/* ── SECTION 3: ABOUT US (EXACTLY AS IN SCREENSHOT 3) ── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(32px, 5vh, 60px) 0',
          background: '#FFFFFF',
        }}
        id="about"
        className="homepage-viewport-section"
      >
        <div className="responsive-pad-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', width: '100%' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr',
              gap: 'clamp(36px, 5vw, 64px)',
              alignItems: 'center',
            }}
            className="about-bizzen-grid"
          >
            {/* Left: Professional Executives Team Photo */}
            <RevealOnScroll direction="right" delay={0.1}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(340px, 44vh, 440px)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 48px rgba(10, 33, 61, 0.08)',
                  border: '1px solid rgba(10, 33, 61, 0.08)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Pranavi Infotech - Engineering Team"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </RevealOnScroll>

            {/* Right: Brief Headline, Short Summary, Stats & CTA */}
            <div style={{ maxWidth: '580px' }}>
              <RevealOnScroll direction="up" delay={0.15}>
                {/* Kicker with Line */}
                <div style={{ marginBottom: '12px' }}>
                  <span className="kicker-coral">ABOUT PRANAVI INFOTECH</span>
                </div>

                {/* Main Heading */}
                <h2
                  className="bizzen-section-title"
                  style={{
                    fontSize: 'clamp(26px, 2.6vw, 38px)',
                    lineHeight: 1.18,
                    marginBottom: '16px',
                  }}
                >
                  Engineering Digital Excellence<br />&amp; Trusted Growth Since 2012
                </h2>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.25}>
                {/* Short Brief Summary */}
                <p
                  style={{
                    color: '#4A5E78',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}
                >
                  Founded in 2012 in Mumbai, Pranavi Infotech empowers enterprises, high-growth startups, and government projects with mission-critical custom software, bespoke AI systems, and high-ROI digital marketing solutions.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="none" delay={0.2}>
                {/* Clean 3-Metric Strip */}
                <div
                  className="about-metrics-strip"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '16px',
                    padding: '16px 20px',
                    background: '#F8FAFC',
                    borderRadius: '12px',
                    border: '1px solid rgba(226, 232, 240, 0.9)',
                    marginBottom: '26px',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '26px',
                        fontWeight: 850,
                        color: '#0A213D',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      <CountUp end={12} suffix="+" duration={2600} delay={300} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                      Years Experience
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '26px',
                        fontWeight: 850,
                        color: '#0A213D',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      <CountUp end={75} suffix="+" duration={2800} delay={400} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                      Clients &amp; Govt
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '26px',
                        fontWeight: 850,
                        color: '#F26522',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                      }}
                    >
                      <CountUp end={99} suffix="%" duration={3000} delay={500} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                      Delivery Success
                    </div>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Simple CTA Button to Full About Page */}
              <RevealOnScroll direction="up" delay={0.45}>
                <div>
                  <Link href="/about" className="btn-bizzen-forest">
                    <span>Learn More About Us</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: ACHIEVEMENT STATS BANNER ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(40px, 6vh, 80px) 0',
          color: '#FFFFFF',
          overflow: 'hidden',
          background: '#0A213D',
        }}
        className="homepage-viewport-section"
      >
        {/* Full-bleed Photo Background with Deep Navy Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80"
            alt="Empowering Success for the Biggest Brands"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', filter: 'brightness(0.35)' }}
          />
          {/* Deep Midnight Navy Gradient Veil */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(90deg, rgba(10, 33, 61, 0.95) 0%, rgba(10, 33, 61, 0.88) 50%, rgba(10, 33, 61, 0.95) 100%)',
            }}
          />
        </div>

        <div className="responsive-pad-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          {/* Top Header Block */}
          <RevealOnScroll direction="up" delay={0.1}>
            <div style={{ maxWidth: '780px', marginBottom: '56px' }}>
              <div style={{ marginBottom: '14px' }}>
                <span className="kicker-lime">OUR PROVEN TRACK RECORD</span>
              </div>
              <h2
                className="bizzen-section-title-white"
                style={{ marginBottom: '18px' }}
              >
                Empowering Success for Enterprises<br />&amp; Government Projects
              </h2>
              <p
                style={{
                  color: '#C7DCD6',
                  fontSize: '15px',
                  lineHeight: '1.7',
                  maxWidth: '640px',
                }}
              >
                Established in 2012 in Mumbai, India, Pranavi Infotech engineers mission-critical software, bespoke AI systems, and high-ROI SEO marketing campaigns that deliver measurable performance, bulletproof security, and enduring client trust.
              </p>
            </div>
          </RevealOnScroll>

          {/* Bottom Stats Row Separated by Hairline Divider */}
          <div
            style={{
              borderTop: '1px solid rgba(255, 255, 255, 0.22)',
              paddingTop: '48px',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '40px',
            }}
            className="achievement-3col-grid"
          >
            {/* Stat 1: 2012 Year Established */}
            <RevealOnScroll direction="none" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(52px, 5.5vw, 76px)',
                    fontWeight: 850,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    fontVariantNumeric: 'tabular-nums',
                    minWidth: '4.2ch',
                    display: 'inline-block',
                  }}
                >
                  <CountUp end={2012} duration={3200} delay={200} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: '1.35',
                    maxWidth: '140px',
                  }}
                >
                  Established Year &amp; Continuous Growth
                </div>
              </div>
            </RevealOnScroll>

            {/* Stat 2: 75+ Happy Clients & Govt Projects */}
            <RevealOnScroll direction="none" delay={0.2}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(52px, 5.5vw, 76px)',
                    fontWeight: 850,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    fontVariantNumeric: 'tabular-nums',
                    minWidth: '3.2ch',
                    display: 'inline-block',
                  }}
                >
                  <CountUp end={75} suffix="+" duration={2800} delay={350} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: '1.35',
                    maxWidth: '140px',
                  }}
                >
                  Happy Clients &amp; Govt Projects
                </div>
              </div>
            </RevealOnScroll>

            {/* Stat 3: 150+ Digital Products Shipped */}
            <RevealOnScroll direction="none" delay={0.3}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(52px, 5.5vw, 76px)',
                    fontWeight: 850,
                    color: '#FFFFFF',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                    fontVariantNumeric: 'tabular-nums',
                    minWidth: '3.8ch',
                    display: 'inline-block',
                  }}
                >
                  <CountUp end={150} suffix="+" duration={3000} delay={500} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    lineHeight: '1.35',
                    maxWidth: '140px',
                  }}
                >
                  Digital Products Shipped Worldwide
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>


      {/* ── SECTION 6: PROJECTS SHOWCASE (GOVERNMENT & PRIVATE ENTERPRISE) ── */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(48px, 7vh, 88px) 0',
          background: '#F8FAFC',
          position: 'relative',
        }}
        id="projects"
        className="homepage-viewport-section"
      >
        <div className="responsive-pad-container" style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', width: '100%' }}>
          {/* Section Header with Category Tabs */}
          <RevealOnScroll direction="up" delay={0.1}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                marginBottom: 'clamp(32px, 4.5vh, 48px)',
                flexWrap: 'wrap',
                gap: '24px',
              }}
            >
              <div>
                <div style={{ marginBottom: '10px' }}>
                  <span className="kicker-coral">SELECTED WORK • GOVERNMENT &amp; ENTERPRISE</span>
                </div>
                <h2 className="bizzen-section-title" style={{ marginBottom: 0 }}>
                  High-Impact Systems &amp; Deployments
                </h2>
              </div>

              {/* Right Side: Filter Tabs and Slider Nav Arrows */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  flexWrap: 'wrap',
                }}
              >
                {/* Filter Tabs: All / Government / Private Enterprise */}
                <div
                  className="project-tabs-container"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    background: '#FFFFFF',
                    padding: '4px',
                    borderRadius: '50px',
                    border: '1px solid rgba(10, 33, 61, 0.08)',
                    boxShadow: '0 2px 10px rgba(10, 33, 61, 0.04)',
                    gap: '4px',
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleTabChange('all')}
                    style={{
                      padding: '9px 20px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      background: projectTab === 'all' ? '#0A213D' : 'transparent',
                      color: projectTab === 'all' ? '#FFFFFF' : '#64748B',
                    }}
                  >
                    All Projects ({homepageProjects.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTabChange('govt')}
                    style={{
                      padding: '9px 20px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: projectTab === 'govt' ? '#F26522' : 'transparent',
                      color: projectTab === 'govt' ? '#FFFFFF' : '#64748B',
                    }}
                  >
                    <Landmark size={14} />
                    <span>Government ({homepageProjects.filter((p) => p.type === 'govt').length})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTabChange('private')}
                    style={{
                      padding: '9px 20px',
                      borderRadius: '50px',
                      border: 'none',
                      fontSize: '13px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: projectTab === 'private' ? '#0A213D' : 'transparent',
                      color: projectTab === 'private' ? '#FFFFFF' : '#64748B',
                    }}
                  >
                    <Building2 size={14} />
                    <span>Private Enterprise ({homepageProjects.filter((p) => p.type === 'private').length})</span>
                  </button>
                </div>

                {/* Slider Nav Arrows */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => scrollProjectSlider('left')}
                    aria-label="Previous project"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      border: '1px solid rgba(10, 33, 61, 0.12)',
                      color: '#0A213D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(10, 33, 61, 0.04)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#0A213D'
                      e.currentTarget.style.color = '#FFFFFF'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF'
                      e.currentTarget.style.color = '#0A213D'
                    }}
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollProjectSlider('right')}
                    aria-label="Next project"
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: '#FFFFFF',
                      border: '1px solid rgba(10, 33, 61, 0.12)',
                      color: '#0A213D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(10, 33, 61, 0.04)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F26522'
                      e.currentTarget.style.color = '#FFFFFF'
                      e.currentTarget.style.borderColor = '#F26522'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FFFFFF'
                      e.currentTarget.style.color = '#0A213D'
                      e.currentTarget.style.borderColor = 'rgba(10, 33, 61, 0.12)'
                    }}
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Interactive Project Slider Carousel */}
          <div
            ref={projectSliderRef}
            onScroll={handleProjectScroll}
            className="project-slider-viewport"
            style={{
              display: 'flex',
              gap: '24px',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '16px',
              marginBottom: '20px',
            }}
          >
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="project-slider-card"
                style={{
                  scrollSnapAlign: 'start',
                }}
              >
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    border: '1px solid rgba(10, 33, 61, 0.09)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    boxShadow: '0 4px 20px rgba(10, 33, 61, 0.04)',
                  }}
                  className="project-card-hover"
                >
                  {/* Visual Image Banner with Subtle Zoom on Hover */}
                  <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className="project-img-zoom"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, rgba(10, 33, 61, 0.1) 0%, rgba(10, 33, 61, 0.6) 100%)',
                      }}
                    />

                    {/* Project Type Badge */}
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        left: '14px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: project.type === 'govt' ? '#F26522' : '#0A213D',
                        color: '#FFFFFF',
                        fontSize: '11px',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        padding: '5px 12px',
                        borderRadius: '50px',
                        fontFamily: 'var(--font-display)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
                      }}
                    >
                      {project.type === 'govt' ? <Landmark size={12} /> : <Building2 size={12} />}
                      <span>{project.typeLabel}</span>
                    </div>
                  </div>

                  {/* Card Content - Clean, Rich, Informative */}
                  <div
                    style={{
                      padding: '24px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '16px',
                    }}
                  >
                    <div>
                      {/* Client / Organization Subtitle */}
                      <div
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 750,
                          color: project.type === 'govt' ? '#F26522' : '#64748B',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          marginBottom: '8px',
                        }}
                      >
                        {project.client}
                      </div>

                      {/* Project Title */}
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '18px',
                          fontWeight: 750,
                          color: '#0A213D',
                          lineHeight: 1.35,
                          letterSpacing: '-0.015em',
                          marginBottom: '10px',
                        }}
                      >
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '13.5px',
                          color: '#4A5E78',
                          lineHeight: '1.55',
                          marginBottom: '14px',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {project.desc}
                      </p>

                      {/* Impact Stat Metric Badge */}
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: project.type === 'govt' ? 'rgba(242, 101, 34, 0.08)' : 'rgba(10, 33, 61, 0.05)',
                          color: project.type === 'govt' ? '#F26522' : '#0A213D',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 700,
                          marginBottom: '14px',
                        }}
                      >
                        <ShieldCheck size={14} />
                        <span>{project.metrics}</span>
                      </div>

                      {/* Tech Stack Pills */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {project.tech.map((t, tidx) => (
                          <span
                            key={tidx}
                            style={{
                              fontSize: '11px',
                              fontWeight: 650,
                              background: '#F1F5F9',
                              color: '#334155',
                              padding: '3px 9px',
                              borderRadius: '4px',
                              fontFamily: 'var(--font-display)',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Link with Hover Arrow */}
                    <Link
                      href={project.link}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: '100%',
                        paddingTop: '16px',
                        borderTop: '1px solid rgba(10, 33, 61, 0.06)',
                        color: '#0A213D',
                        fontWeight: 750,
                        fontSize: '13px',
                        letterSpacing: '0.04em',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      className="project-card-action"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowUpRight size={16} className="project-action-arrow" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          {filteredProjects.length > 1 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '8px',
                marginBottom: 'clamp(24px, 3vh, 36px)',
              }}
            >
              {filteredProjects.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => scrollToProjectDot(dotIdx)}
                  aria-label={`Go to project slide ${dotIdx + 1}`}
                  style={{
                    width: sliderIndex === dotIdx ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '50px',
                    background: sliderIndex === dotIdx ? '#F26522' : 'rgba(10, 33, 61, 0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          )}

          {/* Minimalist Executive View All Pill */}
          <RevealOnScroll direction="up" delay={0.35}>
            <div style={{ textAlign: 'center' }}>
              <Link
                href="/work"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#FFFFFF',
                  color: '#0A213D',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  border: '1px solid rgba(10, 33, 61, 0.1)',
                  boxShadow: '0 2px 12px rgba(10, 33, 61, 0.04)',
                  fontSize: '13px',
                  fontWeight: 750,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease',
                }}
                className="projects-view-all-pill"
              >
                <span>EXPLORE ALL PROJECTS &amp; CASE STUDIES</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── SECTION 8: TESTIMONIALS ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(40px, 6vh, 80px) 0',
          background: '#FFFFFF',
          overflow: 'hidden',
        }}
        id="testimonials"
        className="homepage-viewport-section"
      >
        {/* World Map Dotted Pattern Background from Screenshot 3 */}
        <div className="testimonial-world-pattern" aria-hidden="true" />

        <div className="responsive-pad-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          {/* Left & Right Navigation Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            {/* Left Arrow Button */}
            <button
              onClick={handlePrevTestimonial}
              className="testimonial-arrow-btn"
              aria-label="Previous Testimonial"
              style={{ flexShrink: 0 }}
            >
              <ArrowLeft size={18} />
            </button>

            {/* Center Content */}
            <div style={{ flex: 1, maxWidth: '880px', margin: '0 auto', textAlign: 'center', padding: '0 20px' }}>
              {/* Rotating Circular Text Badge with Center Photo & Quote */}
              <RevealOnScroll direction="scale" delay={0.1}>
                <div style={{ position: 'relative', width: '130px', height: '130px', margin: '0 auto 32px' }}>
                  <svg
                    className="spin-badge-text"
                    width="130"
                    height="130"
                    viewBox="0 0 130 130"
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <defs>
                      <path id="circleTextPath" d="M 65, 65 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" />
                    </defs>
                    <text
                      fill="#0A213D"
                      fontSize="9.8"
                      fontWeight="750"
                      letterSpacing="2.8px"
                      style={{ textTransform: 'uppercase' }}
                    >
                      <textPath href="#circleTextPath" startOffset="0%">
                        • PRANAVI INFOTECH • WHAT PEOPLE SAY •
                      </textPath>
                    </text>
                  </svg>

                  {/* Inner Circular User Icon with Quote Mark */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0A213D 0%, #1a3a5c 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(10, 33, 61, 0.25)',
                      flexDirection: 'column',
                      gap: '2px',
                    }}
                  >
                    <User size={24} color="rgba(255,255,255,0.85)" strokeWidth={1.5} />
                    <span
                      style={{
                        color: '#F26522',
                        fontSize: '18px',
                        fontFamily: 'serif',
                        fontWeight: 900,
                        lineHeight: 1,
                        marginTop: '-2px',
                      }}
                    >
                      “
                    </span>
                  </div>
                </div>
              </RevealOnScroll>

              {/* Quote Text & Stars */}
              <RevealOnScroll direction="up" delay={0.22}>
                <p
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'clamp(15px, 1.6vw, 18px)',
                    color: '#1E2F2B',
                    lineHeight: '1.75',
                    fontWeight: 500,
                    marginBottom: '26px',
                  }}
                >
                  {testimonials[currentTestimonial].quote}
                </p>

                {/* 5 Orange Stars */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '6px',
                    color: '#F26522',
                    marginBottom: '24px',
                  }}
                >
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ fontSize: '20px', lineHeight: 1 }}>★</span>
                  ))}
                </div>
              </RevealOnScroll>

              {/* Author Info with Square Photo */}
              <RevealOnScroll direction="up" delay={0.34}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '14px',
                    textAlign: 'left',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #0A213D 0%, #1a3a5c 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(10, 33, 61, 0.18)',
                    }}
                  >
                    <User size={22} color="rgba(255,255,255,0.9)" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '16.5px',
                        fontWeight: 800,
                        color: '#0A213D',
                      }}
                    >
                      {testimonials[currentTestimonial].author}
                    </div>
                    <div
                      style={{
                        fontSize: '13px',
                        color: '#718681',
                        fontWeight: 500,
                      }}
                    >
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={handleNextTestimonial}
              className="testimonial-arrow-btn"
              aria-label="Next Testimonial"
              style={{ flexShrink: 0 }}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>



      {/* Close content-overlap-curtain */}
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 900px), (max-height: 720px) {
          .homepage-viewport-section {
            min-height: auto !important;
            padding-top: 56px !important;
            padding-bottom: 56px !important;
          }
        }
        @media (max-height: 660px) {
          .hero-viewport-section {
            height: auto !important;
            min-height: 100vh !important;
            position: relative !important;
            padding-top: 110px !important;
            padding-bottom: 60px !important;
          }
        }
        @media (max-width: 900px) {
          .hero-viewport-section {
            height: auto !important;
            min-height: 100vh !important;
            position: relative !important;
            padding-top: 115px !important;
            padding-bottom: 60px !important;
          }
          .content-overlap-curtain {
            border-top-left-radius: 24px !important;
            border-top-right-radius: 24px !important;
          }
          .about-bizzen-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .achievement-3col-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .homepage-projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
        .service-card-premium {
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .service-card-premium:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 36px rgba(10, 33, 61, 0.09) !important;
          border-color: rgba(242, 101, 34, 0.35) !important;
        }
        .service-card-premium:hover .service-icon-box {
          transform: scale(1.08) rotate(-3deg);
          background: #F26522 !important;
          color: #FFFFFF !important;
        }
        .get-started-link:hover {
          color: #EB5A3C !important;
          gap: 12px !important;
        }
        .project-card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(10, 33, 61, 0.09) !important;
          border-color: rgba(242, 101, 34, 0.28) !important;
        }
        .project-img-zoom {
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) !important;
        }
        .project-card-hover:hover .project-img-zoom {
          transform: scale(1.05);
        }
        .project-card-action:hover {
          color: #F26522 !important;
        }
        .project-card-action:hover svg {
          transform: translate(2px, -2px);
          transition: transform 0.2s ease;
        }
        .projects-view-all-pill:hover {
          background: #0A213D !important;
          color: #FFFFFF !important;
          border-color: #0A213D !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(10, 33, 61, 0.16) !important;
        }
        .projects-view-all-pill:hover svg {
          transform: translateX(3px);
          transition: transform 0.2s ease;
        }
        .services-view-all-btn:hover {
          background: #0A213D !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(10, 33, 61, 0.25) !important;
        }
        .services-view-all-btn:hover svg {
          transform: translate(2px, -2px);
          transition: transform 0.2s ease;
        }
        @media (max-width: 1024px) {
          .services-4col-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .hero-viewport-section {
            padding-top: 100px !important;
            padding-bottom: 48px !important;
          }
          .homepage-viewport-section {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          .services-4col-grid {
            grid-template-columns: 1fr !important;
          }
          .project-tabs-container {
            display: flex !important;
            flex-wrap: wrap !important;
            border-radius: 12px !important;
            width: 100% !important;
            padding: 4px !important;
            justify-content: center !important;
          }
          .project-tabs-container button {
            flex: 1 1 auto !important;
            padding: 8px 12px !important;
            font-size: 12px !important;
            justify-content: center !important;
          }
          .testimonial-arrow-btn {
            width: 38px !important;
            height: 38px !important;
          }
          .about-metrics-strip {
            gap: 8px !important;
            padding: 12px 10px !important;
          }
        }
        @media (max-width: 480px) {
          .hero-viewport-section {
            padding-top: 92px !important;
            padding-bottom: 36px !important;
          }
          .homepage-viewport-section {
            padding-top: 40px !important;
            padding-bottom: 40px !important;
          }
          .projects-view-all-pill {
            padding: 10px 18px !important;
            font-size: 11.5px !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  )
}
