'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  X,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'
import { RevealOnScroll, CountUp } from '@/components/shared'

type ProjectCategory =
  | 'All'
  | 'Government'
  | 'HRMS & AI'
  | 'Enterprise ERP'
  | 'FinTech'
  | 'HealthTech'
  | 'SaaS & Web'

interface Project {
  id: string
  title: string
  category: ProjectCategory
  client: string
  tagline: string
  image: string
  metrics: string[]
  tags: string[]
  challenge: string
  solution: string
  highlights: string[]
  results: string
}

const projects: Project[] = [
  {
    id: 'nuhm-pmc',
    title: 'NUHM — Public Dispensary & Urban Health Platform',
    category: 'Government',
    client: 'Pune Municipal Corporation (PMC)',
    tagline: 'Centralized urban health data exchange and clinic dispensary workflow system connecting 50+ municipal dispensaries with real-time OPD and medicine inventory.',
    image: '/project_nuhm_pmc.jpg',
    metrics: ['50+ Municipal Dispensaries', '1.2M+ Patient Records', 'Real-Time OPD Sync'],
    tags: ['Next.js 15', 'Node.js', 'PostgreSQL GIS', 'Aadhaar ABHA', 'Docker'],
    challenge:
      'PMC required a unified digital health infrastructure to track daily patient footfall, maternal immunization, medicine stockouts, and clinical visits across 50+ geographically distributed public dispensaries.',
    solution:
      'Engineered an enterprise civic health portal featuring instant patient token generation, Aadhaar ABHA integration, real-time medicine inventory reordering, and an interactive GIS dispensary heatmap.',
    highlights: [
      'High-throughput Next.js dispensary operator portal with sub-second patient lookups',
      'PostgreSQL spatial GIS database mapping dispensary catchment areas and population coverage',
      'Automated pharmacy stock alert engine with predictive reorder thresholds preventing medicine shortages',
      'Encrypted ABDM / ABHA health record exchange with biometric validation for citizen consultations',
    ],
    results:
      'Eliminated medicine stockout delays across 50 dispensaries, digitized 1.2M+ patient consultations, and cut average patient dispensary wait time down to under 4 minutes.',
  },
  {
    id: 'sikkim-egov',
    title: 'Government of Sikkim — State E-Governance Portal',
    category: 'Government',
    client: 'Government of Sikkim — IT Department',
    tagline: 'Statewide digital administration platform for automated citizen certificates, district revenue workflows, and GIS mountain land record verification.',
    image: '/project_sikkim_egov.jpg',
    metrics: ['1.1M+ Digital Certificates', '4 Mountain Districts', '99.95% System Uptime'],
    tags: ['FastAPI', 'React', 'PostgreSQL GIS', 'DigiLocker API', 'Kubernetes'],
    challenge:
      'Remote mountain topography across Gangtok, Namchi, and Gyalshing suffered from connectivity dropouts, delaying critical revenue certificates and citizen service approvals.',
    solution:
      'Deployed an offline-tolerant state e-governance engine with automated digital certificate issuance, DigiLocker synchronization, and district-level administrative workflow queues.',
    highlights: [
      'Fault-tolerant FastAPI microservices with offline-tolerant queue sync for remote district offices',
      'GIS land mapping engine with spatial boundaries for Sikkim districts (Gangtok, Namchi, Gyalshing)',
      'Automated cryptographic signature signing for birth, death & caste certificates',
      'DigiLocker direct integration for instant tamper-proof citizen certificate access on mobile',
    ],
    results:
      'Digitized over 1,170,000 official certificates and reduced district service application turnaround from 21 days down to 48 hours.',
  },
  {
    id: 'hrms-payroll-ai',
    title: 'WorkPulse AI — Autonomous HRMS & Payroll Ecosystem',
    category: 'HRMS & AI',
    client: 'WorkPulse Global Enterprises',
    tagline: 'AI-powered autonomous HRMS with automated biometric attendance, one-click tax-compliant payroll disbursement, and predictive talent analytics.',
    image: '/project_hrms_payroll.jpg',
    metrics: ['2,485+ Active Staff', '$1.8M Monthly Payroll', '94% Attendance Accuracy'],
    tags: ['Next.js 15', 'Python AI', 'PostgreSQL', 'Bank API Sync', 'Redis Streams'],
    challenge:
      'Enterprises managing distributed workforces struggled with payroll errors, manual biometric reconciling, compliance delays, and fragmented leave tracking.',
    solution:
      'Engineered a modern end-to-end HRMS and payroll engine with real-time biometric IoT sync, automated statutory tax calculation, one-click banking payout disbursement, and AI employee talent scoring.',
    highlights: [
      'Automated salary engine calculating TDS, PF, ESIC, and bonuses with 100% precision',
      'Biometric IoT webhook receiver handling 20,000 clock-ins/min with zero packet loss',
      'Direct corporate banking API integration for instant bulk salary NEFT/IMPS transfers',
      'AI talent scoring radar cards assessing employee productivity, technical skills, and velocity',
    ],
    results:
      'Reduced monthly payroll processing from 5 business days to 8 minutes, achieving 100% statutory compliance across 2,485 employees.',
  },
  {
    id: 'quantumerp-inventory',
    title: 'QuantumERP — Advanced Multi-Warehouse Inventory System',
    category: 'Enterprise ERP',
    client: 'Apex Global Supply Chain & Logistics',
    tagline: 'High-velocity, multi-warehouse inventory management and ERP engine with automated SKU replenishment, barcode tracking, and real-time ledger accounting.',
    image: '/project_enterprise_erp.jpg',
    metrics: ['48,720 Active SKUs', '$18.4M Inventory Value', '0 Stockout Incidents'],
    tags: ['Go Microservices', 'Next.js 15', 'Kafka', 'PostgreSQL', 'Redis Cache'],
    challenge:
      'Multi-facility distribution networks suffered from inventory discrepancies, delayed stock replenishment, and lagging manual financial ledger reconciliation.',
    solution:
      'Built an ultra-fast event-driven ERP platform featuring real-time warehouse inventory balancing, barcode/RFID automated dispatch, predictive auto-reorder triggers, and double-entry ledger sync.',
    highlights: [
      'Go-based inventory ledger processing 15,000 SKU status updates per second',
      'Automated stock reordering triggers synced directly with supplier EDI portals',
      'Multi-facility logistics dispatch tracker with carrier API integrations',
      'Real-time double-entry financial ledger accounting with automated balance sheet updates',
    ],
    results:
      'Eliminated stockouts completely across 4 regional warehouses and accelerated monthly financial ledger close from 12 days to real-time.',
  },
  {
    id: 'recruitai-job-portal',
    title: 'RecruitAI — Intelligent ATS & Recruiter Job Portal',
    category: 'HRMS & AI',
    client: 'TalentScale HR & Tech Network',
    tagline: 'AI-driven recruiter ATS and scalable job board platform with automated candidate resume parsing, skill matching, and interview pipelines.',
    image: '/project_recruiter_portal.jpg',
    metrics: ['3,249+ New Applicants/Mo', '96% AI Skill Match', '4x Faster Time-to-Hire'],
    tags: ['Next.js 15', 'FastAPI / LLM', 'pgvector', 'Elasticsearch', 'Node.js'],
    challenge:
      'High-volume hiring campaigns were hindered by manual resume screening, keyword mismatching, and fragmented communication between recruiters and hiring managers.',
    solution:
      'Constructed an AI-native candidate matching engine with semantic resume vector embedding, an interactive kanban hiring pipeline, and a high-converting candidate job portal.',
    highlights: [
      'Vector embedding pipeline on pgvector matching candidate resumes to job requirements',
      'Real-time interactive Kanban candidate pipeline (Applied, Screened, Interview, Offered)',
      'Automated interview scheduling with calendar sync and video meeting provisioning',
      'Elasticsearch high-concurrency public job search engine indexing 50,000+ roles',
    ],
    results:
      'Reduced time-to-hire by 75% and increased top-tier candidate interview completion rates from 42% to 89%.',
  },
  {
    id: 'vaultpay',
    title: 'VaultPay — B2B FinTech Payment Orchestrator',
    category: 'FinTech',
    client: 'VaultPay Global Payments Inc.',
    tagline: 'Multi-tenant payment orchestration engine processing $18M+ monthly transaction volume.',
    image: '/project_vaultpay.png',
    metrics: ['+340% Transaction Speed', '$18M+ Monthly Vol', 'Sub-200ms Settlement'],
    tags: ['Next.js', 'Go / NestJS', 'PostgreSQL', 'Stripe API', 'AWS ECS'],
    challenge:
      'The client’s legacy payment gateway suffered from concurrency bottlenecks during merchant billing cycles, causing checkout drop-offs.',
    solution:
      'Engineered an asynchronous event-driven payment orchestrator with automated multi-gateway failover and low-latency ledger partitioning.',
    highlights: [
      'Microservices on Go & NestJS with Redis distributed locks',
      'PostgreSQL read-replicas & partitioned ledger transactions',
      'PCI-DSS compliant tokenization & AWS KMS encryption',
      'Next.js merchant portal with live telemetry dashboard',
    ],
    results:
      'Processed over $18M in monthly volume with 99.99% uptime and reduced checkout latency down to 180ms.',
  },
  {
    id: 'meditrack',
    title: 'MediTrack — Telehealth & Clinical EHR Suite',
    category: 'HealthTech',
    client: 'MediTrack Healthcare Systems',
    tagline: 'HIPAA-compliant telehealth platform connecting 45,000+ active patients with doctors.',
    image: '/project_meditrack.png',
    metrics: ['45,000+ Active Patients', '99.98% System Uptime', 'HIPAA Certified'],
    tags: ['Flutter', 'Node.js', 'WebRTC', 'AWS HealthLake', 'MongoDB'],
    challenge:
      'Needed a cross-platform mobile app and clinician portal with end-to-end encrypted video consults and EHR sync.',
    solution:
      'Built a Flutter mobile app paired with WebRTC video infrastructure and HIPAA-compliant cloud storage.',
    highlights: [
      'Cross-platform Flutter app running at 60fps on iOS and Android',
      'WebRTC mesh for zero-latency encrypted peer-to-peer consults',
      'Automated prescription generation with digital cryptographic signing',
      'Offline-first SQLite local store with smart conflict-free sync',
    ],
    results:
      'Enabled over 120,000 telehealth consults in year one with a 4.9/5 patient satisfaction rating.',
  },
  {
    id: 'cartflow',
    title: 'CartFlow — Headless E-Commerce Engine',
    category: 'SaaS & Web',
    client: 'CartFlow Retail Group',
    tagline: 'Headless e-commerce platform built for flash sales and high-concurrency peak traffic.',
    image: '/project_cartflow.png',
    metrics: ['25,000 req/sec Peak', '+62% Cart Conversion', '0.4s Page Load'],
    tags: ['Next.js 15', 'Redis', 'Kubernetes', 'GraphQL', 'Stripe'],
    challenge:
      'Monolithic e-commerce platforms crashed during peak seasonal flash sales, leading to severe cart abandonment.',
    solution:
      'Rebuilt frontend on Next.js 15 App Router with Edge SSR and decoupled backend into elastic Kubernetes microservices.',
    highlights: [
      'Edge SSR with automated stale-while-revalidate inventory caching',
      'Elastic Kubernetes auto-scaling clusters on AWS EKS',
      'GraphQL gateway aggregating product catalog and pricing',
      'Optimized 1-click checkout flow with Apple Pay & Google Pay',
    ],
    results:
      'Boosted conversions by 62% and handled 25,000 requests/sec with 0.4s page load speeds.',
  },
]

const categories: ProjectCategory[] = [
  'All',
  'Government',
  'HRMS & AI',
  'Enterprise ERP',
  'FinTech',
  'HealthTech',
  'SaaS & Web',
]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hashId = window.location.hash.replace('#', '')
      const match = projects.find((p) => p.id === hashId)
      if (match) setSelectedProject(match)
    }
  }, [])

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

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
              <span className="kicker-coral">PORTFOLIO &amp; CASE STUDIES</span>
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
                Engineered for Measurable<br />Business Impact
              </h1>
            </RevealOnScroll>
            <RevealOnScroll direction="up" delay={0.22}>
              <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '16px', lineHeight: '1.7', marginBottom: '32px', maxWidth: '640px' }}>
                Proven track record across FinTech, HealthTech, E-Commerce &amp; AI — government and private enterprise.
              </p>
            </RevealOnScroll>

            {/* Category Filter Buttons */}
            <RevealOnScroll direction="up" delay={0.32}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      padding: '8px 18px', borderRadius: '8px',
                      fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700,
                      border: '1px solid',
                      borderColor: activeCategory === cat ? '#F26522' : 'rgba(255,255,255,0.18)',
                      background: activeCategory === cat ? '#F26522' : 'rgba(255,255,255,0.06)',
                      color: activeCategory === cat ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                      cursor: 'pointer', transition: 'all 0.2s ease',
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section style={{ background: '#0A213D', padding: '36px 0' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', textAlign: 'center' }} className="work-stats-strip">
            {[
              { end: 150, suffix: '+', label: 'Products Shipped', dur: 3000, delay: 0 },
              { end: 75, suffix: '+', label: 'Happy Clients', dur: 2800, delay: 150 },
              { end: 12, suffix: '+', label: 'Years Experience', dur: 2600, delay: 250 },
              { end: 99, suffix: '%', label: 'Delivery Success', dur: 2800, delay: 350 },
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

      {/* ── PROJECTS GRID ── */}
      <section style={{ padding: 'clamp(72px, 9vh, 108px) 0', background: '#F8FAFC', borderTop: '1px solid rgba(10,33,61,0.06)' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <RevealOnScroll direction="up" delay={0.05}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vh, 56px)' }}>
              <span className="kicker-coral">SELECTED WORK</span>
              <h2 className="bizzen-section-title" style={{ fontSize: 'clamp(22px, 2.2vw, 32px)', marginTop: '12px', lineHeight: 1.2 }}>
                Government &amp; Private Enterprise Case Studies
              </h2>
            </div>
          </RevealOnScroll>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {filteredProjects.map((proj, idx) => (
              <RevealOnScroll key={proj.id} direction="up" delay={0.1 + idx * 0.07}>
                <div
                  id={proj.id}
                  style={{
                    background: '#FFFFFF', borderRadius: '16px', overflow: 'hidden',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    border: '1px solid rgba(10,33,61,0.07)',
                    boxShadow: '0 4px 20px rgba(10,33,61,0.04)',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    height: '100%',
                  }}
                  className="work-card-hover"
                >
                  <div>
                    <div style={{ position: 'relative', width: '100%', height: '210px', overflow: 'hidden' }}>
                      <Image src={proj.image} alt={proj.title} fill style={{ objectFit: 'cover' }} className="work-img-zoom" />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(10,33,61,0.45) 100%)' }} />
                      <div
                        style={{
                          position: 'absolute', top: '12px', left: '12px',
                          background: '#F26522', color: '#FFFFFF',
                          fontSize: '10px', fontWeight: 800, padding: '3px 10px',
                          borderRadius: '20px', fontFamily: 'var(--font-display)',
                          letterSpacing: '0.06em', textTransform: 'uppercase',
                        }}
                      >
                        {proj.category}
                      </div>
                    </div>

                    <div style={{ padding: '22px 22px 16px' }}>
                      <div style={{ fontSize: '10.5px', fontWeight: 750, color: '#F26522', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '6px' }}>
                        {proj.client}
                      </div>
                      <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0A213D', marginBottom: '8px', fontFamily: 'var(--font-display)', lineHeight: 1.3 }}>
                        {proj.title}
                      </h2>
                      <p style={{ color: '#4A5E78', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px' }}>
                        {proj.tagline}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                        {proj.metrics.map((m, i) => (
                          <span
                            key={i}
                            style={{
                              background: 'rgba(242,101,34,0.08)', border: '1px solid rgba(242,101,34,0.2)',
                              padding: '3px 8px', borderRadius: '6px', fontSize: '10.5px',
                              fontWeight: 700, color: '#F26522', fontFamily: 'var(--font-display)',
                            }}
                          >
                            {m}
                          </span>
                        ))}
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                        {proj.tags.map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: '10px', fontWeight: 700, padding: '2px 8px',
                              background: '#F8FAFC', borderRadius: '5px',
                              border: '1px solid rgba(226,232,240,0.9)',
                              color: '#0A213D',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div style={{ padding: '0 22px 22px' }}>
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="btn-bizzen-forest"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>View Technical Breakdown</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETAIL MODAL ── */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            background: 'rgba(5, 11, 20, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="work-modal-content"
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              maxWidth: '820px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              padding: '36px',
              position: 'relative',
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(226, 232, 240, 0.9)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              style={{
                position: 'absolute',
                top: '18px',
                right: '18px',
                width: '34px',
                height: '34px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.06)',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0F172A',
                transition: 'background 0.2s ease',
              }}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <span className="badge-pill" style={{ marginBottom: '8px' }}>{selectedProject.category}</span>
            <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0F172A', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
              {selectedProject.title}
            </h2>
            <div style={{ fontSize: '13px', color: '#64748B', marginBottom: '20px' }}>
              Client: {selectedProject.client}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
              {selectedProject.metrics.map((m, i) => (
                <span key={i} className="badge-pill-accent" style={{ fontSize: '12px' }}>
                  {m}
                </span>
              ))}
            </div>

            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
                1. Engineering Challenge
              </div>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>{selectedProject.challenge}</p>
            </div>

            <div style={{ marginBottom: '18px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', marginBottom: '4px', fontFamily: 'var(--font-display)' }}>
                2. Pranavi Engineering Solution
              </div>
              <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.6' }}>{selectedProject.solution}</p>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#2563EB', marginBottom: '8px', fontFamily: 'var(--font-display)' }}>
                3. Key Technical Highlights
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#16A34A" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ fontSize: '13.5px', color: '#1E293B' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: '#F8FAFC', border: '1px solid rgba(226, 232, 240, 0.9)', padding: '16px 20px', borderRadius: '10px', marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', marginBottom: '4px', fontFamily: 'var(--font-mono)' }}>
                Verified Production Results
              </div>
              <p style={{ fontSize: '14px', color: '#0F172A', fontWeight: 500 }}>{selectedProject.results}</p>
            </div>

            <div className="work-modal-actions" style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', flexWrap: 'wrap' }}>
              <button onClick={() => setSelectedProject(null)} className="btn-ref-outline" style={{ color: '#0F172A', borderColor: '#CBD5E1' }}>
                Close
              </button>
              <Link href={`/contact?project=${encodeURIComponent(selectedProject.title)}`} className="btn-ref-primary">
                <span>Build Similar System</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}


      <style>{`
        .work-card-hover:hover { box-shadow: 0 16px 40px rgba(10,33,61,0.1) !important; transform: translateY(-4px) !important; }
        .work-img-zoom { transition: transform 0.5s ease !important; }
        .work-card-hover:hover .work-img-zoom { transform: scale(1.05) !important; }
        @media (max-width: 900px) {
          .work-stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .work-modal-content { padding: 24px 18px !important; max-height: 92vh !important; border-radius: 12px !important; }
          .work-modal-actions { flex-direction: column !important; gap: 10px !important; }
          .work-modal-actions button, .work-modal-actions a { width: 100% !important; justify-content: center !important; text-align: center !important; }
          .work-stats-strip { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </div>
  )
}
