import { getPageMeta } from '@/lib/getPageMeta';
import { DefaultTags } from '@/ui/DefaultTags';
import { ComponentCommonHeaders } from 'types/types';

export type PageProps = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export default async function Head() {
  // TODO: fix head issue
  // const metaData = await getPageMeta('about-page');

  // const [data] = metaData.data.bannerHeader?.data?.attributes
  //   ?.bannerHeader as ComponentCommonHeaders[];

  return (
    <>
      <DefaultTags />
      {/* <title>{data?.SEO?.title}</title>
      <meta name="title" content={data?.SEO?.title} />
      <meta name="description" content={data?.SEO?.description} />
      <meta name="keywords" content={data?.SEO?.keywords} />
      <meta
        property="og:image"
        content={data?.SEO?.images?.data?.attributes?.url}
      /> */}
    </>
  );
}
