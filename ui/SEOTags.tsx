import { ComponentSharedSeo } from 'types/types';

export function SEOTags({
  metaTitle,
  metaDescription,
  metaImage,
  metaSocial,
  keywords,
  metaRobots,
  structuredData,
  canonicalURL,
  path,
}: ComponentSharedSeo & { path: string }) {
  return (
    <>
      {metaTitle && <title>{`${metaTitle} | The Special Character`}</title>}

      {metaDescription && <meta name="description" content={metaDescription} />}

      {keywords && <meta name="keywords" content={keywords} />}

      {metaSocial?.map((x) => {
        switch (x?.socialNetwork) {
          case 'Facebook':
            return (
              <>
                {x.title && (
                  <meta
                    property="og:title"
                    content={`${x.title} | The Special Character`}
                    key="facebook title"
                  />
                )}
                {x.description && (
                  <meta property="og:description" content={x.description} />
                )}
                <meta
                  property="og:url"
                  content={`https://thespecialcharacter.com/${path}`}
                />
                {x.image && (
                  <meta
                    property="og:image"
                    content={x?.image?.data?.attributes?.url}
                  />
                )}
              </>
            );

          case 'Twitter':
            return (
              <>
                {x.title && (
                  <meta
                    property="twitter:title"
                    content={`${x.title} | The Special Character`}
                    key="twitter title"
                  />
                )}
                {x.description && (
                  <meta
                    property="twitter:description"
                    content={x.description}
                  />
                )}
                <meta property="twitter:card" content="summary_large_image" />
                {x.image && (
                  <meta
                    property="twitter:image"
                    content={x?.image?.data?.attributes?.url}
                  />
                )}
              </>
            );

          default:
            return null;
        }
      })}

      {canonicalURL && <link rel="canonical" href={canonicalURL} />}

      {metaRobots && <meta name="robots" content={metaRobots} />}
    </>
  );
}
