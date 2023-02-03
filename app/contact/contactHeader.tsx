import { getBannerHeaderData } from '@/lib/getBannerHeader';
import { ComponentCommonHeaders } from 'types/types';

type Props = {};

const ContactHeader = async (props: Props) => {
  const bannerHeader = await getBannerHeaderData('contact-page');

  if (!bannerHeader) {
    // TODO: fix error issue
    // throw new Error(
    //   'something went wrong! try refreshing the page or please come back later.',
    // );
    return null;
  }

  const bannerHeaderData =
    bannerHeader.data.bannerHeader.data?.attributes?.bannerHeader;

  const [{ title, description }] = bannerHeaderData as ComponentCommonHeaders[];
  return (
    <>
      <h1 className="contact__title">{title}</h1>
      <p className="contact__desc">{description}</p>
    </>
  );
};

export default ContactHeader;
