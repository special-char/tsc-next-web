import React from 'react';
import '@/styles/usercard.css';
import Button from '@/ui/Button';
import Image from 'next/image';

type Props = {};

const UserCard = (props: Props) => {
  return (
    <section className="">
      <div className="user_card ">
        <div className="user_card__image">
          <Image
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="user_card__details">
          <div className=" user_card__heading">
            <h2 className="!m-0">Kathie Corl</h2>
            <div className="chip chip--primary hover:bg-chip--white w-auto shadow-dark hover:text-primary">
              Design
            </div>
          </div>
          <p className="user_card__desc">
            Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
            phasellus vestibulum lorem sed risus ultricies.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button as="button" className="btn btn--small btn--primary">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
