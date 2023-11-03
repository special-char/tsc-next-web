import { getEvents } from '@/lib/getEvents';
import '@/styles/allevents.css';
import EventDetailPage, { EventDetailPageSkeleton } from '@/ui/EventDetailPage';
import Image from 'next/image';
import { use } from 'react';
import md from 'markdown-it';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Register from '@/ui/Register';
import { ComponentSharedSeo, Event } from 'types/types';
import { Metadata } from 'next';

export type Props = {
  params: {
    slug: string;
  };
  children?: React.ReactNode;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {


  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
    method: 'POST',
    body: JSON.stringify({
      query: `{
          event(slug:"${params.slug}") {
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

  const metaData = await res.json();

  const seo = metaData?.data?.event.data?.attributes
    ?.seo as ComponentSharedSeo;

  const facebook = seo.metaSocial?.find((x) => x?.socialNetwork === 'Facebook');
  const twitter = seo.metaSocial?.find((x) => x?.socialNetwork === 'Twitter');

  let twitterMeta: Metadata = {};
  if (twitter) {
    twitterMeta = {
      twitter: {
        card: 'summary_large_image',
        title: twitter.title,
        description: twitter.description,
        siteId: '1467726470533754880',
        creator: '@nextjs',
        creatorId: '1467726470533754880',
        images: [twitter.image?.data?.attributes?.url || ''],
      },
    };
  }

  let facebookMeta: Metadata = {};
  if (facebook) {
    facebookMeta = {
      openGraph: {
        title: facebook.title,
        description: facebook.description,
        url: `https://thespecialcharacter.com`,
        siteName: 'The Special Character',
        images: [
          {
            url: facebook.image?.data?.attributes?.url || '',
            width: 800,
            height: 600,
          },
        ],
        locale: 'en-US',
        type: 'website',
      },
    };
  }

  const defaultSEO: Metadata = {
    description: seo.metaDescription,
    title: seo.metaTitle,
    keywords: seo.keywords,
  };

  return {
    applicationName: 'The Special Character',
    themeColor: '#fff',
    generator: 'Next.js',
    referrer: 'origin-when-cross-origin',
    authors: [{ name: 'Yagnesh Modh' }],
    colorScheme: 'light',
    creator: 'Yagnesh Modh',
    publisher: 'The Special Character',
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    appleWebApp: {
      title: 'The Special Character',
      statusBarStyle: 'black-translucent',
    },
    icons: {
      icon: [
        { url: '/icons/tsc.svg', type: 'image/svg+xml' },
        {
          url: '/favicon/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          url: '/favicon/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
      ],
      shortcut: ['/shortcut-icon.png'],
      apple: [
        // { url: '/apple-icon.png' },
        {
          url: '/favicon/apple-touch-icon.png',
          sizes: '180x180',
          type: 'image/png',
        },
      ],
      other: [
        // {
        //   rel: 'apple-touch-icon-precomposed',
        //   url: '/apple-touch-icon-precomposed.png',
        // },
        {
          rel: 'mask-icon',
          url: '/favicon/safari-pinned-tab.svg',
          // color: '#ffc40d',
        },
      ],
    },
    manifest: '/favicon/site.webmanifest',
    ...defaultSEO,
    ...twitterMeta,
    ...facebookMeta,
  };
}

const Page = async ({ params }: Props) => {
  const eventData = await getEvents(params.slug);

  const { image, content, ...rest } = eventData.data.event.data
    ?.attributes as Event;

  return (
    <section className="events">
      <div>
        <div className="events__event "></div>
        <div className="events__animate-bounce-slow1 "></div>
        <div className="events__animate-bounce-slow2"></div>
      </div>
      <div className="events__page">
        <div className="events__image">
          <Image
            alt="alt"
            src={`${image?.data?.attributes?.url}?tr=ar-16-9`}
            fill
            sizes="(min-width: 1024px) 100vw,
            600px"
          />
        </div>
        <div className="pt-8">
          <EventDetailPage
            {...rest}
            additionalField={{
              registrationType: "event",
              registrationName: params.slug,
            }}
          />
        </div>
        <div className="events__paragraph">
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
        </div>
      </div>
    </section>
  );
};

export default Page;
