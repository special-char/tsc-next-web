import {
  HomeTestimonialEntityResponse,
  TestimonialEntityResponseCollection,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type TestimonialType = () => Promise<{
  data: {
    testimonials: TestimonialEntityResponseCollection;
    homeTestimonial: HomeTestimonialEntityResponse;
  };
}>;

export const getTestimonialData: TestimonialType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
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
