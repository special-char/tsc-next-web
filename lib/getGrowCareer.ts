import { HomeGrowCareerEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type GrowCareerType = {
  data: {
    homeGrowCareer: HomeGrowCareerEntityResponse;
  };
};

export const getGrowCareerData = async () => {
  try {
    return await axiosInstance.post<GrowCareerType>('/graphql', {
      query: `{
            homeGrowCareer {
              data {
                attributes {
                  title
                  description
                  link {
                    text
                    url
                  }
                  details {
                    id
                    title
                     description
                  }
                }
              }
            }
          }`,
    });
  } catch (error) {}
};
