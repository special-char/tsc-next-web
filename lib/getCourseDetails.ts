import {
  CourseEntityResponseCollection,
  HomeCourseEntityResponse,
} from 'types/types';

export type CoursesType = (slug: string) => Promise<{
  data: {
    courses: CourseEntityResponseCollection;
  };
}>;

export const getCourseDetails: CoursesType = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          courses(filters: { slug: { eq: "full-stack-development" } }) {
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
                aboutCourse
                curriculam {
                  id
                  title
                  content
                }
                complitionResult
                price {
                  price
                  currency
                  format
                  unit
                  description
                }
                level
                duration
                brochure {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                testimonials {
                  data {
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
              }
            }
          }
        }`,
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
