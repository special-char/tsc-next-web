import React from 'react';
import ClockSvg from '@/public/icons/clock.svg';
import MapSvg from '@/public/icons/map.svg';
import SpeakerSvg from '@/public/icons/speaker.svg';
import '@/styles/allevents.css';
import format from 'date-fns/format';
import Link from 'next/link';

export const EventDatailPageSkeleton = () => {
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
          <h2 className="events__head font-cursive">
            Social Media Marketing Masterclass
          </h2>
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

type Props = {
  // data: 
}

const EventDatailPage = ({ data }: Props) => {
  const {
    eventStartDate,
    eventEndDate,
    location,
    category,
    title,
    description,
  } = data;
  return (
    <>
      <section className="events__body">
        <div className="events__header">
          <div>
            <h5 className="events__h6">{format(new Date(eventStartDate), "MMMM")}</h5>
            <h6 className="events__h1"> {format(new Date(eventStartDate), "dd")}</h6>
          </div>
        </div>
        <div className="events__datails ">
          <div className="events__title">
            <div className="events__tools">
              <div className="events__svg">
                <ClockSvg className="w-6" />
                <span className="events__top ">
                  {`${format(new Date(eventStartDate), "EEEE")} ${format(new Date(eventStartDate), "p")}  - ${format(new Date(eventEndDate), "p")}`}
                </span>
              </div>
              <div className="events__svg">
                <MapSvg className="w-6" />
                <span className="events__top">{location.city}</span>
              </div>
              <div className="events__chip chip chip--white">
                <div className="chip__icon">
                  <SpeakerSvg className="w-6" />
                </div>
                {category.data.attributes.title}
              </div>
            </div>
          </div>
          <h2 className="events__head">{title}</h2>
          <p>
            {description}
          </p>
          <Link href={"#"} role={'button'} className="events__button btn btn--primary mt-4">
            REGISTER TO EVENT
          </Link>
        </div>
      </section>
    </>
  );
};

export default EventDatailPage;
