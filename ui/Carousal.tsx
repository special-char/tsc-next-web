'use client';

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  PropsWithChildren,
} from 'react';
import clsx from 'clsx';

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
      const paddingLeft = parseInt(getComputedStyle(element)['padding-left']);
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
      const paddingRight = parseInt(getComputedStyle(element)['padding-right']);
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
          const { className } = child.props;
          return React.cloneElement(child, {
            className: clsx('carousal__items', {
              [className]: !!className,
            }),
          });
        })}
      </div>
      <div className="carousal__controls">
        <button
          type="button"
          className={`carousal__control btn btn--primary btn--round`}
          onClick={scrollRight}
        >{`<`}</button>
        <button
          type="button"
          className={`carousal__control btn btn--primary btn--round`}
          onClick={scrollLeft}
        >{`>`}</button>
      </div>
    </div>
  );
};

export default Carousal;
