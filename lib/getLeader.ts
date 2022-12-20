import { HomeLeaderEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type LeaderType = () => Promise<{
  data: {
    homeLeader: HomeLeaderEntityResponse;
  };
}>;

export const getLeaderData: LeaderType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          homeLeader {
            data {
              attributes {
                title
                description
                btns {
                  id
                  text
                  url
                }
                image {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                testimonial {
                  data {
                    attributes {
                      quote
                      name
                      company
                      designation
                      tag
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
