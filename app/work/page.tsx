'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  { id: 1, name: 'VaultPay', client: 'FinVault Inc.', industry: 'FinTech', tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'], desc: 'End-to-end payment infrastructure serving 200K+ monthly transactions with real-time fraud detection.', featured: true },
  { id: 2, name: 'MediTrack Pro', client: 'HealthBridge', industry: 'HealthTech', tech: ['React', 'Python', 'AWS', 'HIPAA'], desc: 'HIPAA-compliant patient management system used by 1,200 clinicians across 40 hospitals.' },
  { id: 3, name: 'CartFlow', client: 'CartFlow Inc.', industry: 'SaaS', tech: ['Next.js', 'Prisma', 'Redis', 'TypeScript'], desc: 'Multi-tenant SaaS e-commerce platform scaling to $2M GMV per month with 99.9% uptime.' },
  { id: 4, name: 'ShopNova', client: 'Nova Retail', industry: 'E-Commerce', tech: ['React', 'Shopify API', 'GraphQL', 'AWS'], desc: 'Headless e-commerce storefront with AI-driven product recommendations boosting AOV by 34%.' },
  { id: 5, name: 'ClearLedger', client: 'TrustBank', industry: 'FinTech', tech: ['TypeScript', 'Kubernetes', 'gRPC', 'Kafka'], desc: 'Real-time ledger reconciliation microservice processing 10M+ events/day with sub-millisecond latency.' },
  { id: 6, name: 'PulseHealth', client: 'WellCo Labs', industry: 'HealthTech', tech: ['React Native', 'Firebase', 'Python', 'TensorFlow'], desc: 'AI-powered health monitoring mobile app with FDA-cleared vitals tracking for 80K active users.' },
]

const filters = ['All', 'FinTech', 'HealthTech', 'SaaS', 'E-Commerce']

const tagColors = {
  FinTech: '#10B981',
  HealthTech: '#8B5CF6',
  SaaS: '#3B82F6',
  'E-Commerce': '#F59E0B',
}

export default function Work() {
  const [active, setActive] = useState('All')
  const featured = projects[0]
  const filtered = active === 'All' ? projects.slice(1) : projects.slice(1).filter(p => p.industry === active)

  return (
    <>
      {/* HERO */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'linear-gradient(135deg,#F8FAFC,#F1F5F9)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" />
        <div className="mesh-blob blob-1" style={{ opacity: 0.4 }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 5 }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>// Our Work</p>
          <h1 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 900, color: '#0F172A', marginBottom: '20px', lineHeight: 1.1 }}>
            Projects That <span className="gradient-text">Define Industries</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7 }}>
            A selection of our most impactful engagements across fintech, healthtech, SaaS, and e-commerce.
          </p>
        </div>
      </section>

      {/* FEATURED CASE STUDY */}
      <section style={{ padding: '0 24px 64px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <p className="section-label" style={{ marginBottom: '20px' }}>// Featured Case Study</p>
          <div style={{
            background: 'linear-gradient(135deg,rgba(29,78,216,0.12),rgba(59,130,246,0.06))',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '24px', padding: '56px',
            display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'center',
          }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <span className="industry-tag" style={{ backgroundColor: `${tagColors[featured.industry]}22`, borderColor: `${tagColors[featured.industry]}44`, color: tagColors[featured.industry], marginBottom: '20px', display: 'inline-block' }}>{featured.industry}</span>
              <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#0F172A', marginBottom: '8px' }}>{featured.name}</h2>
              <p style={{ color: '#3B82F6', fontSize: '14px', fontWeight: 600, marginBottom: '20px', fontFamily: 'var(--font-mono)' }}>Client: {featured.client}</p>
              <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.75', marginBottom: '32px' }}>{featured.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {featured.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
              </div>
              <Link href="/contact" className="btn-primary">View Case Study <ExternalLink size={16} /></Link>
            </div>
            <div style={{ flex: '0 0 auto', minWidth: '260px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[{ label: 'Transactions/month', val: '200K+' }, { label: 'Latency', val: '<50ms' }, { label: 'Uptime', val: '99.99%' }, { label: 'Team size', val: '12 engineers' }].map((m, i) => (
                  <div key={i} style={{ background: '#FFFFFF', border: '1px solid rgba(15,23,42,0.06)', borderRadius: '12px', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
                    <span style={{ color: '#64748B', fontSize: '13px' }}>{m.label}</span>
                    <span style={{ color: '#0F172A', fontWeight: 700, fontSize: '18px' }}>{m.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ padding: '0 24px 100px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActive(f)} style={{
                padding: '8px 20px', borderRadius: '100px', fontSize: '14px', fontWeight: 600, cursor: 'pointer',
                border: active === f ? '1px solid rgba(59,130,246,0.5)' : '1px solid rgba(15,23,42,0.08)',
                background: active === f ? 'rgba(59,130,246,0.12)' : 'rgba(15,23,42,0.02)',
                color: active === f ? '#2563EB' : '#475569',
                transition: 'all 0.2s',
              }}>{f}</button>
            ))}
          </div>

          {/* Project Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '24px' }}>
            {filtered.map(p => (
              <div key={p.id} className="glass-card project-card" style={{ padding: '32px' }}>
                <div className="project-overlay">
                  <Link href="/contact" className="btn-primary" style={{ fontSize: '14px', padding: '10px 20px' }}>View Case Study <ArrowRight size={15} /></Link>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <span className="industry-tag" style={{ backgroundColor: `${tagColors[p.industry]}22`, borderColor: `${tagColors[p.industry]}44`, color: tagColors[p.industry] }}>{p.industry}</span>
                  <ExternalLink size={16} color="rgba(15,23,42,0.35)" />
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>{p.name}</h3>
                <p style={{ color: '#3B82F6', fontSize: '12px', fontWeight: 600, marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>{p.client}</p>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>{p.desc}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px', color: '#64748B', fontSize: '16px' }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  )
}
