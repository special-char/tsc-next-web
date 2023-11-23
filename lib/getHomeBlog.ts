import {
  BlogEntityResponseCollection,
  BlogFiltersInput,
  HomeBlogEntityResponse,
  PaginationArg,
} from 'types/types';

export type HomeBlogType = (variables: {
  filters?: BlogFiltersInput;
  pagination?: PaginationArg;
}) => Promise<{
  data: {
    homeBlog: HomeBlogEntityResponse;
    blogs: BlogEntityResponseCollection;
  };
}>;

export const getHomeBlogData: HomeBlogType = async (
  variables = {
    filters: {},
    pagination: {},
  },
) => {
  const query = `query($filters: BlogFiltersInput, $pagination:PaginationArg) {
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
    blogs(filters: $filters, pagination: $pagination, sort: ["publishedAt:desc"], publicationState: LIVE) {
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
  }`;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query,
      variables
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