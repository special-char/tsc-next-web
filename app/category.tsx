import '@/styles/category.css';
import SeparatorArray from '@/ui/SeparatorArray';
import DesignSvg from '@/public/icons/design_course.svg';
import DevelopmentSvg from '@/public/icons/development.svg';
import MarketingSvg from '@/public/icons/marketing.svg';
import { use } from 'react';
import Image from 'next/image';

type Props = {};

async function getCategoriesData() {
  try {
    const res = await fetch('http://65.20.70.84:1337/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          categories {
           data {
              id
             attributes {
               title
               description
               icon {
                 data {
                   attributes {
                     url
                   }
                 }
               }
             }
           }
         } 
         }`,
      }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
    return await res.json();
  } catch (error) { }
}

const Category = (props: Props) => {
  const categoriesData = use(getCategoriesData());

  if (!categoriesData) return null;

  const categoriesInfo = categoriesData?.data?.categories?.data;

  return (
    <section id="category" className="category relative ">
      <h2 className="category__title">Browse our courses by category</h2>
      <div className="category__content">
        {categoriesInfo.map((category: any) => {
          return (
            <div key={category.id} className="card">
              <figure className="card__image aspect-h-image">
                <Image
                  src={category.attributes.icon.data.attributes.url}
                  alt={category.attributes.icon.data.attributes.alternativeText}
                  fill
                />
                {category.svg}
              </figure>
              <div className="card__body">
                <h3 className="card__title">{category.attributes.title}</h3>
                <p className="card__desc">{category.attributes.description}</p>
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
