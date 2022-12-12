import clsx from 'clsx';
import React from 'react';

type Props = {
  type: string;
  size: string;
  isRound: boolean;
  className?: string;
};

const Button = ({
  as: Tag,
  type,
  size,
  isRound,
  className,
  ...rest
}: Props) => {
  return (
    <Tag
      className={clsx('btn', {
        'btn--primary': type === 'primary',
        'btn--secondary': type === 'secondary',
        'btn--small': size === 'small',
        'btn--large': size === 'large',
        'btn--round': isRound,
        [className || '']: !!className,
      })}
      {...rest}
    />
  );
};

export default Button;
