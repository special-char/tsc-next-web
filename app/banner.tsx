import Image from 'next/image';
import Link from 'next/link';
import '@/styles/banner.css';
import md from 'markdown-it';
import { getBannerData } from '@/lib/getBanner';
import { Banner, UploadFile } from 'types/types';

type Props = {};

const Banner = async (props: Props) => {
  const bannerData = await getBannerData();

  if (!bannerData) return null;

  const { title, description, buttons, image } = bannerData.data.data.banner
    .data?.attributes as Banner;

  const { url } = image.data?.attributes as UploadFile;

  return (
    <section id="banner" className="banner">
      <div className="banner__details">
        <h1 className="banner__title">{title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: md().render(description) }}
        ></div>
        <div className="banner__actions">
          {buttons?.map((item: any) => (
            <Link key={item.id} href={item.url} className="btn btn--primary">
              {item.text}
            </Link>
          ))}
        </div>
      </div>
      <div className="banner__image">
        {image && <Image src={url} alt="logo" fill />}
      </div>
    </section>
  );
};

export default Banner;
