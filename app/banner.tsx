import Image from 'next/image';
import Link from 'next/link';
import '@/styles/banner.css';
import md from 'markdown-it';
import { getBannerData } from '@/lib/getBanner';
import { Banner, UploadFile } from 'types/types';
import Button from '@/ui/Button';
import Script from 'next/script';

export const BannerSkeleton = () => {
  return (
    <section id="banner" className="banner">
      <div className="banner__details animate-pulse">
        <h1 className="banner__title font-cursive">
          Grow your skillsss, define your future
        </h1>
        <p className="font-cursive">
          Presenting Academy, the tech school of the future. We teach you the
          right skills to be prepared for tomorrow.
        </p>
        <div className="banner__actions">
          {['Explore Courses', 'Contact Us'].map((item: any) => (
            <div key={item} className="btn btn--primary font-cursive">
              {item.text}
            </div>
          ))}
        </div>
      </div>
      <div className="banner__image">
        <div></div>
      </div>
    </section>
  );
};

type Props = {};

const Banner = async (props: Props) => {
  const bannerData = await getBannerData('home');

  const { title, description, buttons, image, seo } = bannerData.data.banner
    .data?.attributes as Banner;

  const { url } = image.data?.attributes as UploadFile;

  return (
    <section id="banner" className="banner">
      <div className="banner__details">
        <h1 className="banner__title">{title}</h1>
        <p>{description}</p>
        <div className="banner__actions">
          {buttons?.map((item: any, index) => (
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
        {image && (
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
      {seo?.structuredData && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.structuredData),
          }}
        />
      )}
    </section>
  );
};

export default Banner;
