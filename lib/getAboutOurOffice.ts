import { AboutNumberEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutOurOfficeType = {
  data: {
    aboutNumber: AboutNumberEntityResponse;
  };
};

export const getAboutOurOffice = async (pageName: string) => {
  console.log(pageName);

  try {
    return await axiosInstance.post<AboutOurOfficeType>('/graphql', {
      query: `{
        aboutNumber{
          data{
            id
            attributes{
              numbers{
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
