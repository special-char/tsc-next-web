import React from 'react';
import '@/styles/usercard.css';
import Button from '@/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import Register from './Register';

type Props = {};

const UserCard = ({ data }: Props) => {
  return (
    <section className="">
      <div className="user_card relative">
        <div className="user_card__image">
          <Image
            src={data.avatar.data.attributes.url}
            alt="avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="user_card__details">
          <div className=" user_card__heading">
            <h2 className="!m-0 mt-3 md:text-5xl">{data.firstName}</h2>
            <div className="chip chip--primary w-auto shadow-dark hover:bg-neutral-100 hover:text-primary">
              Design
            </div>
          </div>
          <p className="user_card__desc ">{data.about}</p>
          <div className="user_card__buttons ">
            <Link
              href="#"
              download={'employeeName.cv'}
              className="btn btn--small btn--primary"
            >
              Download Resume
            </Link>
            <Register
              formId={2}
              btnText="Hire"
              btnClass="btn--primary px-3 py-4 md:px-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserCard;
