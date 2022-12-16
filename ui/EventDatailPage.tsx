import React from 'react';
import ClockSvg from '@/public/icons/clock.svg';
import MapSvg from '@/public/icons/map.svg';
import SpeakerSvg from '@/public/icons/speaker.svg';
import '@/styles/allevents.css';

interface Props {}

const EventDatailPage = (props: Props) => {
  return (
    <>
      <section className="events__body">
        <div className="events__header">
          <div>
            <h6 className="font-bold lg:mt-3">july</h6>
            <h1 className="events__h1">24</h1>
          </div>
        </div>
        <div className="events__datails ">
          <div className="events__title">
            <div className="events__tools">
              <div className="events__svg">
                <ClockSvg className="w-6" />
                <span className="events__top ">
                  Sunday 5:00 pm - 6:00 pm EDT
                </span>
              </div>
              <div className="events__svg">
                <MapSvg className="w-6" />
                <span className="events__top">Ahmedabad</span>
              </div>
              <div className="events__chip chip chip--white">
                <div className="chip__icon">
                  <SpeakerSvg className="w-6" />
                </div>
                Marketing
              </div>
            </div>
          </div>
          <h2 className="events__head">Social Media Marketing Masterclass</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliquam id.
          </p>
          <button className="events__button btn btn--primary">
            REGISTER TO EVENT
          </button>
        </div>
      </section>
    </>
  );
};

export default EventDatailPage;
