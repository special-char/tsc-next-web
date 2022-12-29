import React from 'react';
import Icon from './Icon';
import '@/styles/eventcard.css';
import Image from 'next/image';
import format from 'date-fns/format';
import Link from 'next/link';

type date = {
  day: number;
  month: String;
  year: number;
};

type chip = {
  name: string;
  selected?: boolean;
}[];

type publishedAt = {
  day: String;
  startTime: number;
  endTime: number;
};

type dataType = {
  image_url: any;
  eventDate: date;
  publishedAt: publishedAt;
  title: String;
  alternativeText: String;
  icon: String;
  date: String;
  heading: String;
  description: String;
  isHorizontal: boolean;
  chips: chip;
}[];

export const EventCardSkeleton = () => {
  return (
    <>
      <div className="event_Card animate-pulse">
        {[1, 2].map((data) => (
          <div className="event__section">
            <figure className="card__image bg-neutral-300">
              <div></div>
            </figure>
            <div className="event__body">
              <div className="event__date font-cursive">
                <div className="h-7 w-7 bg-neutral-300"></div>
                <time>11 August, 2022 EDT</time>
              </div>

              <time className="date">
                <span className="font-cursive text-xs uppercase md:text-base">
                  AUGUST
                </span>
                <span className="font-cursive text-4xl md:text-[48px]">11</span>
              </time>

              <div className="event__datails ">
                <h3 className="card__title font-cursive">
                  Social Media Marketing Masterclass
                </h3>

                <p className="card__desc font-cursive">
                  Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                  elit. Felis donec massa aliquam id.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

type Props = {
  data: dataType;
};

const EventCard = ({ data }: Props) => {
  const [{ attributes }] = data;
  const {
    image,
    eventStartDate,
    eventEndDate,
    title,
    description,
    slug,
    category,
  } = attributes;
  return (
    <>
      <div className="event_Card">
        {data.map((data) => (
          <Link
            key={data.id}
            href={`/events/${slug}`}
            className="event__section"
          >
            <figure className="card__image">
              <Image
                src={image.data.attributes.url}
                alt={`${image.data.attributes.alternativeText}`}
                fill
              />

              <div className="card__chipset">
                {data?.title && (
                  <div className="chip chip--white flex gap-2">
                    {data.icon && (
                      <Icon width={20} height={20} name="speaker" />
                    )}
                    {category.data.attributes.title}
                  </div>
                )}
              </div>
            </figure>
            <div className="event__body">
              <div className="event__date">
                <Icon name="calendar" />
                <time>{`${format(new Date(eventStartDate), 'EEEE')} ${format(
                  new Date(eventStartDate),
                  'p',
                )}  - ${format(new Date(eventEndDate), 'p')}`}</time>
              </div>
              <time className="date">
                <span className="text-xs uppercase md:text-base">
                  {format(new Date(eventStartDate), 'MMMM')}
                </span>
                <span className="text-4xl md:text-[48px]">
                  {format(new Date(eventStartDate), 'dd')}
                </span>
              </time>
              <div className="event__datails ">
                <h3 className="card__title !m-0">{title}</h3>
                <p className="card__desc">{description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default EventCard;
