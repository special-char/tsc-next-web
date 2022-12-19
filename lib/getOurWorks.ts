import { AboutWorkValueEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutWorkValueType = {
  data: {
    aboutWorkValue: AboutWorkValueEntityResponse;
  };
};

export const getOurWorksData = async () => {
  try {
    return await axiosInstance.post<AboutWorkValueType>('/graphql', {
      query: `{
        aboutWorkValue{
          data{
            id
            attributes{
              title
              description
              values{
                id
                title          
                description
                image{
                  data{
                    id
                    attributes{
                      alternativeText
                      url
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
