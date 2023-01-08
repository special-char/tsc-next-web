import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense, use } from 'react';
import { getAllEvents } from '@/lib/getAllEvents';
import AllEvents from './allEvents';

export default function Page() {
  const eventData = use(getAllEvents());
  const { data } = eventData.data.events;

  return (
    <>
      <Suspense fallback={<PageHeaderSkeleton />}>
        <PageHeader
          pageName="events"
          className="customClass"
          circleRight="bg-secondary3"
          circleLeft="bg-secondary2"
          hasSeprator={false}
        />
      </Suspense>
      <AllEvents events={data} />
    </>
  );
}
