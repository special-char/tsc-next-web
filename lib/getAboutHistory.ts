import { AboutHistoryEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutHistoryType = {
  data: {
    aboutHistory: AboutHistoryEntityResponse;
  };
};

export const getAboutHistory = async () => {
  try {
    return await axiosInstance.post<AboutHistoryType>('/graphql', {
      query: `{
        aboutHistory{
          data{
            id
            attributes{
              title
              description
              button{
                id
                text
                url
              }
              history{
                id
                title
                number
                description
              }
            }
          }
        }
      }`,
    });
  } catch (error) {}
};
