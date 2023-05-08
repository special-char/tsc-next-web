import { getBlogSiteMap } from '@/lib/getBlogDetails';
import { getCoursesSiteMap } from '@/lib/getCourseDetails';
import { MetadataRoute } from 'next';

const URL = `https://www.thespecialcharacter.com`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogData = await getBlogSiteMap();
  const coursesData = await getCoursesSiteMap();

  const blogSiteMap = blogData.data.blogs.data.map((x) => ({
    url: `${URL}/blogs/${x.attributes?.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const coursesSiteMap = coursesData.data.courses.data.map((x) => ({
    url: `${URL}/courses/${x.attributes?.slug}`,
    lastModified: new Date().toISOString(),
  }));

  const routes = [
    '',
    '/courses',
    '/blogs',
    '/events',
    '/contact',
    '/about-us',
    '/hire-our-graduates',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...coursesSiteMap, ...blogSiteMap];
}
