import '@/styles/card.css';
import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import Icon from './Icon';
import SocialIcon from './SocialIcon';
type info = {
  avatar_url: any;
  avatar_name: String;
  avatar_Designation: String;
};
type data = {
  image_url: any;
  time: String;
  rate: String;
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
export default function Card({ data, className }: Props) {
  return (
    <>
      <div
        className={clsx('maincard', {
          [className]: !!className,
          maincard__hoz: data.isHorizontal,
        })}
      >
        <figure className="maincard__image">
          <Image src={data.image_url} alt="image" fill />
          <div
            className={clsx('maincard__chipset', {
              'justify-start': data.chip_align === 'left',
              'justify-end': data.chip_align === 'right',
            })}
          >
            {data?.time && (
              <div className="chip chip--secondary">{data.time}</div>
            )}
            {data?.rate && (
              <div className="chip chip--primary">{`$ ${data?.rate} USD`}</div>
            )}
          </div>
        </figure>
        <div className="maincard__body">
          {data?.date && (
            <div className="maincard__calender flex gap-2">
              <Icon name="calendar" />
              <time className="maincard__date">{data.date}</time>
            </div>
          )}

          <h3 className="maincard__title">{data?.heading}</h3>
          {data.description && (
            <p className="maincard__desc">{data.description}</p>
          )}
          {data?.avatar_info && (
            <div className="maincard__actionbar">
              <Image
                src={data.avatar_info.avatar_url}
                alt="Kathie Corl"
                width={100}
                height={100}
                className="maincard__avatar"
              />
              <div className="maincard__avatar--details">
                <h4 className="maincard__avatar__name">
                  {data.avatar_info.avatar_name}
                </h4>
                {data?.avatar_info?.avatar_Designation && (
                  <p className="maincard__avatar__designation">
                    {data.avatar_info.avatar_Designation}
                  </p>
                )}
              </div>
            </div>
          )}
          {/* <div className="maincard__icons"></div> */}
        </div>
      </div>
      {/* <Link href="#" className="maincard maincard__hoz">
        <figure className="maincard__image">
          <Image
            src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f2e01cbd8323965e6629a_image-6-courses-education-x-template.jpg"
            alt="image"
            fill
          />
          <div className="maincard__chipset">
            <div className="chip chip--secondary gap-2">
              <Icon name="microphone" height={20} width={20} />
              Marketing
            </div>
            <div className="chip chip--primary">$ 99.00 USD</div>
          </div>
        </figure>
        <div className="maincard__body">
          <p className="maincard__body__date">September 1, 2022</p>

          <h3 className="maincard__title">Lorem ipsum dolor sit.</h3>
          <p className="maincard__desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt,
            repellat?
          </p>
          <div className="maincard__actionbar">
            <Image
              src="https://assets.website-files.com/607de2d8e8911ebf197a3f0f/607f1ff9fd9e0e1686d26497_image-3-profile-picture-small-teacher-education-x-template.jpg"
              alt="Kathie Corl"
              width={100}
              height={100}
              className="maincard__avatar"
            />
            <div className="maincard__avatar--details">
              <h4>Yagnesh Modh</h4>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </Link> */}
    </>
  );
}
