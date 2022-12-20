import { PerkEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type PerksType = () => Promise<{
  data: {
    perk: PerkEntityResponse;
  };
}>;

export const getPerksData: PerksType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          perk {
            data {
              attributes {
               title
                 benifits {
                  id
                  title
                  description
                  image {
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
