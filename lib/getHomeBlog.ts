import {
  BlogEntityResponseCollection,
  HomeBlogEntityResponse,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type HomeBlogType = {
  data: {
    homeBlog: HomeBlogEntityResponse;
    blogs: BlogEntityResponseCollection;
  };
};

export const getHomeBlogData = async () => {
  try {
    return await axiosInstance.post<HomeBlogType>('/graphql', {
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
    });
  } catch (error) {}
};
