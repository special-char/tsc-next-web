import clsx from 'clsx';

type Props = {
  rate?: number;
};

const Rating = ({ rate = 0 }: Props) => {
  return (
    <div className="flex flex-row gap-2">
      {[1, 2, 3, 4, 5].map((x) => (
        <div
          className={clsx('mask mask--star h-6 w-6 bg-secondary2', {
            'bg-secondary1': x > rate,
          })}
        ></div>
      ))}
    </div>
  );
};

export default Rating;
