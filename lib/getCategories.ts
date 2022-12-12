import {
  CategoryEntityResponseCollection,
  HomeCategoryEntityResponse,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type CategoriesType = {
  data: {
    categories: CategoryEntityResponseCollection;
    homeCategory: HomeCategoryEntityResponse;
  };
};

export const getCategoriesData = async () => {
  try {
    return await axiosInstance.post<CategoriesType>('/graphql', {
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
    });
  } catch (error) {}
};
