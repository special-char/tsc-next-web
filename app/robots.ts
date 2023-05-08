import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const url = `https://www.thespecialcharacter.com`;
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      //   disallow: '/private/',
    },
    sitemap: `${url}/sitemap.xml`,
    host: `https://www.thespecialcharacter.com`,
  };
}
