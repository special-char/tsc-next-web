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
          courses {
            data {
              id
              attributes {
                title
                description
                courseVideoPoster {
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
