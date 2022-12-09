import '@/styles/globals.css';
import '@/styles/sideNav.css';
import React from 'react';
import Footer from './footer';
import Header from './header';

const data = [
  {
    title: 'Bootcamps',
    subject: ['Full-Stack', 'React', 'Node.js', 'Flutter'],
  },
  {
    title: 'Talent',
    subject: ['Hire Out Graduates', 'Success Stories', 'Team'],
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
        <aside id="sidenav-open">
          <nav>
            {data.map((data) => (
              <details>
                <summary className={data.subject && 'summary'}>
                  {data.title}
                </summary>
                {data.subject && (
                  <ul
                    style={{
                      listStyle: 'inherit',
                    }}
                  >
                    {data.subject?.map((subject) => {
                      return (
                        <li>
                          <a href="">{subject}</a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </details>
            ))}
          </nav>

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
