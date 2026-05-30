'use client'
import Link from 'next/link'
import { Zap, Mail, Phone, MapPin } from 'lucide-react'
import { Github, Linkedin, Twitter } from './BrandIcons'

const services = ['Web Development', 'Mobile Apps', 'Cloud & DevOps', 'AI & Machine Learning', 'UI/UX Design', 'Data Analytics']
const company  = ['About Us', 'Our Work', 'Services', 'Contact']
const companyHrefs = ['/about', '/work', '/services', '/contact']

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0B1120 0%, #0F172A 100%)',
      paddingTop: '72px',
      color: '#CBD5E1',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          paddingBottom: '56px',
        }}>
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', marginBottom: '16px' }}>
              <div style={{
                width: '36px', height: '36px',
                background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                borderRadius: '10px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
              }}>
                <Zap size={20} color="white" fill="white" />
              </div>
              <span style={{
                fontSize: '22px', fontWeight: 800,
                background: 'linear-gradient(135deg, #FFFFFF, #93C5FD)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>Pranavi Infotech</span>
            </Link>
            <p style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.7', maxWidth: '280px', marginBottom: '24px' }}>
              We engineer scalable software solutions that power the world&apos;s most ambitious companies.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {[
                { icon: <Github size={18} />, href: '#' },
                { icon: <Linkedin size={18} />, href: '#' },
                { icon: <Twitter size={18} />, href: '#' },
                { icon: <Mail size={18} />, href: 'mailto:hello@pranaviinfotech.com' },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: '38px', height: '38px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#94A3B8',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'
                    e.currentTarget.style.color = '#60A5FA'
                    e.currentTarget.style.background = 'rgba(59,130,246,0.12)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'
                    e.currentTarget.style.color = '#94A3B8'
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#E2E8F0', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Services
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {services.map(s => (
                <li key={s}>
                  <Link href="/services" style={{
                    color: '#94A3B8', fontSize: '14px', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}
                  >{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#E2E8F0', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Company
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {company.map((c, i) => (
                <li key={c}>
                  <Link href={companyHrefs[i]} style={{
                    color: '#94A3B8', fontSize: '14px', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}
                  >{c}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, color: '#E2E8F0', marginBottom: '20px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Connect
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: <MapPin size={16} />, text: 'Pune, Maharashtra, India' },
                { icon: <Phone size={16} />, text: '+91 98765 43210' },
                { icon: <Mail size={16} />, text: 'hello@pranaviinfotech.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#60A5FA', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <span style={{ color: '#94A3B8', fontSize: '14px', lineHeight: '1.5' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ color: '#64748B', fontSize: '13px' }}>
            © {new Date().getFullYear()} Pranavi Infotech. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(t => (
              <a key={t} href="#" style={{ color: '#64748B', fontSize: '13px', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748B'}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
