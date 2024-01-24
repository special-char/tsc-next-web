import { EventEntityResponseCollection } from 'types/types';

export type AllEventDetailsType = () => Promise<{
  data: {
    events: EventEntityResponseCollection;
  };
}>;

export const getAllEvents: AllEventDetailsType = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      query: `{
            events(sort: "updatedAt:DESC") {
              data {
                id
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
                  category {
                    data {
                      attributes {
                        title
                      }
                    }
                  }
                }
              }
            }
          }`,
    }),
    cache: 'no-cache',
    next: {
      // revalidate: 0,
    },
  });

  return await response.json();
};
