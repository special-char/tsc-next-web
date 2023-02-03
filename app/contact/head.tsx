import { getContactPageMeta } from '@/lib/getContactPageMeta';
import { getPageMeta } from '@/lib/getPageMeta';
import { DefaultTags } from '@/ui/DefaultTags';
import { ComponentCommonHeaders } from 'types/types';

export default async function Head() {
  // TODO: fix head issue
  // const metaData = await getPageMeta('contact-page');

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
