import { BannerHeaderEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type BannerHeaderType = {
  data: {
    bannerHeader: BannerHeaderEntityResponse;
  };
};

export const getBannerHeaderData = async (pageName: string) => {
  console.log(pageName);

  try {
    return await axiosInstance.post<BannerHeaderType>('/graphql', {
      query: `{
        bannerHeader {
          data {
            attributes {
              bannerHeader(filters: {
                slug: {
                  eq: "${pageName}"
                }
              }) {
                title
                slug
                description
                button {
                  text
                  url
                }
              }
            }
          }
        }
      }`,
    });
  } catch (error) {}
};
