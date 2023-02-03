import { getBannerData } from '@/lib/getBanner';
import { getBannerMeta } from '@/lib/getBannerMeta';
import { DefaultTags } from '@/ui/DefaultTags';

export default async function Head() {
  // TODO: fix head issue
  // const metaData = await getBannerMeta();
  // const data = metaData.data.banner.data?.attributes;

  return (
    <>
      <DefaultTags />

      {/* <title>{data?.SEO.title}</title>
      <meta name="description" content={data?.SEO.description} />
      <meta name="title" content={data?.SEO.title} />
      <meta name="keywords" content={data?.SEO.keywords} />
      <meta property="og:image" content={data?.SEO.images?.attributes?.url} /> */}
    </>
  );
}
