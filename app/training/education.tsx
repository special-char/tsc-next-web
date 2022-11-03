const educationDetails = [
  {
    id: 1,
    name: 'Industry expert teachers',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    img: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6d7623a851c7feabb_icon-1-home-about-education-x-template.svg',
  },
  {
    id: 2,
    name: 'Up-to-date course content',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    img: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6fe6961a78b192f8d_icon-2-home-about-education-x-template.svg',
  },
  {
    id: 3,
    name: 'Students community',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    img: 'https://assets.website-files.com/607de2d8e8911e32707a3efe/607eedf6965e388154b41812_icon-3-home-about-education-x-template.svg',
  },
];

import Image from 'next/image';
import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type Props = {};

const Education = (props: Props) => {
  return (
    <div className={styles.education}>
      <div className={styles.education__header}>
        <h2>About Educatoion</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, et!</p>
      </div>
      <div className={styles.education__image}>
        <Image
          src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ee9511b8768627aa63e05_image-home-about-education-x-template.jpg"
          alt=""
          fill
        />
      </div>
      <div className={styles.education__content}>
        {educationDetails.map((x) => (
          <>
            <div>
              <Image
                src={x.img}
                alt="test"
                height={48}
                width={48}
                className="rounded-full"
              />
            </div>
            <div>
              <h3>{x.name}</h3>
              <p>{x.description}</p>
            </div>
          </>
        ))}
      </div>
      <div className={styles.education__header}>
        <Link href="/" className="btn btn--secondary">
          About Education
        </Link>
      </div>
    </div>
  );
};

export default Education;
