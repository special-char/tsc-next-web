import { BannerHeaderEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type BannerHeaderType = (pageName: string) => Promise<{
  data: {
    bannerHeader: BannerHeaderEntityResponse;
  };
}>;

export const getBannerHeaderData: BannerHeaderType = async (
  pageName: string,
) => {
  try {
    const res = await fetch(`${process.env.API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
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
