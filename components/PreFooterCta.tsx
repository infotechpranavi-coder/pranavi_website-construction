'use client'
import { usePathname } from 'next/navigation'
import { Sparkles } from 'lucide-react'

export default function PreFooterCta() {
  const pathname = usePathname()

  // Do not show on contact page since user is already on the contact page
  if (pathname === '/contact') {
    return null
  }

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: 'clamp(56px, 7vh, 88px) 24px',
        position: 'relative',
        borderTop: '1px solid #E2E8F0',
        textAlign: 'center',
      }}
      aria-label="Create something new with Pranavi Infotech"
    >
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
        }}
      >
        {/* Subtle Eyebrow */}
        <div style={{ marginBottom: '16px' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '11.5px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#F26522',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Sparkles size={13} />
            <span>LET’S CREATE SOMETHING NEW</span>
          </span>
        </div>

        {/* Clean, Simple Question */}
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 3.4vw, 44px)',
            fontWeight: 800,
            color: '#0A213D',
            letterSpacing: '-0.025em',
            lineHeight: 1.25,
            marginBottom: '18px',
          }}
        >
          Have an idea, project, or system you’re looking to create?
        </h2>

        {/* Thoughtful, Relevant Description */}
        <p
          style={{
            fontSize: 'clamp(15px, 1.25vw, 17.5px)',
            color: '#475569',
            lineHeight: 1.7,
            maxWidth: '680px',
            margin: '0 auto 24px',
            fontWeight: 450,
          }}
        >
          Whether you are launching a custom software platform, automating complex business operations with AI, or scaling your digital presence—we are always excited to discuss what you are building.
        </p>

        {/* Simple text contact touchpoint — NO BUTTONS */}
        <p
          style={{
            fontSize: '14.5px',
            color: '#64748B',
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          Connect with our team in Mumbai at{' '}
          <a
            href="mailto:info@pranaviinfotech.com"
            style={{
              color: '#0A213D',
              fontWeight: 700,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              transition: 'color 0.2s ease',
            }}
            className="contact-text-link"
          >
            info@pranaviinfotech.com
          </a>{' '}
          or call{' '}
          <a
            href="tel:+919653418049"
            style={{
              color: '#0A213D',
              fontWeight: 700,
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              transition: 'color 0.2s ease',
            }}
            className="contact-text-link"
          >
            +91 96534 18049
          </a>
          .
        </p>
      </div>

      <style>{`
        .contact-text-link:hover {
          color: #F26522 !important;
        }
      `}</style>
    </section>
  )
}
