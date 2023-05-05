import { getEvents } from '@/lib/getEvents';
import '@/styles/allevents.css';
import EventDetailPage, { EventDetailPageSkeleton } from '@/ui/EventDetailPage';
import Image from 'next/image';
import { use } from 'react';
import md from 'markdown-it';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Register from '@/ui/Register';
import { Event } from 'types/types';

export type Props = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

const Page = async ({ params }: Props) => {
  const eventData = await getEvents(params.slug);

  const { image, content, ...rest } = eventData.data.event.data
    ?.attributes as Event;

  return (
    <section className="events">
      <div>
        <div className="events__banner "></div>
        <div className="events__animate-bounce-slow1 "></div>
        <div className="events__animate-bounce-slow2"></div>
      </div>
      <div className="events__page">
        <div className="events__image">
          <Image
            alt="alt"
            src={`${image?.data?.attributes?.url}?tr=ar-16-9`}
            fill
            sizes="(min-width: 1024px) 100vw,
            600px"
          />
        </div>
        <div className="pt-8">
          <EventDetailPage
            data={rest}
            additionalField={{
              eventName: params.slug,
            }}
          />
        </div>
        <div className="events__paragraph">
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
        </div>
      </div>
    </section>
  );
};

export default Page;
