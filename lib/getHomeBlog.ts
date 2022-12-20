import {
  BlogEntityResponseCollection,
  HomeBlogEntityResponse,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type HomeBlogType = () => Promise<{
  data: {
    homeBlog: HomeBlogEntityResponse;
    blogs: BlogEntityResponseCollection;
  };
}>;

export const getHomeBlogData: HomeBlogType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          homeBlog {
            data {
              attributes {
                title
                button {
                  text
                  url
                }
              }
            }
          }
          blogs(pagination: { pageSize: 4 }) {
            data {
              id
              attributes {
                title
                updatedAt
                category {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                bannerImage {
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
