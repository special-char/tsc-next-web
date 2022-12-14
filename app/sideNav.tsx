import React from 'react';
import '@/styles/sideNav.css';
// import TscLogoSvg from '@/public/icons/tscLogo.svg';
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
        <div>
          <div className="mb-4 shadow-dark">
            {/* <TscLogoSvg className="h-[88px]  text-center" /> */}
          </div>

          <ul>
            {menuOptions.slice(0, -1).map((x) => {
              const { title, url, children } = x.attributes;
              return (
                <li>
                  {children.data.length > 0 ? (
                    <>
                      <details className="nav-item">
                        <summary className="items-center ">{title}</summary>
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
                    </>
                  ) : (
                    <Link href={url} className="header__link">
                      {title}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <Link href={attributes.url} className="btn btn--primary btn--small">
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
