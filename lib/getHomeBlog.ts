import {
  BlogEntityResponseCollection,
  HomeBlogEntityResponse,
} from 'types/types';

export type HomeBlogType = () => Promise<{
  data: {
    homeBlog: HomeBlogEntityResponse;
    blogs: BlogEntityResponseCollection;
  };
}>;

export const getHomeBlogData: HomeBlogType = async () => {
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
          blogs(pagination: { limit: 4 }) {
            data {
              id
              attributes {
                category{
                  data{
                    attributes{
                      title
                    }
                  }
                }
                slug
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

  if (!res.ok) {
    throw new Error('Failed to fetch Home Blog Data');
  }

  return await res.json();
};
