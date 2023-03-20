import { useRouter } from 'next/router';

export function SEOTags({
  metaTitle,
  metaDescription,
  metaImage,
  metaSocial,
  keywords,
  metaRobots,
  structuredData,
  canonicalURL,
}) {
  const { asPath } = useRouter();
  const cleanPath = asPath.split('#')[0].split('?')[0];

  return (
    <>
      {metaTitle && <title>{metaTitle} | The Special Character</title>}

      {metaDescription && <meta name="description" content={metaDescription} />}

      <meta name="keywords" content={keywords} />

      {metaSocial.map((x) => {
        switch (x.socialNetwork) {
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
                  content={`https://thespecialcharacter.com/${cleanPath}`}
                />
                {x.image && (
                  <meta
                    property="og:image"
                    content={x.image.data.attributes.url}
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
                    content={x.image.data.attributes.url}
                  />
                )}
              </>
            );

          default:
            return null;
        }
      })}

      {keywords && <meta name="keywords" content={keywords} />}

      {canonicalURL && <link rel="canonical" href={canonicalURL} />}

      {metaRobots && <meta name="robots" content={metaRobots} />}

      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  );
}