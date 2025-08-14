/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://karenalbino.com.br'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
}


