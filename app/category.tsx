import '@/styles/category.css';
import SeparatorArray from '@/ui/SeparatorArray';
import Image from 'next/image';
import { getCategoriesData } from '@/lib/getCategories';
import { Category, UploadFile } from 'types/types';

const Category = async () => {
  const categoriesData = await getCategoriesData();

  if (!categoriesData) return null;

  const categoriesInfo = categoriesData.data.data.categories.data;

  return (
    <section id="category" className="category relative ">
      <h2 className="category__title">Browse our courses by category</h2>
      <div className="category__content">
        {categoriesInfo.map((category) => {
          const { title, description, icon } = category.attributes as Category;
          const { url, alternativeText } = icon?.data?.attributes as UploadFile;
          return (
            <div key={category.id} className="card">
              <figure className="card__image aspect-h-image">
                <Image src={url} alt={`${alternativeText}`} fill />
              </figure>
              <div className="card__body">
                <h3 className="card__title">{title}</h3>
                <p className="card__desc">{description}</p>
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
