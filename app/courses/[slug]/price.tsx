import '@/styles/price.css';
import Link from 'next/link';
import LevelSvg from '@/public/icons/level.svg';
import DurationSvg from '@/public/icons/duration.svg';
import LessonSvg from '@/public/icons/lesson.svg';
import LifetimeSvg from '@/public/icons/lifetime.svg';
import AccessSvg from '@/public/icons/access.svg';

type Props = {};

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
    title: 'Lifetime Access',
  },
  {
    svg: <AccessSvg className=" xs:w-9 md:w-9" />,
    title: 'Access From Any Computer, Tablet or Mobile',
  },
];

const Price = (props: Props) => {
  return (
    <div className="price">
      <div>
        <h2>$199.00 USD</h2>
        <p>
          Lorem ipsum dolor sit amet, dolor consectetur adipiscing elit purus
          vivera.
        </p>
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
