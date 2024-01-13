import { Kumbh_Sans, Newsreader, Flow_Block } from 'next/font/google';
import localFont from 'next/font/local';
import '@/styles/globals.css';
import { Suspense } from 'react';
import Footer from './footer';
import Header, { HeaderSkeleton } from './header';
import SideNav, { SideNavSkeleton } from './sideNav';
import WhatsAppIcon from '@/public/icons/whatsapp.svg';
import Script from 'next/script';
import { Metadata } from 'next';
import { getSEOData } from '@/lib/getSEO';
import { ComponentSharedSeo, MenusMenuItemRelationResponseCollection } from 'types/types';
import { FacebookPixelEvents } from '@/ui/pixel-events';
import GoogleAnalytics from '@/ui/GoogleAnalytics';
import CookieBanner from '@/ui/cookiebanner';
import { getMenuData } from '@/lib/getMenu';

const kumbSans = Kumbh_Sans({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-kumbh',
  preload:true,
});

const newsreader = localFont({
  src: '../public/fonts/newsreader-latin-600-normal.woff2',
});

// const newsreader = Newsreader({
//   weight: '600',
//   subsets: ['latin'],
//   variable: '--font-newsreader',
// });

const flowBlock = Flow_Block({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-block',
  preload: true,
});

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const metaData = await getSEOData('home');


  const seo = metaData?.data?.banner.data?.attributes
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
    title: {
      template: '%s | The Special Character',
      default: `${seo.metaTitle} | The Special Character`,
    },
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const menuData = await getMenuData();
  const { data: menuOptions } = menuData?.data.data?.attributes
    ?.items as MenusMenuItemRelationResponseCollection;
  return (
    <html
      lang="en"
      className={`${kumbSans.variable} font-sans ${newsreader.variable} font-serif ${flowBlock.variable} font-cursive`}
    >
      {/* <head /> */}
      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID='G-62343L7VGM'/>
        <Suspense fallback={<SideNavSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <SideNav />
        </Suspense>
        <div>
          <Suspense fallback={<HeaderSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <Header menuOptions={menuOptions} />
          </Suspense>
          <main>{children}</main>
          <Footer />
          <CookieBanner/>
          <div className="fixed bottom-[86px] right-[6px] z-50 h-16 w-16">
            <a
              className="relative flex h-[60px] w-[60px]"
              href="https://api.whatsapp.com/send/?phone=%2B917600096432&text&type=phone_number&text=I%20want%20to%20understand%20about"
              target="_blank"
            >
              <span className="sr-only">Whats App Icon</span>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75"></span>
              <span className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366]">
                <WhatsAppIcon height={30} width={30} fill="#FFF" />
              </span>
            </a>
          </div>
        </div>
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"cdea135c17538d4cc3ccec6d9d85d171ded207c9843813e91d42a6f4bf06b039f7dd2932db4019f30578c12be02d9036", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
                        `,
          }}
        ></Script>
      </body>
    </html>
  );
}
