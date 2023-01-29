import { TeamEntityResponseCollection } from 'types/types';

export type HireOurGraduatesType = () => Promise<{
  data: {
    teams: TeamEntityResponseCollection;
  };
}>;

export const getOurGraduatesData: HireOurGraduatesType = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          teams {
            data {
              id
              attributes {
                firstName
                lastName
                slug
                resume {
                  data {
                    attributes {
                      url
                      alternativeText
                    }
                  }
                }
                about
                avatar {
                  data {
                    attributes {
                      url
                    }
                  }
                }
                resume{
                  data{
                    attributes{
                      url
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
