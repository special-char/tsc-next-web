import '@/styles/category.css';
import SeparatorArray from '@/ui/SeparatorArray';
import { getCategoriesData } from '@/lib/getCategories';
import { HomeCategory } from 'types/types';
import CategoryCard, { CategoryCardSkeleton } from '@/ui/CategoryCard';
import Carousal from '@/ui/Carousal';

export const CategorySkeleton = () => {
  return (
    <section id="category" className="category relative animate-pulse">
      <h2 className="category__title font-cursive">
        Browse our courses by category
      </h2>
      <div className="category__content">
        <Carousal>
          {[1, 2, 3].map((category) => {
            return <CategoryCardSkeleton key={category} />;
          })}
        </Carousal>
      </div>
    </section>
  );
};

const Category = async () => {
  const categoriesData = await getCategoriesData();

  if (!categoriesData) {
    throw new Error(
      'something went wrong! try refreshing the page or please come back later.',
    );
  }

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
