import Link from 'next/link'
import { Globe, Smartphone, Cloud, Brain, Palette, Shield, CheckCircle, Zap, Users, Trophy, Clock } from 'lucide-react'

export const metadata = { title: 'Services — Pranavi Infotech', description: 'Full-spectrum software engineering services from web and mobile to AI and data analytics.' }

const services = [
  {
    icon: <Globe size={32} />, title: 'Web Development', color: '#3B82F6',
    desc: 'We craft high-performance web applications tailored to your business goals. From marketing sites to enterprise platforms, we use the latest frameworks and best practices.',
    items: ['Custom React & Next.js applications', 'Progressive Web Apps (PWA)', 'E-commerce & marketplace platforms', 'CMS integration (Headless, Sanity, Strapi)', 'Performance optimization & Core Web Vitals', 'API design & RESTful/GraphQL services'],
  },
  {
    icon: <Smartphone size={32} />, title: 'Mobile Apps', color: '#8B5CF6',
    desc: 'Native-quality mobile experiences for iOS and Android. We build apps that users actually enjoy using — fast, reliable, and beautifully designed.',
    items: ['React Native cross-platform development', 'Native iOS (Swift) & Android (Kotlin)', 'App Store & Play Store deployment', 'Push notifications & offline support', 'Mobile analytics & crash reporting', 'AR/VR mobile experiences'],
  },
  {
    icon: <Cloud size={32} />, title: 'Cloud & DevOps', color: '#10B981',
    desc: 'Scale your infrastructure confidently. We design, migrate, and manage cloud environments that are secure, resilient, and cost-optimized.',
    items: ['AWS, GCP, Azure architecture', 'Kubernetes orchestration', 'CI/CD pipeline setup (GitHub Actions, Jenkins)', 'Terraform infrastructure as code', 'Monitoring & alerting (Datadog, Grafana)', 'Zero-downtime deployments'],
  },
  {
    icon: <Brain size={32} />, title: 'AI & Machine Learning', color: '#F59E0B',
    desc: 'Embed intelligence into your product. From NLP to computer vision, we build and deploy ML systems that create measurable business value.',
    items: ['Custom model training & fine-tuning', 'LLM integration (OpenAI, Anthropic)', 'Computer vision & image recognition', 'Predictive analytics pipelines', 'MLOps & model monitoring', 'AI-powered automation workflows'],
  },
  {
    icon: <Palette size={32} />, title: 'UI/UX Design', color: '#EC4899',
    desc: 'Design that converts. Our design team creates user-centered interfaces that are not only beautiful but drive engagement and business metrics.',
    items: ['User research & persona development', 'Wireframing & prototyping in Figma', 'Design system creation', 'Accessibility (WCAG 2.1 AA)', 'Usability testing & iteration', 'Brand identity & visual strategy'],
  },
  {
    icon: <Shield size={32} />, title: 'Security', color: '#EF4444',
    desc: 'Enterprise-grade security for your digital assets. We identify vulnerabilities and implement robust defenses before bad actors do.',
    items: ['OWASP penetration testing', 'Code & dependency auditing', 'HIPAA & SOC 2 compliance consulting', 'Zero-trust architecture design', 'Incident response planning', 'Security training for development teams'],
  },
]

const whyUs = [
  { icon: <Zap size={28} />, title: 'Fast Delivery', desc: 'Agile sprints with weekly demos. We ship iteratively so you always see progress.' },
  { icon: <Users size={28} />, title: 'Senior-Only Teams', desc: 'Every project is staffed with senior engineers — no juniors learning on your dime.' },
  { icon: <Trophy size={28} />, title: 'Proven Track Record', desc: '500+ projects delivered with a 98% client satisfaction rate over 8 years.' },
  { icon: <Clock size={28} />, title: '24/7 Support', desc: 'Dedicated Slack channel, SLA-backed support, and on-call engineers.' },
]

export default function Services() {
  return (
    <>
      {/* PAGE HERO */}
      <section style={{ paddingTop: '120px', paddingBottom: '80px', background: 'linear-gradient(135deg,#F8FAFC,#F1F5F9,#E2E8F0)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" />
        <div className="mesh-blob blob-1" style={{ opacity: 0.4 }} />
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 5 }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>// Our Services</p>
          <h1 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 900, color: '#0F172A', marginBottom: '20px', lineHeight: 1.1 }}>
            Everything You Need to <span className="gradient-text">Ship & Scale</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7 }}>
            A full-service digital engineering studio — from pixel-perfect design to cloud-native infrastructure.
          </p>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section style={{ padding: '80px 24px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {services.map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '48px', display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
              <div style={{ flex: '0 0 auto' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '18px', background: `linear-gradient(135deg,${s.color}22,${s.color}11)`, border: `1px solid ${s.color}44`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: s.color }}>
                  {s.icon}
                </div>
              </div>
              <div style={{ flex: 1, minWidth: '280px' }}>
                <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>{s.title}</h2>
                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.75', marginBottom: '24px', maxWidth: '600px' }}>{s.desc}</p>
                <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '10px', marginBottom: '28px' }}>
                  {s.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1E293B', fontSize: '14px' }}>
                      <CheckCircle size={15} color={s.color} style={{ flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: s.color, fontWeight: 600, fontSize: '14px', textDecoration: 'none', borderBottom: `1px solid ${s.color}44`, paddingBottom: '2px' }}>
                  Get Started →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ padding: '80px 24px', background: '#F1F5F9' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label" style={{ marginBottom: '12px' }}>// Why Pranavi Infotech</p>
            <h2 style={{ fontSize: 'clamp(28px,4vw,48px)', fontWeight: 800, color: '#0F172A' }}>The <span className="gradient-text">Pranavi Advantage</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '24px' }}>
            {whyUs.map((w, i) => (
              <div key={i} className="glass-card" style={{ padding: '36px 28px', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'linear-gradient(135deg,rgba(29,78,216,0.12),rgba(59,130,246,0.06))', border: '1px solid rgba(59,130,246,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', margin: '0 auto 20px' }}>{w.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0F172A', marginBottom: '10px' }}>{w.title}</h3>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: '1.7' }}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
