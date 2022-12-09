import React from 'react';
import CelenderSvg from '@/public/icons/celender.svg';
import MapSvg from '@/public/icons/map.svg';
import SpeakerSvg from '@/public/icons/speaker.svg';

const EventDetails = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col bg-neutral-200 px-4 md:!px-6">
      <div className="flex flex-col flex-wrap gap-8 pt-12 md:flex-col md:gap-4 md:pt-20 lg:!flex-row lg:justify-center lg:!gap-24">
        <div className="flex flex-col items-start justify-between">
          <div className="flex flex-col justify-start text-center">
            <h5>JULY</h5>
            <h1 className="mb-0">24</h1>
          </div>
        </div>
        <div className="mb-16 w-[600px] md:mb-20 lg:mb-28">
          <div className="flex flex-row items-center justify-start gap-4 font-bold text-neutral-800 md:flex-col">
            <CelenderSvg className="w-6" />
            <span className="text-base font-bold md:text-sm">
              Sunday 5:00 pm - 6:00 pm EDT
            </span>
            <MapSvg className="w-6" />
            <span>Ahmedabad</span>
            <span className="chip chip--chip--white gap-2">
              <SpeakerSvg className="w-6" />
              Marketing
            </span>
          </div>

          <span className="card__title mb-5 block text-6xl font-semibold text-primary">
            Social Media Marketing Masterclass
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
            Felis donec massa aliquam id.
          </p>
          <button className="btn btn--primary px-10 py-6 text-center uppercase md:w-72">
            REGISTER TO EVENT
          </button>
        </div>
      </div>

      <div className="mx-auto flex w-[750px] flex-col items-start gap-2 pb-20 md:pb-36">
        <h2>Event Agenda</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porta massa,
          eget natoque tincidunt quis. Suspendisse vitae vestibulum scelerisque
          egestas. Volutpat, adipiscing a elit platea amet et. At at metus
          egestas nunc eget. Tempus sapien, augue laoreet morbi habitasse leo
          mauris arcu amet. Sapien lectus auctor quis in ut morbi risus. Ornare
          aliquam phasellus consequat amet velit risus.
        </p>
        <p>
          Ac, pellentesque proin tincidunt lobortis sit velit velit dui eget.
          Massa, lectus orci auctor morbi. A nisl vitae, sagittis elementum
          placerat nullam id integer leo. Diam venenatis amet diam odio ultrices
          auctor.
        </p>
        <ol style={{ listStyle: 'disc' }}>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            dor
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            dor
          </li>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem ipsum
            dor
          </li>
        </ol>
        <button className="btn btn--primary px-10 py-6 text-center uppercase md:w-72">
          REGISTER TO EVENT
        </button>
      </div>
    </section>
  );
};

export default EventDetails;
