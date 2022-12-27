import {
  CourseEntityResponseCollection,
  HomeCourseEntityResponse,
} from 'types/types';

export type CoursesType = () => Promise<{
  data: {
    courses: CourseEntityResponseCollection;
    homeCourse: HomeCourseEntityResponse;
  };
}>;

export const getCoursesData: CoursesType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          courses {
            data {
              attributes {
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
          homeCourse {
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
