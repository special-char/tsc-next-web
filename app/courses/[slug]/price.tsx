import '@/styles/price.css';
import Link from 'next/link';
import LevelSvg from '@/public/icons/level.svg';
import DurationSvg from '@/public/icons/duration.svg';
import LessonSvg from '@/public/icons/lesson.svg';
import LifetimeSvg from '@/public/icons/lifetime.svg';
import AccessSvg from '@/public/icons/access.svg';
import { ComponentCommonPrice } from 'types/types';

type Props = {
  price: ComponentCommonPrice;
};

const PriceData = [
  {
    svg: <LevelSvg />,
    title: 'Level: ',
    desc: ' Advanced',
  },
  {
    svg: <DurationSvg />,
    title: 'Duration: ',
    desc: '8hr 12m',
  },
  {
    svg: <LessonSvg />,
    title: 'Lesson: ',
    desc: '80',
  },
  {
    svg: <LifetimeSvg />,
    title: '24/7 Support',
  },
  {
    svg: <AccessSvg className=" xs:w-9 md:w-9" />,
    title: 'Session recordings are accessible forever',
  },
];

const Price = ({
  price: { format, price, currency, unit, description },
}: Props) => {
  return (
    <div className="price">
      <div className="overflow-hidden">
        <h2 className="text-2xl md:text-4xl">{`${new Intl.NumberFormat(
          format?.replace('_', '-'),
          {
            style: 'currency',
            currency,
            minimumFractionDigits: 0,
          },
        ).format(price)}/${unit}`}</h2>
        <p>{description}</p>
        <div className="flex flex-col gap-3">
          <Link href="/" className="btn btn--secondary btn--small">
            Register
          </Link>
          <Link href="/" className="btn btn--primary btn--small">
            Download Brochure
          </Link>
        </div>
      </div>
      <div className=" price__features ">
        {PriceData.map((data) => (
          <div key={data.title} className="price__content">
            <figure className="w-9">{data.svg}</figure>
            <p className="pl-5 text-lg">{data.title}</p>
            <p className="pl-2 text-lg font-bold text-neutral-700">
              {data.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
