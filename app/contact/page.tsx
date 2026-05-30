'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle } from 'lucide-react'
import { Github, Linkedin, Twitter } from '../../components/BrandIcons'

const services = ['Web Development', 'Mobile Apps', 'Cloud & DevOps', 'AI & Machine Learning', 'UI/UX Design', 'Security', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', details: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.service) e.service = 'Please select a service'
    if (!form.details.trim()) e.details = 'Please describe your project'
    else if (form.details.trim().length < 20) e.details = 'Please provide more details (min 20 chars)'
    return e
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    if (Object.keys(e).length > 0) return
    setSubmitting(true)
    setTimeout(() => { setSubmitting(false); setSubmitted(true) }, 1500)
  }

  const handleChange = (field: keyof typeof form) => (ev: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [field]: ev.target.value }))
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n })
  }

  return (
    <>
      {/* HERO */}
      <section style={{ paddingTop: '120px', paddingBottom: '60px', background: 'linear-gradient(135deg,#F8FAFC,#F1F5F9)', position: 'relative', overflow: 'hidden' }}>
        <div className="grid-bg" />
        <div className="mesh-blob blob-1" style={{ opacity: 0.4 }} />
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative', zIndex: 5 }}>
          <p className="section-label" style={{ marginBottom: '16px' }}>// Get In Touch</p>
          <h1 style={{ fontSize: 'clamp(36px,6vw,68px)', fontWeight: 900, color: '#0F172A', marginBottom: '20px', lineHeight: 1.1 }}>
            Let&apos;s Build <span className="gradient-text">Something Great</span>
          </h1>
          <p style={{ fontSize: '18px', color: '#475569', lineHeight: 1.7 }}>
            Tell us about your project. We respond to every inquiry within 24 hours.
          </p>
        </div>
      </section>

      {/* SPLIT LAYOUT */}
      <section style={{ padding: '0 24px 100px', background: '#F8FAFC' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(280px,400px) 1fr', gap: '32px', alignItems: 'start', flexWrap: 'wrap' }}>

          {/* LEFT PANEL */}
          <div style={{ background: 'linear-gradient(135deg,#0F172A,#1E293B)', border: '1px solid rgba(15, 23, 42, 0.08)', borderRadius: '20px', padding: '48px 36px', position: 'sticky', top: '100px' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'white', marginBottom: '8px' }}>Contact Information</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.6', marginBottom: '36px' }}>Reach us directly or fill in the form and we&apos;ll get back to you.</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
              {[
                { icon: <MapPin size={18} />, label: 'Address', value: 'Pune, Maharashtra, India' },
                { icon: <Phone size={18} />, label: 'Phone', value: '+91 98765 43210' },
                { icon: <Mail size={18} />, label: 'Email', value: 'hello@pranaviinfotech.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px', lineHeight: '1.5' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '28px' }}>
              <p style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Follow Us</p>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { icon: <Github size={17} />, href: '#' },
                  { icon: <Linkedin size={17} />, href: '#' },
                  { icon: <Twitter size={17} />, href: '#' },
                ].map((s, i) => (
                  <a key={i} href={s.href} style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)'; e.currentTarget.style.color = '#3B82F6'; e.currentTarget.style.background = 'rgba(59,130,246,0.1)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)'; e.currentTarget.style.background = 'rgba(255,255,255,0.08)' }}
                  >{s.icon}</a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 16px', background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: '10px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', flexShrink: 0, animation: 'pulse 2s infinite' }} />
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>Currently accepting new projects</span>
            </div>
            <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
          </div>

          {/* RIGHT: FORM */}
          <div className="glass-card" style={{ padding: '48px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <CheckCircle size={36} color="#10B981" />
                </div>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0F172A', marginBottom: '12px' }}>Message Sent!</h2>
                <p style={{ color: '#475569', fontSize: '16px', lineHeight: '1.7', maxWidth: '360px', margin: '0 auto 32px' }}>
                  Thank you for reaching out. Our team will review your project and get back to you within 24 hours.
                </p>
                <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',company:'',service:'',details:'' }) }} className="btn-outline" style={{ cursor: 'pointer', fontSize: '15px' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0F172A', marginBottom: '32px' }}>Tell us about your project</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px', marginBottom: '20px' }}>
                  {/* Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', letterSpacing: '0.04em' }}>Full Name <span style={{ color: '#EF4444' }}>*</span></label>
                    <input id="contact-name" type="text" placeholder="John Doe" value={form.name} onChange={handleChange('name')} className={`form-input${errors.name ? ' error' : ''}`} />
                    {errors.name && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>{errors.name}</p>}
                  </div>
                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', letterSpacing: '0.04em' }}>Work Email <span style={{ color: '#EF4444' }}>*</span></label>
                    <input id="contact-email" type="email" placeholder="john@company.com" value={form.email} onChange={handleChange('email')} className={`form-input${errors.email ? ' error' : ''}`} />
                    {errors.email && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>{errors.email}</p>}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '20px', marginBottom: '20px' }}>
                  {/* Company */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', letterSpacing: '0.04em' }}>Company</label>
                    <input id="contact-company" type="text" placeholder="Acme Corp" value={form.company} onChange={handleChange('company')} className="form-input" />
                  </div>
                  {/* Service */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', letterSpacing: '0.04em' }}>Service Needed <span style={{ color: '#EF4444' }}>*</span></label>
                    <select id="contact-service" value={form.service} onChange={handleChange('service')} className={`form-input${errors.service ? ' error' : ''}`}>
                      <option value="">Select a service…</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                    {errors.service && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>{errors.service}</p>}
                  </div>
                </div>

                {/* Project Details */}
                <div style={{ marginBottom: '32px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px', letterSpacing: '0.04em' }}>Project Details <span style={{ color: '#EF4444' }}>*</span></label>
                  <textarea
                    id="contact-details"
                    placeholder="Tell us about your project — goals, timeline, tech stack preferences, budget range…"
                    value={form.details}
                    onChange={handleChange('details')}
                    className={`form-input${errors.details ? ' error' : ''}`}
                    rows={6}
                    style={{ resize: 'vertical', minHeight: '140px' }}
                  />
                  {errors.details && <p style={{ color: '#EF4444', fontSize: '12px', marginTop: '4px' }}>{errors.details}</p>}
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '16px', padding: '15px', opacity: submitting ? 0.7 : 1 }} disabled={submitting}>
                  {submitting ? 'Sending…' : <><Send size={18} /> Send Message</>}
                </button>

                <p style={{ textAlign: 'center', color: '#64748B', fontSize: '12px', marginTop: '16px' }}>
                  🔒 Your information is secure and will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
