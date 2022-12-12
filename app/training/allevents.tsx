import React from 'react';
import CelenderSvg from '@/public/icons/celender.svg';
import MapSvg from '@/public/icons/map.svg';
import SpeakerSvg from '@/public/icons/speaker.svg';
import '@/styles/allevents.css';
import Image from 'next/image';

const EventDetails = () => {
  return (
    <section className="events relative h-auto">
      <div className="absolute h-96 w-full bg-primary"></div>
      <div className="animate-bounce-slow absolute -left-36 -top-20 z-10 h-[250px] w-[250px] rounded-full bg-secondary3 md:-left-80 md:top-24 md:h-[500px] md:w-[500px] lg:top-80 lg:-left-24 lg:h-[500px] lg:w-[500px]"></div>
      <div className="animate-bounce-slow absolute  top-[350px] -right-[420px] z-10 h-[550px] w-[550px] rounded-full bg-secondary2 md:top-64 md:-right-32 md:h-[500px] md:w-[500px] lg:top-56 lg:-right-0 lg:h-[350px] lg:w-[350px]"></div>

      <div className="events__page pt-40">
        <div className="relative z-20 h-[640px] w-full overflow-hidden rounded-[40px] ">
          <Image
            alt="alt"
            src={
              'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg'
            }
            fill
          />
        </div>
        <div className="events__body">
          <div className="events__header">
            <h5>july</h5>
            <h1 className="mb-0">24</h1>
          </div>
          <div className="events__datails ">
            <div className="events__title">
              <CelenderSvg className="w-6" />
              <span className="text-base font-bold md:text-sm">
                Sunday 5:00 pm - 6:00 pm EDT
              </span>
              <MapSvg className="w-6" />
              <span>Ahmedabad</span>
              <span className="events__chip">
                <span className="chip__icon ">
                  <SpeakerSvg className="w-6" />
                </span>
                Marketing
              </span>
            </div>
            <h2 className="events__head">Social Media Marketing Masterclass</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliquam id.
            </p>
            <button className="events__button">REGISTER TO EVENT</button>
          </div>
        </div>

        <div className="events__paragraph">
          <h2>Event Agenda</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta
            massa, eget natoque tincidunt quis. Suspendisse vitae vestibulum
            scelerisque egestas. Volutpat, adipiscing a elit platea amet et. At
            at metus egestas nunc eget. Tempus sapien, augue laoreet morbi
            habitasse leo mauris arcu amet. Sapien lectus auctor quis in ut
            morbi risus. Ornare aliquam phasellus consequat amet velit risus.
          </p>
          <p>
            Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget.
            Massa, lectus orci auctor morbi. A nisl vitae, sagittis elementum
            placerat nullam id integer leo. Diam venenatis amet diam odio
            ultrices auctor.
          </p>
          <ol style={{ listStyle: 'disc' }}>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem
              ipsum dor
            </li>
          </ol>
          <button className="events__button">REGISTER TO EVENT</button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
