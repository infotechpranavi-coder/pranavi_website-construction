'use client'
import { useState, Suspense, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Zap,
  ArrowRight,
  MessageSquare,
  Sparkles,
  ChevronDown,
} from 'lucide-react'

function ContactFormInner() {
  const searchParams = useSearchParams()
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  useEffect(() => {
    const serviceParam = searchParams.get('service')
    if (serviceParam) {
      setForm((prev) => ({ ...prev, subject: `Inquiry for ${serviceParam}` }))
    }
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 600)
  }

  if (submitted) {
    return (
      <div
        style={{
          padding: '40px 32px',
          background: 'rgba(242, 101, 34, 0.12)',
          border: '1px solid #F26522',
          borderRadius: '12px',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        <div
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: 'rgba(34, 197, 94, 0.16)',
            color: '#22C55E',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
          }}
        >
          <CheckCircle2 size={32} />
        </div>

        <h3
          style={{
            fontSize: '24px',
            fontWeight: 800,
            color: '#FFFFFF',
            marginBottom: '8px',
            fontFamily: 'var(--font-display)',
          }}
        >
          Consultation Request Received!
        </h3>

        <p
          style={{
            color: '#CBD5E1',
            fontSize: '14.5px',
            lineHeight: '1.6',
            maxWidth: '440px',
            margin: '0 auto 24px',
          }}
        >
          Thank you, <strong>{form.name}</strong>. Our senior software team in Mumbai will review your project requirements and provide a preliminary scope within 24 hours.
        </p>

        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={`https://wa.me/919653418049?text=Hi%20Pranavi%20Infotech%2C%20I%20just%20submitted%20a%20consultation%20request%20for%20${encodeURIComponent(form.subject || 'a new project')}.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              borderRadius: '8px',
              background: '#25D366',
              color: '#FFFFFF',
              fontWeight: 700,
              fontSize: '14px',
              textDecoration: 'none',
            }}
          >
            <MessageSquare size={16} />
            <span>Connect on WhatsApp</span>
          </a>

          <button
            onClick={() => {
              setSubmitted(false)
              setForm({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
              })
            }}
            style={{
              padding: '12px 24px',
              borderRadius: '8px',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
            }}
          >
            Submit Another Request
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {/* Row 1: Name and Phone */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="contact-form-2col">
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 700,
              color: '#CBD5E1',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '6px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Full Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Rahul Sharma"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="consultation-input"
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 700,
              color: '#CBD5E1',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '6px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Phone / WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="+91 96534 18049"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="consultation-input"
          />
        </div>
      </div>

      {/* Row 2: Work Email and Subject */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }} className="contact-form-2col">
        <div>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 700,
              color: '#CBD5E1',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '6px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Work Email *
          </label>
          <input
            type="email"
            required
            placeholder="rahul@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="consultation-input"
          />
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '12px',
              fontWeight: 700,
              color: '#CBD5E1',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              marginBottom: '6px',
              fontFamily: 'var(--font-mono)',
            }}
          >
            Project Subject *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Custom AI Pipeline / SaaS Platform"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className="consultation-input"
          />
        </div>
      </div>

      {/* Row 3: Project Requirements */}
      <div>
        <label
          style={{
            display: 'block',
            fontSize: '12px',
            fontWeight: 700,
            color: '#CBD5E1',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            marginBottom: '6px',
            fontFamily: 'var(--font-mono)',
          }}
        >
          Project Scope &amp; Goals *
        </label>
        <textarea
          required
          rows={4}
          placeholder="Describe your product goals, user volumes, desired stack, or timeline target..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="consultation-input"
          style={{ resize: 'vertical' }}
        />
      </div>

      {/* NDA Notice and Submit Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', marginTop: '6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#94A3B8', fontSize: '12.5px' }}>
          <ShieldCheck size={16} color="#22C55E" />
          <span>Strict NDA &amp; 100% IP Ownership Guaranteed</span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-bizzen-lime"
          style={{ cursor: submitting ? 'not-allowed' : 'pointer' }}
        >
          <span>{submitting ? 'Dispatching...' : 'SEND MESSAGE'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  )
}

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqs = [
    {
      q: 'How fast can our team begin discovery and planning?',
      a: 'We respond to all technical inquiries within 24 hours. An initial scoping call with a senior engineering lead in Mumbai can typically be scheduled within 2 business days.',
    },
    {
      q: 'Do you execute non-disclosure agreements (NDAs)?',
      a: 'Yes, absolutely. We sign mutually binding standard or enterprise NDAs prior to reviewing proprietary project specifications, source code, or technical specifications.',
    },
    {
      q: 'How do you handle remote time-zone overlap for international clients?',
      a: 'Our engineering teams maintain dedicated overlap windows with US, UK, and UAE working hours, providing daily async Slack updates, bi-weekly video demos, and continuous staging URLs.',
    },
  ]

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      {/* ── HERO ── */}
      <section
        style={{
          paddingTop: '140px',
          paddingBottom: '80px',
          background: 'radial-gradient(ellipse 80% 60% at 50% 20%, #102A54 0%, #050B14 100%)',
          color: '#FFFFFF',
          position: 'relative',
        }}
      >
        <div className="dark-grid-pattern" style={{ opacity: 0.25 }} aria-hidden="true" />
        <div className="ambient-glow-blue" style={{ top: '10%', right: '15%' }} aria-hidden="true" />

        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '860px' }}>
            <span className="kicker-diamond-light">DIRECT CONTACT &amp; ESTIMATION</span>
            <h1
              className="display-title"
              style={{
                fontSize: 'clamp(38px, 5.5vw, 64px)',
                color: '#FFFFFF',
                margin: '16px 0 16px',
                letterSpacing: '-0.025em',
                lineHeight: '1.12',
              }}
            >
              Connect with Our Principal Engineering Team
            </h1>
            <div
              style={{
                fontSize: '18px',
                color: '#38BDF8',
                fontWeight: 600,
                marginBottom: '24px',
                fontFamily: 'var(--font-display)',
              }}
            >
              Let’s discuss your technical requirements, scope, and timeline
            </div>
            <p style={{ color: '#CBD5E1', fontSize: '16px', lineHeight: '1.7', maxWidth: '720px' }}>
              Established in 2012, Pranavi Infotech has delivered custom software, high-security government portals, bespoke AI automation, and technical SEO marketing for over 75+ happy clients across the globe.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTACT SECTION (EXECUTIVE SPLIT LAYOUT SAME AS ABOUT PAGE DESIGN STANDARD) ── */}
      <section style={{ background: '#FFFFFF', padding: '0' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.15fr',
            minHeight: '660px',
          }}
          className="contact-split-grid"
        >
          {/* Left: Professional Executive Business Photo with Floating Badges */}
          <div
            className="contact-image-col"
            style={{
              position: 'relative',
              minHeight: '480px',
              overflow: 'hidden',
              background: '#0A213D',
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=1200&q=80"
              alt="Pranavi Infotech Business Consultation"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            {/* Gradient Overlay for subtle depth */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(10, 33, 61, 0.2) 0%, rgba(10, 33, 61, 0.75) 100%)',
              }}
            />

            {/* Floating Trust Card Overlay */}
            <div
              style={{
                position: 'absolute',
                bottom: '36px',
                left: '36px',
                right: '36px',
                background: 'rgba(10, 33, 61, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                borderRadius: '16px',
                padding: '24px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: '#FFFFFF',
              }}
              className="contact-floating-trust"
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F26522', fontWeight: 800, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px', fontFamily: 'var(--font-mono)' }}>
                <Sparkles size={14} />
                <span>MUMBAI HEADQUARTERS</span>
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '6px', fontFamily: 'var(--font-display)' }}>
                Direct Engineering Access
              </div>
              <p style={{ fontSize: '13.5px', color: '#CBD5E1', lineHeight: '1.5', margin: '0 0 14px' }}>
                Collaborate directly with principal engineers and tech leads. No junior middle-layers or outsourced hand-offs.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', fontSize: '12.5px', color: '#94A3B8' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Zap size={14} color="#F26522" /> 24h Preliminary SLA
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <ShieldCheck size={14} color="#22C55E" /> 100% IP Ownership
                </span>
              </div>
            </div>
          </div>

          {/* Right: Dark Navy Consultation Form Container */}
          <div
            className="contact-form-col"
            style={{
              background: '#0A213D',
              padding: 'clamp(44px, 5vw, 68px) clamp(32px, 5vw, 60px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              color: '#FFFFFF',
            }}
          >
            <div style={{ marginBottom: '12px' }}>
              <span className="kicker-lime">START A PROJECT</span>
            </div>

            <h2
              className="bizzen-section-title-white"
              style={{ fontSize: 'clamp(28px, 3.2vw, 42px)', marginBottom: '12px', lineHeight: 1.18 }}
            >
              Schedule Your Strategy<br />Consultation Today
            </h2>

            <p style={{ color: '#8BA2BC', fontSize: '14.5px', lineHeight: '1.65', marginBottom: '32px' }}>
              Whether you need bespoke enterprise software, generative AI systems, compliant government portals, or technical SEO growth—our senior engineers and marketing leads are ready to partner with you.
            </p>

            <Suspense fallback={<div style={{ color: '#FFFFFF' }}>Loading form...</div>}>
              <ContactFormInner />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ── 4-CARD DIRECT COMMUNICATION CHANNELS (MATCHING ABOUT PAGE 4-GRID STANDARD) ── */}
      <section className="bg-ice-section" style={{ padding: '80px 0' }}>
        <div className="tech-grid-pattern" aria-hidden="true" />
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span className="section-kicker">COMMUNICATION CHANNELS</span>
            <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '12px' }}>
              Reach Us Directly Anytime
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto' }}>
              Connect with our Mumbai headquarters via phone, direct WhatsApp chat, or official enterprise email.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
            className="contact-4col-grid"
          >
            {/* Card 1: Phone */}
            <div className="glass-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(242, 101, 34, 0.1)',
                    color: '#F26522',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <Phone size={22} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  DIRECT CALL
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  Phone Support
                </h3>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.5', marginBottom: '16px' }}>
                  Mon–Sat from 9:30 AM to 7:00 PM IST.
                </p>
              </div>
              <a
                href="tel:+919653418049"
                style={{
                  color: '#F26522',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                }}
              >
                +91 96534 18049
              </a>
            </div>

            {/* Card 2: WhatsApp */}
            <div className="glass-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(34, 197, 94, 0.1)',
                    color: '#22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <MessageSquare size={22} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  INSTANT MESSAGING
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  WhatsApp Direct
                </h3>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.5', marginBottom: '16px' }}>
                  Fastest response for project estimates.
                </p>
              </div>
              <a
                href="https://wa.me/919653418049?text=Hi%20Pranavi%20Infotech%2C%20I%20have%20a%20project%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#22C55E',
                  fontSize: '15px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                }}
              >
                Chat on WhatsApp →
              </a>
            </div>

            {/* Card 3: Work Email */}
            <div className="glass-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.1)',
                    color: '#0284C7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <Mail size={22} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  WORK DESK
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  Official Email
                </h3>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.5', marginBottom: '16px' }}>
                  Send RFP, scope docs, or project briefs.
                </p>
              </div>
              <a
                href="mailto:info@pranaviinfotech.com"
                style={{
                  color: '#0284C7',
                  fontSize: '14.5px',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-display)',
                }}
              >
                info@pranaviinfotech.com
              </a>
            </div>

            {/* Card 4: Office Location */}
            <div className="glass-card" style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    background: 'rgba(168, 85, 247, 0.1)',
                    color: '#A855F7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px',
                  }}
                >
                  <MapPin size={22} />
                </div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#64748B', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)', marginBottom: '4px' }}>
                  ENGINEERING CENTER
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '8px' }}>
                  Mumbai, India
                </h3>
                <p style={{ color: '#64748B', fontSize: '13px', lineHeight: '1.5', margin: 0 }}>
                  Mumbai, Maharashtra, India
                </p>
              </div>
              <div style={{ fontSize: '12px', color: '#94A3B8', marginTop: '16px', fontWeight: 600 }}>
                Mon–Sat • 9:30 AM – 7:00 PM IST
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section style={{ padding: '80px 0', background: '#FFFFFF' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span className="section-kicker">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="section-title" style={{ marginTop: '8px' }}>
              Consultation &amp; Scoping FAQ
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  style={{
                    border: '1px solid #E2E8F0',
                    borderRadius: '10px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    background: isOpen ? '#F8FAFC' : '#FFFFFF',
                    transition: 'all 0.2s ease',
                  }}
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', margin: 0 }}>
                      {faq.q}
                    </h3>
                    <ChevronDown
                      size={18}
                      color="#64748B"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                      }}
                    />
                  </div>
                  {isOpen && (
                    <p style={{ marginTop: '12px', color: '#475569', fontSize: '14px', lineHeight: '1.65', margin: '12px 0 0' }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 960px) {
          .contact-split-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-4col-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .contact-image-col {
            min-height: 240px !important;
            height: 240px !important;
          }
          .contact-floating-trust {
            bottom: 14px !important;
            left: 14px !important;
            right: 14px !important;
            padding: 16px !important;
          }
          .contact-form-col {
            padding: 32px 18px !important;
          }
          .contact-form-2col {
            grid-template-columns: 1fr !important;
          }
          .contact-4col-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
