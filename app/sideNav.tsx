import React from 'react';
import '@/styles/sideNav.css';
import TscLogoSvg from '@/public/icons/tscLogo.svg';
import { getMenuData } from '@/lib/getMenu';
import Link from 'next/link';
import { MenusMenuItem } from 'types/types';

export const SideNavSkeleton = () => {
  return (
    <aside id="sidenav-open">
      <nav>
        <div>
          <div>
            <div className="h-[56px] w-[184px] bg-neutral-300"></div>
          </div>
        </div>

        <ul>
          {[1, 2, 3, 4].map((x) => {
            return (
              <li>
                <div className="font-cursive text-neutral-700">Bootcamps</div>
              </li>
            );
          })}
        </ul>
        <button className=" btn btn--primary btn--small mx-auto my-3 font-cursive">
          Hire our Graduates
        </button>
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

type Props = {};

const SideNav = async (props: Props) => {
  const menuData = await getMenuData();

  if (!menuData) return null;

  const menuOptions = menuData.data.data?.attributes?.items?.data;

  const lastMenuItem = menuOptions?.at(-1)?.attributes;
  return (
    <aside id="sidenav-open">
      <nav>
        <Link prefetch={false} href="/">
          <TscLogoSvg className="h-[56px] w-[184px]" />
        </Link>

        <ul>
          {menuOptions?.slice(0, -1).map((x) => {
            const { title, url, children } = x.attributes as MenusMenuItem;
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
                    </details>
                  </>
                ) : (
                  <Link href={url} prefetch={false} className="header__link">
                    {title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
        <Link
          href={`${lastMenuItem?.url}`}
          prefetch={false}
          className="btn btn--primary btn--small"
        >
          {lastMenuItem?.title}
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
