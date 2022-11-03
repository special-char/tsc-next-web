import styles from './styles.module.css';
import DesignSvg from '../../public/icons/design_course.svg';

import MarketingSvg from '../../public/icons/marketing.svg';

type Props = {};
const CategoryData = [
  {
    svg: <DesignSvg />,
    title: 'Design',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    svg: <DesignSvg />,
    title: 'Development',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    svg: <MarketingSvg />,
    title: 'Marketing',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
];
const Category = (props: Props) => {
  return (
    <section
      id="category"
      className={`${styles.category} overflow-hidden px-3`}
    >
      <h2 className={styles.category__title}>Browse our courses by category</h2>
      <div className={`${styles.category__content} mt-7`}>
        {CategoryData.map((category) => {
          return (
            <div className={`${styles.category__item}`}>
              <div className={styles.card}>
                <figure className={styles.card__figure}>{category.svg}</figure>
                <div className={styles.card__content}>
                  <h3 className={styles.card__title}>{category.title}</h3>
                  <p className={styles.card__desc}>{category.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Category;
