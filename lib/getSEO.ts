import { BannerEntityResponse } from 'types/types';

export type SEOType = (slug: string) => Promise<{
  data: {
    banner: BannerEntityResponse;
  };
}>;

export const getSEOData: SEOType = async (slug: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
      method: 'POST',
      body: JSON.stringify({
        query: `{
            banner(slug: "${slug}") {
              data {
                id
                attributes {
                  seo {
                    metaTitle
                    metaDescription
                    metaImage {
                      data {
                        attributes {
                          url
                          alternativeText
                        }
                      }
                    }
                    metaSocial {
                      socialNetwork
                      title
                      description
                      image {
                        data {
                          attributes {
                            url
                            alternativeText
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
          }`,
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
