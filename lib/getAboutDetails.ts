import { AboutDetailEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutDetailType = {
  data: {
    aboutDetail: AboutDetailEntityResponse;
  };
};

export const getAboutDetailData = async () => {
  try {
    return await axiosInstance.post<AboutDetailType>('/graphql', {
      query: `{
        aboutDetail {
          data {
            attributes {
              detail {
                id
                title
                description
                image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
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
