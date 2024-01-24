import { EventEntityResponse } from 'types/types';

export type EventDetailsType = (slug: string) => Promise<{
  data: {
    event: EventEntityResponse;
  };
}>;

export const getEvents: EventDetailsType = async (slug: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
          event(slug: "${slug}") {
            data {
              attributes {
                image {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                content
                eventStartDate
                eventEndDate
                title
                description
                slug
                category {
                  data {
                    attributes {
                      title
                    }
                  }
                }
                location {
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
                      }
                    }
                  }
                  latitude
                  longitude
                }
              }
            }
          }
        }        
        `,
    }),
    cache: 'no-cache',
    next: {
      // revalidate: 0,
    },
  });
  return await response.json();
};
