import { AboutHistoryEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutHistoryType = () => Promise<{
  data: {
    aboutHistory: AboutHistoryEntityResponse;
  };
}>;

export const getAboutHistory: AboutHistoryType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
          aboutHistory{
            data{
              id
              attributes{
                title
                description
                button{
                  id
                  text
                  url
                }
                history{
                  id
                  title
                  number
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

  return await res.json();
};
