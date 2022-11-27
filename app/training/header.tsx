import Link from 'next/link';
import React from 'react';
import '@/styles/header.css';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header__left">hello</div>
      <nav className="header__nav">
        <ul>
          <li>
            <Link href="">Bootcamps</Link>
            <nav className="header__nested_nav">
              <ul>
                <li>
                  <Link href="">Full Stack</Link>
                </li>
                <li>
                  <Link href="">React</Link>
                </li>
                <li>
                  <Link href="">Node.JS</Link>
                </li>
                <li>
                  <Link href="">Flutter</Link>
                </li>
              </ul>
            </nav>
          </li>
          <li>
            <Link href="">Talent</Link>
            <nav className="header__nested_nav">
              <ul>
                <li>
                  <Link href="">Hire Out Graduates</Link>
                </li>
                <li>
                  <Link href="">Success Stories</Link>
                </li>
                <li>
                  <Link href="">Team</Link>
                </li>
              </ul>
            </nav>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="header__right">hello</div>
    </header>
  );
};

export default Header;
