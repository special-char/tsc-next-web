import '@/styles/card.css';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
// import Link from 'next/link';
import Icon from './Icon';
// import SocialIcon from './SocialIcon';
type info = {
  avatar_url: any;
  avatar_name: String;
  avatar_Designation: String;
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
  icons: Boolean;
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
const icons = [
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
          {data?.time && (
            <div className="chip chip--white">{data.time}</div>
          )}
          {data?.rate && (
            <div className="chip chip--primary">{`$ ${data?.rate} USD`}</div>
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
          {data.icons && <div className="flex items-center justify-center gap-4 w-full md:justify-start">{icons.map((icon) => (
            <span className="max-w-max rounded-full bg-neutral-500 p-2 hover:bg-primary">
              <Link key={icon.icon} className={'nav-link'} href={icon.link} target="_blank">
                <Icon name={icon.icon} height={20} width={20} />
              </Link>
            </span>
          ))}</div>}
        </div>
      </div>
    </>
  );
}
{/* <div className="profile-info">
            <div className="relative card__avatar w-12 ">
              <Image src={data.avatar_info.avatar_url} alt='alt text' fill />
            </div>
            <div>
              <div className='profile-info__name'>Yagnesh Modh</div>
              <div className='profile-info__designation'>Designation</div>
            </div>
          </div> */}