import '@/styles/globals.css';
import Link from 'next/link';
import React from 'react';
import Footer from './footer';
import Header from './header';
import SideNav from './sideNav';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <SideNav />
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
