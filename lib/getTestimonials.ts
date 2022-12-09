import { TestimonialEntityResponseCollection } from 'types/types';
import axiosInstance from './axiosInstance';

export type TestimonialType = {
  data: {
    testimonials: TestimonialEntityResponseCollection;
  };
};

export const getTestimonialData = async () => {
  try {
    return await axiosInstance.post<TestimonialType>('/graphql', {
      query: `{
            testimonials(filters: {
              tag: null
            }) {
              data {
                id
                attributes {
                  quote
                  rating
                  name
                  company
                  designation
                  avatar {
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
