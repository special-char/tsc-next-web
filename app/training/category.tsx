import styles from './styles.module.css';
import DesignSvg from '../../public/icons/design_course.svg';
import DevelopmentSvg from '../../public/icons/development.svg';
import MarketingSvg from '../../public/icons/marketing.svg';
import YellowSvg from '../../public/icons/yellow.svg';

type Props = {};
const CategoryData = [
  {
    svg: <DesignSvg />,
    title: 'Design',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  },
  {
    svg: <DevelopmentSvg />,
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
    <section id="category" className={`${styles.category} relative px-3 pt-24`}>
      <h2 className={styles.category__title}>Browse our courses by category</h2>
      <div className={`${styles.category__content} mt-7 mb-20`}>
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
      <div className="absolute -bottom-28 z-10 w-14 lg:mt-10">
        <YellowSvg />
      </div>
    </section>
  );
};

export default Category;
