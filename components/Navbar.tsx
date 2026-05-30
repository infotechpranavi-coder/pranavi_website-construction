'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = pathname === '/'
  const isActiveScrolled = scrolled || !isHome

  return (
    <nav
      style={{
        position: 'fixed',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1), top 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-radius 0.5s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.5s cubic-bezier(0.16, 1, 0.3, 1), border 0.5s cubic-bezier(0.16, 1, 0.3, 1), padding 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1), max-width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        
        width: isActiveScrolled ? '92%' : '100%',
        maxWidth: isActiveScrolled ? '1200px' : '100%',
        top: isActiveScrolled ? '16px' : '0px',
        borderRadius: isActiveScrolled ? '100px' : '0px',
        background: isActiveScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
        border: isActiveScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: isActiveScrolled ? '12px 24px' : '24px 24px',
        boxShadow: isActiveScrolled ? '0 20px 40px rgba(0, 0, 0, 0.2)' : 'none',
        backdropFilter: isActiveScrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: isActiveScrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div style={{
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1200px'
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div style={{
            width: '36px', height: '36px',
            background: 'linear-gradient(135deg, #F59E0B, #D97706)',
            borderRadius: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Zap size={20} color="#0F172A" fill="#0F172A" />
          </div>
          <span style={{
            fontSize: '22px',
            fontWeight: 900,
            color: '#FFFFFF',
            letterSpacing: '-0.02em'
          }}>
            Pranavi Infotech
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }} className="desktop-nav">
          {navLinks.map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  padding: '8px 16px',
                  borderRadius: '100px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  transition: 'all 0.2s',
                  color: active
                    ? '#F59E0B'
                    : isActiveScrolled
                      ? '#E2E8F0'
                      : 'rgba(255, 255, 255, 0.85)',
                  background: active ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
                }}
              >
                {link.label}
              </Link>
            )
          })}
          <Link href="/contact" className="btn-primary" style={{
            marginLeft: '12px',
            padding: '10px 22px',
            fontSize: '14px',
            background: 'linear-gradient(135deg, #F59E0B, #D97706)',
            color: '#0F172A',
            fontWeight: 700,
            borderRadius: '100px'
          }}>
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '100px',
            padding: '8px 12px',
            color: '#FFFFFF',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: '0',
          right: '0',
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: isActiveScrolled ? '0 0 24px 24px' : '0',
          padding: '16px 24px 24px',
          boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
          marginTop: isActiveScrolled ? '4px' : '0'
        }}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 600,
                color: pathname === link.href ? '#F59E0B' : '#E2E8F0',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: '16px',
              display: 'inline-flex',
              background: 'linear-gradient(135deg, #F59E0B, #D97706)',
              color: '#0F172A',
              fontWeight: 700,
              width: '100%',
              justifyContent: 'center',
              borderRadius: '100px'
            }}
          >
            Book Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        .nav-link:hover {
          color: #F59E0B !important;
          background: rgba(245, 158, 11, 0.08) !important;
        }
      `}</style>
    </nav>
  )
}
