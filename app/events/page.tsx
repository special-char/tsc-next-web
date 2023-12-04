import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense, use } from 'react';
import AllEvents from './allEvents';
import { getAllEvents } from '@/lib/getAllEvents';
import { ComponentSharedSeo, EventEntity } from 'types/types';
import { Metadata } from 'next';
import { getSEOData } from '@/lib/getSEO';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const metaData = await getSEOData('events');

  const seo = metaData?.data?.banner?.data?.attributes
    ?.seo as ComponentSharedSeo;

  const facebook = seo?.metaSocial?.find((x) => x?.socialNetwork === 'Facebook');
  const twitter = seo?.metaSocial?.find((x) => x?.socialNetwork === 'Twitter');

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
        url: `https://thespecialcharacter.com/events`,
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

export default async () => {
  const eventData = await getAllEvents();

  const eventsData = eventData.data.events.data as EventEntity[];

  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        {/* @ts-expect-error Async Server Component */}
        <PageHeader
          pageName="events"
          className="customClass"
          circleRight="bg-secondary3"
          circleLeft="bg-secondary2"
          hasSeprator={true}
        />
      </Suspense>
      <AllEvents events={eventsData} />
    </>
  );
};
