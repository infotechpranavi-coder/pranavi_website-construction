'use client'
import { Heart, Code, Users, Rocket } from 'lucide-react'
import { Github, Linkedin, Twitter } from '../../components/BrandIcons'


const values = [
  { icon: <Code size={28} />, title: 'Engineering Excellence', desc: 'We obsess over code quality, performance, and maintainability. Every line we write is a reflection of our craft.' },
  { icon: <Heart size={28} />, title: 'Client Obsession', desc: 'Your success is our success. We treat every project as if it were our own business on the line.' },
  { icon: <Users size={28} />, title: 'Radical Transparency', desc: 'No black boxes. You get weekly updates, access to our project management tools, and a direct line to your team.' },
  { icon: <Rocket size={28} />, title: 'Ship Fast, Learn Faster', desc: 'We iterate quickly, gather feedback early, and continuously improve. Speed with quality is our competitive edge.' },
]

const team = [
  { initials: 'MK', name: 'Marcus Kim', role: 'CEO & Co-Founder', github: '#', linkedin: '#' },
  { initials: 'SP', name: 'Sophia Park', role: 'CTO & Co-Founder', github: '#', linkedin: '#' },
  { initials: 'DR', name: 'Daniel Ross', role: 'Head of Engineering', github: '#', linkedin: '#' },
  { initials: 'AV', name: 'Aria Vance', role: 'Lead Designer', github: '#', linkedin: '#' },
  { initials: 'JO', name: 'James Okafor', role: 'Head of Cloud & DevOps', github: '#', linkedin: '#' },
  { initials: 'LN', name: 'Luna Nakamura', role: 'AI/ML Lead', github: '#', linkedin: '#' },
]

const milestones = [
  { year: '2016', title: 'Founded in Pune', desc: 'Launched Pranavi Infotech from a tech hub space with a 3-person team and a single client.' },
  { year: '2018', title: 'First Major Enterprise Contract', desc: 'Landed a major contract with a global financial services firm — our first enterprise-scale engagement.' },
  { year: '2020', title: 'Expanded to 50+ Team Members', desc: 'Grew to 50+ engineers, designers, and strategists. Launched our AI practice.' },
  { year: '2022', title: '300 Projects Milestone', desc: 'Celebrated 300 successful project deliveries and opened our second office in Mumbai.' },
  { year: '2024', title: 'Pranavi AI Studio Launch', desc: 'Launched a dedicated AI/ML division serving enterprise clients building next-gen intelligent products.' },
]

export default function About() {
  return (
    <>
      {/* SPLIT HERO */}
      <section style={{ paddingTop: '100px', background: 'linear-gradient(135deg,#F8FAFC,#F1F5F9)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" />
        <div className="mesh-blob blob-1" style={{ opacity: 0.4 }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 80px', display: 'flex', gap: '80px', alignItems: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 5 }}>
          {/* Left */}
          <div style={{ flex: 1, minWidth: '300px' }}>
            <p className="section-label" style={{ marginBottom: '16px' }}>// About Pranavi Infotech</p>
            <h1 style={{ fontSize: 'clamp(36px,5vw,64px)', fontWeight: 900, color: '#0F172A', lineHeight: 1.1, marginBottom: '24px' }}>
              Building the Future,<br /><span className="gradient-text">One Line at a Time</span>
            </h1>
            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.8', marginBottom: '20px' }}>
              Founded in 2016, Pranavi Infotech is a premium software engineering agency trusted by startups and enterprises alike. We don&apos;t just write code — we build digital foundations that companies scale their entire business on.
            </p>
            <p style={{ color: '#475569', fontSize: '17px', lineHeight: '1.8' }}>
              With 80+ engineers across Pune and Mumbai, we&apos;ve delivered 500+ projects for clients in fintech, healthtech, SaaS, and e-commerce — always on time, always on budget.
            </p>
          </div>
          {/* Right: Abstract SVG illustration */}
          <div style={{ flex: '0 0 auto', width: '400px', maxWidth: '100%' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '1' }}>
              <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="g2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[0,1,2,3,4,5].map(i => (
                  <line key={`h${i}`} x1="0" y1={60+i*60} x2="400" y2={60+i*60} stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
                ))}
                {[0,1,2,3,4,5].map(i => (
                  <line key={`v${i}`} x1={60+i*60} y1="0" x2={60+i*60} y2="400" stroke="rgba(59,130,246,0.06)" strokeWidth="1" />
                ))}
                {/* Hexagons */}
                <polygon points="200,80 260,115 260,185 200,220 140,185 140,115" fill="url(#g1)" stroke="rgba(59,130,246,0.3)" strokeWidth="1.5" />
                <polygon points="200,110 245,135 245,185 200,210 155,185 155,135" fill="rgba(29,78,216,0.1)" stroke="rgba(59,130,246,0.2)" strokeWidth="1" />
                {/* Circles */}
                <circle cx="200" cy="200" r="120" stroke="rgba(59,130,246,0.12)" strokeWidth="1" fill="none" />
                <circle cx="200" cy="200" r="160" stroke="rgba(59,130,246,0.06)" strokeWidth="1" fill="none" />
                {/* Nodes */}
                {[[200,80],[320,200],[200,320],[80,200],[280,120],[120,280]].map(([x,y],i) => (
                  <g key={i}>
                    <circle cx={x} cy={y} r="6" fill="#3B82F6" opacity="0.9" />
                    <circle cx={x} cy={y} r="14" fill="rgba(59,130,246,0.12)" />
                  </g>
                ))}
                {/* Connection lines */}
                <line x1="200" y1="80" x2="320" y2="200" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="320" y1="200" x2="200" y2="320" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="200" y1="320" x2="80" y2="200" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="80" y1="200" x2="200" y2="80" stroke="rgba(59,130,246,0.25)" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="280" y1="120" x2="120" y2="280" stroke="rgba(96,165,250,0.15)" strokeWidth="1" strokeDasharray="4 4" />
                {/* Center dot */}
                <circle cx="200" cy="200" r="10" fill="url(#g1)" />
                <circle cx="200" cy="200" r="4" fill="white" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ padding: '80px 24px', background: '#F1F5F9' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>// What Drives Us</p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#0F172A' }}>Our <span className="gradient-text">Core Values</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '24px' }}>
            {values.map((v, i) => (
              <div key={i} className="glass-card" style={{ padding: '36px 28px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: 'linear-gradient(135deg,rgba(29,78,216,0.12),rgba(59,130,246,0.06))', border: '1px solid rgba(59,130,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', marginBottom: '20px' }}>{v.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>{v.title}</h3>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.75' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>// The People</p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#0F172A' }}>Meet the <span className="gradient-text">Leadership Team</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '24px' }}>
            {team.map((m, i) => (
              <div key={i} className="glass-card" style={{ padding: '36px 24px', textAlign: 'center' }}>
                <div className="avatar-lg">{m.initials}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F172A', marginBottom: '4px' }}>{m.name}</h3>
                <p style={{ color: '#3B82F6', fontSize: '13px', fontWeight: 500, marginBottom: '20px' }}>{m.role}</p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
                  {[
                    { icon: <Github size={16} />, href: m.github },
                    { icon: <Linkedin size={16} />, href: m.linkedin },
                    { icon: <Twitter size={16} />, href: '#' },
                  ].map((s, j) => (
                    <a key={j} href={s.href} style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(15, 23, 42, 0.04)', border: '1px solid rgba(15, 23, 42, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.background = 'rgba(59,130,246,0.1)' }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.08)'; e.currentTarget.style.color = '#475569'; e.currentTarget.style.background = 'rgba(15, 23, 42, 0.04)' }}
                    >{s.icon}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '80px 24px', background: '#F1F5F9' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>// Our Journey</p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#0F172A' }}>Company <span className="gradient-text">Milestones</span></h2>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom,transparent,#1D4ED8,#3B82F6,transparent)', transform: 'translateX(-50%)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {milestones.map((m, i) => (
                <div key={i} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}>
                  <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }}>
                    <div className="glass-card" style={{ padding: '24px 28px', display: 'inline-block', maxWidth: '320px', textAlign: 'left' }}>
                      <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: '#3B82F6', fontWeight: 700, letterSpacing: '0.1em' }}>{m.year}</span>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F172A', margin: '8px 0 6px' }}>{m.title}</h3>
                      <p style={{ color: '#475569', fontSize: '13px', lineHeight: '1.6' }}>{m.desc}</p>
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg,#1D4ED8,#3B82F6)', border: '3px solid #F1F5F9', marginTop: '24px', position: 'relative', zIndex: 1 }} />
                  <div style={{ flex: 1 }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
