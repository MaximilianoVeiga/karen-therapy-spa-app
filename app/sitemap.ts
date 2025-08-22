import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://karenalbino.com'
  const lastmod = new Date()
  return [
    { url: `${base}/`, lastModified: lastmod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/#sobre`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#servicos`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#como-funciona`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#valores`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#agendamento`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/#depoimentos`, lastModified: lastmod, changeFrequency: 'monthly', priority: 0.8 },
  ]
}


