import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense } from 'react';
import OurWorks, { OurWorksSkeleton } from './ourWorks';
import Achievements, { AchievementsSkeleton } from './achievements';
import CompanyHistory, { CompanyHistorySkeleton } from './companyhistory';
import OurOffice, { OurOfficeSkeleton } from './ourOffice';
import Aboutheader, { AboutheaderSkeleton } from './aboutheader';
import { Metadata } from 'next';
import { getSEOData } from '@/lib/getSEO';
import { ComponentSharedSeo } from 'types/types';

type Props = {};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const metaData = await getSEOData('about');

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
        url: `https://thespecialcharacter.com/about`,
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

const Page = (props: Props) => {
  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="about"
          className="customClass"
          circleRight="bg-primary"
          circleLeft="bg-secondary3"
        />
      </Suspense>
      <Suspense fallback={<AchievementsSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Achievements />
      </Suspense>
      <Suspense fallback={<AboutheaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <Aboutheader />
      </Suspense>
      <Suspense fallback={<OurWorksSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <OurWorks />
      </Suspense>
      <Suspense fallback={<CompanyHistorySkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <CompanyHistory />
      </Suspense>
      <Suspense fallback={<OurOfficeSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <OurOffice />
      </Suspense>
    </>
  );
};

export default Page;
