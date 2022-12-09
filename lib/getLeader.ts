import { HomeLeaderEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type LeaderType = {
  data: {
    homeLeader: HomeLeaderEntityResponse;
  };
};

export const getLeaderData = async () => {
  try {
    return await axiosInstance.post<LeaderType>('/graphql', {
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
    });
  } catch (error) {}
};
