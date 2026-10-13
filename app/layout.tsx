import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PreFooterCta from '@/components/PreFooterCta'
import FloatingWidget from '@/components/FloatingWidget'
import SmoothScroll from '@/components/SmoothScroll'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pranavi Infotech | Enterprise Software, AI Systems & SEO Marketing (Est. 2012)',
  description:
    'Established in 2012, Pranavi Infotech is a premier software engineering & digital marketing firm in Mumbai, India. Trusted by 75+ happy clients across enterprises and government projects for custom software, mobile apps, AI pipelines, and technical SEO growth.',
  keywords: [
    'Pranavi Infotech',
    'Established 2012 Software Company Mumbai',
    'Custom Software Development Mumbai',
    'Government Projects IT Solutions',
    'E-Governance Portal Development',
    'Enterprise AI Systems & LLM Integration',
    'Technical SEO & Digital Marketing Agency',
    'Mobile App Development iOS Android',
    'Cloud Infrastructure AWS GCP',
    'Next.js Web Application Development',
  ],
  authors: [{ name: 'Pranavi Infotech' }],
  openGraph: {
    title: 'Pranavi Infotech | Enterprise Software, AI Systems & SEO Marketing (Est. 2012)',
    description:
      'Empowering enterprises and government projects since 2012 with custom software, intelligent AI systems, and high-ROI SEO digital marketing.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Pranavi Infotech',
  },
  icons: {
    icon: [
      { url: '/logo/favicon.jpeg' },
      { url: '/logo/favicon.jpeg', type: 'image/jpeg' },
    ],
    shortcut: '/logo/favicon.jpeg',
    apple: '/logo/favicon.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SmoothScroll />
        <Navbar />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <main style={{ flex: 1 }}>{children}</main>
          <PreFooterCta />
          <Footer />
        </div>
        <FloatingWidget />
      </body>
    </html>
  )
}
