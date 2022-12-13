import React from 'react';
import '@/styles/sideNav.css';
import { getMenuData } from '@/lib/getMenu';
import Link from 'next/link';

type Props = {};

const SideNav = async (props: Props) => {
  const menuData = await getMenuData();

  if (!menuData) return null;

  const { data: menuOptions } = menuData.data.data.attributes.items;

  const { attributes } = menuOptions.at(-1);
  return (
    <aside id="sidenav-open">
      <nav>
        <ul>
          {menuOptions.slice(0, -1).map((x) => {
            const { title, url, children } = x.attributes;
            return (
              <li>
                {children.data.length > 0 ? (
                  <details>
                    <summary>{title}</summary>
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
                  </details>
                ) : (
                  <Link href={url} className="header__link">
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <Link href={attributes.url} className="btn--primary btn btn--small">
          {attributes.title}
        </Link>
      </nav>
      <a
        href="#"
        id="sidenav-close"
        title="Close Menu"
        aria-label="Close Menu"
        // onchange="history.go(-1)"
      ></a>
    </aside>
  );
};

export default SideNav;
