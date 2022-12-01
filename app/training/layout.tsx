import '@/styles/dist.css';
import '@/styles/sideNav.css';
import React from 'react';
import Header from './header';
import Footer from './footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <aside id="sidenav-open">
        <nav>
          <details>
            <summary>Home</summary>
            <ul>
              <li>
                <a href="">Hello</a>
              </li>
            </ul>
          </details>
          <details>
            <summary>Home</summary>
            <ul>
              <li>
                <a href="">Hello</a>
              </li>
            </ul>
          </details>
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
