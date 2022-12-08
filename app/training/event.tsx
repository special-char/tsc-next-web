import '@/styles/event.css';
import React from 'react';
import Image from 'next/image';
import CalendarSvg from '@/public/icons/calendar.svg';
type Props = {};

const data = [
  {
    id: 1,
    title: 'Social Media Marketing Masterclass',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
    image:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bcda0eb70e6127b5b859_image-4-events-education-x-template.jpg',
    month: 'JULY',
    date: 24,
    day: 'Sunday',
    startTime: '5:00 pm',
    endTime: '6:00 pm EDT',
  },
  {
    id: 2,
    title: 'Brand & Identity Design QA with Sophie Moore',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
    image:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bc900fef3e8a43d23b44_image-3-events-education-x-template-p-1600.jpeg',
    month: 'JULY',
    date: 28,
    day: 'Thursday',
    startTime: '8:00 pm',
    endTime: '9:00 pm EDT',
  },
  {
    id: 3,
    title: 'Business Analytics Free Webinar',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
    image:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081bc4ebd472d856b26463f_image-2-events-education-x-template-p-1600.jpeg',
    month: 'AUGUST',
    date: 12,
    day: 'Friday',
    startTime: '6:00 pm',
    endTime: '7:00 pm EDT',
  },

  {
    id: 4,
    title: 'Landing Page Optimization Masterclass',
    description:
      'Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliquam id.',
    image:
      'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/6081ba3e044f192faf945c7e_image-1-events-education-x-template-p-1600.jpeg',
    date: 18,
    day: 'Thursday',
    month: 'August',
    startTime: '2:00 pm',
    endTime: '4:00 pm EDT',
  },
];

const Event = (props: Props) => {
  return (
    <section className="px-container py-24">
      <div className="chipbody">
        <h2>All Events</h2>
        <div className="chipbody__header">
          <button className="chip chip--white px-6">All</button>
          <button className="chip chip--white px-6">Development</button>
          <button className="chip chip--white px-6">Design</button>
          <button className="chip chip--white px-6">Marketing</button>
        </div>
      </div>
      <div className="grid gap-8">
        {data.map((x) => (
          <>
            <div className="card">
              <div className="relative">
                <div className="card__image">
                  <Image src={x.image} alt="" fill className="" />
                </div>
                <div className="chip chip--white absolute left-4 top-4">
                  <div className="flex gap-1">
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
                <div className="maincontent">
                  <div className="mb-4 items-center gap-4 md:flex">
                    <CalendarSvg />
                    <p className="small m-0 items-center overflow-hidden">
                      {x.day} {x.startTime} -&nbsp; {x.endTime}
                    </p>
                  </div>
                  <div className="rightcontent">
                    <h3 className="card__title">{x.title}</h3>
                    <p className="card__desc">{x.description}</p>
                  </div>
                </div>
                <div className="">
                  <div>{x.month}</div>
                  <h2 className="m-0 md:text-7xl">{x.date}</h2>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default Event;
