import { BannerEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type BannerType = () => Promise<{
  data: {
    banner: BannerEntityResponse;
  };
}>;

export const getBannerData: BannerType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
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
