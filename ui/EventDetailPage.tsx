import React from 'react';

import MapSvg from '@/public/icons/map.svg';
import SpeakerSvg from '@/public/icons/speaker.svg';
import '@/styles/allevents.css';
import format from 'date-fns/format';
import Register from './Register';
import { Event } from 'types/types';
import EventLocalDate from './eventLocalDate';

export const EventDetailPageSkeleton = () => {
  return (
    <>
      <section className="events__body animate-pulse">
        <div className="events__header">
          <div>
            <h5 className="events__h6 font-cursive">july</h5>
            <h6 className="events__h1 font-cursive">24</h6>
          </div>
        </div>
        <div className="events__datails ">
          <div className="events__title">
            <div className="events__tools">
              <div className="events__svg">
                <div className="h-6 w-6 bg-primary" />
                <span className="events__top font-cursive ">
                  Sunday 5:00 pm - 6:00 pm EDT
                </span>
                .
              </div>
              <div className="events__svg">
                <div className="h-6 w-6 bg-primary" />
                <span className="events__top font-cursive">Ahmedabad</span>
              </div>
              <div className="events__chip chip chip--white font-cursive">
                <div className="chip__icon w-6">
                  <div className="h-6 w-6 bg-primary" />
                </div>
                Marketing
              </div>
            </div>
          </div>
          <h1 className="events__head font-cursive">
            Social Media Marketing Masterclass
          </h1>
          <p className="font-cursive">
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliquam id.
          </p>
          <button className="events__button btn btn--primary font-cursive">
            REGISTER TO EVENT
          </button>
        </div>
      </section>
    </>
  );
};

const EventDetailPage = ({
  eventStartDate,
  eventEndDate,
  registerButtonURL,
  location,
  category,
  title,
  description,
  additionalField,
}: Event) => {
  return (
    <>
      <section className="events__body">
        <div className="events__header hidden md:flex">
          <time className="events__h6">
            {format(new Date(eventStartDate), 'MMMM')}
          </time>
          <time className="events__h1">
            {' '}
            {format(new Date(eventStartDate), 'dd')}
          </time>
        </div>
        <div className="events__datails">
          <div className="events__title">
            <div className="events__tools items-start">
              <div className="flex flex-1 items-start gap-4">
                <div className="events__header flex md:hidden">
                  <time className="events__h6">
                    {format(new Date(eventStartDate), 'MMMM')}
                  </time>
                  <time className="events__h1">
                    {' '}
                    {format(new Date(eventStartDate), 'dd')}
                  </time>
                </div>
                <div className="flex flex-col gap-2 md:gap-4">
                  <EventLocalDate
                    eventStartDate={eventStartDate || ''}
                    eventEndDate={eventEndDate || ''}
                    title={title || ''}
                    description={description || ''}
                    location={location}
                  />

                  <div className="events__svg">
                    <MapSvg className="w-6" />
                    {location?.latitude && location?.longitude ? (
                      <a
                        href={`https://www.google.com/maps?q=${location?.latitude},${location?.longitude}`}
                        className="events__top"
                        target="_blank"
                      >
                        {location?.city}
                      </a>
                    ) : (
                      <span>{location?.city}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="events__chip chip chip--white">
                <div className="chip__icon">
                  <SpeakerSvg className="w-6" />
                </div>
                {category?.data?.attributes?.title}
              </div>
            </div>
          </div>
          <h1 className="events__head">{title}</h1>
          <p>{description}</p>
          <Register
            btnText="register for event"
            btnClass="btn--primary"
            formId={3}
            registerButtonURL={registerButtonURL}
            additionalField={additionalField}
          />
        </div>
      </section>
    </>
  );
};

export default EventDetailPage;
