'use client';
import Image from 'next/image';
import Link from 'next/link';
import { UploadFile } from 'types/types';
import Button from './Button';
import DynamicForm from './DynamicForm';

const BannerCard = ({ title, description, buttons, media, style }) => {
  const { url } = media.data?.attributes as UploadFile;
  return (
    <div className="banner" style={style}>
      <div className="banner__details">
        <h2 className="banner__title">{title}</h2>
        {description && <p>{description}</p>}
        <div className="banner__actions">
          {buttons?.map((item: any, index: number) => (
            <Button
              as={Link}
              prefetch={false}
              key={item.id}
              href={item.url}
              variant={index === 0 ? 'primary' : 'secondary'}
            >
              {item.text}
            </Button>
          ))}
        </div>
      </div>
      <div className="banner__image">
        {url && (
          <Image
            src={`${url}?tr=ar-3-4`}
            alt="logo"
            fill
            sizes="(max-width: 640px) 100vw,
            (max-width: 1024px) 518px,
            (max-width: 1280px) 45vw,
            560px"
          />
        )}
      </div>
    </div>
  );
};

export default BannerCard;
