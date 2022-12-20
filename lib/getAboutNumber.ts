import {
  AboutNumberEntityResponse,
  HomeGrowCareerEntityResponse,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutNumberType = () => Promise<{
  data: {
    aboutNumber: AboutNumberEntityResponse;
  };
}>;

export const getAboutNumberData: AboutNumberType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          aboutNumber {
            data {
              attributes {
                title
                numbers {
                  id
                  title
                  number
                  description
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
        revalidate: 0,
      },
    });

    return await res.json();
  } catch (error) {}
};
