import EventCard, { EventCardSkeleton } from '@/ui/EventCard';
import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import Features, { FeaturesSkeleton } from '@/ui/features';
import React, { Suspense, use } from 'react';
import { getEvents } from '@/lib/getEvents';

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
        <EventCard data={eventData.data.allEvents.data} />
      </Suspense>
    </>
  );
}
