import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense, use } from 'react';
import { getEvents } from '@/lib/getEvents';
import AllEvents from './allEvents';

export default function Page() {
  const eventData = use(getEvents());
  const { data } = eventData.data.allEvents;

  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        <PageHeader
          pageName="events"
          className="customClass"
          circleRight="bg-secondary3"
          circleLeft="bg-secondary2"
        />
      </Suspense>
      <AllEvents events={data} />
    </>
  );
}
