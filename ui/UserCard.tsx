import React from 'react';
import '@/styles/usercard.css';
import Image from 'next/image';
import Link from 'next/link';
import SocialIcon from './SocialIcon';
import Button from '@/ui/Button';

type Props = {};

const UserCard = (props: Props) => {
  return (
    <section className=" px-container">
      <div className="user_card">
        <div className="user_card__image">
          <Image
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
            alt="avatar"
            height={220}
            width={220}
          />
        </div>
        <div className="user_card__details items-center">
          <div className=" flex flex-col items-center justify-between md:flex-row">
            <h3 className="!m-0">Kathie Corl</h3>
            <div className="chip chip--white w-1/2 hover:bg-primary md:w-1/5">
              Design
            </div>
          </div>
          <p className="pt-3 text-center md:text-start">
            Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Diam
            phasellus vestibulum lorem sed risus ultricies.
          </p>
          <div>
            <Button as="button" variant="primary">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
