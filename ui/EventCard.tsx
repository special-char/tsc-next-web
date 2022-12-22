import React from 'react';
import Icon from './Icon';
import '@/styles/eventcard.css';
import Image from 'next/image';

type date = {
  day: number;
  month: String;
  year: number;
};

type chip = {
  name: string;
  selected?: boolean;
}[];

type dataType = {
  image_url: any;
  eventDate: date;
  publishedAt: date;
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
      <div className="event_Card">
        {data.map((data) => (
          <div className="event__section">
            <figure className="card__image">
              <Image src={data.image_url} alt="alt text" fill />
            </figure>
            <div className="event__body">
              {data?.publishedAt && (
                <div className="event__date">
                  <Icon name="calendar" />
                  <time>{`${data.publishedAt.day} ${data.publishedAt.month}, ${data.publishedAt.year}`}</time>
                </div>
              )}
              {data?.eventDate && (
                <time className="date">
                  <span className="text-xs uppercase md:text-base">
                    {data.eventDate.month}
                  </span>
                  <span className="text-4xl md:text-[48px]">
                    {data.eventDate.day}
                  </span>
                </time>
              )}
              <div className="event__datails ">
                <h3 className="card__title">{data?.heading}</h3>
                {data?.description && (
                  <p className="card__desc">{data?.description}</p>
                )}
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
  return (
    <>
      <div className="event_Card">
        {data.map((data) => (
          <div className="event__section">
            <figure className="card__image">
              <Image src={data.image_url} alt="alt text" fill />
            </figure>
            <div className="event__body">
              {data?.publishedAt && (
                <div className="event__date">
                  <Icon name="calendar" />
                  <time>{`${data.publishedAt.day} ${data.publishedAt.month}, ${data.publishedAt.year}`}</time>
                </div>
              )}
              {data?.eventDate && (
                <time className="date">
                  <span className="text-xs uppercase md:text-base">
                    {data.eventDate.month}
                  </span>
                  <span className="text-4xl md:text-[48px]">
                    {data.eventDate.day}
                  </span>
                </time>
              )}
              <div className="event__datails ">
                <h3 className="card__title">{data?.heading}</h3>
                {data?.description && (
                  <p className="card__desc">{data?.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventCard;
