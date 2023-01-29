import React from 'react';
import Link from 'next/link';
import Icon from '@/ui/Icon';
import Image from 'next/image';
import '@/styles/hirecard.css';
import { Team, TeamEntity, UploadFile } from 'types/types';
import Register from './Register';

type Props = {
  data: TeamEntity;
};

const HireCard = ({ data }: Props) => {
  const { firstName, lastName, about, avatar, slug, resume } =
    data.attributes as Team;
  return (
    <div className="hire_card">
      {/* {JSON.stringify(data, null)} */}
      <Link
        prefetch={false}
        href={`/hire-our-graduates/${encodeURIComponent(slug)}`}
      >
        <figure className="hire_card__img">
          <Image src={`${avatar.data?.attributes?.url}`} alt="alt-img" fill />
        </figure>
      </Link>
      <div className="hire_card__body">
        <Link
          prefetch={false}
          href={`/hire-our-graduates/${encodeURIComponent(slug)}`}
        >
          <h3 className="hire_card__title">{`${firstName}`}</h3>
          {/* <p className="hire_card__desc">{about}</p> */}
        </Link>

        <div className="hire_card__footer ">
          <Link
            href={resume.data?.attributes?.url}
            className="hire_card__action"
            download={'employeeName.cv'}
          >
            <Icon name="download" height={24} width={24} />
          </Link>
          <h6>Download Profile</h6>
          <div className="absolute top-4 right-3">
            <Register
              formId={2}
              btnText="Hire"
              btnClass="btn--primary py-3 px-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireCard;
