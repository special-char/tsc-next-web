import {
  HomeTestimonialEntityResponse,
  TestimonialEntityResponseCollection,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type TestimonialType = {
  data: {
    testimonials: TestimonialEntityResponseCollection;
    homeTestimonial: HomeTestimonialEntityResponse;
  };
};

export const getTestimonialData = async () => {
  try {
    return await axiosInstance.post<TestimonialType>('/graphql', {
      query: `{
        testimonials(filters: { tag: null }) {
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
        homeTestimonial {
          data {
            attributes {
              title
              description
              btn {
                text
                url
              }
              numbers {
                id
                title
                description
              }
            }
          }
        }
      }
      `,
    });
  } catch (error) {}
};
