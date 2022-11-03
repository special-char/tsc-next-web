import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  return (
    <section id="footer" className={styles.footer}>
      <div className={styles.footer__details}>
        <h2 className={styles.footer__title}>
          Educationic X Webflow Template - Logo
        </h2>
        <p className={styles.footer__details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt aliqua.
        </p>
      </div>
    </section>
  );
};

export default Footer;
