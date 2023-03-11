import { getBannerData } from '@/lib/getBanner';
import { Banner } from 'types/types';

type Props = {};

const ContactHeader = async (props: Props) => {
  const bannerData = await getBannerData('contact');

  const { title, description } = bannerData.data.banner.data
    ?.attributes as Banner;
  return (
    <>
      <h1 className="contact__title">{title}</h1>
      <p className="contact__desc">{description}</p>
    </>
  );
};

export default ContactHeader;
