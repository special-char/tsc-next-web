import { getAboutPageMeta } from '@/lib/getAboutPageMeta';
import { DefaultTags } from '@/ui/DefaultTags';
import { BannerEntity, ComponentCommonHeaders } from 'types/types';

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default async function Head() {
  const metaData = await getAboutPageMeta();

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
