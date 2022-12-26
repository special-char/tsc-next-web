import '@/styles/category.css';
import SeparatorArray from '@/ui/SeparatorArray';
import { getCategoriesData } from '@/lib/getCategories';
import { HomeCategory } from 'types/types';
import CategoryCard from '@/ui/CategoryCard';
import Carousal from '@/ui/Carousal';

export const CategorySkeleton = () => {
  return (
    <section id="category" className="category relative animate-pulse">
      <h2 className="category__title font-cursive">
        Browse our courses by category
      </h2>
      <div className="category__content">
        {[1, 2, 3].map((category) => {
          //   const { title, description, icon } = category.attributes as Category;
          //   const { url, alternativeText } = icon?.data?.attributes as UploadFile;
          return (
            <div key={category} className="card">
              <figure className="card__image aspect-h-image">
                <div></div>
              </figure>
              <div className="card__body">
                <h3 className="card__title font-cursive">Design</h3>
                <p className="card__desc font-cursive">
                  Lorem ipsum dolor sit amet, dolor sit consectetur adipiscing
                  elit.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <SeparatorArray />
    </section>
  );
};

const Category = async () => {
  const categoriesData = await getCategoriesData();

  if (!categoriesData) return null;

  const categoriesInfo = categoriesData.data.categories.data;

  const { title } = categoriesData.data.homeCategory.data
    ?.attributes as HomeCategory;

  return (
    <section id="category" className="category">
      <h2 className="category__title">{title}</h2>
      <div className="category__content">
        <Carousal>
          {categoriesInfo.map((category) => {
            return <CategoryCard category={category} key={category.id} />;
          })}
        </Carousal>
      </div>
      <div className=" relative -bottom-[74px] flex  md:-bottom-[100px]">
        <SeparatorArray />
      </div>
    </section>
  );
};

export default Category;
