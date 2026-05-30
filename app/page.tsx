'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight, Globe, Smartphone, Cloud, Palette, Check,
  Star, Quote, BarChart3, Users, Award, ShieldCheck, ChevronRight,
  Cpu, Database, Activity, CreditCard, ShoppingBag, Sparkles, Send, Sparkle,
  Zap, MessageSquare, Rocket, Target
} from 'lucide-react'

// --- Showcase Projects Data (Business Outcome Focused) ---
const portfolioProjects = [
  {
    id: 'vaultpay',
    name: 'VaultPay Payment Gateway',
    client: 'FinVault Inc.',
    tag: 'FinTech',
    desc: 'A robust global payment platform built to automate high-volume settlements, reduce transaction costs, and optimize routing across banking networks.',
    metricVal: '+40%',
    metricLabel: 'Processing Speedup',
    outcomes: ['Processed over $45M in transactions', 'Reduced processing overhead by 18%', 'Active in 24 global markets'],
    img: '/project_vaultpay.png'
  },
  {
    id: 'meditrack',
    name: 'MediTrack Patient Portal',
    client: 'HealthBridge Regional',
    tag: 'HealthTech',
    desc: 'An secure clinical dashboard that simplifies patient care telemetry, unifies health records, and facilitates instant doctor-patient communications.',
    metricVal: '12K+',
    metricLabel: 'Active Clinicians',
    outcomes: ['HIPAA-compliant cloud hosting', 'Reduced patient onboarding cycle by 35%', 'Integrates with major hospital EHRs'],
    img: '/project_meditrack.png'
  },
  {
    id: 'cartflow',
    name: 'CartFlow SaaS Platform',
    client: 'CartFlow Labs',
    tag: 'E-Commerce',
    desc: 'A headless e-commerce storefront creator that scales to thousands of items with low page load speeds, boosting checkout completion rates.',
    metricVal: '3.4x',
    metricLabel: 'Conversion Boost',
    outcomes: ['Supports 100K+ concurrent checkouts', 'Dynamic inventory intelligence systems', 'Reduced bounce rates by 22%'],
    img: '/project_cartflow.png'
  }
]


// --- Visual Mockup Components for Services ---
const WebDashboardMockup = () => (
  <div style={{ background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '12px', padding: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)', display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(15,23,42,0.05)', paddingBottom: '8px' }}>
      <div style={{ display: 'flex', gap: '4px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#F59E0B' }} />
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} />
      </div>
      <span style={{ fontSize: '10px', color: '#64748B', fontWeight: 600 }}>admin.pranaviinfotech.com</span>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '10px', flex: 1 }}>
      <div style={{ background: '#F8FAFC', borderRadius: '6px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <div style={{ height: '8px', background: '#E2E8F0', borderRadius: '4px', width: '80%' }} />
        <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '4px', width: '90%' }} />
        <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '4px', width: '60%' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyItems: 'space-between', gap: '6px' }}>
          <div style={{ flex: 1, height: '24px', background: 'rgba(59,130,246,0.05)', border: '1px solid rgba(59,130,246,0.1)', borderRadius: '6px', padding: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ height: '4px', background: '#3B82F6', borderRadius: '2px', width: '50%' }} />
          </div>
          <div style={{ flex: 1, height: '24px', background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.1)', borderRadius: '6px', padding: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ height: '4px', background: '#10B981', borderRadius: '2px', width: '70%' }} />
          </div>
        </div>
        <div style={{ flex: 1, background: '#F8FAFC', borderRadius: '6px', padding: '8px', position: 'relative', overflow: 'hidden' }}>
          <svg width="100%" height="100%" viewBox="0 0 100 40" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0, left: 0 }}>
            <path d="M 0 40 L 20 25 L 40 30 L 60 15 L 80 20 L 100 5 L 100 40 Z" fill="rgba(59,130,246,0.04)" />
            <path d="M 0 40 L 20 25 L 40 30 L 60 15 L 80 20 L 100 5" fill="none" stroke="#3B82F6" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  </div>
)

const MobileAppMockup = () => (
  <div style={{ background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '24px', padding: '10px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)', width: '130px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '8px' }}>
    <div style={{ width: '40px', height: '4px', background: '#E2E8F0', borderRadius: '10px', margin: '0 auto 4px' }} />
    <div style={{ height: '20px', background: 'linear-gradient(135deg,#3B82F6,#1D4ED8)', borderRadius: '8px', padding: '4px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
      <div style={{ width: '25px', height: '4px', background: 'white', borderRadius: '2px' }} />
    </div>
    <div style={{ background: '#F8FAFC', borderRadius: '10px', padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <div style={{ height: '6px', background: '#E2E8F0', borderRadius: '2px', width: '40%' }} />
      <div style={{ height: '18px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.03)', borderRadius: '4px', padding: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#EF4444' }} />
        <div style={{ flex: 1, height: '3px', background: '#F1F5F9', borderRadius: '1px' }} />
      </div>
      <div style={{ height: '18px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.03)', borderRadius: '4px', padding: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }} />
        <div style={{ flex: 1, height: '3px', background: '#F1F5F9', borderRadius: '1px' }} />
      </div>
    </div>
  </div>
)

const DesignSystemMockup = () => {
  const [toggle, setToggle] = useState(true)
  return (
    <div style={{ background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>UI Component Kit</span>
        <button
          onClick={() => setToggle(!toggle)}
          style={{ width: '32px', height: '16px', borderRadius: '100px', background: toggle ? '#3B82F6' : '#E2E8F0', border: 'none', cursor: 'pointer', position: 'relative', padding: 0 }}
        >
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'white', position: 'absolute', top: '2px', left: toggle ? '18px' : '2px', transition: 'left 0.2s' }} />
        </button>
      </div>
      <div style={{ display: 'flex', gap: '6px' }}>
        <span style={{ flex: 1, height: '24px', background: '#3B82F6', borderRadius: '6px', color: 'white', fontSize: '9px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Save</span>
        <span style={{ flex: 1, height: '24px', border: '1px solid rgba(15,23,42,0.1)', borderRadius: '6px', color: '#475569', fontSize: '9px', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Cancel</span>
      </div>
      <div style={{ height: '6px', background: '#F1F5F9', borderRadius: '100px', overflow: 'hidden' }}>
        <div style={{ width: '70%', height: '100%', background: '#10B981' }} />
      </div>
    </div>
  )
}

const CloudArchitectureMockup = () => (
  <div style={{ background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Regions & CDN</span>
      <span style={{ fontSize: '10px', color: '#10B981', fontWeight: 700 }}>99.99%</span>
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', padding: '4px 0' }}>
      {['US-East', 'EU-West', 'AP-South'].map((r, i) => (
        <div key={r} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? '#3B82F6' : '#10B981', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: -2, border: '1px solid currentColor', borderRadius: '50%', animation: 'ping 2s infinite' }} />
          </div>
          <span style={{ fontSize: '8px', color: '#64748B', fontFamily: 'var(--font-mono)' }}>{r}</span>
        </div>
      ))}
    </div>
  </div>
)

// --- Slideshow Data inside Hero Section with Generated Tech Assets ---
const slides = [
  {
    title: 'Web & SaaS',
    titleAccent: 'Engineering',
    img: '/hero_tech_dashboard.png'
  },
  {
    title: 'Mobile App',
    titleAccent: 'Development',
    img: '/hero_mobile_art.png'
  },
  {
    title: 'Cloud Scale',
    titleAccent: 'Integration',
    img: '/hero_cloud_pinnacle.png'
  }
]

// --- Detailed Services Config with Custom Glow Accents ---
const servicesList = [
  {
    title: 'Web & SaaS Engineering',
    desc: 'High-performance web platforms and multi-tenant SaaS systems.',
    tags: ['React & Next.js', 'TypeScript', 'Node.js'],
    icon: <Globe size={24} />,
    glowColor: 'rgba(59, 130, 246, 0.12)', // Blue glow shadow
    borderColor: 'rgba(59, 130, 246, 0.25)',
    iconBg: 'rgba(59, 130, 246, 0.08)',
    iconColor: '#3B82F6',
  },
  {
    title: 'Mobile Development',
    desc: 'Responsive iOS and Android application builds.',
    tags: ['React Native', 'Flutter', 'iOS & Android'],
    icon: <Smartphone size={24} />,
    glowColor: 'rgba(16, 185, 129, 0.12)', // Emerald glow shadow
    borderColor: 'rgba(16, 185, 129, 0.25)',
    iconBg: 'rgba(16, 185, 129, 0.08)',
    iconColor: '#10B981',
  },
  {
    title: 'Product Design & UX',
    desc: 'Figma prototypes and unified design systems.',
    tags: ['Figma', 'UI/UX Design', 'Design Systems'],
    icon: <Palette size={24} />,
    glowColor: 'rgba(139, 92, 246, 0.12)', // Purple glow shadow
    borderColor: 'rgba(139, 92, 246, 0.25)',
    iconBg: 'rgba(139, 92, 246, 0.08)',
    iconColor: '#8B5CF6',
  },
  {
    title: 'Cloud Scale & Integration',
    desc: 'Automated deployment pipelines and server architectures.',
    tags: ['AWS & GCP', 'Docker Containers', 'CI/CD Pipelines'],
    icon: <Cloud size={24} />,
    glowColor: 'rgba(239, 68, 68, 0.12)', // Red glow shadow
    borderColor: 'rgba(239, 68, 68, 0.25)',
    iconBg: 'rgba(239, 68, 68, 0.08)',
    iconColor: '#EF4444',
  },
  {
    title: 'AI & Intelligent Systems',
    desc: 'Integrating neural pipelines and custom LLM solutions.',
    tags: ['OpenAI API', 'LangChain', 'Python AI Models'],
    icon: <Cpu size={24} />,
    glowColor: 'rgba(245, 158, 11, 0.12)', // Amber glow shadow
    borderColor: 'rgba(245, 158, 11, 0.25)',
    iconBg: 'rgba(245, 158, 11, 0.08)',
    iconColor: '#F59E0B',
  },
  {
    title: 'Data Platforms & BI',
    desc: 'Real-time data warehousing and analytics dashboards.',
    tags: ['Snowflake DB', 'Kafka Streams', 'Apache Spark'],
    icon: <Database size={24} />,
    glowColor: 'rgba(6, 182, 212, 0.12)', // Cyan glow shadow
    borderColor: 'rgba(6, 182, 212, 0.25)',
    iconBg: 'rgba(6, 182, 212, 0.08)',
    iconColor: '#06B6D4',
  }
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeProj, setActiveProj] = useState('vaultpay')
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [inquirySent, setInquirySent] = useState(false)
  const [email, setEmail] = useState('')
  const [selectedTag, setSelectedTag] = useState('SaaS Platform')

  // Monitor Scroll Progress to control Hero Dimensions smoothly via requestAnimationFrame
  useEffect(() => {
    let ticking = false
    
    const updateHeroStyles = () => {
      const scrollY = window.scrollY
      const progress = Math.min(scrollY / 400, 1)
      
      if (heroRef.current) {
        heroRef.current.style.width = `${100 - (progress * 8)}%`
        heroRef.current.style.borderRadius = `${progress * 32}px`
        heroRef.current.style.transform = `scale(${1 - (progress * 0.03)})`
        heroRef.current.style.marginTop = `${progress * 24}px`
        heroRef.current.style.boxShadow = progress > 0 ? '0 30px 60px rgba(15, 23, 42, 0.15)' : 'none'
      }
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeroStyles)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateHeroStyles()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Rotate Hero Slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !email.includes('@')) return
    setInquirySent(true)
    setTimeout(() => {
      setInquirySent(false)
      setEmail('')
    }, 4500)
  }

  const selectedProject = portfolioProjects.find(p => p.id === activeProj) || portfolioProjects[0]

  return (
    <div style={{ background: '#F8FAFC', width: '100%', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION: Full viewport height with scroll-driven resizing */}
      <section style={{ width: '100%', background: '#F8FAFC', position: 'relative', zIndex: 10 }}>
        <div
          ref={heroRef}
          style={{
            width: '100%',
            borderRadius: '0px',
            transform: 'scale(1)',
            marginTop: '0px',
            marginRight: 'auto',
            marginLeft: 'auto',
            height: '100vh',
            minHeight: '680px',
            position: 'relative',
            overflow: 'hidden',
            transition: 'width 0.15s ease-out, border-radius 0.15s ease-out, transform 0.15s ease-out, margin-top 0.15s ease-out, box-shadow 0.3s ease',
          }}
        >
          {/* Active Slides Container */}
          {slides.map((slide, idx) => {
            const active = idx === currentSlide
            return (
              <div
                key={idx}
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(to right, rgba(9, 13, 22, 0.94) 35%, rgba(9, 13, 22, 0.4) 100%), url(${slide.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: active ? 1 : 0,
                  visibility: active ? 'visible' : 'hidden',
                  transition: 'opacity 0.8s ease-in-out, visibility 0.8s ease-in-out',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#FFFFFF',
                  padding: '0 8%',
                }}
              >
                {/* Visual grid line detail */}
                <div className="grid-bg" style={{ opacity: 0.04 }} />

                <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center', position: 'relative', zIndex: 10, textAlign: 'center' }}>
                  
                  {/* High-End Serif Title */}
                  <h1 style={{ fontSize: 'clamp(56px, 8vw, 110px)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '900px' }}>
                    {slide.title} <br />
                    <span style={{ background: 'linear-gradient(135deg, #FFFFFF 30%, #F59E0B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontStyle: 'italic', fontWeight: 300 }}>{slide.titleAccent}</span>
                  </h1>

                </div>
              </div>
            )
          })}

          {/* Central Bottom Index Indicator (e.g. 01 / 03) */}
          <div style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', zIndex: 20, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700, letterSpacing: '0.05em' }}>
            0{currentSlide + 1} / 0{slides.length}
          </div>

          {/* Bottom Right Pagination Dots */}
          <div style={{ position: 'absolute', bottom: '32px', right: '8%', zIndex: 20, display: 'flex', gap: '8px' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                style={{
                  width: idx === currentSlide ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '100px',
                  background: idx === currentSlide ? '#F59E0B' : 'rgba(255,255,255,0.35)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease'
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* 2. TRUSTED LOGO CLOUD BARS */}
      <section style={{ padding: '56px 24px', background: '#F8FAFC', borderBottom: '1px solid rgba(15,23,42,0.04)', position: 'relative', zIndex: 11 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#1D4ED8', textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)' }}>// Trusted Partners</span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, rgba(29,78,216,0.1), transparent)' }} />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
            {[
              { name: 'FinVault', icon: <CreditCard size={16} />, desc: 'High-Volume FinTech' },
              { name: 'HealthBridge', icon: <Activity size={16} />, desc: 'Clinical Care Portal' },
              { name: 'CartFlow SaaS', icon: <ShoppingBag size={16} />, desc: 'Headless Checkout' },
              { name: 'Nova Retail', icon: <Sparkles size={16} />, desc: 'Dynamic Commerce' },
              { name: 'TrustBank', icon: <ShieldCheck size={16} />, desc: 'Enterprise Security' }
            ].map((partner) => (
              <div
                key={partner.name}
                className="glass-partner-capsule"
              >
                <div style={{ color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {partner.icon}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.01em' }}>{partner.name}</span>
                  <span style={{ fontSize: '9px', fontWeight: 600, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.02em' }}>{partner.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.5. COMPANY OVERVIEW SECTION */}
      <section style={{ padding: '110px 24px', background: '#FFFFFF', borderBottom: '1px solid rgba(15,23,42,0.04)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" style={{ opacity: 0.01 }} />
        
        {/* Soft Background Radial Light */}
        <div style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)', top: '10%', right: '5%', position: 'absolute', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '64px', alignItems: 'center', position: 'relative', zIndex: 5 }}>
          
          {/* Left Side: Header and Leadership Quote Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div className="pulsing-node-dot" style={{ backgroundColor: '#1D4ED8' }} />
                <p className="section-label" style={{ margin: 0 }}>Corporate Identity</p>
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', fontWeight: 900, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                A technology partner <span className="gradient-text">focused on outcomes</span>
              </h2>
              <p style={{ fontSize: '16.5px', color: '#475569', fontWeight: 500, lineHeight: '1.6' }}>
                Pranavi Infotech works with organizations to design, develop, and manage technology solutions that solve real-world challenges.
              </p>
            </div>

            {/* Leadership Quote Block */}
            <div style={{ 
              background: 'linear-gradient(135deg, rgba(29, 78, 216, 0.02) 0%, rgba(59, 130, 246, 0.02) 100%)', 
              borderLeft: '4px solid #1D4ED8',
              borderRadius: '0 16px 16px 0', 
              padding: '24px', 
              boxShadow: '0 4px 20px rgba(0,0,0,0.01)',
              position: 'relative'
            }}>
              <Quote size={40} style={{ color: 'rgba(29, 78, 216, 0.08)', position: 'absolute', top: '12px', right: '16px' }} />
              <p style={{ color: '#334155', fontSize: '14.5px', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '16px', fontWeight: 500 }}>
                "We understand that technology is not just about development; it is about enabling businesses to operate efficiently, make informed decisions, and stay competitive."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #1D4ED8, #3B82F6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontWeight: 700, fontSize: '12px' }}>PI</div>
                <div>
                  <h4 style={{ fontSize: '13px', fontWeight: 700, color: '#0F172A' }}>Executive Leadership Team</h4>
                  <p style={{ fontSize: '10px', color: '#64748B', fontWeight: 600, textTransform: 'uppercase' }}>Pranavi Infotech Group</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Bento Grid of Core Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                title: 'Business-First Engineering',
                desc: 'Our work unifies strategic product planning with high-performance programming. We ensure every line of code aligns with commercial value and customer retention.',
                icon: <BarChart3 size={20} />,
                color: '#1D4ED8',
                bg: 'rgba(29, 78, 216, 0.04)'
              },
              {
                title: 'Scalability & Security',
                desc: 'We construct secure clinical gateways, HIPAA-compliant patient management, and highly optimized payment backends capable of processing tens of millions in volume.',
                icon: <ShieldCheck size={20} />,
                color: '#10B981',
                bg: 'rgba(16, 185, 129, 0.04)'
              },
              {
                title: 'Long-Term Collaboration',
                desc: 'We focus on building resilient partnerships. Through transparent progress reporting, clear documentation, and daily updates, we operate as a direct extension of your team.',
                icon: <Users size={20} />,
                color: '#8B5CF6',
                bg: 'rgba(139, 92, 246, 0.04)'
              }
            ].map((pillar, idx) => (
              <div 
                key={idx}
                className="premium-bento-card"
                style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}
              >
                <div style={{ 
                  width: '40px', 
                  height: '40px', 
                  borderRadius: '10px', 
                  background: pillar.bg, 
                  color: pillar.color,
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '16.5px', fontWeight: 800, color: '#0F172A', marginBottom: '6px', letterSpacing: '-0.01em' }}>{pillar.title}</h3>
                  <p style={{ fontSize: '13.5px', color: '#475569', lineHeight: '1.6', margin: 0 }}>{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CORE SERVICES SHOWCASE with Dynamic Glowing Cards & Backdrops */}
      <section id="services-grid" style={{ padding: '110px 24px', background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
        
        {/* Soft Background Mesh Blobs */}
        <div className="mesh-blob" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)', top: '5%', left: '-15%', position: 'absolute', pointerEvents: 'none' }} />
        <div className="mesh-blob" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.03) 0%, transparent 70%)', bottom: '15%', right: '-10%', position: 'absolute', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
          
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div className="pulsing-node-dot" style={{ backgroundColor: '#3B82F6' }} />
              <p className="section-label" style={{ margin: 0 }}>Our Artistry & Capabilities</p>
            </div>
            <h2 style={{ fontSize: 'clamp(32px,4.5vw,48px)', fontWeight: 900, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>Services We <span className="gradient-text">Provide</span></h2>
            <p style={{ color: '#475569', fontSize: '16.5px', maxWidth: '550px', margin: '0 auto', lineHeight: '1.6' }}>We integrate robust programming with clean UX design to launch enterprise-grade software products.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px' }}>
            {[
              {
                ...servicesList[0],
                visual: <WebDashboardMockup />
              },
              {
                ...servicesList[1],
                visual: <MobileAppMockup />
              },
              {
                ...servicesList[2],
                visual: <DesignSystemMockup />
              },
              {
                ...servicesList[3],
                visual: <CloudArchitectureMockup />
              },
              {
                ...servicesList[4],
                visual: (
                  <div style={{ background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Neural Pipeline</span>
                      <span style={{ fontSize: '10px', color: '#F59E0B', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}><Sparkle size={10} /> Active</span>
                    </div>
                    <div style={{ background: '#F8FAFC', borderRadius: '6px', padding: '10px', fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#334155', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', gap: '6px', color: '#64748B' }}>
                        <span>&gt;</span>
                        <span style={{ color: '#1D4ED8' }}>import</span>
                        <span>openai_models</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px', color: '#64748B' }}>
                        <span>&gt;</span>
                        <span>pipeline.generate(context)</span>
                      </div>
                      <div style={{ color: '#10B981', marginTop: '4px' }}>✓ Output streaming: 142 tokens/sec</div>
                    </div>
                  </div>
                )
              },
              {
                ...servicesList[5],
                visual: (
                  <div style={{ background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#64748B', textTransform: 'uppercase' }}>Metrics & Analytics</span>
                      <span style={{ fontSize: '10px', color: '#06B6D4', fontWeight: 700 }}>Real-time</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '48px', paddingBottom: '4px', borderBottom: '1px solid rgba(0,0,0,0.04)' }}>
                      {[40, 75, 55, 90, 65, 80].map((h, i) => (
                        <div key={i} style={{ width: '8px', height: `${h}%`, background: 'linear-gradient(to top, #06B6D4, #3B82F6)', borderRadius: '20px 20px 0 0' }} />
                      ))}
                    </div>
                  </div>
                )
              }
            ].map((service, idx) => {
              const isHovered = hoveredCard === idx
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="glass-card"
                  style={{
                    padding: '32px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '380px',
                    borderRadius: '24px',
                    border: `1px solid ${isHovered ? service.iconColor : 'rgba(15, 23, 42, 0.05)'}`,
                    boxShadow: isHovered 
                      ? `0 24px 48px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(59, 130, 246, 0.03)` 
                      : '0 4px 20px rgba(15, 23, 42, 0.015)',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    background: isHovered 
                      ? 'linear-gradient(135deg, #FFFFFF 0%, #F5FAFF 50%, #FAF8FF 100%)' 
                      : '#FFFFFF',
                    cursor: 'pointer'
                  }}
                >
                  {/* Top Row: Icon and index */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '24px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '14px', 
                      background: service.iconColor, 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0,
                      boxShadow: `0 8px 20px ${service.glowColor}`,
                      transform: isHovered ? 'scale(1.05) rotate(4deg)' : 'none',
                      transition: 'transform 0.3s ease'
                    }}>
                      {React.cloneElement(service.icon as any, { color: '#FFFFFF', size: 20 })}
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: 800, color: 'rgba(15,23,42,0.15)', fontFamily: 'var(--font-mono)' }}>0{idx + 1}</span>
                  </div>

                  {/* Middle: Text Content */}
                  <div>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#0F172A', letterSpacing: '-0.02em', marginBottom: '10px' }}>
                      {service.title}
                    </h3>
                    <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                      {service.desc}
                    </p>
                  </div>

                  {/* High fidelity interactive mockup visual inside the card! */}
                  <div className="service-visual-container" style={{ marginBottom: '24px', background: '#F8FAFC', padding: '12px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.03)' }}>
                    {service.visual}
                  </div>

                  {/* Bottom Row: Tech Tags */}
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {service.tags.map(t => (
                      <span key={t} style={{ 
                        fontSize: '10px', 
                        fontWeight: 700, 
                        color: service.iconColor, 
                        background: service.iconBg, 
                        padding: '4px 10px', 
                        borderRadius: '6px',
                        border: `1px solid ${service.borderColor}`
                      }}>{t}</span>
                    ))}
                  </div>

                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* 4. INTERACTIVE PORTFOLIO SHOWCASE with Beautiful Live Card Visuals */}
      <section id="portfolio" style={{ padding: '110px 24px', background: '#F1F5F9', position: 'relative', overflow: 'hidden' }}>
        
        {/* Soft Shaded Blob */}
        <div className="mesh-blob" style={{ width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)', top: '15%', right: '-5%', position: 'absolute', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', gap: '24px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <div className="pulsing-node-dot" style={{ backgroundColor: '#1D4ED8' }} />
                <p className="section-label" style={{ margin: 0 }}>Featured Engagements</p>
              </div>
              <h2 style={{ fontSize: 'clamp(32px,4.5vw,48px)', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.02em' }}>Our Portfolio <span className="gradient-text">In Action</span></h2>
            </div>
            
            {/* Elegant Segment Tabs Selector */}
            <div style={{ display: 'flex', gap: '4px', background: 'rgba(15,23,42,0.04)', padding: '6px', borderRadius: '14px', border: '1px solid rgba(15,23,42,0.06)' }}>
              {portfolioProjects.map((p) => {
                const isActive = activeProj === p.id
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveProj(p.id)}
                    style={{
                      padding: '10px 22px', 
                      borderRadius: '10px', 
                      fontSize: '13.5px', 
                      fontWeight: 700, 
                      border: 'none', 
                      cursor: 'pointer',
                      background: isActive ? '#FFFFFF' : 'transparent',
                      color: isActive ? '#1D4ED8' : '#475569',
                      boxShadow: isActive ? '0 8px 16px rgba(15,23,42,0.05)' : 'none',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {p.name.split(' ')[0]}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Showcase Panel with High-Fidelity Images */}
          <div style={{ 
            background: '#FFFFFF', 
            border: '1px solid rgba(15,23,42,0.06)', 
            borderRadius: '28px', 
            padding: '48px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '48px', 
            alignItems: 'center', 
            boxShadow: '0 20px 50px rgba(15,23,42,0.02)' 
          }}>
            
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#3B82F6', background: 'rgba(59,130,246,0.08)', padding: '4px 12px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.06em', border: '1px solid rgba(59,130,246,0.12)' }}>{selectedProject.tag}</span>
                <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>Client: {selectedProject.client}</span>
              </div>
              <div>
                <h3 style={{ fontSize: '36px', fontWeight: 900, color: '#0F172A', marginBottom: '18px', lineHeight: 1.15, letterSpacing: '-0.02em' }}>{selectedProject.name}</h3>
                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.6', margin: 0 }}>{selectedProject.desc}</p>
              </div>
              
              <div>
                <Link href="/work" className="btn-primary" style={{ fontSize: '14.5px', padding: '14px 28px', borderRadius: '99px' }}>
                  Explore All Projects <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Column with Generated Project Graphic and KPI */}
            <div style={{ background: '#F8FAFC', border: '1px solid rgba(15,23,42,0.04)', borderRadius: '20px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px', boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.01)' }}>
              
              {/* Project Image Mockup Visual */}
              <div className="service-visual-container" style={{ width: '100%', height: '200px', border: '1px solid rgba(15,23,42,0.05)', boxShadow: '0 12px 24px rgba(0,0,0,0.02)' }}>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(15,23,42,0.05)', paddingBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Key Performance Indicator</span>
                <span style={{ fontSize: '11px', color: '#10B981', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981' }} /> Verified Outcome
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '56px', fontWeight: 900, color: '#0F172A', lineHeight: 1, letterSpacing: '-0.03em' }}>{selectedProject.metricVal}</span>
                <span style={{ fontSize: '14.5px', color: '#64748B', fontWeight: 700 }}>{selectedProject.metricLabel}</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {selectedProject.outcomes.map((outcome, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.04)', borderRadius: '10px', padding: '12px 16px', boxShadow: '0 2px 6px rgba(0,0,0,0.01)' }}>
                    <div style={{ color: '#10B981', flexShrink: 0, marginTop: '2px' }}><Check size={16} /></div>
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#334155', lineHeight: '1.4' }}>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. GLOBAL ENGINEERING CAPABILITIES */}
      <section style={{ padding: '120px 24px', background: '#FFFFFF', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(15,23,42,0.03)' }}>
        
        {/* Animated SVG Network/Globe Backdrop */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '800px',
          height: '400px',
          opacity: 0.08,
          pointerEvents: 'none',
          zIndex: 1
        }}>
          <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Connection lines */}
            <path d="M 200,200 L 400,100 M 400,100 L 600,180 M 600,180 L 500,300 M 500,300 L 300,280 M 300,280 L 200,200 M 400,100 L 500,300 M 200,200 L 600,180" stroke="#1D4ED8" strokeWidth="1.5" strokeDasharray="5,5" />
            <circle cx="200" cy="200" r="4" fill="#1D4ED8" />
            <circle cx="400" cy="100" r="4" fill="#1D4ED8" />
            <circle cx="600" cy="180" r="4" fill="#1D4ED8" />
            <circle cx="500" cy="300" r="4" fill="#1D4ED8" />
            <circle cx="300" cy="280" r="4" fill="#1D4ED8" />
            
            {/* Pulsing highlights */}
            <circle cx="200" cy="200" r="12" stroke="#1D4ED8" strokeWidth="1" opacity="0.5">
              <animate attributeName="r" values="4;18;4" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="600" cy="180" r="12" stroke="#1D4ED8" strokeWidth="1" opacity="0.5">
              <animate attributeName="r" values="4;18;4" dur="4s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
          
          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '32px', marginBottom: '72px' }}>
            <div style={{ flex: '0 1 120px', height: '1px', background: 'linear-gradient(to left, rgba(29, 78, 216, 0.25), rgba(29, 78, 216, 0))' }} />
            <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.35em', color: '#1D4ED8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', textAlign: 'center', whiteSpace: 'nowrap' }}>
              GLOBAL ENGINEERING CAPABILITIES
            </span>
            <div style={{ flex: '0 1 120px', height: '1px', background: 'linear-gradient(to right, rgba(29, 78, 216, 0.25), rgba(29, 78, 216, 0))' }} />
          </div>

          {/* Stat Cards Container */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {[
              { val: '250+', label: 'PROJECT NODES', desc: 'Active platform deployments' },
              { val: '45+', label: 'GLOBAL REGIONS', desc: 'Secure AWS/GCP routing' },
              { val: '99.99%', label: 'UPTIME SLA', desc: 'Enterprise server availability' },
              { val: '24/7', label: 'TECH SUPPORT', desc: 'Instant telemetry assistance' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="premium-bento-card"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center', 
                  gap: '12px',
                  padding: '32px 24px',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
                  <span style={{ fontSize: '9px', fontWeight: 800, color: '#10B981', textTransform: 'uppercase', letterSpacing: '0.1em' }}>System Online</span>
                </div>
                <div style={{ fontSize: '56px', fontWeight: 900, color: '#0F172A', letterSpacing: '-0.03em', fontFamily: 'var(--font-sans)', lineHeight: 1 }}>
                  {item.val}
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#1D4ED8', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  {item.label}
                </div>
                <p style={{ fontSize: '13px', color: '#64748B', margin: 0, fontWeight: 500 }}>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. HOW WE WORK — Process Timeline */}
      <section style={{ padding: '120px 24px', background: '#F8FAFC', position: 'relative', overflow: 'hidden' }}>
        <div className="mesh-blob" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(139,92,246,0.03) 0%, transparent 70%)', top: '10%', left: '-10%', position: 'absolute', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div className="pulsing-node-dot" style={{ backgroundColor: '#8B5CF6' }} />
              <p className="section-label" style={{ margin: 0, color: '#8B5CF6' }}>Our Methodology</p>
            </div>
            <h2 style={{ fontSize: 'clamp(32px,4.5vw,48px)', fontWeight: 900, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>How We <span className="gradient-text">Deliver Results</span></h2>
            <p style={{ color: '#475569', fontSize: '16.5px', maxWidth: '550px', margin: '0 auto', lineHeight: '1.6' }}>A battle-tested four-phase delivery framework that transforms your vision into production-grade software.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {[
              {
                step: '01',
                title: 'Discovery & Strategy',
                desc: 'Deep-dive workshops to map business goals, user journeys, and technical requirements into an actionable blueprint.',
                icon: <Target size={20} />,
                color: '#1D4ED8',
                bg: 'rgba(29, 78, 216, 0.06)',
                duration: '1–2 weeks'
              },
              {
                step: '02',
                title: 'Design & Prototype',
                desc: 'High-fidelity Figma designs and interactive prototypes validated through user testing before a single line of code.',
                icon: <Palette size={20} />,
                color: '#8B5CF6',
                bg: 'rgba(139, 92, 246, 0.06)',
                duration: '2–3 weeks'
              },
              {
                step: '03',
                title: 'Agile Development',
                desc: 'Two-week sprints with daily standups, CI/CD pipelines, and automated testing ensuring quality at every commit.',
                icon: <Zap size={20} />,
                color: '#F59E0B',
                bg: 'rgba(245, 158, 11, 0.06)',
                duration: '6–12 weeks'
              },
              {
                step: '04',
                title: 'Launch & Scale',
                desc: 'Zero-downtime deployment, performance monitoring, and ongoing optimization to ensure your product thrives post-launch.',
                icon: <Rocket size={20} />,
                color: '#10B981',
                bg: 'rgba(16, 185, 129, 0.06)',
                duration: 'Ongoing'
              }
            ].map((phase, idx) => (
              <div key={idx} className="process-step-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div className="process-step-number" style={{ background: phase.bg, color: phase.color }}>
                    {phase.step}
                  </div>
                  <span style={{ fontSize: '10px', fontWeight: 700, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)', background: 'rgba(15,23,42,0.03)', padding: '4px 10px', borderRadius: '6px' }}>{phase.duration}</span>
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: phase.bg, color: phase.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  {phase.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#0F172A', marginBottom: '8px', letterSpacing: '-0.01em' }}>{phase.title}</h3>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: '1.6', margin: 0 }}>{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 CLIENT TESTIMONIALS */}
      <section style={{ padding: '120px 24px', background: '#FFFFFF', position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(15,23,42,0.03)' }}>
        <div className="mesh-blob" style={{ width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(245,158,11,0.03) 0%, transparent 70%)', bottom: '5%', right: '-10%', position: 'absolute', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 5 }}>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div className="pulsing-node-dot" style={{ backgroundColor: '#F59E0B' }} />
              <p className="section-label" style={{ margin: 0, color: '#F59E0B' }}>Client Success Stories</p>
            </div>
            <h2 style={{ fontSize: 'clamp(32px,4.5vw,48px)', fontWeight: 900, color: '#0F172A', marginBottom: '16px', letterSpacing: '-0.02em' }}>What Our <span className="gradient-text">Clients Say</span></h2>
            <p style={{ color: '#475569', fontSize: '16.5px', maxWidth: '550px', margin: '0 auto', lineHeight: '1.6' }}>Trusted by industry leaders to deliver mission-critical software on time and on budget.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
            {[
              {
                name: 'Sarah Mitchell',
                role: 'CTO, FinVault Inc.',
                initials: 'SM',
                avatarGradient: 'linear-gradient(135deg, #1D4ED8, #3B82F6)',
                review: 'Pranavi Infotech transformed our payment infrastructure from the ground up. Their team delivered a platform that processes $45M+ in transactions with 99.99% uptime. The technical depth and communication quality were exceptional.',
                metric: '+40% processing speed',
                rating: 5
              },
              {
                name: 'Dr. Rajesh Patel',
                role: 'Director of IT, HealthBridge Regional',
                initials: 'RP',
                avatarGradient: 'linear-gradient(135deg, #10B981, #059669)',
                review: 'They built our HIPAA-compliant patient portal in under 12 weeks. The onboarding cycle dropped by 35% and our clinicians love the interface. They truly understand healthcare tech constraints.',
                metric: '12K+ active clinicians',
                rating: 5
              },
              {
                name: 'Emily Zhang',
                role: 'VP of Product, CartFlow Labs',
                initials: 'EZ',
                avatarGradient: 'linear-gradient(135deg, #8B5CF6, #6D28D9)',
                review: 'Our e-commerce conversion rate increased 3.4x after Pranavi rebuilt our storefront. Their headless architecture handles 100K+ concurrent checkouts without breaking a sweat. A true engineering partner.',
                metric: '3.4x conversion boost',
                rating: 5
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                {/* Quote icon watermark */}
                <Quote size={48} style={{ color: 'rgba(15, 23, 42, 0.03)', position: 'absolute', top: '20px', right: '24px' }} />

                {/* Star rating */}
                <div className="testimonial-stars" style={{ marginBottom: '20px' }}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} />
                  ))}
                </div>

                {/* Review text */}
                <p style={{ fontSize: '14.5px', color: '#334155', lineHeight: '1.7', marginBottom: '24px', fontWeight: 500 }}>
                  "{testimonial.review}"
                </p>

                {/* Metric highlight */}
                <div style={{ background: 'rgba(29, 78, 216, 0.04)', border: '1px solid rgba(29, 78, 216, 0.08)', borderRadius: '8px', padding: '8px 14px', display: 'inline-flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
                  <Check size={14} style={{ color: '#1D4ED8' }} />
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#1D4ED8' }}>{testimonial.metric}</span>
                </div>

                {/* Divider */}
                <div style={{ height: '1px', background: 'rgba(15, 23, 42, 0.05)', marginBottom: '20px' }} />

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    background: testimonial.avatarGradient,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#FFFFFF', fontWeight: 700, fontSize: '13px', flexShrink: 0
                  }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#0F172A', marginBottom: '2px' }}>{testimonial.name}</h4>
                    <p style={{ fontSize: '12px', color: '#64748B', fontWeight: 500, margin: 0 }}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA LEAD CAPTURE CONTACT BANNER */}
      <section style={{ padding: '100px 24px', background: '#F8FAFC' }}>
        <div 
          className="cta-mesh-container"
          style={{ 
            maxWidth: '1100px', 
            margin: '0 auto', 
            border: '1px solid rgba(255, 255, 255, 0.08)', 
            borderRadius: '32px', 
            padding: '80px 48px', 
            textAlign: 'center', 
            position: 'relative', 
            overflow: 'hidden', 
            boxShadow: '0 30px 60px rgba(15,23,42,0.15)' 
          }}
        >
          {/* Subtle grid pattern overlay */}
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px', background: 'rgba(245,158,11,0.08)', padding: '6px 14px', borderRadius: '99px', border: '1px solid rgba(245,158,11,0.15)' }}>
              <span className="pulsing-node-dot" style={{ backgroundColor: '#F59E0B' }} />
              <p className="section-label" style={{ color: '#F59E0B', margin: 0, fontSize: '10.5px' }}>Partner With Us</p>
            </div>
            
            <h2 style={{ fontSize: 'clamp(36px,5.5vw,60px)', fontWeight: 900, color: 'white', marginBottom: '20px', lineHeight: 1.1, letterSpacing: '-0.03em', maxWidth: '800px' }}>
              Ready to launch <span style={{ background: 'linear-gradient(135deg, #ffffff 40%, #F59E0B 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>your project?</span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.6' }}>
              Select your project goals below, and our engineering team will follow up within 24 hours to schedule a deep-dive architecture consult.
            </p>
            
            {/* Interactive Project Tag Planner Widget */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', maxWidth: '640px', marginBottom: '40px' }}>
              {['SaaS Platform', 'Mobile App', 'UI/UX Audit', 'Cloud Scale', 'AI Integration'].map((tag) => {
                const isActive = selectedTag === tag
                return (
                  <button
                    key={tag}
                    type="button"
                    className={`interactive-project-tag ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </button>
                )
              })}
            </div>

            {inquirySent ? (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: '12px', padding: '16px 32px', color: '#34D399', fontSize: '16px', fontWeight: 700 }}>
                ✓ Thank you. We will contact you regarding your {selectedTag} project shortly!
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} style={{ maxWidth: '520px', width: '100%', margin: '0 auto', display: 'flex', gap: '8px', background: 'rgba(255,255,255,0.06)', padding: '6px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    flex: 1, 
                    padding: '12px 20px', 
                    borderRadius: '12px', 
                    border: 'none',
                    background: 'transparent', 
                    color: 'white', 
                    fontSize: '14.5px', 
                    outline: 'none',
                    fontWeight: 500
                  }}
                  required
                />
                <button type="submit" className="btn-primary" style={{ padding: '12px 24px', whiteSpace: 'nowrap', background: 'linear-gradient(135deg,#F59E0B,#D97706)', color: '#0F172A', fontWeight: 800, borderRadius: '12px', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Request Consultation</span>
                  <Send size={14} />
                </button>
              </form>
            )}

            <div style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
              <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2px', transition: 'color 0.2s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'white'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                Or fill out our detailed project form directly →
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', marginTop: '48px', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '24px', width: '100%' }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>✓ Consultation is free & non-binding</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>✓ NDA-backed privacy guaranteed</span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>✓ Response within 24 business hours</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
