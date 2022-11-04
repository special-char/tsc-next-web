import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';

type Props = {};

const Blogs = (props: Props) => {
  return (
    <>
      <section className={styles.blogs}>
        <h2 className={styles.blogs__title}>Resources & News</h2>
        <Link
          href="/blogs"
          className={`${styles.blogs__btn} btn btn--secondary`}
        >
          Browse Blog
        </Link>
        <div className={styles.card}>
          <div className={styles.card__figure}>
            <Image
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f23fe55a94aa127fb47b2_image-6-blog-education-x-template.jpg"
              alt="title"
              fill
            />
          </div>
        </div>
        <div className={styles.card}>
          <figure></figure>
        </div>
        <div className={styles.card}>
          <figure></figure>
        </div>
        <div className={styles.card}>
          <figure></figure>
        </div>
      </section>
    </>
  );
};

export default Blogs;
