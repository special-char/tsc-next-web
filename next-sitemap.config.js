/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'http://www.thespecialcharacter.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
};
