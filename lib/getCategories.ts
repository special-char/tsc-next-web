import {
  CategoryEntityResponseCollection,
  HomeCategoryEntityResponse,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type CategoriesType = () => Promise<{
  data: {
    categories: CategoryEntityResponseCollection;
    homeCategory: HomeCategoryEntityResponse;
  };
}>;

export const getCategoriesData: CategoriesType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
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
          homeCategory {
            data {
              attributes {
                title
                button {
                  text
                  url
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
      cache: 'no-cache',
      next: {
        revalidate: 0,
      },
    });

    return await res.json();
  } catch (error) {}
};
