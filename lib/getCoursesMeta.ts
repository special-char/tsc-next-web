import { CourseEntityResponseCollection } from 'types/types';

export type CoursesType = (slug?: string) => Promise<{
  data: {
    courses: CourseEntityResponseCollection;
  };
}>;

export const getCoursesMeta: CoursesType = async (slug?: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
            courses(filters: { slug: { eq: "${slug}" } }) {
             data{
               id
               attributes{
                    seo{
                        id
                        metaTitle
                        metaDescription
                        metaImage{
                          data{
                            attributes{
                              url
                              alternativeText
                            }
                          }
                        }
                        metaSocial{
                          id
                          title
                          description
                          socialNetwork
                          image{
                            data{
                              attributes{
                                url
                                alternativeText
                              }
                            }
                          }
                        }
                        keywords
                        metaRobots
                        structuredData
                        metaViewport
                        canonicalURL
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
        // revalidate: 0,
      },
    });

    return await res.json();
  } catch (error) {}
};
