import { getBannerData } from '@/lib/getBanner';
import Script from 'next/script';
import { Banner } from 'types/types';

type Props = {};

const ContactHeader = async (props: Props) => {
  const bannerData = await getBannerData('contact');

  const { title, description, seo } = bannerData.data.banner.data
    ?.attributes as Banner;

  return (
    <>
      <h1 className="contact__title">{title}</h1>
      <p className="contact__desc">{description}</p>
      {seo?.structuredData && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seo.structuredData),
          }}
        />
      )}
    </>
  );
};

export default ContactHeader;
