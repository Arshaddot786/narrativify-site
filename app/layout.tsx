import type { Metadata } from 'next';
import './globals.css';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';
import Script from 'next/script';

const siteUrl = 'https://narrativify.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Narrativify | Social Media Management & Digital Growth',
    template: '%s | Narrativify'
  },
  description: 'Narrativify helps creators, founders and businesses build visibility through social media management, conversation intelligence, managed conversation marketing and creator distribution.',
  applicationName: 'Narrativify',
  openGraph: {
    type: 'website',
    url: siteUrl,
    siteName: 'Narrativify',
    title: 'Narrativify | Social Growth. Digital Influence. Real Connections.',
    description: 'Human-led social media management, conversation intelligence, managed conversation marketing and industry visibility.',
    images: [{ url: '/brand/narrativify-social-card.png', width: 1200, height: 630, alt: 'Narrativify — Social Growth. Digital Influence. Real Connections.' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Narrativify | Social Growth. Digital Influence. Real Connections.',
    description: 'Human-led social media management and digital influence for ambitious brands.',
    images: ['/brand/narrativify-social-card.png']
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  icons: { icon: '/brand/narrativify-mark.svg' },
  category: 'marketing'
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteUrl}/#organization`,
  name: 'Narrativify',
  url: siteUrl,
  logo: `${siteUrl}/brand/narrativify-mark.svg`,
  description: 'Narrativify is a digital growth agency offering social media management, conversation intelligence, managed conversation marketing and industry visibility and creator distribution.',
  slogan: 'Social Growth. Digital Influence. Real Connections.',
  email: 'hello@narrativify.com',
  knowsAbout: ['Social media management', 'Social listening', 'Conversation intelligence', 'Community engagement', 'Lead generation', 'Creator marketing', 'Influencer distribution', 'Digital public relations']
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${siteUrl}/#website`,
  name: 'Narrativify',
  url: siteUrl,
  publisher: { '@id': `${siteUrl}/#organization` },
  inLanguage: 'en'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head>
    <Script id="google-tag-manager" strategy="afterInteractive">
      {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!=='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WTVML629');`}
    </Script>
    </head><body>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WTVML629" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} title="Google Tag Manager" /></noscript>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    <SiteHeader />{children}<SiteFooter />
  </body></html>;
}
