import { EventEntityResponseCollection } from 'types/types';

export type EventDetailsType = () => Promise<{
  data: {
    events: EventEntityResponseCollection;
  };
}>;

export const getEvents: EventDetailsType = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
            events {
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
                  eventStartDate
                  eventEndDate
                  title
                  description
                  slug
                }
              }
            }
          }
          `,
      }),
      cache: 'no-cache',
      next: {
        revalidate: 0,
      },
    });
    return await response.json();
  } catch (error) {}
};
