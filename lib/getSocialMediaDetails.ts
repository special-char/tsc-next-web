import { ContactDetailEntityResponse } from 'types/types';

export type SocialMediaType = () => Promise<{
  data: {
    contactDetail: ContactDetailEntityResponse;
  };
}>;

export const getSocialMediaLinks: SocialMediaType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
            contactDetail {
              data {
                attributes {
                  socialMedia {
                    id
                    text
                    url
                    icon {
                      data {
                        attributes {
                          url
                        }
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
