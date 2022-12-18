import {
  AboutNumberEntityResponse,
  HomeGrowCareerEntityResponse,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutNumberType = {
  data: {
    aboutNumber: AboutNumberEntityResponse;
  };
};

export const getAboutNumberData = async () => {
  try {
    return await axiosInstance.post<AboutNumberType>('/graphql', {
      query: `{
        aboutNumber {
          data {
            attributes {
              title
              numbers {
                id
                title
                number
                description
              }
            }
          }
        }
      }
      `,
    });
  } catch (error) {}
};
