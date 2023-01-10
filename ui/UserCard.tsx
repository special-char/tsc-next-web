import React from 'react';
import '@/styles/usercard.css';
import Button from '@/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const UserCard = ({ data }: Props) => {
  return (
    <section className="">
      <div className="user_card ">
        <div className="user_card__image">
          <Image
            src={data.avatar.data.attributes.url}
            alt="avatar"
            fill
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
          <p className="user_card__desc">
            {data.about} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Debitis veritatis tenetur, obcaecati nisi nihil ex beatae
            voluptatibus odio, quibusdam quasi quis id. Necessitatibus, facere
            dolores.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="#"
              download={'employeeName.cv'}
              className="btn btn--small btn--primary"
            >
              Download Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
