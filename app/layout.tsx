import { Kumbh_Sans, Newsreader, Flow_Block } from '@next/font/google';
import React, { Suspense } from 'react';
import Footer from './footer';
import Header, { HeaderSkeleton } from './header';
import SideNav, { SideNavSkeleton } from './sideNav';
import '@/styles/globals.css';

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
      <head />
      <body>
        <Suspense fallback={<h1>Loading...</h1>}>
          {/* @ts-expect-error Async Server Component */}
          <SideNav />
          <SideNavSkeleton />
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
