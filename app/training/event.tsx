import '@/styles/event.css';
import DateIcon from '@/public/icons/icon-date.svg';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
type Props = {};

const Event = (props: Props) => {
  const data = [
    {
      id: 1,
      title: 'Social Media Marketing Masterclass',
      description:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
      image:
        'https://assets.website-files.com/607de2d8e8911e32707a3efe/6081c72dd73f4ebc33cc14dc_icon-date-education-x-template.svg',
      month: 'JULY',
      date: 24,
      day: 'Sunday',
      startTime: '5:00 pm',
      endTime: '6:00 pm',
    },
    {
      id: 2,
      title: 'Brand & Identity Design QA with Sophie Moore',
      description:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
      image:
        'https://assets.website-files.com/607de2d8e8911e32707a3efe/6081c72dd73f4ebc33cc14dc_icon-date-education-x-template.svg',
      month: 'JULY',
      date: 28,
      day: 'Thursday',
      startTime: '8:00 pm',
      endTime: '9:00 pm',
    },
    {
      id: 3,
      title: 'Business Analytics Free Webinar',
      description:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
      image:
        'https://assets.website-files.com/607de2d8e8911e32707a3efe/6081c72dd73f4ebc33cc14dc_icon-date-education-x-template.svg',
      month: 'AUGUST',
      date: 12,
      day: 'Friday',
      startTime: '6:00 pm',
      endTime: '7:00 pm',
    },

    {
      id: 4,
      title: 'Landing Page Optimization Masterclass',
      description:
        'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
      image:
        'https://assets.website-files.com/607de2d8e8911e32707a3efe/6081c72dd73f4ebc33cc14dc_icon-date-education-x-template.svg',
      date: 18,
      day: 'Thursday',
      month: 'August',
      startTime: '2:00 pm',
      endTime: '4:00 pm',
    },
  ];
  return (
    <section className=" px-4 py-4 md:mx-auto md:w-11/12 lg:grid-cols-2">
      {/* <div className="card__header">
        <h2>All Events</h2>
        <div className="md:grid-cols-4">
          <button>All</button>
          <button>Development</button>
          <button>Design</button>
          <button>Marketing</button>
        </div>
      </div> */}
      <div className="card">
        <div className="relative">
          <Image
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2ViJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            height={700}
            width={800}
            className="mb-2"
          />

          <div className="chip absolute left-4 mt-6  items-center bg-neutral-100 ">
            <div className="flex  gap-1">
              <Image
                src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f21aa2c18150120252017_icon-3-categories-education-x-template.svg"
                alt=""
                height={16}
                width={16}
              />
              Development
            </div>
          </div>
        </div>

        <div className="card__body">
          {/* <div className="card__data pb-3"> */}
          <div className=" mb-2 sm:grid-rows-2 md:grid-cols-2">
            <span>
              <Image
                src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6081c72dd73f4ebc33cc14dc_icon-date-education-x-template.svg"
                alt="Calendar Icon - Education X Webflow Template"
                className=""
                height={20}
                width={20}
              />
            </span>
            <p className="small overflow-hidden ">
              Thursday 2:00 pm -&nbsp; 4:00 pm EDT
            </p>
          </div>
          <div className="text-center  md:row-span-2">
            <div className="month">August</div>
            <h2 className="date m-0 md:text-7xl lg:text-9xl">18</h2>
          </div>
          {/* </div> */}
          <div className="">
            <h3 className="card__title mb-2">
              Landing Page Optimization Masterclass
            </h3>

            <p className="card__desc">
              Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit.
              Felis donec massa aliquam id.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
