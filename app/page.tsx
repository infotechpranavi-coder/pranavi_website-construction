import Image from 'next/image'
import { Mail, Phone, Globe, Smartphone, Cloud, Cpu, Server, Code2, Database } from 'lucide-react'

const services = [
  { label: 'Web & SaaS', icon: Globe },
  { label: 'Mobile Apps', icon: Smartphone },
  { label: 'Cloud & DevOps', icon: Cloud },
  { label: 'AI & Data', icon: Cpu },
]

function TechBackground() {
  return (
    <>
      <svg className="tech-network tech-network-left" viewBox="0 0 400 600" fill="none" aria-hidden="true">
        <circle cx="80" cy="120" r="4" fill="#2D68C4" opacity="0.5" />
        <circle cx="180" cy="80" r="4" fill="#76B947" opacity="0.5" />
        <circle cx="120" cy="220" r="4" fill="#2D68C4" opacity="0.4" />
        <circle cx="220" cy="180" r="4" fill="#0D244F" opacity="0.35" />
        <circle cx="60" cy="340" r="4" fill="#76B947" opacity="0.45" />
        <circle cx="200" cy="320" r="4" fill="#2D68C4" opacity="0.4" />
        <circle cx="140" cy="460" r="4" fill="#0D244F" opacity="0.3" />
        <circle cx="260" cy="420" r="4" fill="#76B947" opacity="0.4" />
        <path d="M80 120 L180 80 L220 180 L120 220 L80 120 L60 340 L200 320 L220 180" stroke="#2D68C4" strokeWidth="1" strokeDasharray="4 6" opacity="0.2" />
        <path d="M120 220 L200 320 L140 460 L60 340" stroke="#76B947" strokeWidth="1" strokeDasharray="4 6" opacity="0.18" />
        <path d="M180 80 L220 180 L260 420" stroke="#0D244F" strokeWidth="1" opacity="0.12" />
        <rect x="160" y="140" width="48" height="32" rx="4" stroke="#2D68C4" strokeWidth="1" opacity="0.15" />
        <rect x="90" y="380" width="56" height="36" rx="4" stroke="#76B947" strokeWidth="1" opacity="0.12" />
      </svg>

      <svg className="tech-network tech-network-right" viewBox="0 0 400 600" fill="none" aria-hidden="true">
        <circle cx="320" cy="100" r="4" fill="#2D68C4" opacity="0.5" />
        <circle cx="220" cy="160" r="4" fill="#76B947" opacity="0.45" />
        <circle cx="300" cy="260" r="4" fill="#0D244F" opacity="0.35" />
        <circle cx="180" cy="300" r="4" fill="#2D68C4" opacity="0.4" />
        <circle cx="340" cy="400" r="4" fill="#76B947" opacity="0.4" />
        <circle cx="240" cy="480" r="4" fill="#2D68C4" opacity="0.35" />
        <path d="M320 100 L220 160 L180 300 L300 260 L320 100" stroke="#2D68C4" strokeWidth="1" strokeDasharray="4 6" opacity="0.2" />
        <path d="M220 160 L240 480 L340 400 L300 260" stroke="#76B947" strokeWidth="1" strokeDasharray="4 6" opacity="0.18" />
        <rect x="250" y="200" width="52" height="34" rx="4" stroke="#2D68C4" strokeWidth="1" opacity="0.14" />
        <rect x="280" y="360" width="44" height="28" rx="4" stroke="#0D244F" strokeWidth="1" opacity="0.12" />
      </svg>

      <div className="tech-orbit tech-orbit-1" aria-hidden="true" />
      <div className="tech-orbit tech-orbit-2" aria-hidden="true" />

      <div className="tech-float-icons" aria-hidden="true">
        <span className="tech-float-icon tech-float-1"><Server size={22} /></span>
        <span className="tech-float-icon tech-float-2"><Code2 size={20} /></span>
        <span className="tech-float-icon tech-float-3"><Database size={20} /></span>
        <span className="tech-float-icon tech-float-4"><Cloud size={22} /></span>
      </div>
    </>
  )
}

export default function Home() {
  return (
    <div className="construction-page">
      <div className="construction-grid" aria-hidden="true" />
      <div className="construction-blob construction-blob-1" aria-hidden="true" />
      <div className="construction-blob construction-blob-2" aria-hidden="true" />
      <div className="construction-blob construction-blob-3" aria-hidden="true" />
      <TechBackground />

      <main className="construction-main">
        <div className="construction-content">
          <div className="construction-logo-wrap">
            <Image
              src="/pranavi-logo-removebg-preview.png"
              alt="Pranavi Infotech"
              width={480}
              height={200}
              priority
              className="construction-logo"
            />
          </div>

          <div className="construction-badge">
            <span className="construction-badge-dot" aria-hidden="true" />
            <span>Site Under Development</span>
          </div>

          <h1 className="construction-title">
            We&apos;re Building Something <span className="accent">Powerful</span>
          </h1>

          <p className="construction-lead">
            Crafting a new digital experience for web, mobile, cloud &amp; intelligent systems.
          </p>

          <div className="construction-progress">
            <div className="construction-progress-header">
              <span>Launch Progress</span>
              <span className="construction-progress-value">In Progress</span>
            </div>
            <div className="construction-progress-bar">
              <div className="construction-progress-fill" />
            </div>
          </div>

          <div className="construction-services">
            {services.map(({ label, icon: Icon }) => (
              <span key={label} className="construction-pill">
                <Icon size={17} strokeWidth={2.2} />
                {label}
              </span>
            ))}
          </div>

          <p className="construction-contact-label">Get in touch while we build</p>
          <div className="construction-contact">
            <a href="mailto:info@pranaviinfotech.com" className="construction-btn construction-btn-primary">
              <Mail size={18} />
              info@pranaviinfotech.com
            </a>
            <a href="tel:+919653418049" className="construction-btn construction-btn-outline">
              <Phone size={18} />
              +91 9653418049
            </a>
          </div>
        </div>
      </main>

      <footer className="construction-footer">
        <p>
          &copy; {new Date().getFullYear()} <strong>Pranavi Infotech</strong>. All rights reserved.
        </p>
      </footer>
    </div>
  )
}
