import { BannerEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type BannerType = (id: number) => Promise<{
  data: {
    banner: BannerEntityResponse;
  };
}>;

export const getBannerData: BannerType = async (id: number) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
            banner(id: ${id}) {
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

  if (!res.ok) {
    throw new Error('Failed to fetch Banner Data');
  }

  return await res.json();
};
