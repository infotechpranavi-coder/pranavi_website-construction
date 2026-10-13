'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
  Code2,
  TrendingUp,
  Brain,
  Globe,
  Layers,
  Smartphone,
  Wrench,
  Cloud,
  Search,
  Share2,
  Target,
  Palette,
  Video,
  ShieldCheck,
} from 'lucide-react'

// Categorized Services: Technologies & Digital Marketing under Services Tab
const serviceCategories = [
  {
    category: 'Technologies',
    subtitle: 'Software, AI & Cloud Infrastructure',
    icon: Code2,
    badgeColor: '#F26522',
    items: [
      {
        name: 'AI Based Systems',
        href: '/services#ai-systems',
        icon: Brain,
        hint: 'Custom LLMs & RAG agents',
      },
      {
        name: 'Web Development',
        href: '/services#web-development',
        icon: Globe,
        hint: 'Next.js 15 & React platforms',
      },
      {
        name: 'Custom Enterprise Software',
        href: '/services#custom-software',
        icon: Layers,
        hint: 'Microservices & bespoke logic',
      },
      {
        name: 'Mobile App Development',
        href: '/services#mobile-app',
        icon: Smartphone,
        hint: 'iOS, Android & Flutter apps',
      },
      {
        name: 'Website Maintenance',
        href: '/services#maintenance',
        icon: Wrench,
        hint: '24/7 security & SLA support',
      },
      {
        name: 'Hosting & Cloud Support',
        href: '/services#hosting',
        icon: Cloud,
        hint: 'Managed AWS & GCP DevOps',
      },
    ],
  },
  {
    category: 'Digital Marketing',
    subtitle: 'Organic Visibility & High-ROI Campaigns',
    icon: TrendingUp,
    badgeColor: '#0A213D',
    items: [
      {
        name: 'Search Engine Optimization (SEO)',
        href: '/services#seo',
        icon: Search,
        hint: 'Keyword dominance & Core Web Vitals',
      },
      {
        name: 'Social Media Marketing (SMM)',
        href: '/services#smm',
        icon: Share2,
        hint: 'Omnichannel brand positioning',
      },
      {
        name: 'Google Ads (PPC Campaigns)',
        href: '/services#google-ads',
        icon: Target,
        hint: 'High ROAS search & retargeting',
      },
      {
        name: 'Design Thinking & UI/UX',
        href: '/services#design-thinking',
        icon: Palette,
        hint: 'Figma token design systems',
      },
      {
        name: 'Video Production & Motion',
        href: '/services#video-production',
        icon: Video,
        hint: 'Brand films & 3D animations',
      },
      {
        name: 'Online Reputation Management (ORM)',
        href: '/services#orm',
        icon: ShieldCheck,
        hint: 'Brand sentiment & executive PR',
      },
    ],
  },
]

const navLinks = [
  {
    name: 'Home',
    href: '/',
    hasDropdown: false,
  },
  {
    name: 'Services',
    href: '/services',
    hasDropdown: true,
  },
  {
    name: 'Projects',
    href: '/work',
    hasDropdown: false,
  },
  {
    name: 'About Us',
    href: '/about',
    hasDropdown: false,
  },
  {
    name: 'Contact',
    href: '/contact',
    hasDropdown: false,
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  const isHomePage = pathname === '/'
  const isTransparent = isHomePage && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: isTransparent ? 'transparent' : 'rgba(255, 255, 255, 0.98)',
        backdropFilter: isTransparent ? 'none' : 'blur(16px)',
        WebkitBackdropFilter: isTransparent ? 'none' : 'blur(16px)',
        borderBottom: isTransparent
          ? '1px solid rgba(255, 255, 255, 0.12)'
          : '1px solid rgba(10, 33, 61, 0.08)',
        transition:
          'background 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease, backdrop-filter 0.35s ease',
        boxShadow: isTransparent ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.06)',
      }}
    >
      <div
        className="navbar-inner-container"
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: scrolled ? '14px 32px' : '20px 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          transition: 'padding 0.3s ease',
        }}
      >
        {/* Official Brand Logo */}
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            transition: 'opacity 0.2s ease',
          }}
          aria-label="Pranavi Infotech"
        >
          <Image
            src={
              isTransparent
                ? '/logo/pranvi-logo-white-orange.png'
                : '/logo/pranvi-new-logo-removebg-preview.png'
            }
            alt="Pranavi Infotech - Innovate Integrate Elevate"
            width={230}
            height={58}
            className="navbar-brand-logo"
            style={{ height: '42px', width: 'auto', objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Center Navigation Links */}
        <nav
          className="desktop-nav-menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
        >
          {navLinks.map((link) => {
            const isCurrent =
              pathname === link.href ||
              (link.name === 'Services' && pathname.startsWith('/services'))
            const linkColor = isCurrent
              ? '#F26522'
              : isTransparent
              ? '#FFFFFF'
              : '#0A213D'

            return (
              <div
                key={link.name}
                style={{ position: 'relative' }}
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    color: linkColor,
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    padding: '8px 0',
                    transition: 'color 0.2s ease',
                  }}
                  className="nav-link-hover"
                >
                  <span>{link.name}</span>
                  {link.hasDropdown && (
                    <ChevronDown
                      size={14}
                      style={{
                        opacity: 0.8,
                        color: linkColor,
                        transition: 'transform 0.2s ease, color 0.2s ease',
                        transform:
                          activeDropdown === link.name ? 'rotate(180deg)' : 'none',
                      }}
                    />
                  )}
                </Link>

                {/* Services Mega Dropdown - 2 Columns: Technologies & Digital Marketing */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      paddingTop: '12px', // seamless hover buffer
                      zIndex: 1010,
                    }}
                  >
                    <div
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '22px',
                        padding: '24px 26px 18px',
                        minWidth: '680px',
                        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.16)',
                        border: '1px solid rgba(10, 33, 61, 0.08)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        animation: 'dropdownFadeIn 0.2s ease-out',
                      }}
                    >
                      {/* 2-Column Grid */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: '1fr 1fr',
                          gap: '24px',
                        }}
                      >
                        {serviceCategories.map((cat) => {
                          const CatIcon = cat.icon
                          return (
                            <div key={cat.category}>
                              {/* Category Header */}
                              <div
                                style={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: '8px',
                                  paddingBottom: '10px',
                                  marginBottom: '8px',
                                  borderBottom: '1.5px solid rgba(10, 33, 61, 0.08)',
                                }}
                              >
                                <span
                                  style={{
                                    width: '26px',
                                    height: '26px',
                                    borderRadius: '8px',
                                    background:
                                      cat.category === 'Technologies'
                                        ? 'rgba(242, 101, 34, 0.12)'
                                        : 'rgba(10, 33, 61, 0.08)',
                                    color:
                                      cat.category === 'Technologies'
                                        ? '#F26522'
                                        : '#0A213D',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  }}
                                >
                                  <CatIcon size={14} />
                                </span>
                                <div>
                                  <div
                                    style={{
                                      fontSize: '12px',
                                      fontWeight: 800,
                                      color:
                                      cat.category === 'Technologies'
                                        ? '#F26522'
                                        : '#0A213D',
                                      letterSpacing: '0.06em',
                                      textTransform: 'uppercase',
                                      fontFamily: 'var(--font-mono)',
                                      lineHeight: 1.2,
                                    }}
                                  >
                                    {cat.category}
                                  </div>
                                  <div
                                    style={{
                                      fontSize: '11px',
                                      color: '#64748B',
                                      fontWeight: 500,
                                    }}
                                  >
                                    {cat.subtitle}
                                  </div>
                                </div>
                              </div>

                              {/* Service Sublinks */}
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '2px',
                                }}
                              >
                                {cat.items.map((sub) => {
                                  const ItemIcon = sub.icon
                                  return (
                                    <Link
                                      key={sub.name}
                                      href={sub.href}
                                      className="executive-dropdown-item"
                                      style={{
                                        padding: '8px 12px',
                                        textDecoration: 'none',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: '10px',
                                        transition: 'all 0.18s ease',
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '9px',
                                        }}
                                      >
                                        <ItemIcon
                                          size={15}
                                          className="dropdown-item-icon"
                                          style={{
                                            color: '#64748B',
                                            transition: 'color 0.18s ease',
                                            flexShrink: 0,
                                          }}
                                        />
                                        <div>
                                          <div
                                            style={{
                                              fontSize: '13px',
                                              fontWeight: 600,
                                              color: '#0A213D',
                                              lineHeight: 1.25,
                                            }}
                                            className="dropdown-item-title"
                                          >
                                            {sub.name}
                                          </div>
                                          <div
                                            style={{
                                              fontSize: '10.5px',
                                              color: '#94A3B8',
                                              fontWeight: 500,
                                            }}
                                          >
                                            {sub.hint}
                                          </div>
                                        </div>
                                      </div>
                                      <span
                                        className="dropdown-arrow-circle"
                                        style={{ width: '20px', height: '20px' }}
                                      >
                                        <ArrowUpRight size={11} />
                                      </span>
                                    </Link>
                                  )
                                })}
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {/* Bottom Link Bar */}
                      <div
                        style={{
                          borderTop: '1px solid rgba(10, 33, 61, 0.06)',
                          paddingTop: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}
                      >
                        <span
                          style={{
                            fontSize: '12px',
                            color: '#64748B',
                            fontWeight: 500,
                          }}
                        >
                          Technologies &amp; Digital Marketing under one roof
                        </span>
                        <Link
                          href="/services"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#F26522',
                            fontSize: '13px',
                            fontWeight: 700,
                            textDecoration: 'none',
                          }}
                        >
                          <span>Explore All Services</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        {/* Right CTA Button: Get in Touch -> */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link
            href="/contact"
            className="btn-bizzen-lime desktop-cta-btn"
          >
            <span>Get in Touch</span>
            <ArrowRight size={16} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-toggle-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: isTransparent ? '#FFFFFF' : '#0A213D',
              cursor: 'pointer',
              padding: '6px',
              transition: 'color 0.2s ease',
            }}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          className="navbar-mobile-drawer"
          style={{
            background: isTransparent ? '#061629' : '#FFFFFF',
            borderTop: isTransparent
              ? '1px solid rgba(255, 255, 255, 0.08)'
              : '1px solid rgba(10, 33, 61, 0.08)',
            padding: '24px 32px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: isTransparent ? 'none' : '0 12px 28px rgba(0, 0, 0, 0.08)',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >

          {navLinks.map((link) => {
            if (link.hasDropdown) {
              return (
                <div key={link.name}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderBottom: isTransparent
                        ? '1px solid rgba(255, 255, 255, 0.06)'
                        : '1px solid rgba(10, 33, 61, 0.06)',
                      padding: '10px 0',
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      style={{
                        color: isTransparent ? '#FFFFFF' : '#0A213D',
                        fontSize: '16px',
                        fontWeight: 600,
                        textDecoration: 'none',
                        flexGrow: 1,
                      }}
                    >
                      {link.name}
                    </Link>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: isTransparent ? '#FFFFFF' : '#0A213D',
                        cursor: 'pointer',
                        padding: '4px',
                      }}
                      aria-label="Toggle Services submenu"
                    >
                      <ChevronDown
                        size={16}
                        style={{
                          transform: mobileServicesOpen ? 'rotate(180deg)' : 'none',
                          transition: 'transform 0.2s ease',
                        }}
                      />
                    </button>
                  </div>

                  {/* Technologies and Digital Marketing categorized sublinks under Services */}
                  {mobileServicesOpen && (
                    <div
                      style={{
                        paddingLeft: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '14px',
                        margin: '12px 0 6px',
                      }}
                    >
                      {serviceCategories.map((cat) => {
                        const CatIcon = cat.icon
                        return (
                          <div key={cat.category}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '11px',
                                fontWeight: 800,
                                color:
                                  cat.category === 'Technologies'
                                    ? '#F26522'
                                    : isTransparent
                                    ? '#93C5FD'
                                    : '#0A213D',
                                letterSpacing: '0.06em',
                                textTransform: 'uppercase',
                                marginBottom: '6px',
                                fontFamily: 'var(--font-mono)',
                              }}
                            >
                              <CatIcon size={12} />
                              <span>{cat.category}</span>
                            </div>
                            <div
                              style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '6px',
                                paddingLeft: '14px',
                              }}
                            >
                              {cat.items.map((sub) => (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setMobileOpen(false)}
                                  style={{
                                    color: isTransparent ? '#CBD5E1' : '#475569',
                                    fontSize: '13.5px',
                                    fontWeight: 500,
                                    textDecoration: 'none',
                                    padding: '2px 0',
                                  }}
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <div key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    color: isTransparent ? '#FFFFFF' : '#0A213D',
                    fontSize: '16px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    padding: '10px 0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderBottom: isTransparent
                      ? '1px solid rgba(255, 255, 255, 0.06)'
                      : '1px solid rgba(10, 33, 61, 0.06)',
                  }}
                >
                  <span>{link.name}</span>
                </Link>
              </div>
            )
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-bizzen-lime"
            style={{ marginTop: '14px', justifyContent: 'center' }}
          >
            <span>Get in Touch</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      )}

      <style>{`
        @keyframes dropdownFadeIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .nav-link-hover:hover {
          color: #F26522 !important;
        }
        .executive-dropdown-item {
          background: transparent;
        }
        .executive-dropdown-item:hover {
          background: rgba(242, 101, 34, 0.08) !important;
        }
        .executive-dropdown-item:hover .dropdown-item-title {
          color: #F26522 !important;
        }
        .executive-dropdown-item:hover .dropdown-item-icon {
          color: #F26522 !important;
        }
        .dropdown-arrow-circle {
          border-radius: 50%;
          background: #0A213D;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: scale(0.6);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          flex-shrink: 0;
        }
        .executive-dropdown-item:hover .dropdown-arrow-circle {
          opacity: 1 !important;
          transform: scale(1) !important;
          background: #F26522 !important;
          color: #FFFFFF !important;
        }
        @media (max-width: 980px) {
          .desktop-nav-menu, .desktop-cta-btn {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: block !important;
          }
        }
        @media (max-width: 640px) {
          .navbar-inner-container {
            padding: 12px 18px !important;
            gap: 12px !important;
          }
          .navbar-mobile-drawer {
            padding: 20px 18px 28px !important;
          }
        }
        @media (max-width: 480px) {
          .navbar-brand-logo {
            height: 34px !important;
            width: auto !important;
          }
        }
      `}</style>
    </header>
  )
}
