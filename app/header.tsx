import Link from 'next/link';
import React from 'react';
import '@/styles/header.css';
import TscLogoSvg from '@/public/icons/tscLogo.svg';
import TscSvg from '@/public/icons/tsc.svg';
import HemburgerSvg from '@/public/icons/hemburger.svg';
import { getMenuData } from '@/lib/getMenu';

type Props = {};

export const HeaderSkeleton = () => {
  return (
    <header className="header animate-pulse">
      <div className="header__svg bg-neutral-400">
        <div className="header__tsclogo h-12 w-14 bg-neutral-800"></div>
        <div className="h-12 w-14 lg:hidden"></div>
      </div>

      <nav className="header__nav">
        <ul>
          {[1, 2, 3, 4, 5].slice(0, -1).map((x) => {
            // const { title, url, children } = x.attributes;
            return (
              <li>
                <div className="header__link font-cursive">Bootcamps</div>
                {/* {children.data.length > 0 && ( */}
                <nav className="header__nested_nav">
                  <ul>
                    {/* {children.data.map((y) => { */}
                    return (
                    <li>
                      <div className="font-cursive">Full Stack Bootcamp</div>
                    </li>
                    );
                    {/* })} */}
                  </ul>
                </nav>
                {/* )} */}
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="header__button btn btn--primary btn--small font-cursive ">
        HIRE OUR GRADUATES
      </button>
      <div className="md:hidden">
        <div className="h-12 w-12 bg-neutral-300"></div>
      </div>
    </header>
  );
};

const Header = async (props: Props) => {
  const menuData = await getMenuData();

  if (!menuData) return null;

  const { data: menuOptions } = menuData.data.data.attributes.items;

  const { attributes } = menuOptions.at(-1);

  return (
    <header className="header">
      <Link as={Link} href="/">
        <TscLogoSvg className="header__tsclogo" />
        <TscSvg className="h-[56px] w-[52px] lg:hidden " />
      </Link>
      <nav className="header__nav">
        <ul>
          {menuOptions.slice(0, -1).map((x) => {
            const { title, url, children } = x.attributes;
            return (
              <li>
                <Link href={url} className="header__link">
                  {title}
                </Link>
                {children.data.length > 0 && (
                  <nav className="header__nested_nav">
                    <ul>
                      {children.data.map((y) => {
                        return (
                          <li>
                            <Link
                              href={y.attributes.url}
                              className="header__link"
                            >
                              {y.attributes.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <Link
        href={attributes.url}
        className="header__button btn btn--primary btn--small "
      >
        {attributes.title}
      </Link>
      <a
        href="#sidenav-open"
        title="Open Menu"
        aria-label="Open Menu"
        className="md:hidden"
      >
        <HemburgerSvg className="h-12 w-12 fill-primary" />
      </a>
    </header>
  );
};

export default Header;
