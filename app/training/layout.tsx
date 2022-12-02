import '@/styles/dist.css';
import '@/styles/sideNav.css';
import React from 'react';
import Header from './header';
import Footer from './footer';

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
    <>
      <aside id="sidenav-open">
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
      </aside>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
