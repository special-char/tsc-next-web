import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
type Props = {};

const Aboutheader = (props: Props) => {
  return (
    <section className={styles.about}>
      <div className="con">
        <h1 className="text-7xl">The big mission behind Educationic</h1>
        <div className={styles.education__header}>
          <Link href="/" className="btn btn--primary">
            JOIN OUR TEAM
          </Link>
        </div>
      </div>
      <div className="right">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
          pulvinar ac molestie cursus malesuada enim. Massa nec tellus, elit
          tellus, erat faucibus aenean. Nunc, lacus, dignissim nec sit.
        </p>
      </div>
    </section>
  );
};

export default Aboutheader;
