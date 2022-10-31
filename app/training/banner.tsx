import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {};

const Banner = (props: Props) => {
  return (
    <section id="banner" className={styles.banner}>
      <div className={styles.banner__details}>
        <h1 className={styles.banner__title}>
          Grow your skills, define your future
        </h1>
        <p className={styles.banner__description}>
          Presenting Academy, the tech school of the future. We teach you the
          right skills to be prepared for tomorrow.
        </p>
        <div className={styles.banner__actions}>
          <Link href="/" className="btn btn--primary">
            Explore Courses
          </Link>
          <Link href="/" className="btn btn--secondary">
            Learn More
          </Link>
        </div>
      </div>
      <div className={styles.banner__image}>
        <Image
          src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e15d7c0c9f4037bde6f44_image-home-hero-education-x-template.jpg"
          alt="logo"
          fill
        />
      </div>
    </section>
  );
};

export default Banner;
