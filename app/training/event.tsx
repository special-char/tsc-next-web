import '@/styles/event.css';
import React from 'react';
import Image from 'next/image';
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
      <div className="body">
        <h2>All Events</h2>
        <div className="body__header">
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
                <Image
                  src={x.image}
                  alt=""
                  height={700}
                  width={800}
                  className="mb-2 h-full"
                />

                <div className="chip absolute left-4 top-4 items-center bg-neutral-100">
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

              <div className="card__body gap-4">
                <div className="mb-2  items-center gap-4 md:flex">
                  <span>
                    <Image
                      src="https://assets.website-files.com/607de2d8e8911e32707a3efe/6081c72dd73f4ebc33cc14dc_icon-date-education-x-template.svg"
                      alt="Calendar Icon - Education X Webflow Template"
                      className=""
                      height={20}
                      width={20}
                    />
                  </span>
                  <p className="small m-0 overflow-hidden">
                    {x.day} {x.startTime} -&nbsp; {x.endTime}
                  </p>
                </div>
                <div className="text-center md:row-span-2">
                  <div>{x.month}</div>
                  <h2 className=" m-0 md:text-7xl lg:text-9xl">{x.date}</h2>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <h3 className="card__title">{x.title}</h3>

                  <p className="card__desc">{x.description}</p>
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
