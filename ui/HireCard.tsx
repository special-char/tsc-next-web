import React from 'react';
import Link from 'next/link';
import Icon from '@/ui/Icon';
import Image from 'next/image';
import '@/styles/hirecard.css';

type graduate = {
  attributes: any;
}[];
type Props = {
  data: graduate;
};

const HireCard = ({ data }: Props) => {
  const { firstName, lastName } = data.attributes;
  return (
    <div className="hire_card">
      <figure className="hire_card__img">
        <Image
          src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff4698e5af4686c9948_image-3-profile-picture-teacher-education-x-template.jpg"
          alt="alt-img"
          fill
        />
        <div className="hire_card__chips">
          <div className="chip chip--primary !px-4 hover:bg-neutral-100 hover:text-primary">
            Hire Me
          </div>
        </div>
      </figure>
      <div className="hire_card__body">
        <h3 className="hire_card__title">{`${firstName} ${lastName}`}</h3>
        <p className="hire_card__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
        <div className="hire_card__footer ">
          <Link
            href="#"
            className="hire_card__action"
            download={'employeeName.cv'}
          >
            <Icon name="download" height={24} width={24} />
          </Link>
          <h6>Download Profile</h6>
        </div>
      </div>
    </div>
  );
};

export default HireCard;
