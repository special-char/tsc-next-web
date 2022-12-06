import '@/styles/globals.css';
import React from 'react';
import Footer from './footer';
import Header from './header';

const data = [
  {
    title: 'Bootcamps',
    sub: 'Full Stack',
    sub2: 'React',
    sub3: 'Node.js',
    sub4: 'Flutter',
  },
  {
    title: 'Talent',
    sub: 'Hire Out Graduates',
    sub2: 'Success Stories',
    sub3: 'Team',
  },
  {
    title: 'Blog',
  },
  {
    title: 'Contact',
  },
];

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
        {/* <aside id="sidenav-open">
          <nav>
            {data.map((data) => (
              <details>
                <summary>{data.title}</summary>
                <label>
                  <li>
                    <a href="">{data.sub}</a>
                  </li>
                  <li>
                    <a href="">{data.sub2}</a>
                  </li>
                  <li>
                    <a href="">{data.sub3}</a>
                  </li>
                  <li>
                    <a href="">{data.sub4}</a>
                  </li>
                </label>
              </details>
            ))}
          </nav>

          <a
            href="#"
            id="sidenav-close"
            title="Close Menu"
            aria-label="Close Menu"
            onchange="history.go(-1)"
          ></a>
        </aside> */}
        <main>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
