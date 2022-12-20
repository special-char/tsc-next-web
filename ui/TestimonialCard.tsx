import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Testimonial, TestimonialEntity, UploadFile } from 'types/types';
import Rating from './Rating';
import '@/styles/testimonialCard.css';

type Props = {
  testimonial: TestimonialEntity;
};

const TestimonialCard = ({ testimonial }: Props) => {
  const { avatar, rating, quote, name, designation, company } =
    testimonial.attributes as Testimonial;
  const { url, alternativeText } = avatar?.data?.attributes as UploadFile;
  return (
    <Link
      href="#"
      style={{
        maxWidth: '48rem',
      }}
      className="testimonial_card"
    >
      <figure className="testimonial_card__img">
        <Image src={url} alt={`${alternativeText}`} fill />
      </figure>
      <div className="testimonial_card__body">
        <Rating rate={rating} className="testimonial_card__rating" />
        <p className="testimonial_card__desc">{`"${quote}"`}</p>
        <div className="user_info">
          <h4>{name}</h4>
          <p>{`${designation} at ${company}`}</p>
        </div>
      </div>
    </Link>
  );
};

export default TestimonialCard;