import '@/styles/price.css';
import Link from 'next/link';
// import { ComponentCommonPrice } from 'types/types';
import Price from '@/ui/Price';
import CoursesPrice from '@/ui/CoursesPrice';
import { CourseCourseFeaturesArgs } from 'types/types';

type Props = {
  data: any;
};

const PriceCard = ({ data }: Props) => {
  const { price, courseFeatures, brochure } = data;
  return (
    <aside className="price">
      <div className="price__body">
        <Price price={price} />
        <Link href="/" className="btn btn--secondary btn--small">
          Register
        </Link>
        <Link href={brochure?.data.attributes.url} className="btn btn--primary btn--small" download>
          Download Brochure
        </Link>
      </div>
      <CoursesPrice features={courseFeatures} />
    </aside>
  );
};

export default PriceCard;
