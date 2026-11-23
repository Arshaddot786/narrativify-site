import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://narrativify.com';
  const paths = ['', '/services', '/services/social-media-management', '/services/conversation-intelligence-radar', '/services/managed-conversation-marketing', '/services/industry-visibility-creator-distribution', '/pricing', '/case-studies', '/about', '/contact', '/refer', '/faq', '/privacy', '/terms'];
  return paths.map((path) => ({ url: `${base}${path}`, changeFrequency: path === '' ? 'weekly' : 'monthly', priority: path === '' ? 1 : path.startsWith('/services/') ? 0.85 : 0.65 }));
}
