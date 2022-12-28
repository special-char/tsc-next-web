import EventCard, { EventCardSkeleton } from '@/ui/EventCard';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import Features, { FeaturesSkeleton } from '@/ui/features';
import React, { Suspense, use } from 'react';
import { getEvents } from '@/lib/getEvents';

const data = [
  {
    id: 1,
    heading: 'Social Media Marketing Masterclass',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bcda0eb70e6127b5b859_image-4-events-education-x-template.jpg',
    publishedAt: {
      month: 'August',
      day: '11',
      year: '2022 EDT',
    },
    eventDate: {
      month: 'August',
      day: '11',
      year: '2022',
    },
  },
  {
    id: 2,
    heading: 'Social Media Marketing Masterclass',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
    image_url:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bcda0eb70e6127b5b859_image-4-events-education-x-template.jpg',
    publishedAt: {
      month: 'August',
      day: '11',
      year: '2022 EDT',
    },
    eventDate: {
      month: 'August',
      day: '11',
      year: '2022',
    },
  },
];
const chips = [
  {
    name: 'All',
    selected: true,
  },
  {
    name: 'Development',
  },
  {
    name: 'Design',
  },
  {
    name: 'Marketing',
  },
];

export default function Page() {
  const eventData = use(getEvents());
  const [{ attributes }] = eventData.data.events.data;

  return (
    <>
      {/* <Event /> */}
      <Suspense fallback={<PageHeaderSkeleton />}>
        <PageHeader
          pageName="events"
          className="customClass"
          circleRight="bg-secondary3"
          circleLeft="bg-secondary2"
        />
      </Suspense>
      <Suspense fallback={<FeaturesSkeleton />}>
        <section className="bg-neutral-100 py-4 px-container pt-40">
          <Features title="All Events" chips={chips} />
        </section>
      </Suspense>

      <Suspense fallback={<EventCardSkeleton />}>
        {/* {JSON.stringify(eventData.data.events.data, null)} */}
        <EventCard data={eventData.data.events.data} />
      </Suspense>
    </>
  );
}
