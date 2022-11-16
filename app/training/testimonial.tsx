import React from 'react';
import '@/styles/testimonial.css';
import Image from 'next/image';

type Props = '';
const Data1 = [
  {
    id: 1,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
  },
  {
    id: 1,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
  },
  {
    id: 1,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
  },
  {
    id: 1,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
  },
];

const Testimonial = (props: Props) => {
  return (
    <section id="Testimonial" className="testimonial bg-secondary2 ">
      <h2 className="testimonial__Header">What Our Clients Say</h2>
      <div className="testimonial__section gap-5 bg-secondary3">
        {Data1.map((val) => (
          <div className="testimonial__body">
            <div className="testimonial__image">
              <Image
                className="avatar overflow-hidden rounded-full "
                alt=""
                src={val.url}
                width={203}
                height={203}
                // src={data?.avatar?.url}
              />
            </div>
            <div className="testimonial__paragraph ">
              <div className="mask mask--star"></div>
              <p>{val.description}</p>
              <h4>{val.name}</h4>
              <p>{val.designation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Testimonial;
