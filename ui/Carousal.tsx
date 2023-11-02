'use client';

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
  ReactElement,
} from 'react';
import clsx from 'clsx';
import LeftSvg from '@/public/icons/left-arrow.svg';
import RightSvg from '@/public/icons/right-arrow.svg';

type Props = {
  isFull?: boolean;
} & PropsWithChildren;

const Carousal = ({ children, isFull }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<Element | null>(null);
  const [index, setIndex] = useState(0);

  const obCallback = useCallback((entries) => {
    const inter = entries.filter((entry) => entry.isIntersecting);

    console.log(inter[0]?.target.getAttribute('data-key'));

    const index = Number(inter.at(-1)?.target.getAttribute('data-key'));

    if (index) {
      setIndex(index);
    }
  }, []);

  useEffect(() => {
    const scrollPort = scrollerRef.current;
    if (scrollPort) {
      const element = scrollPort.firstElementChild;
      setElement(element);

      const style = getComputedStyle(scrollPort);

      const options = {
        root: scrollPort,
        rootMargin: '0px',
        threshold: 1,
      };
      const visibleSet = new Set();
      const carousel_observer = new IntersectionObserver(
        (observations) => {
          for (let observation of observations) {
            const index = Number(observation.target.getAttribute('data-key'));
            if (observation.isIntersecting) {
              visibleSet.add(index);
            } else {
              visibleSet.delete(index);
            }

            // observation.target.classList.toggle(
            //   '--in-view',
            //   observation.isIntersecting,
            // );
          }

          if (visibleSet.size === 1) {
            setIndex(visibleSet.values().next().value);
          } else if (visibleSet.has(0)) {
            setIndex(0);
          } else if (visibleSet.has(scrollPort.children.length - 1)) {
            setIndex(scrollPort.children.length - 1);
          }
        },
        {
          root: scrollPort,
          threshold: 1,
        },
      );

      for (const item of scrollPort.children) {
        carousel_observer.observe(item);
      }
    }
  }, [obCallback]);

  const scrollLeft = useCallback(() => {
    if (scrollerRef.current && element) {
      const paddingLeft = parseInt(getComputedStyle(element)?.paddingLeft);
      scrollerRef.current.scrollTo({
        left:
          scrollerRef.current.scrollLeft + (element.clientWidth - paddingLeft),
        behavior: 'smooth',
      });

      if (element.nextElementSibling) {
        setElement(element.nextElementSibling);
      }
    }
  }, [element]);

  const scrollRight = useCallback(() => {
    if (scrollerRef.current && element) {
      const paddingRight = parseInt(getComputedStyle(element)?.paddingLeft);
      scrollerRef.current.scrollTo({
        left:
          scrollerRef.current.scrollLeft - (element.clientWidth - paddingRight),
        behavior: 'smooth',
      });

      if (element.previousElementSibling) {
        setElement(element.previousElementSibling);
      }
    }
  }, [element]);

  const moveToIndex = useCallback((index: number) => {
    const scrollport = scrollerRef.current;
    if (scrollport) {
      const element = scrollport.children[index];

      const delta = Math.abs(scrollport.offsetLeft - element.offsetLeft);
      const scrollerPadding = parseInt(
        getComputedStyle(scrollport)['padding-left'],
      );

      const pos =
        scrollport.clientWidth / 2 > delta
          ? delta - scrollerPadding
          : delta + scrollerPadding;

      scrollport.scrollTo({
        left: pos,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <div className="carousal">
      <ul
        ref={scrollerRef}
        className={clsx('carousal__scroller', {
          '!p-0': !!isFull,
        })}
      >
        {React.Children.map(children, (child, index) => {
          const item = child as ReactElement<PropsWithChildren<any>>;
          const { style, ...props } = item.props;

          return (
            <li className="carousal__items" style={style} data-key={index}>
              {React.cloneElement(item, { ...props })}
            </li>
          );
        })}
      </ul>
      {!isFull && (
        <div className="carousal__controls">
          <button
            type="button"
            className="carousal__control btn btn--white btn--round z-20"
            onClick={scrollRight}
          >
            <LeftSvg />
          </button>
          <button
            type="button"
            className="carousal__control btn btn--white btn--round z-20"
            onClick={scrollLeft}
          >
            <RightSvg />
          </button>
        </div>
      )}

      <div className="carousal__dots">
        {[...Array(children.length).keys()].map((x) => {
          return (
            <div
              key={x}
              onClick={() => moveToIndex(x)}
              className={clsx('carousal__dot', {
                'bg-primary duration-200': x === index,
                'md:hidden': !isFull,
              })}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousal;
