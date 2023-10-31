import Link from 'next/link';
import React from 'react';
import '@/styles/header.css';
import TscLogoSvg from '@/public/icons/tscLogo.svg';
import TscSvg from '@/public/icons/tsc.svg';
import HemburgerSvg from '@/public/icons/hemburger.svg';
import { getMenuData } from '@/lib/getMenu';
import {
  MenusMenuItem,
  MenusMenuItemRelationResponseCollection,
} from 'types/types';
import { ScrollDiv } from '@/hooks/useScroll';

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
            return (
              <li key={x}>
                <div className="header__link font-cursive">Bootcamps</div>
                <nav className="header__nested_nav">
                  <ul>
                    return (
                    <li key={x}>
                      <div className="font-cursive">Full Stack Bootcamp</div>
                    </li>
                    );
                  </ul>
                </nav>
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

  const { data: menuOptions } = menuData?.data.data?.attributes
    ?.items as MenusMenuItemRelationResponseCollection;

  const attributes = menuOptions.at(-1)?.attributes;

  return (
    <header className="header" id="#header">
      <ScrollDiv />
      <Link prefetch={false} href="/">
        <p className="sr-only">The Special Character Logo</p>
        <TscLogoSvg className="header__tsclogo md:hidden lg:block" />
        <TscSvg className="hidden h-[56px] w-[52px] md:block lg:hidden " />
      </Link>
      <nav className="header__nav">
        <ul>
          {menuOptions.slice(0, -1).map((x) => {
            const { title, url, children, order } =
              x.attributes as MenusMenuItem;
            return (
              <li key={order}>
                <Link href={`${url}`} prefetch={false} className="header__link">
                  {title}
                </Link>
                {children.data.length > 0 && (
                  <nav className="header__nested_nav">
                    <ul>
                      {children.data.map((y) => {
                        return (
                          <li key={y.id}>
                            <Link
                              prefetch={false}
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
        prefetch={false}
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
