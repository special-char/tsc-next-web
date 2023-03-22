import { Kumbh_Sans, Newsreader, Flow_Block } from '@next/font/google';
import '@/styles/globals.css';
import { Suspense } from 'react';
import Footer from './footer';
import Header, { HeaderSkeleton } from './header';
import SideNav, { SideNavSkeleton } from './sideNav';
import Script from 'next/script';

const kumbSans = Kumbh_Sans({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-kumbh',
});

const newsreader = Newsreader({
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-newsreader',
});

const flowBlock = Flow_Block({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-block',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${kumbSans.variable} font-sans ${newsreader.variable} font-serif ${flowBlock.variable} font-cursive`}
    >
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-WS7JTT5H0J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-WS7JTT5H0J');
        `}
        </Script>
        <Suspense fallback={<SideNavSkeleton />}>
          {/* @ts-expect-error Async Server Component */}
          <SideNav />
        </Suspense>
        <div>
          <Suspense fallback={<HeaderSkeleton />}>
            {/* @ts-expect-error Async Server Component */}
            <Header />
          </Suspense>
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
