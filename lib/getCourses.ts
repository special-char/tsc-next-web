import {
  CourseEntityResponseCollection,
  HomeCourseEntityResponse,
} from 'types/types';
import axiosInstance from './axiosInstance';

export type CoursesType = {
  data: {
    courses: CourseEntityResponseCollection;
    homeCourse: HomeCourseEntityResponse;
  };
};

export const getCoursesData = async () => {
  try {
    return await axiosInstance.post<CoursesType>('/graphql', {
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
    });
  } catch (error) {}
};
