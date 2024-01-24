import { BannerHeaderEntityResponse } from 'types/types';

export type BannerHeaderType = (params: string) => Promise<{
  data: {
    bannerHeader: BannerHeaderEntityResponse;
  };
}>;

export const getPageMeta: BannerHeaderType = async (params) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
    bannerHeader {
      data {
        id
        attributes {
          bannerHeader(filters: { slug: { eq: "${params}" } }) {
            SEO {
              id
              title
              description
              keywords
              images {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  `,
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
