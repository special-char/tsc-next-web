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

export const PageSkeleton = () => {
  return (
    <section className="events animate-pulse">
      <div>
        <div className="events__banner  "></div>
        <div className="events__animate-bounce-slow1  "></div>
        <div className="events__animate-bounce-slow2 "></div>
      </div>
      <div className="events__page">
        <div className="events__image bg-neutral-300">
          <div></div>
        </div>
        <div className="pt-8">
          <EventDetailPageSkeleton />
        </div>
        <div className="events__paragraph">
          <h2 className="mb-0 font-cursive text-3xl md:mb-2 md:text-6xl">
            Event Agenda
          </h2>
          <p className="font-cursive">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum
            scelerisque egestas. Volutpat, adipiscing a elit platea amet et. At
            at metus egestas nunc eget. Tempus sapien, augue laoreet morbi
            habitasse leo mauris arcu amet. Sapien lectus auctor quis in ut
            morbi risus. Ornare aliquam phasellus consequat amet velit risus.
          </p>
          <p className="font-cursive">
            Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget.
            Massa, lectus orci auctor morbi. A nisl vitae, sagittis elementum
            placerat nullam id integer leo. Diam venenatis amet diam odio
            ultrices auctor.
          </p>
          <ol style={{ listStyle: 'disc' }}>
            <li className="font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
            <li className="font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
            <li className="font-cursive">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
          </ol>
          <button className="events__button btn btn--primary font-cursive uppercase">
            register for event
          </button>
        </div>
      </div>
    </section>
  );
};
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
