import { HomeBannerEntityResponseCollection } from 'types/types';
import { format } from 'date-fns';

export type HomeBannerType = () => Promise<{
  data: {
    homeBanners: HomeBannerEntityResponseCollection;
  };
}>;

export const getHomeBannerData: HomeBannerType = async () => {
  const date = format(new Date(), 'yyyy-MM-dd');
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
        homeBanners(
          filters: {
            isActive: { eq: true }
            or: [
              { isStatic: { eq: true } }
              {
                and: [
                  { fromDate: { lte: "${date}" } }
                  { toDate: { gte: "${date}" } }
                ]
              }
            ]
          }
        ) {
          data {
            attributes {
              title
              description
              media {
                data {
                  id
                  attributes {
                    url
                    alternativeText
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
};
