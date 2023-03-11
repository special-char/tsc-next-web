import { HomeGrowCareerEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type GrowCareerType = () => Promise<{
  data: {
    homeGrowCareer: HomeGrowCareerEntityResponse;
  };
}>;

export const getGrowCareerData: GrowCareerType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
          homeGrowCareer {
            data {
              attributes {
                title
                description
                link {
                  text
                  url
                }
                details {
                  id
                  title
                   description
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
    throw new Error('Failed to fetch Grow Carreer Data');
  }

  return await res.json();
};
