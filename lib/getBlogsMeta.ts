import { BlogEntityResponseCollection } from 'types/types';

export type BlogDetailsType = (slug?: string) => Promise<{
  data: {
    individualBlog: BlogEntityResponseCollection;
  };
}>;

export const getBlogsMeta: BlogDetailsType = async (slug?: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `{
            individualBlog: blogs(filters: { slug: { eq: "${slug}" } }) {
                data{
                  id
                  attributes{
                    seo{
                      id
                      metaTitle
                      metaDescription
                      metaImage{
                        data{
                          attributes{
                            url
                          }
                        }
                      }
                      metaSocial{
                        socialNetwork
                        title
                        description
                        image{
                          data{
                            attributes{
                              url
                            }
                          }
                        }
                        
                      }
                      keywords
                      metaRobots
                      structuredData
                      metaViewport
                      canonicalURL
                    }
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
