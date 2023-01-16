import clsx from 'clsx';

type Props = {
  rate?: number;
  className?: string;
};

const Rating = ({ rate = 0, className, ...props }: Props) => {
  return (
    <div
      className={clsx('flex flex-row justify-center gap-2 md:justify-start', {
        [className || '']: !!className,
      })}
      {...props}
    >
      {[1, 2, 3, 4, 5].map((x) => (
        <div
          key={x}
          className={clsx('mask mask--star h-6 w-6 bg-secondary2', {
            'bg-secondary1': x > rate,
          })}
        ></div>
      ))}
    </div>
  );
};

export default Rating;
