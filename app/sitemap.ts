import { getBlogSiteMap } from '@/lib/getBlogDetails';
import { getCoursesSiteMap } from '@/lib/getCourseDetails';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogData = await getBlogSiteMap();
  const coursesData = await getCoursesSiteMap();
  const url = `https://www.thespecialcharacter.com`;

  const blogSiteMap = blogData.data.blogs.data.map((x) => ({
    url: `${url}/blogs/${x.attributes?.slug}`,
    lastModified: new Date(),
  }));

  const coursesSiteMap = coursesData.data.courses.data.map((x) => ({
    url: `${url}/blogs/${x.attributes?.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${url}`,
      lastModified: new Date(),
    },
    {
      url: `${url}/courses`,
      lastModified: new Date(),
    },
    {
      url: `${url}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${url}/events`,
      lastModified: new Date(),
    },
    {
      url: `${url}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${url}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${url}/hire-our-graduates`,
      lastModified: new Date(),
    },
    ...blogSiteMap,
    ...coursesSiteMap,
  ];
}
