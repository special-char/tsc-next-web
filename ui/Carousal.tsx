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

type Props = {} & PropsWithChildren;

const Carousal = ({ children }: Props) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    const scrollPort = scrollerRef.current;
    if (scrollPort) {
      const element = scrollPort.firstElementChild;
      setElement(element);
    }
  }, []);

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

  return (
    <div className="carousal">
      <div ref={scrollerRef} className="carousal__scroller">
        {React.Children.map(children, (child) => {
          const item = child as ReactElement<PropsWithChildren<any>>;

          const { className } = item?.props;
          return React.cloneElement(item, {
            className: clsx('carousal__items', {
              [className]: !!className,
            }),
          });
        })}
      </div>
      <div className="carousal__controls">
        <button
          type="button"
          className={`carousal__control btn btn--white btn--round hover:bg-primary `}
          onClick={scrollRight}
        >
          <LeftSvg className="hover:fill-neutral-100" />
        </button>
        <button
          type="button"
          className={`carousal__control btn btn--white btn--round  hover:bg-primary`}
          onClick={scrollLeft}
        >
          <RightSvg className="hover:fill-neutral-100" />
        </button>
      </div>
    </div>
  );
};

export default Carousal;
