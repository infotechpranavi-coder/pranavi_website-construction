'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Globe,
  Smartphone,
  Cloud,
  Layers,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Brain,
  Wrench,
  Search,
  Share2,
  Lightbulb,
  Video,
  ShieldCheck,
  Target,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { RevealOnScroll, CountUp } from '@/components/shared'

const serviceDetails = [
  {
    num: '01',
    id: 'ai-systems',
    icon: Brain,
    title: 'AI Based Systems & Automation',
    kicker: 'ENTERPRISE AI, RAG & AUTONOMOUS AGENTS',
    desc: 'Harness the power of bespoke generative AI, domain-specific fine-tuned LLMs, vector database pipelines, and autonomous task agents that automate complex organizational workflows.',
    capabilities: [
      'Enterprise LLM Fine-Tuning & Custom RAG Knowledge Bases',
      'Vector Database Engineering (pgvector, Pinecone, Weaviate)',
      'Automated Document OCR & Intelligent Data Extraction',
      'Autonomous Multi-Agent Task Execution Workflows',
      'Predictive Analytics & High-Accuracy Machine Learning Models',
    ],
    stack: ['OpenAI', 'Python', 'LangChain', 'pgvector', 'PyTorch', 'FastAPI'],
    image: '/ai_cloud_network.jpg',
  },
  {
    num: '02',
    id: 'web-development',
    icon: Globe,
    title: 'Website & Custom Web Platforms',
    kicker: 'NEXT.JS 15, REACT & HIGH PERFORMANCE',
    desc: 'High-velocity web applications, custom enterprise merchant portals, and multi-tenant SaaS platforms tailored to your business logic. Built for high concurrency and enterprise reliability.',
    capabilities: [
      'Next.js 15 App Router & React High-Performance Frontends',
      'Multi-tenant SaaS Engineering & Stripe/Paddle Subscriptions',
      'RESTful & GraphQL Event-Driven Microservices',
      'Role-based Access Control (RBAC) & Enterprise SSO',
      'Headless CMS & High-Speed Merchant Admin Portals',
    ],
    stack: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis'],
    image: '/hero_tech_dashboard.png',
  },
  {
    num: '03',
    id: 'custom-software',
    icon: Layers,
    title: 'Custom Software Development',
    kicker: 'MICROSERVICES, APIS & BESPOKE LOGIC',
    desc: 'Bespoke enterprise applications tailored to your business rules. We break monolithic bottlenecks into resilient microservices, Kafka message queues, and real-time data pipelines.',
    capabilities: [
      'Monolith to Event-Driven Microservices Systems',
      'Kafka & RabbitMQ High-Throughput Message Queues',
      'Database Sharding, Read Replicas & Live Data Migration',
      'High-Security API Gateways & Service Meshes',
      'Performance Profiling & Sub-Millisecond Optimization',
    ],
    stack: ['Go (Golang)', 'NestJS', 'PostgreSQL', 'Kafka', 'Redis', 'Docker'],
    image: '/project_vaultpay.png',
  },
  {
    num: '04',
    id: 'mobile-app',
    icon: Smartphone,
    title: 'Mobile App Engineering',
    kicker: 'IOS, ANDROID & CROSS-PLATFORM FLUTTER',
    desc: 'Native and hybrid mobile applications built for responsive touch UX, real-time push notifications, offline SQLite caching, and fluid 60fps animations.',
    capabilities: [
      'Cross-Platform Flutter & React Native Engineering',
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Real-time WebSockets & Encrypted Chat/Video Systems',
      'Offline-First Local Storage & Cloud Auto-Sync',
      'Automated App Store & Google Play CI/CD Pipelines',
    ],
    stack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    image: '/hero_mobile_art.png',
  },
  {
    num: '05',
    id: 'maintenance',
    icon: Wrench,
    title: 'Website Maintenance & Security',
    kicker: 'PROACTIVE MONITORING & SPEED AUDITS',
    desc: 'Continuous technical stewardship for your digital assets. We ensure zero downtime through automated vulnerability scanning, dependency updates, and speed optimizations.',
    capabilities: [
      '24/7 Uptime Health Checks & Instant Alert Routing',
      'Proactive Security Vulnerability Auditing & Patching',
      'Database Defragmentation & Query Index Optimization',
      'Automated Multi-Region Cloud Backup Verification',
      'Guaranteed SLA Incident Response Time Windows',
    ],
    stack: ['Prometheus', 'Grafana', 'Sentry', 'Datadog', 'Cloudflare', 'AWS'],
    image: '/about_team.jpg',
  },
  {
    num: '06',
    id: 'hosting',
    icon: Cloud,
    title: 'Hosting Support & Cloud DevOps',
    kicker: 'MANAGED AWS, GCP & ZERO DOWNTIME',
    desc: 'Automate deployment lifecycles with enterprise cloud infrastructure, Kubernetes container orchestration, and 24/7 telemetry monitoring on AWS and Google Cloud.',
    capabilities: [
      'AWS & Google Cloud Infrastructure & Cloud Reviews',
      'Kubernetes (EKS/GKE) & Docker Container Orchestration',
      'Terraform Infrastructure as Code (IaC) Automation',
      'Automated GitHub Actions & GitLab CI/CD Pipelines',
      'SOC-2, HIPAA, & GDPR Cloud Security Hardening',
    ],
    stack: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Prometheus'],
    image: '/hero_cloud_pinnacle.png',
  },
  {
    num: '07',
    id: 'seo',
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    kicker: 'ORGANIC RANKINGS & CORE WEB VITALS',
    desc: 'Dominate organic search rankings with technical SEO audits, semantic schema markup, Core Web Vitals optimization, and data-backed content frameworks.',
    capabilities: [
      'Technical SEO Audits & Comprehensive Indexation Fixes',
      'High-Intent Keyword Intelligence & Competitor Gap Analysis',
      'Core Web Vitals Performance & Speed Optimization',
      'Semantic Schema.org Structured Data Implementation',
      'High-Authority Natural Backlink Acquisition Programs',
    ],
    stack: ['Ahrefs', 'SEMrush', 'Screaming Frog', 'Google Search Console', 'Lighthouse'],
    image: '/hero_tech_dashboard.png',
  },
  {
    num: '08',
    id: 'smm',
    icon: Share2,
    title: 'Social Media Marketing',
    kicker: 'BRAND CAMPAIGNS & AUDIENCE FUNNELS',
    desc: 'Scale your audience across LinkedIn, Instagram, X, and YouTube with targeted organic content calendars, viral creative assets, and high-conversion community funnels.',
    capabilities: [
      'Omnichannel Social Media Strategic Positioning',
      'Bespoke Content Creation & Motion Graphic Posts',
      'High-Engagement Community Management & Outreach',
      'Influencer Collaboration & Strategic Partnerships',
      'Audience Analytics & Conversion Funnel Attribution',
    ],
    stack: ['Figma', 'Hootsuite', 'Sprout Social', 'Meta Business Suite', 'LinkedIn Ads'],
    image: '/about_team.jpg',
  },
  {
    num: '09',
    id: 'design-thinking',
    icon: Lightbulb,
    title: 'Design Thinking & UI/UX Systems',
    kicker: 'FIGMA TOKENS & CLICKABLE PROTOTYPES',
    desc: 'Intuitive, accessible, and high-converting user interfaces backed by user journey mapping, design token design systems, and interactive clickable prototypes.',
    capabilities: [
      'User Research, Persona Development & Usability Testing',
      'Figma Design Token Systems & Reusable UI Libraries',
      'Clickable High-Fidelity Prototypes for Stakeholder Buy-in',
      'WCAG 2.1 AA Accessibility & Responsive Screen Design',
      'Pixel-Perfect Developer Handoff Specifications',
    ],
    stack: ['Figma', 'Storybook', 'Tailwind', 'Design Tokens', 'UserTesting'],
    image: '/hero_mobile_art.png',
  },
  {
    num: '10',
    id: 'video-production',
    icon: Video,
    title: 'Video Production & Motion Graphics',
    kicker: 'COMMERCIAL BRAND FILMS & 3D ANIMATION',
    desc: 'Captivate your audience with high-impact corporate brand films, 3D motion graphics, commercial explainer videos, and cinematic product showcase animations.',
    capabilities: [
      'Corporate Brand Documentary Films & Leadership Profiles',
      '3D Motion Graphic Product Explainer Animations',
      'Social Video Ad Formats & High-Velocity Reels',
      'Professional Audio Mastering & Sound Design',
      'Color Grading & 4K Cinema Production Pipelines',
    ],
    stack: ['Adobe Premiere', 'After Effects', 'Cinema 4D', 'Blender', 'DaVinci Resolve'],
    image: '/ai_cloud_network.jpg',
  },
  {
    num: '11',
    id: 'orm',
    icon: ShieldCheck,
    title: 'Online Reputation Management (ORM)',
    kicker: 'SENTIMENT DEFENSE & EXECUTIVE PR',
    desc: 'Protect and elevate corporate brand equity through 24/7 sentiment tracking, proactive crisis mitigation, positive review generation, and executive thought leadership.',
    capabilities: [
      'Brand Sentiment & Search Engine SERP Defense',
      'Executive Leadership LinkedIn & PR Thought Leadership',
      'Customer Review Acceleration & Rating Optimization',
      'Rapid Incident Response & Crisis Communications',
      'Wikipedia Page Creation & Google Knowledge Panel Curation',
    ],
    stack: ['Brand24', 'Meltwater', 'Mention', 'Trustpilot', 'Google My Business'],
    image: '/project_vaultpay.png',
  },
  {
    num: '12',
    id: 'google-ads',
    icon: Target,
    title: 'Google Ads & Performance Marketing',
    kicker: 'HIGH-ROI PPC & RETARGETING FUNNELS',
    desc: 'Drive scalable customer acquisition with precision Google Search, Performance Max, Display, and YouTube ad campaigns optimized for maximum return on ad spend (ROAS).',
    capabilities: [
      'High-Intent Google Search Ad Keyword Bidding Systems',
      'Performance Max (PMax) Multi-Channel Campaigns',
      'Smart Dynamic Retargeting & Cart Recovery Funnels',
      'Negative Keyword Scrubbing & Cost-Per-Click Reduction',
      'Server-Side Google Analytics 4 (GA4) Conversion Tracking',
    ],
    stack: ['Google Ads', 'GA4', 'Google Tag Manager', 'Looker Studio', 'AppsFlyer'],
    image: '/hero_cloud_pinnacle.png',
  },
]

const techCategories = {
  Frontend: [
    { name: 'React', level: 'Expert', desc: 'Component design & state management' },
    { name: 'Next.js 15', level: 'Expert', desc: 'App Router, SSR, Server Actions, Edge' },
    { name: 'TypeScript', level: 'Expert', desc: 'Strict type safety & maintainable codebases' },
    { name: 'Tailwind CSS', level: 'Expert', desc: 'Custom design systems & responsive layouts' },
  ],
  'Backend & APIs': [
    { name: 'Node.js / Express', level: 'Expert', desc: 'High-throughput async event loops' },
    { name: 'NestJS', level: 'Expert', desc: 'Modular enterprise engineering' },
    { name: 'Python / FastAPI', level: 'Expert', desc: 'High-performance AI & data backends' },
    { name: 'Go (Golang)', level: 'Advanced', desc: 'Ultra low-latency microservices' },
  ],
  'Cloud & DevOps': [
    { name: 'Amazon Web Services', level: 'Expert', desc: 'EC2, ECS, Lambda, S3, RDS, CloudFront' },
    { name: 'Google Cloud (GCP)', level: 'Advanced', desc: 'Cloud Run, BigQuery, Kubernetes Engine' },
    { name: 'Docker & Kubernetes', level: 'Expert', desc: 'Containerization & multi-cluster management' },
    { name: 'Terraform', level: 'Expert', desc: 'Infrastructure as Code automation' },
  ],
  'AI & Data': [
    { name: 'OpenAI / Anthropic', level: 'Expert', desc: 'LLM integration, Prompting & Function Calling' },
    { name: 'LangChain & LlamaIndex', level: 'Expert', desc: 'RAG pipelines & intelligent memory agents' },
    { name: 'Vector DBs (pgvector)', level: 'Advanced', desc: 'Semantic search & embeddings storage' },
  ],
}

const faqs = [
  {
    q: 'How fast can Pranavi Infotech onboard and start our project?',
    a: 'For dedicated engineering pods, we match and onboard senior engineers within 3 to 5 business days. For fixed-scope projects, we finalize technical specifications and launch Sprint 1 within 1 week.',
  },
  {
    q: 'Who retains intellectual property (IP) and code ownership?',
    a: 'You retain 100% ownership of all source code, database schemas, and intellectual property. Code is committed directly to your private Git repository from day one.',
  },
  {
    q: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    a: 'Yes. We execute strict bilateral NDAs before receiving any proprietary product specifications or scheduling technical discovery sessions.',
  },
  {
    q: 'What post-launch SLA and maintenance options do you provide?',
    a: 'We offer structured monthly SLA maintenance covering 24/7 server monitoring, security patching, dependency upgrades, database backups, and feature sprint enhancements.',
  },
]

const techServices = serviceDetails.slice(0, 6)
const marketingServices = serviceDetails.slice(6, 12)

export default function ServicesPage() {
  const [activeTechTab, setActiveTechTab] = useState<keyof typeof techCategories>('Frontend')
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [serviceCategory, setServiceCategory] = useState<'technologies' | 'marketing'>('technologies')
  const [pairIndex, setPairIndex] = useState(0)

  const currentCategoryServices = serviceCategory === 'technologies' ? techServices : marketingServices
  const totalPairs = Math.ceil(currentCategoryServices.length / 2) // exactly 3 pairs of 2 services each
  const currentPair = currentCategoryServices.slice(pairIndex * 2, pairIndex * 2 + 2)

  const handleCategorySwitch = (cat: 'technologies' | 'marketing') => {
    setServiceCategory(cat)
    setPairIndex(0)
  }

  const handleNextPair = () => {
    setPairIndex((prev) => (prev + 1) % totalPairs)
  }

  const handlePrevPair = () => {
    setPairIndex((prev) => (prev - 1 < 0 ? totalPairs - 1 : prev - 1))
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '')
      const techIdx = techServices.findIndex((s) => s.id === hash)
      if (techIdx !== -1) {
        setServiceCategory('technologies')
        setPairIndex(Math.floor(techIdx / 2))
        return
      }
      const mktIdx = marketingServices.findIndex((s) => s.id === hash)
      if (mktIdx !== -1) {
        setServiceCategory('marketing')
        setPairIndex(Math.floor(mktIdx / 2))
      }
    }
  }, [])

  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: '#FFFFFF' }}>
      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: '140px',
          paddingBottom: '90px',
          background: 'linear-gradient(135deg, #060F1E 0%, #0A213D 60%, #0D2847 100%)',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="dark-grid-pattern" style={{ opacity: 0.22 }} aria-hidden="true" />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', width: '600px', height: '600px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,101,34,0.1) 0%, transparent 70%)',
            top: '-100px', right: '-80px', pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '860px' }}>
            <RevealOnScroll direction="up" delay={0.05}>
              <span className="kicker-coral">EST. 2012 &bull; 75+ CLIENTS &amp; GOVT PROJECTS</span>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.15}>
              <h1
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(34px, 5vw, 62px)',
                  fontWeight: 850,
                  color: '#FFFFFF',
                  margin: '18px 0 20px',
                  letterSpacing: '-0.028em',
                  lineHeight: 1.1,
                }}
              >
                Enterprise Software, AI Systems<br />&amp; SEO Marketing
              </h1>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.25}>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: '1.7', marginBottom: '36px', maxWidth: '680px' }}>
                Established in 2012 in Mumbai, India — bespoke custom software, high-security government portals, mobile apps, custom AI pipelines, and high-ROI technical SEO marketing for 75+ clients worldwide.
              </p>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.35}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link href="/contact" className="btn-bizzen-lime">
                  <span>Request Project Proposal</span>
                  <ArrowRight size={15} />
                </Link>
                <a
                  href="#services-matrix"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '7px',
                    color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: 700,
                    fontFamily: 'var(--font-display)', letterSpacing: '0.04em',
                    textDecoration: 'none', border: '1px solid rgba(255,255,255,0.2)',
                    padding: '10px 22px', borderRadius: '8px', backdropFilter: 'blur(8px)',
                    transition: 'all 0.25s ease',
                  }}
                  className="services-outline-btn"
                >
                  <span>Explore Service Matrix</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: '#0A213D', padding: '36px 0' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }} className="services-stats-strip">
            {[
              { end: 12, suffix: '+', label: 'Years Experience', dur: 2600, delay: 0 },
              { end: 75, suffix: '+', label: 'Happy Clients', dur: 2800, delay: 150 },
              { end: 12, suffix: '', label: 'Services Offered', dur: 2200, delay: 250 },
              { end: 99, suffix: '%', label: 'Delivery Success', dur: 3000, delay: 350 },
            ].map((s, i) => (
              <RevealOnScroll key={i} direction="none" delay={0.05 * i}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px, 3vw, 42px)', fontWeight: 850, color: '#F26522', lineHeight: 1, letterSpacing: '-0.03em' }}>
                    <CountUp end={s.end} suffix={s.suffix} duration={s.dur} delay={s.delay} />
                  </div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', fontWeight: 650, marginTop: '6px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAILED SERVICES SECTION ── */}
      <section style={{ padding: 'clamp(72px, 9vh, 108px) 0', background: '#FFFFFF' }} id="services-matrix">
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <RevealOnScroll direction="up" delay={0.05}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(36px, 4.5vh, 48px)' }}>
              <span className="kicker-coral">WHAT WE BUILD &amp; DELIVER</span>
              <h2 className="bizzen-section-title" style={{ fontSize: 'clamp(24px, 2.4vw, 34px)', marginTop: '12px', marginBottom: '12px', lineHeight: 1.2 }}>
                End-to-End Digital Engineering &amp; Growth Services
              </h2>
              <p style={{ color: '#4A5E78', fontSize: '15px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: '1.6' }}>
                Toggle between enterprise engineering technologies and full-funnel digital marketing. Browse capabilities two services at a time.
              </p>

              {/* Segmented Category Toggle: Technologies vs Digital Marketing */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: '#F1F5F9',
                  padding: '5px',
                  borderRadius: '50px',
                  border: '1px solid rgba(10,33,61,0.08)',
                  boxShadow: '0 2px 10px rgba(10,33,61,0.03)',
                  gap: '6px',
                }}
              >
                <button
                  type="button"
                  onClick={() => handleCategorySwitch('technologies')}
                  style={{
                    padding: '10px 26px',
                    borderRadius: '50px',
                    border: 'none',
                    fontFamily: 'var(--font-display)',
                    fontSize: '13.5px',
                    fontWeight: 750,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: serviceCategory === 'technologies' ? '#0A213D' : 'transparent',
                    color: serviceCategory === 'technologies' ? '#FFFFFF' : '#4A5E78',
                    boxShadow: serviceCategory === 'technologies' ? '0 4px 14px rgba(10,33,61,0.2)' : 'none',
                  }}
                >
                  <Layers size={15} />
                  <span>Technologies ({techServices.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleCategorySwitch('marketing')}
                  style={{
                    padding: '10px 26px',
                    borderRadius: '50px',
                    border: 'none',
                    fontFamily: 'var(--font-display)',
                    fontSize: '13.5px',
                    fontWeight: 750,
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: serviceCategory === 'marketing' ? '#F26522' : 'transparent',
                    color: serviceCategory === 'marketing' ? '#FFFFFF' : '#4A5E78',
                    boxShadow: serviceCategory === 'marketing' ? '0 4px 14px rgba(242,101,34,0.25)' : 'none',
                  }}
                >
                  <Target size={15} />
                  <span>Digital Marketing ({marketingServices.length})</span>
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Navigation Bar for the Pair Slider */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '40px',
              padding: '14px 22px',
              background: '#F8FAFC',
              borderRadius: '12px',
              border: '1px solid rgba(10,33,61,0.06)',
              flexWrap: 'wrap',
              gap: '14px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  color: serviceCategory === 'technologies' ? '#0A213D' : '#F26522',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-display)',
                }}
              >
                {serviceCategory === 'technologies' ? 'Technology Solutions' : 'Digital Marketing Services'}
              </span>
              <span style={{ color: 'rgba(10,33,61,0.2)' }}>•</span>
              <span style={{ fontSize: '13px', color: '#64748B', fontWeight: 600 }}>
                Showing Services {pairIndex * 2 + 1} &amp; {Math.min(pairIndex * 2 + 2, currentCategoryServices.length)} of {currentCategoryServices.length}
              </span>
            </div>

            {/* Slider Arrow Controls & Set Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                type="button"
                onClick={handlePrevPair}
                aria-label="Previous 2 services"
                style={{
                  padding: '7px 16px',
                  borderRadius: '50px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(10,33,61,0.12)',
                  color: '#0A213D',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 6px rgba(10,33,61,0.04)',
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
                <ChevronLeft size={16} />
                <span>Prev 2</span>
              </button>

              {/* Set Pills / Step Indicators */}
              <div style={{ display: 'flex', gap: '5px' }}>
                {Array.from({ length: totalPairs }).map((_, stepIdx) => (
                  <button
                    key={stepIdx}
                    type="button"
                    onClick={() => setPairIndex(stepIdx)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      border: 'none',
                      background: pairIndex === stepIdx ? (serviceCategory === 'technologies' ? '#0A213D' : '#F26522') : '#E2E8F0',
                      color: pairIndex === stepIdx ? '#FFFFFF' : '#64748B',
                      fontSize: '12px',
                      fontWeight: 800,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    {stepIdx + 1}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleNextPair}
                aria-label="Next 2 services"
                style={{
                  padding: '7px 16px',
                  borderRadius: '50px',
                  background: serviceCategory === 'technologies' ? '#0A213D' : '#F26522',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.9'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.transform = 'none'
                }}
              >
                <span>Next 2</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Exactly 2 Services in the Current Rich Layout */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(56px, 7vh, 80px)' }}>
            {currentPair.map((s, idx) => {
              const isEven = idx % 2 === 1
              return (
                <div
                  key={`${serviceCategory}-${s.id}`}
                  id={s.id}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isEven ? '1fr 1.05fr' : '1.05fr 1fr',
                    gap: '48px',
                    alignItems: 'center',
                    transition: 'all 0.35s ease',
                  }}
                  className="service-row-layout"
                >
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 850, color: 'rgba(10,33,61,0.3)', letterSpacing: '0.06em' }}>{s.num}</span>
                      <span className="kicker-coral" style={{ marginBottom: 0 }}>{s.kicker}</span>
                    </div>

                    <h2
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(24px, 2.8vw, 36px)',
                        fontWeight: 800,
                        color: '#0A213D',
                        marginBottom: '12px',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.2,
                      }}
                    >
                      {s.title}
                    </h2>

                    <p style={{ color: '#4A5E78', fontSize: '15px', lineHeight: '1.65', marginBottom: '22px' }}>
                      {s.desc}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '22px' }}>
                      {s.capabilities.map((cap, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                          <CheckCircle2 size={15} color="#F26522" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span style={{ fontSize: '13.5px', color: '#1E2F2B', fontWeight: 500 }}>{cap}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '26px' }}>
                      {s.stack.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: '11px', fontWeight: 700, padding: '3px 10px',
                            background: '#F8FAFC', borderRadius: '5px',
                            border: '1px solid rgba(226,232,240,0.9)',
                            color: '#0A213D', letterSpacing: '0.02em',
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link href={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-bizzen-forest">
                      <span>Get in Touch</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>

                  <div style={{ order: isEven ? 1 : 2 }}>
                    <div
                      className="service-img-card"
                      style={{
                        position: 'relative',
                        height: 'clamp(260px, 32vh, 380px)',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 48px rgba(10, 33, 61, 0.1)',
                        border: '1px solid rgba(10,33,61,0.07)',
                      }}
                    >
                      <Image src={s.image} alt={s.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Pagination Bar: Slide to Next 2 Services */}
          <div
            style={{
              marginTop: '56px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(10,33,61,0.08)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <button
              type="button"
              onClick={handlePrevPair}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#FFFFFF',
                color: '#0A213D',
                padding: '11px 22px',
                borderRadius: '50px',
                border: '1px solid rgba(10,33,61,0.12)',
                fontSize: '13px',
                fontWeight: 750,
                cursor: 'pointer',
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
              <ChevronLeft size={16} />
              <span>Previous 2 Services</span>
            </button>

            {/* Set Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {Array.from({ length: totalPairs }).map((_, stepIdx) => (
                <button
                  key={stepIdx}
                  type="button"
                  onClick={() => setPairIndex(stepIdx)}
                  aria-label={`Go to service pair ${stepIdx + 1}`}
                  style={{
                    width: pairIndex === stepIdx ? '32px' : '9px',
                    height: '9px',
                    borderRadius: '50px',
                    background: pairIndex === stepIdx ? '#F26522' : 'rgba(10,33,61,0.18)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNextPair}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#F26522',
                color: '#FFFFFF',
                padding: '11px 24px',
                borderRadius: '50px',
                border: 'none',
                fontSize: '13px',
                fontWeight: 750,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(242,101,34,0.3)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#D95314'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#F26522'
                e.currentTarget.style.transform = 'none'
              }}
            >
              <span>Next 2 Services</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ── TECH STACK EXPLORER ── */}
      <section style={{ padding: 'clamp(72px, 9vh, 108px) 0', background: '#F8FAFC', borderTop: '1px solid rgba(10,33,61,0.06)' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <RevealOnScroll direction="up" delay={0.05}>
            <div style={{ textAlign: 'center', marginBottom: '44px' }}>
              <span className="kicker-coral">ENGINEERING ARSENAL</span>
              <h2 className="bizzen-section-title" style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', marginTop: '12px', marginBottom: '12px', lineHeight: 1.2 }}>
                Production-Grade Frameworks &amp; Tooling
              </h2>
              <p style={{ color: '#4A5E78', fontSize: '15px', maxWidth: '560px', margin: '0 auto' }}>
                Reliable, performant, and actively maintained enterprise technologies.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll direction="up" delay={0.1}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '32px' }}>
              {Object.keys(techCategories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTechTab(cat as keyof typeof techCategories)}
                  style={{
                    padding: '9px 22px', borderRadius: '8px',
                    fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700,
                    border: '1px solid',
                    borderColor: activeTechTab === cat ? '#F26522' : 'rgba(10,33,61,0.1)',
                    background: activeTechTab === cat ? '#F26522' : '#FFFFFF',
                    color: activeTechTab === cat ? '#FFFFFF' : '#4A5E78',
                    cursor: 'pointer', transition: 'all 0.2s ease',
                    boxShadow: activeTechTab === cat ? '0 4px 14px rgba(242,101,34,0.25)' : 'none',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
            {techCategories[activeTechTab].map((item, idx) => (
              <RevealOnScroll key={idx} direction="up" delay={0.08 * idx}>
                <div
                  style={{
                    background: '#FFFFFF', padding: '22px', borderRadius: '14px',
                    border: '1px solid rgba(10,33,61,0.07)',
                    boxShadow: '0 4px 18px rgba(10,33,61,0.04)',
                    transition: 'all 0.25s ease',
                  }}
                  className="tech-card-hover"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 750, color: '#0A213D', fontFamily: 'var(--font-display)' }}>{item.name}</h3>
                    <span
                      style={{
                        fontSize: '10px', fontWeight: 800, padding: '2px 8px',
                        borderRadius: '20px', background: 'rgba(242,101,34,0.1)',
                        color: '#F26522', letterSpacing: '0.05em', fontFamily: 'var(--font-display)',
                      }}
                    >
                      {item.level}
                    </span>
                  </div>
                  <p style={{ color: '#4A5E78', fontSize: '13px', lineHeight: '1.5' }}>{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQS ── */}
      <section style={{ padding: 'clamp(72px, 9vh, 108px) 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '880px', margin: '0 auto', padding: '0 32px' }}>
          <RevealOnScroll direction="up" delay={0.05}>
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="kicker-coral">COMMONLY ASKED</span>
              <h2 className="bizzen-section-title" style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', marginTop: '12px', marginBottom: '12px', lineHeight: 1.2 }}>
                Frequently Answered Questions
              </h2>
              <p style={{ color: '#4A5E78', fontSize: '14px', maxWidth: '480px', margin: '0 auto', lineHeight: '1.6' }}>
                Clear answers on IP ownership, onboarding velocity, NDAs, and long-term maintenance.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <RevealOnScroll key={idx} direction="up" delay={0.08 * idx}>
                  <div
                    style={{
                      background: isOpen ? '#F8FAFC' : '#FFFFFF',
                      borderRadius: '14px', padding: '20px 24px', cursor: 'pointer',
                      border: `1px solid ${isOpen ? 'rgba(242,101,34,0.2)' : 'rgba(10,33,61,0.07)'}`,
                      transition: 'all 0.25s ease',
                    }}
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0A213D', fontFamily: 'var(--font-display)' }}>
                        {faq.q}
                      </h3>
                      <ChevronDown
                        size={18}
                        color="#F26522"
                        style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s ease', flexShrink: 0 }}
                      />
                    </div>
                    {isOpen && (
                      <p style={{ marginTop: '14px', color: '#4A5E78', fontSize: '14px', lineHeight: '1.65', borderTop: '1px solid rgba(10,33,61,0.07)', paddingTop: '12px' }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>


      <style>{`
        .services-outline-btn:hover { background: rgba(255,255,255,0.08) !important; }
        .tech-card-hover:hover { box-shadow: 0 12px 36px rgba(10,33,61,0.09) !important; transform: translateY(-3px) !important; }
        @media (max-width: 900px) {
          .services-stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 860px) {
          .service-row-layout {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .service-row-layout > div { order: unset !important; }
        }
        @media (max-width: 640px) {
          .service-img-card { height: clamp(200px, 48vw, 280px) !important; }
          .services-stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
