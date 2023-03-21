import { getPageMeta } from '@/lib/getPageMeta';
import { getSEOData } from '@/lib/getSEO';
import { DefaultTags } from '@/ui/DefaultTags';
import { SEOTags } from '@/ui/SEOTags';
import { ComponentCommonHeaders, ComponentSharedSeo } from 'types/types';

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default async function Head() {
  const metaData = await getSEOData('about');

  const seo = metaData?.data?.banner?.data?.attributes
    ?.seo as ComponentSharedSeo;

  return (
    <>
      <DefaultTags />
      {seo && <SEOTags {...seo} path="about-us" />}
    </>
  );
}
