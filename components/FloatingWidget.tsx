'use client'
import { useState, useEffect } from 'react'
import { ArrowUp, Mail, Phone } from 'lucide-react'

// Official WhatsApp Vector Icon
const WhatsAppIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.887 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.414z"/>
  </svg>
)

export default function FloatingWidget() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const checkScroll = () => {
      setShowTop(window.scrollY > 200)
    }
    window.addEventListener('scroll', checkScroll, { passive: true })
    return () => window.removeEventListener('scroll', checkScroll)
  }, [])

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && (window as any).lenis) {
      ;(window as any).lenis.scrollTo(0, { duration: 1.8 })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <>
      <div className="floating-side-dock" aria-label="Quick contact actions">
        {/* Scroll to Top */}
        {showTop && (
          <button
            onClick={scrollToTop}
            className="dock-btn dock-btn-top"
            aria-label="Back to Top"
          >
            <ArrowUp size={20} />
            <span className="dock-tooltip">Back to Top</span>
          </button>
        )}

        {/* Email Us */}
        <a
          href="mailto:info@pranaviinfotech.com"
          className="dock-btn dock-btn-email"
          aria-label="Send Email"
        >
          <Mail size={20} />
          <span className="dock-tooltip">Email Us</span>
        </a>

        {/* Call Us */}
        <a
          href="tel:+919653418049"
          className="dock-btn dock-btn-phone"
          aria-label="Call +91 9653418049"
        >
          <Phone size={20} />
          <span className="dock-tooltip">Call +91 9653418049</span>
        </a>

        {/* WhatsApp Chat with Pulse */}
        <a
          href="https://wa.me/919653418049?text=Hello%20Pranavi%20Infotech%2C%20I%20would%20like%20to%20discuss%20a%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="dock-btn dock-btn-whatsapp"
          aria-label="Chat on WhatsApp"
        >
          <span className="whatsapp-pulse-ring" aria-hidden="true" />
          <WhatsAppIcon />
          <span className="dock-tooltip">WhatsApp Chat</span>
        </a>
      </div>

      <style jsx global>{`
        .floating-side-dock {
          position: fixed !important;
          bottom: 28px !important;
          right: 28px !important;
          z-index: 99999 !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          align-items: flex-end !important;
          pointer-events: auto !important;
        }

        .dock-btn {
          position: relative !important;
          width: 50px !important;
          height: 50px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-decoration: none !important;
          cursor: pointer !important;
          transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease !important;
          border: none !important;
          outline: none !important;
        }

        .dock-btn:hover {
          transform: translateY(-3px) scale(1.05) !important;
        }

        /* Back to Top */
        .dock-btn-top {
          background: #FFFFFF !important;
          color: #0A213D !important;
          border: 1px solid rgba(10, 33, 61, 0.15) !important;
          box-shadow: 0 6px 20px rgba(10, 33, 61, 0.16) !important;
        }
        .dock-btn-top:hover {
          background: #0A213D !important;
          color: #FFFFFF !important;
          box-shadow: 0 10px 24px rgba(10, 33, 61, 0.28) !important;
        }

        /* Email */
        .dock-btn-email {
          background: #0A213D !important;
          color: #FFFFFF !important;
          border: 1px solid rgba(255, 255, 255, 0.18) !important;
          box-shadow: 0 8px 24px rgba(10, 33, 61, 0.3) !important;
        }
        .dock-btn-email:hover {
          background: #102E52 !important;
          box-shadow: 0 12px 28px rgba(10, 33, 61, 0.45) !important;
        }

        /* Phone */
        .dock-btn-phone {
          background: #F26522 !important;
          color: #FFFFFF !important;
          box-shadow: 0 8px 24px rgba(242, 101, 34, 0.42) !important;
        }
        .dock-btn-phone:hover {
          background: #D95314 !important;
          box-shadow: 0 12px 28px rgba(242, 101, 34, 0.55) !important;
        }

        /* WhatsApp */
        .dock-btn-whatsapp {
          background: #25D366 !important;
          color: #FFFFFF !important;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45) !important;
        }
        .dock-btn-whatsapp:hover {
          background: #20BD5A !important;
          box-shadow: 0 12px 28px rgba(37, 211, 102, 0.6) !important;
        }

        .whatsapp-pulse-ring {
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #25D366;
          opacity: 0.7;
          animation: pulseWhatsApp 2s infinite ease-out;
          pointer-events: none;
        }

        @keyframes pulseWhatsApp {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          70% {
            transform: scale(1.3);
            opacity: 0;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }

        /* Tooltip */
        .dock-tooltip {
          position: absolute !important;
          right: 62px !important;
          top: 50% !important;
          transform: translateY(-50%) translateX(6px) !important;
          background: #061629 !important;
          color: #FFFFFF !important;
          font-family: var(--font-display, sans-serif) !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          padding: 7px 14px !important;
          border-radius: 8px !important;
          white-space: nowrap !important;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35) !important;
          border: 1px solid rgba(255, 255, 255, 0.12) !important;
          opacity: 0 !important;
          pointer-events: none !important;
          transition: opacity 0.2s ease, transform 0.2s ease !important;
        }

        .dock-tooltip::after {
          content: '';
          position: absolute;
          top: 50%;
          right: -5px;
          transform: translateY(-50%);
          width: 0;
          height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 5px solid #061629;
        }

        .dock-btn:hover .dock-tooltip {
          opacity: 1 !important;
          transform: translateY(-50%) translateX(0) !important;
        }

        @media (max-width: 640px) {
          .floating-side-dock {
            bottom: 16px !important;
            right: 16px !important;
            gap: 8px !important;
          }
          .dock-btn {
            width: 42px !important;
            height: 42px !important;
          }
          .dock-tooltip {
            display: none !important;
          }
        }

        @media (max-width: 480px) {
          .floating-side-dock {
            bottom: 14px !important;
            right: 12px !important;
            gap: 8px !important;
          }
          .dock-btn {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </>
  )
}
