import '@/styles/event.css';
import DateIcon from '@public/icons/icon-date.svg';
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
    <section className="card">
      <div className="grid sm:grid-rows-2 lg:grid-cols-2">
        <h2>All Events</h2>
        <div className="grid sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4">
          <button>All</button>
          <button>Development</button>
          <button>Design</button>
          <button>Marketing</button>
        </div>
      </div>
      <div>
        <div className="card__content flex overflow-hidden">
          {data.map((x) => (
            <>
              <div>
                <div className="">
                  <h3 className="card__title">{x.title}</h3>
                  <p>{x.description}</p>
                </div>
                <div className="text-center">
                  <div className="month">{x.month}</div>
                  <div className="date">{x.date}</div>
                </div>
                <div className="gap-4 md:flex-row">
                  <DateIcon className="w-6 pt-1" />
                </div>
                <p>
                  {' '}
                  {x.day}
                  {x.startTime} {x.endTime}
                </p>
              </div>
              <div className="">
                <Link href={'blog'} className="btn btn--secondary">
                  <Image
                    src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f21aa2c18150120252017_icon-3-categories-education-x-template.svg"
                    alt=""
                    height={20}
                    width={20}
                  />
                  Development
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
