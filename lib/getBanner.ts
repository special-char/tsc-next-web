import { BannerEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type BannerType = {
  data: {
    banner: BannerEntityResponse;
  };
};

export const getBannerData = async () => {
  try {
    return await axiosInstance.post<BannerType>('/graphql', {
      query: `{
          banner {
            data {
              attributes {
                title
                description
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                buttons {
                  id
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
