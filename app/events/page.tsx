import PageHeader, { PageHeaderSkeleton } from '@/ui/pageHeader';
import React, { Suspense, use } from 'react';
import AllEvents from './allEvents';
import { getAllEvents } from '@/lib/getAllEvents';
import { EventEntity } from 'types/types';

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
          hasSeprator={false}
        />
      </Suspense>
      <AllEvents events={eventsData} />
    </>
  );
};
