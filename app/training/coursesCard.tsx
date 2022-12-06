import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '@/styles/coursescard.css';

type Props = {};

const avatarData = [
  {
    name: 'Kathie Crol',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg',
  },
];

const CoursesCard = (props: Props) => {
  return (
    <section id="coursescard" className="coursescard">
      <Link href="#" className="coursescard__card">
        <div className="coursescard__card__image">
          <Image
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template-p-1080.jpeg"
            alt="image"
            fill
          />
          <div className="coursescard__card__chipset left-3 flex-col md:flex-row">
            <span className="chip chip--secondary">7hr56m</span>
            <span className="chip chip--primary">$199.00 USD</span>
          </div>
        </div>

        <div className="coursescard__card__body">
          <h2 className="coursescard__card__title">Lorem, ipsum dolor.</h2>
          <p className="coursescard__card__desc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus eius nesciunt cupiditate iure obcaecati a dicta non
            temporibus quis deserunt.
          </p>
          <div className="coursescard__card__actions">
            {avatarData.map((avatarData) => (
              <>
                <div className="coursescard__card__avatar placeholder w-16">
                  <img src={avatarData.url} alt={avatarData.name} />
                </div>
                <h3>{avatarData.name}</h3>
              </>
            ))}
          </div>
        </div>
      </Link>
    </section>
  );
};

export default CoursesCard;
