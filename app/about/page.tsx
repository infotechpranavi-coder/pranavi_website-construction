'use client'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2,
  HeartHandshake,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react'
import { RevealOnScroll, CountUp } from '@/components/shared'

const coreValues = [
  {
    num: '01',
    icon: Code2,
    title: 'Clean Code & System Rigor',
    desc: 'Strict TypeScript typing, modular domain-driven patterns, automated test coverage, and relentless pursuit of zero technical debt.',
  },
  {
    num: '02',
    icon: HeartHandshake,
    title: 'Radical Transparency',
    desc: 'Direct Slack engineer communication, bi-weekly sprint review demos, live staging URLs, and complete private Git repository access.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Agile 2-Week Velocity',
    desc: 'Shipping rapid production-ready increments with automated CI/CD pipelines and zero deploy downtime.',
  },
  {
    num: '04',
    icon: ShieldCheck,
    title: 'Enterprise Security by Default',
    desc: 'OWASP top 10 compliance, data encryption at rest and in transit, and role-based access control from day one.',
  },
]

const agileSteps = [
  {
    num: '01',
    title: 'Strategic Discovery & Technical Audit',
    desc: 'Deep business analysis, system design, and comprehensive technical & SEO audit before a single line of code.',
  },
  {
    num: '02',
    title: 'Agile Engineering & Government-Grade QA',
    desc: 'Two-week sprints with live staging deployments, automated testing coverage, and continuous stakeholder demos.',
  },
  {
    num: '03',
    title: 'Zero-Downtime Launch & Continuous Growth',
    desc: 'Blue-green production deployments, performance monitoring, and ongoing optimization to maximize ROI.',
  },
]

export default function AboutPage() {
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
        {/* Background grid pattern */}
        <div className="dark-grid-pattern" style={{ opacity: 0.22 }} aria-hidden="true" />
        {/* Ambient coral glow */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,101,34,0.12) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <RevealOnScroll direction="up" delay={0.05}>
            <span className="kicker-coral">ABOUT PRANAVI INFOTECH</span>
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
                maxWidth: '860px',
              }}
            >
              Engineering Digital Excellence<br />
              &amp; Trusted Growth Since 2012
            </h1>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.25}>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '16px', lineHeight: '1.7', marginBottom: '36px', maxWidth: '680px' }}>
              Established in Mumbai, India — Pranavi Infotech has partnered with enterprises, fast-growing startups, and government bodies to deliver mission-critical software, bespoke AI systems, and high-ROI digital marketing.
            </p>
          </RevealOnScroll>
          <RevealOnScroll direction="up" delay={0.35}>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn-bizzen-lime">
                <span>Schedule a Consultation</span>
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  border: '1px solid rgba(255,255,255,0.2)',
                  padding: '10px 22px',
                  borderRadius: '8px',
                  backdropFilter: 'blur(8px)',
                  transition: 'all 0.25s ease',
                }}
                className="about-outline-btn"
              >
                <span>Explore Capabilities</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section
        style={{
          background: '#F26522',
          padding: '40px 0',
        }}
      >
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '24px',
              textAlign: 'center',
            }}
            className="about-stats-4col"
          >
            {[
              { end: 2012, suffix: '', label: 'Established', dur: 3200, delay: 100 },
              { end: 75, suffix: '+', label: 'Happy Clients', dur: 2800, delay: 200 },
              { end: 150, suffix: '+', label: 'Products Shipped', dur: 3000, delay: 300 },
              { end: 99, suffix: '%', label: 'Delivery Success', dur: 2800, delay: 400 },
            ].map((s, i) => (
              <RevealOnScroll key={i} direction="none" delay={0.05 * i}>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(36px, 4vw, 52px)',
                      fontWeight: 850,
                      color: '#FFFFFF',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    <CountUp end={s.end} suffix={s.suffix} duration={s.dur} delay={s.delay} />
                  </div>
                  <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 650, marginTop: '6px', fontFamily: 'var(--font-display)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                    {s.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY SECTION ── */}
      <section style={{ padding: 'clamp(72px, 9vh, 108px) 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}
            className="about-story-grid"
          >
            {/* Left: Image Collage */}
            <RevealOnScroll direction="right" delay={0.1}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '14px' }} className="about-collage-grid">
                <div
                  className="about-collage-main-img"
                  style={{
                    position: 'relative',
                    height: '420px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 48px rgba(10, 33, 61, 0.1)',
                    border: '1px solid rgba(10, 33, 61, 0.07)',
                  }}
                >
                  <Image src="/about_team.jpg" alt="Pranavi Team" fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div
                    className="about-collage-sub-img"
                    style={{
                      position: 'relative',
                      height: '210px',
                      borderRadius: '14px',
                      overflow: 'hidden',
                      boxShadow: '0 8px 24px rgba(10, 33, 61, 0.07)',
                      border: '1px solid rgba(10, 33, 61, 0.07)',
                    }}
                  >
                    <Image src="/hero_tech_dashboard.png" alt="Software Engineering" fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div
                    style={{
                      background: 'linear-gradient(135deg, #0A213D 0%, #1a3a5c 100%)',
                      color: '#FFFFFF',
                      padding: '22px 20px',
                      borderRadius: '14px',
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      boxShadow: '0 8px 24px rgba(10, 33, 61, 0.18)',
                    }}
                  >
                    <div style={{ fontSize: '10px', color: '#F26522', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
                      HEADQUARTERS
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 750, color: '#FFFFFF', fontFamily: 'var(--font-display)', lineHeight: 1.35 }}>
                      Mumbai Technology Center,<br />Maharashtra, India
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right: Content */}
            <div>
              <RevealOnScroll direction="up" delay={0.1}>
                <span className="kicker-coral">OUR MISSION &amp; PHILOSOPHY</span>
                <h2
                  className="bizzen-section-title"
                  style={{ fontSize: 'clamp(26px, 2.6vw, 38px)', lineHeight: 1.18, marginTop: '12px', marginBottom: '18px' }}
                >
                  Engineering Digital Excellence<br />for Modern Industry Leaders
                </h2>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.2}>
                <p style={{ color: '#4A5E78', fontSize: '15px', lineHeight: '1.7', marginBottom: '16px' }}>
                  Established in <strong>2012</strong> in Mumbai, India, Pranavi Infotech has partnered with over <strong>75+ happy clients</strong>—spanning Fortune-caliber enterprises, fast-growing startups, and mission-critical government projects. We build scalable web platforms, native mobile applications, compliant cloud infrastructure, and custom AI systems.
                </p>
                <p style={{ color: '#4A5E78', fontSize: '15px', lineHeight: '1.7', marginBottom: '28px' }}>
                  Our integrated capabilities combine disciplined full-stack software development with data-driven digital marketing—including technical SEO, Google Ads, and brand positioning.
                </p>
              </RevealOnScroll>

              <RevealOnScroll direction="none" delay={0.2}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="about-2metric-grid">
                  <div style={{ background: '#F8FAFC', padding: '18px 20px', borderRadius: '12px', border: '1px solid rgba(226,232,240,0.9)' }}>
                    <div style={{ fontSize: '26px', fontWeight: 850, color: '#0A213D', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                      <CountUp end={100} suffix="%" duration={2600} delay={200} />
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 650, marginTop: '4px' }}>Client IP Ownership</div>
                  </div>
                  <div style={{ background: '#F8FAFC', padding: '18px 20px', borderRadius: '12px', border: '1px solid rgba(226,232,240,0.9)' }}>
                    <div style={{ fontSize: '22px', fontWeight: 850, color: '#F26522', fontFamily: 'var(--font-display)', letterSpacing: '-0.015em', lineHeight: 1.2 }}>
                      2-WEEK
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748B', fontWeight: 650, marginTop: '4px' }}>Agile Sprint Cycles</div>
                  </div>
                </div>
              </RevealOnScroll>

              <RevealOnScroll direction="up" delay={0.4}>
                <div style={{ marginTop: '28px' }}>
                  <Link href="/contact" className="btn-bizzen-forest">
                    <span>Start a Project</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE PRINCIPLES ── */}
      <section style={{ padding: 'clamp(72px, 9vh, 108px) 0', background: '#F8FAFC', borderTop: '1px solid rgba(10,33,61,0.06)' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px' }}>
          <RevealOnScroll direction="up" delay={0.05}>
            <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vh, 60px)' }}>
              <span className="kicker-coral">GUIDING PRINCIPLES</span>
              <h2 className="bizzen-section-title" style={{ fontSize: 'clamp(24px, 2.4vw, 34px)', lineHeight: 1.2, marginTop: '12px', marginBottom: '12px' }}>
                The Foundation of Every Line We Ship
              </h2>
              <p style={{ color: '#4A5E78', fontSize: '15px', maxWidth: '580px', margin: '0 auto', lineHeight: '1.6' }}>
                Our engineering values ensure consistency, maintainability, and enterprise-grade performance across all client engagements.
              </p>
            </div>
          </RevealOnScroll>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {coreValues.map((val, idx) => {
              const Icon = val.icon
              return (
                <RevealOnScroll key={idx} direction="up" delay={0.1 + idx * 0.08}>
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '28px 24px',
                      border: '1px solid rgba(10,33,61,0.07)',
                      boxShadow: '0 4px 20px rgba(10,33,61,0.04)',
                      height: '100%',
                      transition: 'all 0.25s ease',
                    }}
                    className="principle-card-hover"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                      <div
                        style={{
                          width: '44px', height: '44px', borderRadius: '12px',
                          background: 'rgba(242,101,34,0.09)', color: '#F26522',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}
                      >
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 850,
                          color: 'rgba(10,33,61,0.25)', letterSpacing: '0.05em',
                        }}
                      >
                        {val.num}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 800, color: '#0A213D', marginBottom: '10px', lineHeight: 1.3 }}>
                      {val.title}
                    </h3>
                    <p style={{ color: '#4A5E78', fontSize: '13.5px', lineHeight: '1.6' }}>{val.desc}</p>
                  </div>
                </RevealOnScroll>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── OUR AGILE PROCESS ── */}
      <section
        style={{
          padding: 'clamp(72px, 9vh, 108px) 0',
          background: '#0A213D',
          color: '#FFFFFF',
          position: 'relative',
          overflow: 'hidden',
        }}
        id="agile-process"
      >
        <div className="dark-grid-pattern" style={{ opacity: 0.18 }} aria-hidden="true" />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', right: '-80px', bottom: '-80px',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(242,101,34,0.1) 0%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr 0.9fr',
              gap: 'clamp(40px, 6vw, 72px)',
              alignItems: 'center',
            }}
            className="how-it-works-3col-grid"
          >
            {/* Col 1: Headline */}
            <RevealOnScroll direction="up" delay={0.05}>
              <div>
                <span className="kicker-coral">OUR AGILE PROCESS</span>
                <h2
                  className="bizzen-section-title-white"
                  style={{ fontSize: 'clamp(26px, 2.8vw, 38px)', lineHeight: 1.15, marginTop: '14px' }}
                >
                  Three Proven Steps to Transform Your Digital Operations
                </h2>
              </div>
            </RevealOnScroll>

            {/* Col 2: Steps */}
            <div>
              {agileSteps.map((s, idx) => (
                <RevealOnScroll key={idx} direction="up" delay={0.15 + idx * 0.1}>
                  <div
                    style={{
                      display: 'flex',
                      gap: '20px',
                      padding: '24px 0',
                      borderBottom: idx < agileSteps.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      alignItems: 'flex-start',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '13px',
                        fontWeight: 800,
                        color: '#F26522',
                        letterSpacing: '0.08em',
                        flexShrink: 0,
                        marginTop: '3px',
                      }}
                    >
                      {s.num}
                    </span>
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '16px',
                          fontWeight: 750,
                          color: '#FFFFFF',
                          lineHeight: 1.3,
                          marginBottom: '6px',
                        }}
                      >
                        {s.title}
                      </div>
                      <div style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.55' }}>
                        {s.desc}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Col 3: Giant 99% with CountUp */}
            <RevealOnScroll direction="none" delay={0.2}>
              <div className="how-it-works-right" style={{ paddingLeft: '8px' }}>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', maxWidth: '240px' }}>
                  Maximizing enterprise velocity &amp; organic conversion through precision engineering.
                </p>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(80px, 9vw, 128px)',
                    fontWeight: 850,
                    color: '#FFFFFF',
                    lineHeight: 0.95,
                    letterSpacing: '-0.04em',
                  }}
                >
                  <CountUp end={99} suffix="%" duration={3200} delay={400} />
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '12px',
                    fontWeight: 750,
                    color: '#F26522',
                    marginTop: '10px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Milestone Delivery Success
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>


      <style>{`
        .about-outline-btn:hover {
          background: rgba(255,255,255,0.08) !important;
          border-color: rgba(255,255,255,0.35) !important;
        }
        .principle-card-hover:hover {
          box-shadow: 0 12px 36px rgba(10,33,61,0.09) !important;
          transform: translateY(-3px) !important;
        }
        @media (max-width: 1024px) {
          .how-it-works-3col-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .how-it-works-right {
            grid-column: span 2 !important;
            padding-left: 0 !important;
            display: flex !important;
            align-items: center !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 900px) {
          .about-story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-stats-4col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .about-collage-grid { grid-template-columns: 1fr !important; }
          .about-collage-main-img { height: 260px !important; }
          .about-collage-sub-img { display: none !important; }
          .how-it-works-3col-grid { grid-template-columns: 1fr !important; }
          .how-it-works-right {
            grid-column: span 1 !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .about-2metric-grid { grid-template-columns: 1fr !important; }
          .about-stats-4col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 400px) {
          .about-stats-4col { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  )
}
