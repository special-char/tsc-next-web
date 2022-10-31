'use client';

import Link from 'next/link';
import React, { useRef } from 'react';
import styles from './styles.module.css';

type Props = {};

const courses = [
  {
    id: 1,
    name: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
  {
    id: 2,
    name: 'Graphic Design',
    description: 'Lorem ipsum dolor sit, ',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
  {
    id: 3,
    name: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
  {
    id: 4,
    name: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
  {
    id: 5,
    name: 'Graphic Design',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime dolores aperiam dolorem reprehenderit, architecto magni labore deserunt. Quae, eos ipsa!',
    url: 'https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg',
    trainer: {
      avatar: '',
      name: '',
    },
  },
];

const Courses = (props: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  return (
    <section id="courses" className={styles.courses}>
      <h2 className={styles.courses__title}>Browse our popular courses</h2>
      <div className={styles.carousal}>
        <div ref={scrollerRef} className={styles.carousal__scroller}>
          {courses.map((course) => (
            <Link key={course.id} href="/" className={styles.carousal__items}>
              <div className={styles.card}>
                <figure className={styles.card__figure}>
                  <img src={course.url} alt={course.name} />
                </figure>
                <div className={styles.card__content}>
                  <h3 className={styles.card__title}>{course.name}</h3>
                  <p className={styles.card__desc}>{course.description}</p>
                  <div className={styles.card__actions}>
                    <div className="avatar placeholder w-16">
                      <div>
                        <img
                          src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
                          alt="Kathie Corl"
                        />
                      </div>
                      <div>Yagnesh Modh</div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.carousal__controls}>
          <button
            type="button"
            className="btn btn--primary btn--round w-12"
            onClick={() => {
              const scrollPort = scrollerRef.current;
              if (scrollPort) {
                const element =
                  scrollPort.firstElementChild as HTMLAnchorElement;

                const paddingLeft = parseInt(
                  getComputedStyle(element)['padding-left'],
                );

                console.log(element.clientWidth);

                console.log(paddingLeft);

                // const delta = Math.abs(
                //   scrollPort.offsetLeft - element.offsetLeft,
                // );

                // console.log(delta);

                // const scrollerPadding = parseInt(
                //   getComputedStyle(scrollPort)['padding-left'],
                // );

                // const pos =
                //   scrollPort.clientWidth / 2 > delta
                //     ? delta - scrollerPadding
                //     : delta + scrollerPadding;

                // console.log(pos);

                scrollPort.scrollTo({
                  left: element.clientWidth / 2,
                  behavior: 'smooth',
                });
              }
            }}
          >{`<`}</button>
          <button
            type="button"
            className="btn btn--primary btn--round w-12"
            onClick={() => {}}
          >{`>`}</button>
        </div>
      </div>
      <Link href="/" className="btn btn--primary">
        Explore All Courses
      </Link>
    </section>
  );
};

export default Courses;
