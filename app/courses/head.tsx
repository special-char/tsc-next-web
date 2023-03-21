import { getCoursesPageMeta } from '@/lib/getCoursesPageMeta';
import { getSEOData } from '@/lib/getSEO';
import { DefaultTags } from '@/ui/DefaultTags';
import { SEOTags } from '@/ui/SEOTags';
import { ComponentSharedSeo } from 'types/types';

export default async function Head() {
  const metaData = await getSEOData('blogs');

  const seo = metaData.data.banner.data?.attributes?.seo as ComponentSharedSeo;
  return (
    <>
      <DefaultTags />
      {seo && <SEOTags {...seo} path="courses" />}
    </>
  );
}
