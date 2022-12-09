import '@/styles/globals.css';
import '@/styles/sideNav.css';
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js Turbopack App Directory Playground</title>
      </head>
      <body>
        <aside id="sidenav-open">
          {/* <nav>
            {data.map((data) => (
              <details>
                <summary>{data.title}</summary>
                <p>hello</p>
              </details>
            ))}
          </nav> */}
          <nav></nav>
          <a
            href="#"
            id="sidenav-close"
            title="Close Menu"
            aria-label="Close Menu"
          ></a>
        </aside>
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
