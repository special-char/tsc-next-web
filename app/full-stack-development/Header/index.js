import React from 'react';
import PlayBtn from '@/public/icons/playButton.svg';

const data = [
  {
    id: '1',
    btn: <PlayBtn />,
  },
  {
    id: '2',
    btn: <PlayBtn />,
  },
];

const LandingHeader = () => {
  return (
    <section>
      <div className="flex flex-col px-4 py-20 lg:px-container">
        <div className="flex flex-1 flex-col items-center md:px-0 ">
          <div className="text-center font-semibold ">
            <h2>
              Welcome to Tech Fest Powered by The Special Character, along with
              our knowledge partner Adani Institute of Digital Technology
              Management the most awaited technology event of the year!
            </h2>
          </div>
          <div className="py-5 text-lg md:text-3xl lg:px-16 lg:text-2xl">
            <h4 className="py-5 text-center text-lg md:px-8 md:text-3xl lg:text-2xl  ">
              Design and animate highly responsive custom websites using Webflow
              and bring your Portfolio to life
            </h4>
          </div>

          <div className="lg:px-60">
            <a
              href="#"
              className="flex items-center justify-center border-none  "
            >
              <PlayBtn className="absolute w-24 text-center md:w-52 lg:w-52 " />
              <img
                src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c58cbe7767c1a4306c95ed_C4442T01.jpeg"
                loading="lazy"
                alt=""
                className="rounded-2xl"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:flex-row md:gap-8 ">
          {data.map((val) => {
            return (
              <>
                <div>{val.btn}</div>
              </>
            );
          })}
        </div>

        <div className="md:mx-4 flex flex-col justify-between gap-6 rounded-xl bg-neutral-800 text-center md:mx-12 md:flex-row md:px-6  lg:mx-44 lg:px-4 ">
          <div className=" flex flex-col items-center justify-center   ">
            <h1 className="flex items-center text-5xl font-bold text-neutral-100">
              5000+{' '}
            </h1>
            <h2 className="content-center items-center text-xl font-semibold text-neutral-100 ">
              Students Trained on Nocode
            </h2>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a417e759615c_light-glow.svg"
            loading="lazy"
            alt=""
            className="hidden md:list-item"
          />
          <div className=" flex flex-col items-center justify-center">
            <h1 className=" text text-5xl font-bold text-neutral-100 ">4+ </h1>
            <h2 className=" text-flex content-center items-center text-xl font-semibold text-neutral-100 ">
              Projects{' '}
            </h2>
          </div>
          <img
            src="https://uploads-ssl.webflow.com/5fdb2866020c200cd7fd7369/61c2fcf81eb2a417e759615c_light-glow.svg"
            loading="lazy"
            alt=""
            className="hidden md:list-item "
          />

          <div className=" flex flex-col items-center justify-center">
            <h1 className=" text-5xl font-bold text-neutral-100 ">₹4999 </h1>
            <h2 className="flex content-center items-center text-xl font-semibold text-neutral-100 ">
              Only{' '}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHeader;
