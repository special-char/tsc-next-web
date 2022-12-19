import { CourseEntityResponseCollection } from 'types/types';
import axiosInstance from './axiosInstance';

export type CoursesType = {
  data: {
    courses: CourseEntityResponseCollection;
  };
};

export const getAllCoursesData = async () => {
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
        }
        `,
    });
  } catch (error) {}
};
