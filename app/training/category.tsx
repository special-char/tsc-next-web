import '@/styles/category.css';
import SeparatorArray from '@/ui/SeparatorArray';
import DesignSvg from '@/public/icons/design_course.svg';
import DevelopmentSvg from '@/public/icons/development.svg';
import MarketingSvg from '@/public/icons/marketing.svg';

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
    <section id="category" className="category relative ">
      <h2 className="category__title">Browse our courses by category</h2>
      <div className="category__content">
        {CategoryData.map((category) => {
          return (
            <div className="category__card">
              <figure className="category__card__figure">{category.svg}</figure>
              <div className="category__card__content">
                <h3 className="category__card__title">{category.title}</h3>
                <p className="category__card__desc">{category.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <SeparatorArray />
    </section>
  );
};

export default Category;
