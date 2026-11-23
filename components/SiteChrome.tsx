import Link from 'next/link';
import { ArrowUpRight, Instagram, Linkedin, Menu } from 'lucide-react';

const services = [
  ['Social Media Management', '/services/social-media-management'],
  ['Conversation Intelligence Radar', '/services/conversation-intelligence-radar'],
  ['Managed Conversation Marketing', '/services/managed-conversation-marketing'],
  ['Industry Visibility & Creator Distribution', '/services/industry-visibility-creator-distribution']
];

export function SiteHeader() {
  return <header className="site-header"><div className="nav-wrap container">
    <Link href="/" className="brand" aria-label="Narrativify home"><img src="/brand/narrativify-wordmark.svg" alt="Narrativify" /></Link>
    <nav className="desktop-nav" aria-label="Main navigation">
      <div className="nav-dropdown"><Link href="/services">Services <span>⌄</span></Link><div className="dropdown-menu">{services.map(([name, href]) => <Link key={href} href={href}>{name}</Link>)}</div></div>
      <Link href="/pricing">Pricing</Link><Link href="/case-studies">Case studies</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link>
    </nav>
    <Link className="button button-dark nav-cta" href="/contact">Let's talk <ArrowUpRight size={16}/></Link>
    <details className="mobile-menu"><summary aria-label="Open navigation"><Menu size={23}/></summary><div className="mobile-menu-panel"><Link href="/services">Services</Link>{services.map(([name, href]) => <Link key={href} href={href} className="sub-link">{name}</Link>)}<Link href="/pricing">Pricing</Link><Link href="/case-studies">Case studies</Link><Link href="/about">About</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></div></details>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="container footer-top"><div className="footer-brand"><Link href="/" className="brand"><img src="/brand/narrativify-wordmark.svg" alt="Narrativify" /></Link><p>Social Growth. Digital Influence.<br/>Real Connections.</p></div><div className="footer-col"><b>Explore</b><Link href="/services">Services</Link><Link href="/pricing">Pricing</Link><Link href="/case-studies">Case studies</Link><Link href="/about">About us</Link><Link href="/faq">FAQs</Link></div><div className="footer-col"><b>Services</b>{services.map(([name, href]) => <Link key={href} href={href}>{name}</Link>)}</div><div className="footer-col"><b>Get in touch</b><Link href="/contact">Start a conversation <ArrowUpRight size={14}/></Link><Link href="/refer">Refer & earn $50</Link><Link href="/privacy">Privacy policy</Link><Link href="/terms">Terms of use</Link><span className="footer-muted">Remote-first · Working worldwide</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Narrativify. All rights reserved.</span><span>Thoughtful growth. Meaningful influence.</span></div></footer>;
}
