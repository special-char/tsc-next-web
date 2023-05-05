import { Suspense } from 'react';
import Contact from './contact';
import Faq, { FaqSkeleton } from './faq';
import { Metadata } from 'next';
import { getSEOData } from '@/lib/getSEO';
import { ComponentSharedSeo } from 'types/types';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const metaData = await getSEOData('contact');

  const seo = metaData?.data?.banner?.data?.attributes
    ?.seo as ComponentSharedSeo;

  const facebook = seo.metaSocial?.find((x) => x?.socialNetwork === 'Facebook');
  const twitter = seo.metaSocial?.find((x) => x?.socialNetwork === 'Twitter');

  let twitterMeta: Metadata = {};
  if (twitter) {
    twitterMeta = {
      twitter: {
        card: 'summary_large_image',
        title: twitter.title,
        description: twitter.description,
        siteId: '1467726470533754880',
        creator: '@nextjs',
        creatorId: '1467726470533754880',
        images: [twitter.image?.data?.attributes?.url || ''],
      },
    };
  }

  let facebookMeta: Metadata = {};
  if (facebook) {
    facebookMeta = {
      openGraph: {
        title: facebook.title,
        description: facebook.description,
        url: `https://thespecialcharacter.com/blogs/${params.slug}`,
        siteName: 'The Special Character',
        images: [
          {
            url: facebook.image?.data?.attributes?.url || '',
            width: 800,
            height: 600,
          },
        ],
        locale: 'en-US',
        type: 'website',
      },
    };
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.keywords,
    ...twitterMeta,
    ...facebookMeta,
  };
}

const Page = () => {
  return (
    <>
      <Contact />
      <Suspense fallback={<FaqSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Faq />
      </Suspense>
    </>
  );
};

export default Page;
