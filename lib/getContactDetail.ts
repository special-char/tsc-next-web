import { ContactDetailEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type ContactDetailType = {
  data: {
    contactDetail: ContactDetailEntityResponse;
  };
};

export const getContactDetail = async () => {
  try {
    return await axiosInstance.post<ContactDetailType>('/graphql', {
      query: `{
        contactDetail {
          data {
            attributes {
              title
              description
              map {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
              email
              phoneNumber
              addresses {
                line1
                line2
                city
                state
                country
                pincode
                icon {
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
      `,
    });
  } catch (error) {}
};
