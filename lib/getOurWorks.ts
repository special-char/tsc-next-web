import { AboutWorkValueEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type AboutWorkValueType = () => Promise<{
  data: {
    aboutWorkValue: AboutWorkValueEntityResponse;
  };
}>;

export const getOurWorksData: AboutWorkValueType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          aboutWorkValue{
            data{
              id
              attributes{
                title
                description
                values{
                  id
                  title          
                  description
                  image{
                    data{
                      id
                      attributes{
                        alternativeText
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
