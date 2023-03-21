import { getSEOData } from '@/lib/getSEO';
import { DefaultTags } from '@/ui/DefaultTags';
import { SEOTags } from '@/ui/SEOTags';
import { ComponentSharedSeo } from 'types/types';

export default async function Head() {
  const metaData = await getSEOData('home');

  const seo = metaData?.data?.banner.data?.attributes
    ?.seo as ComponentSharedSeo;

  return (
    <>
      <DefaultTags />

      {seo && <SEOTags {...seo} path="" />}

      {/* <title>{data?.SEO.title}</title>
      <meta name="description" content={data?.SEO.description} />
      <meta name="title" content={data?.SEO.title} />
      <meta name="keywords" content={data?.SEO.keywords} />
      <meta property="og:image" content={data?.SEO.images?.attributes?.url} /> */}
    </>
  );
}
