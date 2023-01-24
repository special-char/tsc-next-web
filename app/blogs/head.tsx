import { getBlogPageMeta } from '@/lib/getBlogPageMeta';
import { getBlogsMeta } from '@/lib/getBlogsMeta';
import { DefaultTags } from '@/ui/DefaultTags';

export default async function Head() {
  const metaData = await getBlogPageMeta();

  const [data] = metaData.data.bannerHeader?.data?.attributes
    ?.bannerHeader as ComponentCommonHeaders[];
  console.log('attributes:', data);
  return (
    <>
      <DefaultTags />
      <title>{data?.SEO?.title}</title>
      <meta name="title" content={data?.SEO?.title} />
      <meta name="description" content={data?.SEO?.description} />
      <meta name="keywords" content={data?.SEO?.keywords} />
      <meta
        property="og:image"
        content={data?.SEO?.images?.data?.attributes?.url}
      />
    </>
  );
}
