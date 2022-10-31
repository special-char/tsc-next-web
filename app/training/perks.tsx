import styles from './styles.module.css';

type Props = {};

const Perks = (props: Props) => {
  return (
    <section id="perks" className={styles.perks}>
      <h2>Why learn with our courses?</h2>
      <div className={styles.perks__content}>
        <div className={styles.perks__item}>
          <figure>
            <img src="" alt="" />
          </figure>
          <div>
            <h3>1. Learn</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio explicabo mollitia illum accusantium in odit!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
