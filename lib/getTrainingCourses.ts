import { CourseEntityResponseCollection } from 'types/types';

export type CoursesType = () => Promise<{
  data: {
    courses: CourseEntityResponseCollection;
  };
}>;

export const getTrainingCourses: CoursesType = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
          courses {
            data {
              attributes {
                title
                brochure {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                curriculam {
                  title
                  content
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

  if (!res.ok) {
    throw new Error('Failed to fetch Training Courses');
  }

  return await res.json();
};
