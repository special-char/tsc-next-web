import { BannerEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type BannerHeaderType = (pageName: string) => Promise<{
  data: {
    banner: BannerEntityResponse;
  };
}>;

export const getPageHeaderMeta: BannerHeaderType = async (pageName: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
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
                }) 
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
        // revalidate: 0,
      },
    });

    return await res.json();
  } catch (error) {}
};
