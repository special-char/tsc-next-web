import clsx from 'clsx';
import React from 'react';

type Props = {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'large';
  isRound?: boolean;
  className?: string;
};

const Button = ({
  as: Tag,
  variant,
  size,
  isRound,
  className,
  ...rest
}: Props) => {
  return (
    <Tag
      className={clsx('btn', {
        'btn--primary': variant === 'primary',
        'btn--secondary': variant === 'secondary',
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
