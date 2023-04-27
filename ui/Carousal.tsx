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

  const obCallback = useCallback((payload) => {
    console.log(payload);
  }, []);

  useEffect(() => {
    const scrollPort = scrollerRef.current;
    if (scrollPort) {
      const element = scrollPort.firstElementChild;
      setElement(element);

      const ob = new IntersectionObserver(obCallback);
      if (element) {
        ob.observe(document.querySelector('h1'));
      }
      scrollPort.addEventListener('scroll', () => {
        if (scrollPort && element) {
          const scrollerPadding = parseInt(
            getComputedStyle(scrollPort)['padding-left'],
          );

          // calculate index of visible banner based on scroll position
          const index = Math.round(
            (scrollPort.scrollLeft + scrollerPadding) /
              (element.clientWidth + scrollerPadding * 2),
          );

          setIndex(index);
        }
      });
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
    setIndex(index);
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
        {React.Children.map(children, (child) => {
          const item = child as ReactElement<PropsWithChildren<any>>;
          const { style, ...props } = item.props;

          return (
            <li className="carousal__items" style={style}>
              {React.cloneElement(item, { ...props })}
            </li>
          );
        })}
      </ul>
      {!isFull && (
        <div className="carousal__controls">
          <button
            type="button"
            className="carousal__control btn btn--white btn--round"
            onClick={scrollRight}
          >
            <LeftSvg />
          </button>
          <button
            type="button"
            className="carousal__control btn btn--white btn--round"
            onClick={scrollLeft}
          >
            <RightSvg />
          </button>
        </div>
      )}

      <div className="relative col-span-3 mx-auto flex w-full">
        <div className=" absolute mx-auto  flex w-full items-center justify-center gap-3">
          {React.Children.map(children, (child, i) => {
            return (
              <div
                onClick={() => moveToIndex(i)}
                className={clsx('h-2 w-2 rounded-full bg-neutral-400', {
                  'bg-primary duration-200': i === index,
                })}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
