import '@/styles/card.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
type info = {
  avatar_url: any;
  avatar_name: String;
  avatar_designation: String;
};
type date = {
  month: String,
  day: Number,
  year: Number
}
type data = {
  image_url: any;
  eventDate: date;
  publishedAt: date;
  time: String;
  rate: String;
  alternativeText: String;
  icon: String;
  teachingCategory: String;
  date: String;
  heading: String;
  description: String;
  avatar_info: info;
  isHorizontal: boolean;
  chip_align: String;
};
type Props = {
  data: data;
  className: any;
};
const icon = [
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com',
  },
  {
    icon: 'twitter',
    link: 'https://www.twitter.com',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com',
  },
];

export default function Card({ data, className }: Props) {
  return (
    <>
      <div className={clsx("card", {
        [className || 'card']: !!className,
      })}>
        <figure className="card__image">
          <Image src={data.image_url} alt='alt text' fill />
        </figure>
        {(data?.date || data?.time) && <div
          className="card__chipset"
        >



          {data?.time && (<div className="chip chip--white flex gap-2">{data.icon && <Image width={24} height={24} alt={data.alternativeText} src={data.icon} />}{data.time}</div>)}
          {data?.rate && (
            <div className="chip chip--primary flex gap-2">{`$ ${data?.rate} USD`}</div>
          )}
        </div>}
        <div className="card__body">
          {data?.publishedAt && (
            <div className="card__date">
              <Icon name="calendar" />
              <time>{`${data.publishedAt.day} ${data.publishedAt.month}, ${data.publishedAt.year}`}</time>
            </div>
          )}
          {data?.eventDate && (
            <time className='date flex flex-col gap-0 md:gap-2'><span className='text-xs md:text-base uppercase'>august</span><span className='md:text-[48px] text-4xl'>18</span> </time>
          )}
          <div className='classy'>
            <div className="card__heading">
              <h3 className="card__title">{data?.heading}</h3>
              {data.teachingCategory && <span className='chip chip--primary'>Design</span>}
            </div>
            {data?.description && <p className="card__desc">{data?.description}</p>}
          </div>
          {data.avatar_info && <div className="profile-info">
            <div className="relative card__avatar w-12 ">
              <Image src={data.avatar_info.avatar_url} alt='alt text' fill />
            </div>
            <div>
              <div className='profile-info__name'>{data.avatar_info.avatar_name}</div>
              <div className='profile-info__designation'>{data.avatar_info.avatar_designation}</div>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
}
