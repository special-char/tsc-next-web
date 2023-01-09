import React from 'react';
import '@/styles/usercard.css';
import Button from '@/ui/Button';
import Image from 'next/image';

type Props = {};

const UserCard = ({ data }: Props) => {
  return (
    <section className="">
      <div className="user_card ">
        <div className="user_card__image">
          <Image
            src={data.avatar.data.attributes.url}
            alt="avatar"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="user_card__details">
          <div className=" user_card__heading">
            <h2 className="!m-0 mt-3 md:text-5xl">{data.firstName}</h2>
            <div className="chip chip--primary w-auto shadow-dark hover:bg-neutral-100 hover:text-primary">
              Design
            </div>
          </div>
          <p className="user_card__desc">{data.about}</p>
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
