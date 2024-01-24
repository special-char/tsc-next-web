import { ContactDetailEntityResponse } from 'types/types';
import axiosInstance from './axiosInstance';

export type ContactDetailType = () => Promise<{
  data: {
    contactDetail: ContactDetailEntityResponse;
  };
}>;

export const getContactDetail: ContactDetailType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          contactDetail {
            data {
              id
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
                  id
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
        }`,
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
