import { AboutDetailEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutDetailType = () => Promise<{
  data: {
    aboutDetail: AboutDetailEntityResponse;
  };
}>;

export const getAboutDetailData: AboutDetailType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
          aboutDetail {
            data {
              attributes {
                detail {
                  id
                  title
                  description
                  image {
                    data {
                      attributes {
                        url
                        alternativeText
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
      revalidate: 0,
    },
  });

  return await res.json();
};
