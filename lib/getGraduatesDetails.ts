import { TeamEntityResponseCollection } from 'types/types';

export type HireOurGraduatesType = (slug: string) => Promise<{
  data: {
    teams: TeamEntityResponseCollection;
  };
}>;

export const getGraduatesDetails: HireOurGraduatesType = async (
  slug: string,
) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
          teams(filters: { slug: { eq: "${slug}" } }) {
            data {
              attributes {
                firstName
                lastName
                slug
                about
                certification{
                  id
                  name
                  issuingOrganization
                  issueDate
                  expireDate
                  credentialID
                  credentialURL
                  neverExpire
                }
                projects{
                  id
                  projectName
                  role
                  description
                  categories{
                    data{
                      id
                      attributes{
                        title
                        description
                      }
                    }
                  }
                  technologies{
                    data{
                      id
                      attributes{
                        name
                        icon{
                          data{
                            id
                            attributes{
                              url
                              alternativeText
                            }
                          }
                        }
                      }
                    }
                  }
                  
                }
                education{
                  id
                  school
                  logo{
                    data{
                      id
                      attributes{
                        alternativeText
                        url
                      }
                    }
                  }
                  degree
                  fieldOfStudy
                  startDate
                  endDate
                  grade
                  extraActivity
                }
                technology{
                  proficiency
                    technology{
                      data{
                        attributes{
                          name
                          link
                          icon{
                            data{
                              attributes{
                                url
                                alternativeText
                              }
                            }
                          }                        
                        }
                      }
                    }
                  }

                avatar {
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
