import { BannerEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type BannerType = (slug: string) => Promise<{
  data: {
    banner: BannerEntityResponse;
  };
}>;

export const getBannerData: BannerType = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
            banner(slug: "${slug}") {
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
                  seo {
                    structuredData
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
      // revalidate: 0,
    },
  });

  return await res.json();
};
