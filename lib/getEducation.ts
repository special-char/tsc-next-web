import { AboutTscEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type EducationType = {
  data: {
    aboutTsc: AboutTscEntityResponse;
  };
};

export const getEducationData = async () => {
  try {
    return await axiosInstance.post<EducationType>('/graphql', {
      query: `{
            aboutTsc {
              data {
                id
                attributes {
                  title
                  description
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                  details {
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
                  button {
                    text
                    url
                  }
                }
              }
            }
          }`,
    });
  } catch (error) {}
};
