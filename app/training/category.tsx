import '@/styles/category.css';
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
    <section id="category" className="category">
      <h2 className="category__title">Browse our courses by category</h2>
      <div className="category__content">
        {CategoryData.map((category) => {
          return (
            <div className="category__item">
              <div className="category__card">
                <figure className="category__card__figure relative">
                  {category.svg}
                  <div className=" chip chip--primary absolute top-20 right-3  md:top-6 lg:right-6">
                    $199.00 USD
                  </div>
                  <div className="chip chip--secondary absolute top-6 right-3 md:right-40 lg:right-44">
                    7hr56m
                  </div>
                </figure>
                <div className="category__card__content">
                  <h3 className="category__card__title">{category.title}</h3>
                  <p className="category__card__desc">{category.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute -bottom-20 z-10 w-14 lg:mt-10">
        <YellowSvg />
      </div>
    </section>
  );
};

export default Category;
