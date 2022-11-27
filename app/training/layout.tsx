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
          <h4>My</h4>
          <a href="#">Dashboard</a>
          <a href="#">Profile</a>
          <a href="#">Preferences</a>
          <a href="#">Archive</a>

          <h4>Settings</h4>
          <a href="#">Accessibility</a>
          <a href="#">Theme</a>
          <a href="#">Admin</a>
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
