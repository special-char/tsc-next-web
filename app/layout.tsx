import '@/styles/globals.css';
import '@/styles/sideNav.css';
import Link from 'next/link';
import React from 'react';
import Footer from './footer';
import Header from './header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <aside id="sidenav-open">
          <nav></nav>
          <a
            href="#"
            id="sidenav-close"
            title="Close Menu"
            aria-label="Close Menu"
            // onchange="history.go(-1)"
          ></a>
        </aside>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
