import React from 'react';
import '@/styles/sideNav.css';
import TscLogoSvg from '@/public/icons/tscLogo.svg';
import { getMenuData } from '@/lib/getMenu';
import Link from 'next/link';

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
    </aside>
  );
};

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
          <TscLogoSvg className="h-[56px] w-[184px]" />
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
