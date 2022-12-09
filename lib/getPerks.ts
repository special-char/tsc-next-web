import { PerkEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type PerksType = {
  data: {
    perk: PerkEntityResponse;
  };
};

export const getPerksData = async () => {
  try {
    return await axiosInstance.post<PerksType>('/graphql', {
      query: `{
            perk {
              data {
                attributes {
                 title
                   benifits {
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
                }
              }
            }
          }`,
    });
  } catch (error) {}
};
