import { getCoursesPageMeta } from '@/lib/getCoursesPageMeta';
import { DefaultTags } from '@/ui/DefaultTags';

export default async function Head() {
  const metaData = await getCoursesPageMeta();

  const [data] = metaData.data.bannerHeader?.data?.attributes
    ?.bannerHeader as ComponentCommonHeaders[];
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
