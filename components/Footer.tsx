'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'

// Social SVGs matching brand styling
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const TwitterIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
)

const SendPaperPlaneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4500)
    }
  }

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Projects & Work', href: '/work' },
    { name: 'Core Services', href: '/services' },
    { name: 'Contact & Scoping', href: '/contact' },
  ]

  const serviceLinks = [
    { name: 'AI Based Systems', href: '/services#ai-systems' },
    { name: 'Website Development', href: '/services#web-development' },
    { name: 'Custom Enterprise Software', href: '/services#custom-software' },
    { name: 'Mobile App Development', href: '/services#mobile-app' },
    { name: 'Technical SEO & Marketing', href: '/services#digital-marketing' },
    { name: 'Cloud Infrastructure & DevOps', href: '/services#hosting' },
  ]

  return (
    <footer
      style={{
        background: '#061629',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Topographic Contour Watermark on Background */}
      <div
        className="hero-contour-pattern"
        style={{
          width: '55%',
          opacity: 0.12,
          right: 'auto',
          left: 0,
        }}
        aria-hidden="true"
      />

      <div style={{ maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
        {/* ── MAIN 4-COLUMN FOOTER CONTENT ── */}
        <div
          style={{
            padding: '72px 48px 64px',
            display: 'grid',
            gridTemplateColumns: '1.35fr 0.85fr 1.05fr 1.35fr',
            gap: '44px',
          }}
          className="footer-main-grid"
        >
          {/* ── COL 1: BRAND LOGO, BADGE, BRIEF, NEWSLETTER & SOCIALS ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {/* White Brand Logo */}
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                marginBottom: '20px',
                transition: 'opacity 0.2s ease',
              }}
              aria-label="Pranavi Infotech"
            >
              <Image
                src="/logo/pranvi-logo-white-orange.png"
                alt="Pranavi Infotech - Innovate Integrate Elevate"
                width={220}
                height={55}
                style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
              />
            </Link>

            {/* Established Badge */}
            <div style={{ marginBottom: '14px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(242, 101, 34, 0.14)',
                  color: '#F26522',
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontFamily: 'var(--font-display)',
                }}
              >
                EST. 2012 • 75+ CLIENTS &amp; GOVT PROJECTS
              </span>
            </div>

            {/* Brand Narrative */}
            <p
              style={{
                color: '#9FB8B1',
                fontSize: '13.5px',
                lineHeight: '1.65',
                marginBottom: '26px',
                maxWidth: '340px',
              }}
            >
              Enterprise custom software engineering, intelligent AI systems, and high-performance SEO marketing engineered for security, scale, and high-converting growth.
            </p>

            {/* Newsletter Subscription */}
            <div style={{ maxWidth: '340px', marginBottom: '28px' }}>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '10px',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                Monthly Tech Insights
              </div>

              {subscribed ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 0',
                    color: '#F26522',
                    fontSize: '13px',
                    fontWeight: 600,
                    borderBottom: '1px solid #F26522',
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Subscribed successfully! Thank you.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.22)',
                    paddingBottom: '8px',
                    transition: 'border-color 0.25s ease',
                  }}
                  className="footer-newsletter-form"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter business email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      flex: 1,
                      background: 'transparent',
                      border: 'none',
                      outline: 'none',
                      color: '#FFFFFF',
                      fontSize: '14px',
                      fontFamily: 'var(--font-sans)',
                    }}
                    className="footer-email-input"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '4px',
                      transition: 'transform 0.2s ease',
                    }}
                    className="footer-send-btn"
                  >
                    <SendPaperPlaneIcon />
                  </button>
                </form>
              )}
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {[
                { icon: <LinkedinIcon />, href: 'https://linkedin.com', label: 'LinkedIn' },
                { icon: <TwitterIcon />, href: 'https://twitter.com', label: 'Twitter' },
                { icon: <FacebookIcon />, href: 'https://facebook.com', label: 'Facebook' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    transition: 'all 0.25s ease',
                  }}
                  className="footer-social-circle"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 2: COMPANY TABS ── */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'inline-block',
                borderBottom: '2px solid #F26522',
                paddingBottom: '4px',
              }}
            >
              Company
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#9FB8B1',
                      fontSize: '14px',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    className="footer-nav-link"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 3: RELEVANT SERVICES TABS ── */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'inline-block',
                borderBottom: '2px solid #F26522',
                paddingBottom: '4px',
              }}
            >
              Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    style={{
                      color: '#9FB8B1',
                      fontSize: '14px',
                      textDecoration: 'none',
                      fontWeight: 500,
                      transition: 'color 0.2s ease, transform 0.2s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                    className="footer-nav-link"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COL 4: SINGLE ADDRESS ONLY, PHONE NUMBERS & EMAILS ── */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '14px',
                fontWeight: 800,
                color: '#FFFFFF',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '20px',
                display: 'inline-block',
                borderBottom: '2px solid #F26522',
                paddingBottom: '4px',
              }}
            >
              Headquarters &amp; Contact
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Single Address Only */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(242, 101, 34, 0.12)',
                    color: '#F26522',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <MapPin size={17} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#64748B',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '2px',
                    }}
                  >
                    Office Location
                  </div>
                  <div style={{ color: '#E2E8F0', fontSize: '13.5px', lineHeight: '1.5', fontWeight: 500 }}>
                    Mumbai, Maharashtra, India
                  </div>
                </div>
              </div>

              {/* Contact Numbers */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(22, 163, 74, 0.12)',
                    color: '#22C55E',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Phone size={17} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#64748B',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '2px',
                    }}
                  >
                    Direct Phone &amp; WhatsApp
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a
                      href="tel:+919653418049"
                      style={{
                        color: '#FFFFFF',
                        fontSize: '14px',
                        fontWeight: 650,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      className="footer-contact-link"
                    >
                      +91 96534 18049 <span style={{ fontSize: '12px', color: '#22C55E', fontWeight: 600 }}>(WhatsApp)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Work Emails */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    color: '#38BDF8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                >
                  <Mail size={17} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#64748B',
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '2px',
                    }}
                  >
                    Official Email
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <a
                      href="mailto:info@pranaviinfotech.com"
                      style={{
                        color: '#FFFFFF',
                        fontSize: '13.5px',
                        fontWeight: 650,
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                      }}
                      className="footer-contact-link"
                    >
                      info@pranaviinfotech.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '2px' }}>
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    color: '#94A3B8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={16} />
                </div>
                <div style={{ fontSize: '12.5px', color: '#9FB8B1' }}>
                  Mon – Sat: 9:30 AM – 7:00 PM IST
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR: COPYRIGHT & POLICIES ── */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '24px 48px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13.5px',
            color: '#8BA9A0',
            flexWrap: 'wrap',
            gap: '16px',
          }}
          className="footer-bottom-bar"
        >
          {/* Left: © 2025 Pranavi Infotech */}
          <div>
            &copy; 2025 Pranavi Infotech. All rights reserved.
          </div>

          {/* Right: Terms & Conditions and Privacy Policy */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            <Link
              href="/terms"
              style={{
                color: '#8BA9A0',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              className="footer-bottom-link"
            >
              Terms &amp; Conditions
            </Link>
            <Link
              href="/privacy"
              style={{
                color: '#8BA9A0',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              className="footer-bottom-link"
            >
              Privacy Policy
            </Link>
            <span style={{ color: '#22C55E', fontSize: '12.5px', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              • NDA Protected
            </span>
          </div>
        </div>
      </div>

      {/* Scoped CSS for Footer Interactions & Responsiveness */}
      <style>{`
        .footer-newsletter-form:focus-within {
          border-bottom-color: #F26522 !important;
        }
        .footer-send-btn:hover {
          transform: translateX(4px);
        }
        .footer-social-circle:hover {
          background: #0A213D !important;
          border-color: #F26522 !important;
          color: #F26522 !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(242, 101, 34, 0.35);
        }
        .footer-nav-link:hover {
          color: #F26522 !important;
          transform: translateX(3px);
        }
        .footer-contact-link:hover {
          color: #F26522 !important;
        }
        .footer-bottom-link:hover {
          color: #F26522 !important;
        }
        .footer-email-input::placeholder {
          color: #7E9992;
        }
        @media (max-width: 1080px) {
          .footer-main-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 40px !important;
            padding: 56px 32px !important;
          }
        }
        @media (max-width: 680px) {
          .footer-main-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            padding: 44px 24px !important;
          }
          .footer-bottom-bar {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: flex-start !important;
            padding: 24px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-main-grid {
            padding: 36px 18px !important;
          }
          .footer-bottom-bar {
            padding: 20px 18px !important;
          }
        }
      `}</style>
    </footer>
  )
}
