import { memo } from 'react';
import '@/styles/socialicon.css';
import Icon from '@/ui/Icon';
import clsx from 'clsx';
import Link from 'next/link';

type Props = {};

const SocialIcon = ({ icons, iconProps, linkClass, wrapperClass }: Props) => {
  return (
    <div
      className={clsx('flex gap-4', {
        [wrapperClass]: !!wrapperClass,
      })}
    >
      {icons.map((icon) => (
        <Link
          key={icon.icon}
          href={icon.link}
          // target="_blank"
          className={clsx('rounded-full bg-neutral-500 p-2 hover:bg-primary', {
            [linkClass]: !!linkClass,
          })}
        >
          <Icon name={icon.icon} height={20} width={20} {...iconProps} />
        </Link>
      ))}
    </div>
  );
};

export default memo(SocialIcon);
