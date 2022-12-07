import React, { use } from 'react';
import '@/styles/testimonial.css';
import Image from 'next/image';
import Rating from '@/ui/Rating';
import Carousal from '@/ui/Carousal';

interface Props {}

const NumberDetails = [
  {
    numbers: '100,000+',
    title: 'students worldwide',
  },
  {
    numbers: '200,00+',
    title: 'Total course views',
  },
  {
    numbers: '5,000+',
    title: 'Five-star course reviews',
  },
  {
    numbers: '75,000+',
    title: 'Students community',
  },
];

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

async function getTestimonialsData() {
  try {
    const res = await fetch('http://65.20.70.84:1337/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          testimonials {
            data {
              id
              attributes {
                quote
                rating
                name
                company
                designation
                avatar {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
              }
            }
          }
        }`,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await res.json();
  } catch (error) {}
}

const Testimonial = (props: Props) => {
  const testimonialsData = use(getTestimonialsData());

  if (!testimonialsData) return null;

  const testimonialsInfo = testimonialsData?.data?.testimonials?.data;

  return (
    <section id="Testimonial" className="testimonial">
      <h2 className="testimonial__header">What our students say about us</h2>
      <Carousal>
        {testimonialsInfo.map((testimonial) => {
          const { avatar, rating, quote, name, designation, company } =
            testimonial.attributes;
          return (
            <div className="testimonial__card card" key={testimonial.id}>
              <div className="card__image testimonial__card__image">
                <Image
                  src={avatar.data.attributes.url}
                  alt={avatar.data.attributes.alternativeText}
                  fill
                />
              </div>
              <div className="card__body testimonial__card__body">
                <Rating rate={rating} />
                <p className="card__desc">{`"${quote}"`}</p>
                <h4>{name}</h4>
                <p className="card__desc">{`${designation} at ${company}`}</p>
              </div>
            </div>
          );
        })}
      </Carousal>
      <div className="testimonial__content">
        {NumberDetails.map((number) => (
          <div>
            <h3 className="testimonial__title">{number.numbers}</h3>
            <p>{number.title}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn--primary">explore courses</button>
      </div>
    </section>
  );
};
export default Testimonial;
