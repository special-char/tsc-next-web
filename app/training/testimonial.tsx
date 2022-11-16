import React from 'react';
import '@/styles/testimonial.css';
import Image from 'next/image';
import Rating from '@/ui/Rating';

interface Props {}
const Data1 = [
  {
    id: 1,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
  {
    id: 2,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
  {
    id: 3,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
  {
    id: 4,
    url: 'https://placeimg.com/192/192/peoplehttps://assets.website-files.com/607de2d8e8911e32707a3efe/607ef1bd45dc22493a193f7e_image-1-testimonials-education-x-template.jpg',
    description:
      '“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint”',
    name: 'Company Name',
    designation: 'Junior Designer at Facebook',
    star: <Rating />,
  },
];

const Testimonial = (props: Props) => {
  return (
    <section id="Testimonial" className="testimonial">
      <h2 className="testimonial__Header">What Our Clients Say</h2>
      <div className="testimonial__section gap-4">
        {Data1.map((val) => (
          <div className="testimonial__body">
            <div className="testimonial__image">
              <Image
                className="avatar overflow-hidden rounded-full "
                alt=""
                src={val.url}
                width={203}
                height={203}
              />
            </div>
            <div className="testimonial__paragraph">
              <div className="testimonial__star my-4">{val.star}</div>
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
