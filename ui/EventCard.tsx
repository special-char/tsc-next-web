import React from 'react';
import Icon from './Icon';
import '@/styles/eventcard.css';
import Image from 'next/image';

type data = {
  image_url: any;
  eventDate: date;
  publishedAt: date;
  alternativeText: String;
  icon: String;
  date: String;
  heading: String;
  description: String;
  isHorizontal: boolean;
};

type Props = {};
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
];

const EventCard = (props: Props) => {
  return (
    <>
      <section className="event_Card">
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
      </section>
    </>
  );
};

export default EventCard;
