import { CourseEntityResponseCollection } from 'types/types';

export type CoursesType = (slug?: string) => Promise<{
  data: {
    courses: CourseEntityResponseCollection;
  };
}>;

export const getCourseDetails: CoursesType = async (slug?: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          courses(filters: { slug: { eq: "${slug}" } }) {
            data {
              attributes {
                category {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                title
                description
                courseVideo {
                  data{
                    attributes{
                      url
                      alternativeText
                    }
                  }
                }
                courseVideoPoster {
                  data {
                    attributes {
                      alternativeText
                      url
                    }
                  }
                }
                brochure{
                  data{
                    attributes{
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
                courseFeatures{
                  id
                  key
                  value
                  icons{
                    data{
                      attributes{
                        url
                      }
                    }
                  }
                }
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

export const getCoursesSiteMap: CoursesType = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
          courses {
            data {
              attributes {
                slug
              }
            }
          }
        }`,
      }),
      cache: 'no-cache',
      next: {
        revalidate: 0,
      },
    });
    return await response.json();
  } catch (error) {}
};
