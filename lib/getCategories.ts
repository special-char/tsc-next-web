import { CategoryEntityResponseCollection } from 'types/types';
import axiosInstance from './axiosInstance';

export type CategoriesType = {
  data: {
    categories: CategoryEntityResponseCollection;
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
       }`,
    });
  } catch (error) {}
};
