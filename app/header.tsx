import Link from 'next/link';
import React from 'react';
import '@/styles/header.css';
import TscLogoSvg from '@/public/icons/tscLogo.svg';
import TscSvg from '@/public/icons/tsc.svg';
import HemburgerSvg from '@/public/icons/hemburger.svg';
import { getMenuData } from '@/lib/getMenu';

type Props = {};

const Header = async (props: Props) => {
  const menuData = await getMenuData();

  if (!menuData) return null;

  const { data: menuOptions } = menuData.data.data.attributes.items;

  const { attributes } = menuOptions.at(-1);

  return (
    <header className="header">
      <Link href={'/'}>

        <TscLogoSvg className="header__tsclogo" />
        <TscSvg className="w-14 lg:hidden " />
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
        className="header__button btn--primary btn btn--small"
      >
        {attributes.title}
      </Link>
      <a href="#sidenav-open" title="Open Menu" aria-label="Open Menu">
        <HemburgerSvg className="h-12 w-12 fill-primary md:hidden " />
      </a>
    </header>
  );
};

export default Header;
