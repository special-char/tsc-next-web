import { CourseEntityResponseCollection } from 'types/types';
import axiosInstance from './axiosInstance';

export type CoursesType = () => Promise<{
  data: {
    courses: CourseEntityResponseCollection;
  };
}>;

export const getAllCoursesData: CoursesType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          courses(sort: "index") {
            data {
              attributes {
                index
                title
                description
                courseVideoPoster {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                brochure {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                price {
                  price
                  currency
                  format
                  unit
                }
                duration
                slug
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
