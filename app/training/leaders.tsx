import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {};

const Leaders = (props: Props) => {
  return (
    <section id="leaders" className={styles.leaders}>
      <div className={styles.leaders__details}>
        <h2 className={styles.leaders__title}>
          Courses taught by industry leaders around the world
        </h2>
        <p className={styles.leaders__description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </p>
        <div className={styles.leaders__actions}>
          <Link href="/" className="btn btn--primary">
            <button>BROWSE TEACHERS</button>
          </Link>
          <Link href="/" className="btn btn--secondary">
            <button> BECOME A TEACHER</button>
          </Link>
        </div>
      </div>
      <div className={styles.leaders__image_content}>
        <div className={styles.leaders__image}>
          <Image
            src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607ee9511b8768627aa63e05_image-home-about-education-x-template.jpg"
            alt="logo"
            fill
          />
        </div>
        <div className={styles.leaders__content}>
          <span className="mb-2 w-44 rounded-full bg-secondary1 py-2 text-center font-bold text-primary">
            Featured Teacher
          </span>
          <h3 className="py-4 text-neutral-700">
            “Teaching on Educationic platform has been an amazing experience”
          </h3>
          <h5 className="text-neutral-700">Yagnesh modh</h5>
          <h6 className="mb-0 text-neutral-600">CEO</h6>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
