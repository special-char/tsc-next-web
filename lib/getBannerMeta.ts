import { BannerEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type BannerType = () => Promise<{
  data: {
    banner: BannerEntityResponse;
  };
}>;

export const getBannerMeta: BannerType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
            banner{
                data{
                  id
                  attributes{
                    SEO{
                      id
                      title
                      description
                      keywords
                      images{
                        data{
                          attributes{
                            url
                          }
                        }
                      }
                      noIndex
                      noFollow
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
